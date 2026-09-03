/* Minimal static file server for local development. No dependencies.
   Usage: npm run dev   (or: node tools/serve.js [port]) */
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const PORT = Number(process.argv[2] || process.env.PORT || 8000);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".md": "text/markdown; charset=utf-8"
};

http.createServer(function (req, res) {
  let pathname;
  try {
    pathname = decodeURIComponent(req.url.split("?")[0].split("#")[0]);
  } catch (e) {
    res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" }).end("Bad request");
    return;
  }

  let file = path.join(ROOT, path.normalize(pathname));
  // never serve anything outside the project directory
  if (file !== ROOT && !file.startsWith(ROOT + path.sep)) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" }).end("Forbidden");
    return;
  }
  // a directory (including the site root) serves its index.html
  try {
    if (fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
  } catch (e) { /* fall through to the 404 below */ }

  fs.readFile(file, function (err, body) {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found: " + pathname);
      return;
    }
    res.writeHead(200, {
      "Content-Type": MIME[path.extname(file).toLowerCase()] || "application/octet-stream",
      // never cache during development, so a reload always shows your edits
      "Cache-Control": "no-store"
    });
    res.end(body);
  });
}).listen(PORT, function () {
  console.log("CTFL practice exam running at http://localhost:" + PORT);
  console.log("Press Ctrl+C to stop.");
  console.log("");
  console.log("Note: the service worker caches the app for offline use. If an edit does not");
  console.log("show up, hard-reload (Cmd/Ctrl+Shift+R), or tick 'Update on reload' under");
  console.log("DevTools > Application > Service Workers.");
});
