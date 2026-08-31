const {chromium}=require('playwright');
const http=require('http'),fs=require('fs'),path=require('path'),url=require('url');
const ROOT=path.resolve(__dirname,'..');
const MIME={'.html':'text/html','.js':'text/javascript','.css':'text/css','.png':'image/png','.webmanifest':'application/manifest+json'};
const server=http.createServer((req,res)=>{
  let p=path.join(ROOT,decodeURIComponent(url.parse(req.url).pathname));
  if(p.endsWith('/'))p=path.join(p,'index.html');
  fs.readFile(p,(e,b)=>{ if(e){res.writeHead(404);res.end('nope');} else {res.writeHead(200,{'Content-Type':MIME[path.extname(p)]||'application/octet-stream'});res.end(b);} });
});
(async()=>{
 await new Promise(r=>server.listen(8099,r));
 const b=await chromium.launch();
 const ctx=await b.newContext({viewport:{width:1280,height:960}});
 const p=await ctx.newPage();
 const errs=[];p.on('pageerror',e=>errs.push('PAGEERROR '+e.message));
 p.on('console',m=>{if(m.type()==='error')errs.push('CONSOLE '+m.text());});
 await p.goto('http://localhost:8099/');await p.waitForTimeout(600);
 console.log('set picks:', await p.locator('#setPicks .pick').count());
 console.log('chapters:', await p.locator('.chap').count());
 await p.screenshot({path:'/root/shot-home.png',fullPage:true});

 // --- exam M1, shuffled, all correct
 await p.click('[data-set="m1"]');
 await p.click('#btnStart');await p.waitForTimeout(500);
 console.log('rendered:', await p.locator('article.q').count(), 'clock', await p.textContent('#clock'));
 const key=await p.evaluate(()=>{
   const s=JSON.parse(localStorage.getItem('ctfl.session.v2'));
   return s.items.map(it=>{
     const set=window.CTFL_BANK.sets.find(x=>x.id===it.s);
     const q=set.questions[it.i];
     return q.ans.map(o=>it.order.indexOf(o));
   });
 });
 for(let i=0;i<key.length;i++) for(const a of key[i]) await p.click('#q'+(i+1)+'o'+a);
 await p.click('#btnSubmit');await p.waitForTimeout(200);
 await p.click('#btnConfirmYes');await p.waitForTimeout(600);
 console.log('answered before submit:', await p.textContent('#mAns'));
 console.log('M1 shuffled score:', await p.textContent('#rScore'), await p.textContent('#rStamp'));
 await p.screenshot({path:'/root/shot-result.png'});

 // --- back home, history recorded
 await p.click('#btnRetake');await p.waitForTimeout(400);
 console.log('history rows:', await p.locator('table.hist tbody tr').count(), '| best:', await p.textContent('#bestHint'));

 // --- mixed paper blueprint check
 await p.click('[data-set="mix"]');
 await p.click('#btnStart');await p.waitForTimeout(500);
 const bp=await p.evaluate(()=>{
   const s=JSON.parse(localStorage.getItem('ctfl.session.v2'));
   const c={};s.items.forEach(it=>{const q=window.CTFL_BANK.sets.find(x=>x.id===it.s).questions[it.i];c[q.ch]=(c[q.ch]||0)+1;});
   return {counts:c,total:s.items.length,unique:new Set(s.items.map(i=>i.s+':'+i.i)).size};
 });
 console.log('mixed blueprint:',JSON.stringify(bp));
 await p.click('#btnHome');await p.waitForTimeout(300);

 // --- revision mode, immediate feedback
 await p.click('[data-chapter="3"]');await p.waitForTimeout(400);
 console.log('revision questions:', await p.locator('article.q').count(), '| submit hidden:', await p.isHidden('#btnSubmit'));
 const rkey=await p.evaluate(()=>{
   const s=JSON.parse(localStorage.getItem('ctfl.session.v2'));
   return s.items.map(it=>{const q=window.CTFL_BANK.sets.find(x=>x.id===it.s).questions[it.i];return q.ans.map(o=>it.order.indexOf(o));});
 });
 await p.click('#q1o'+rkey[0][0]);
 if(rkey[0][1]!==undefined) await p.click('#q1o'+rkey[0][1]);
 await p.waitForTimeout(300);
 console.log('immediate feedback shown:', await p.isVisible('#e1'), '| verdict:', await p.textContent('#q1 .verdict'));
 await p.screenshot({path:'/root/shot-revision.png'});
 await p.click('#btnRevDone');await p.waitForTimeout(500);
 console.log('revision result:', await p.textContent('#rScore'), '| stamp hidden:', await p.isHidden('#rStamp'));
 await p.click('#btnRetake');await p.waitForTimeout(300);
 console.log('history rows after revision (should still be 1):', await p.locator('table.hist tbody tr').count());

 // --- resume flow
 await p.click('[data-set="m2"]');await p.click('#btnStart');await p.waitForTimeout(400);
 await p.click('#q1o0');
 await p.reload();await p.waitForTimeout(700);
 console.log('resume:', await p.textContent('#btnResume'));
 await p.click('#btnResume');await p.waitForTimeout(400);
 console.log('resumed answered:', await p.textContent('#mAns'), '| q1 checked:', await p.evaluate(()=>document.querySelectorAll('#q1 input:checked').length));

 // --- offline (service worker)
 await p.click('#btnHome');await p.waitForTimeout(300);
 await p.evaluate(()=>navigator.serviceWorker.ready);
 await p.waitForTimeout(1200);
 await ctx.setOffline(true);
 await p.reload();await p.waitForTimeout(900);
 console.log('OFFLINE reload -> set picks:', await p.locator('#setPicks .pick').count(), '| title:', await p.title());
 await ctx.setOffline(false);

 // --- mobile
 const m=await ctx.newPage();await m.setViewportSize({width:390,height:844});
 await m.goto('http://localhost:8099/');await m.waitForTimeout(600);
 console.log('mobile h-overflow:', await m.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+1));
 await m.screenshot({path:'/root/shot-mobile.png',fullPage:false});
 await m.click('[data-set="m1"]');await m.click('#btnStart');await m.waitForTimeout(500);
 await m.locator('#q15').scrollIntoViewIfNeeded();await m.waitForTimeout(300);
 console.log('mobile exam h-overflow:', await m.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+1));
 await m.screenshot({path:'/root/shot-mobile-q.png'});

 console.log('ERRORS:', errs.length?errs:'none');
 await b.close();server.close();
})();
