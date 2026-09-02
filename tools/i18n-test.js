/* Checks that German is complete and that marking is language-independent. */
const {chromium}=require('playwright');
const http=require('http'),fs=require('fs'),path=require('path'),url=require('url');
const ROOT=path.resolve(__dirname,'..');
const MIME={'.html':'text/html','.js':'text/javascript','.css':'text/css','.png':'image/png','.webmanifest':'application/manifest+json'};
const server=http.createServer((req,res)=>{
  let p=path.join(ROOT,decodeURIComponent(url.parse(req.url).pathname));
  if(p.endsWith('/'))p=path.join(p,'index.html');
  fs.readFile(p,(e,b)=>{e?(res.writeHead(404),res.end()):(res.writeHead(200,{'Content-Type':MIME[path.extname(p)]||'application/octet-stream'}),res.end(b));});
});
const key=p=>p.evaluate(()=>{
  const s=JSON.parse(localStorage.getItem('ctfl.session.v2'));
  return s.items.map(it=>{const q=window.CTFL_BANK.sets.find(x=>x.id===it.s).questions[it.i];
    return q.ans.map(o=>it.order.indexOf(o));});
});
(async()=>{
 await new Promise(r=>server.listen(8098,r));
 const b=await chromium.launch();
 const errs=[];

 // ---- 1. German browser gets German automatically
 const de=await b.newContext({locale:'de-DE',viewport:{width:1280,height:960}});
 const p=await de.newPage();
 p.on('pageerror',e=>errs.push('PAGEERROR '+e.message));
 await p.goto('http://localhost:8098/');await p.waitForTimeout(600);
 console.log('auto-detected lang:', await p.evaluate(()=>document.documentElement.lang));
 console.log('heading:', await p.textContent('#home h1'));
 console.log('lang button offers:', await p.textContent('#btnLang'));
 console.log('chapter 4:', await p.textContent('.chap:nth-child(4) .nm'));
 console.log('set pick 1:', await p.textContent('#setPicks .pick:nth-child(1) b'));
 await p.screenshot({path:'/root/shot-de-home.png',fullPage:false});

 // ---- 2. sit a full German exam, all correct
 await p.click('#btnStart');await p.waitForTimeout(500);
 console.log('German Q1 heading:', await p.textContent('#q1 .q-num'), '|', await p.textContent('#q1 .instr'));
 const k=await key(p);
 for(let i=0;i<k.length;i++) for(const a of k[i]) await p.click('#q'+(i+1)+'o'+a);
 await p.click('#btnSubmit');await p.waitForTimeout(200);
 console.log('confirm (de):', await p.textContent('#confirmText'));
 await p.click('#btnConfirmYes');await p.waitForTimeout(700);
 console.log('German score:', await p.textContent('#rScore'), await p.textContent('#rStamp'));
 console.log('German meta:', await p.textContent('#rMeta'));
 console.log('German explanation q1:', (await p.textContent('#e1')).slice(0,120).replace(/\s+/g,' '));
 await p.screenshot({path:'/root/shot-de-result.png'});

 // ---- 3. any English left on a German page?
 const leaks=await p.evaluate(()=>{
   const bad=["Question #","Select ONE","Select TWO","Correct answer","Syllabus chapter","Answered","Flagged",
              "Submit exam","Pass mark","Review every","Back to the start","Result","learning objective"];
   const text=document.body.innerText;
   return bad.filter(s=>text.includes(s));
 });
 console.log('English strings leaking into German UI:', leaks.length?leaks:'none');

 // ---- 4. switch language mid-exam, answers and marking must survive
 const de2=await b.newContext({locale:'de-DE',viewport:{width:1280,height:960}});
 const p2=await de2.newPage();
 p2.on('pageerror',e=>errs.push('PAGEERROR '+e.message));
 await p2.goto('http://localhost:8098/');await p2.waitForTimeout(500);
 await p2.click('#btnStart');await p2.waitForTimeout(500);
 const k2=await key(p2);
 for(let i=0;i<10;i++) for(const a of k2[i]) await p2.click('#q'+(i+1)+'o'+a);
 const beforeAns=await p2.textContent('#mAns');
 const endsBefore=await p2.evaluate(()=>JSON.parse(localStorage.getItem('ctfl.session.v2')).endsAt);
 await p2.click('#btnLang');await p2.waitForTimeout(600);
 console.log('after switch -> lang:', await p2.evaluate(()=>document.documentElement.lang),
   '| answered before/after:', beforeAns, await p2.textContent('#mAns'),
   '| checked inputs:', await p2.evaluate(()=>document.querySelectorAll('#sheet input:checked').length),
   '| deadline unchanged:', endsBefore===await p2.evaluate(()=>JSON.parse(localStorage.getItem('ctfl.session.v2')).endsAt),
   '| clock visible:', await p2.isVisible('#clock'));
 console.log('Q1 now in English:', (await p2.textContent('#q1 .stem')).slice(0,60).replace(/\s+/g,' '));
 // finish in English and confirm the 10 correct answers still score
 await p2.click('#btnSubmit');await p2.waitForTimeout(200);
 await p2.click('#btnConfirmYes');await p2.waitForTimeout(700);
 console.log('score after mid-exam switch (expect 10/40):', await p2.textContent('#rScore'));

 // ---- 5. English browser still gets English
 const en=await b.newContext({locale:'en-GB',viewport:{width:1280,height:960}});
 const p3=await en.newPage();
 await p3.goto('http://localhost:8098/');await p3.waitForTimeout(500);
 console.log('en-GB lang:', await p3.evaluate(()=>document.documentElement.lang), '|', await p3.textContent('#home h1'));

 // ---- 6. German revision mode + mobile
 const de3=await b.newContext({locale:'de-DE'});
 const p4=await de3.newPage();await p4.setViewportSize({width:390,height:844});
 await p4.goto('http://localhost:8098/');await p4.waitForTimeout(500);
 await p4.click('.chap:nth-child(3)');await p4.waitForTimeout(500);
 console.log('German revision title:', await p4.textContent('#paperTitle'));
 console.log('mobile h-overflow:', await p4.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+1));
 await p4.screenshot({path:'/root/shot-de-mobile.png'});

 console.log('ERRORS:', errs.length?errs:'none');
 await b.close();server.close();
})();
