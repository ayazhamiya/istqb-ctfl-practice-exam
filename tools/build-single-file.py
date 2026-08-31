"""Inline the CSS and JS into one self-contained HTML file.

Useful for sharing the exam as a single file (email, a USB stick, an artifact).
Run: python3 tools/build-single-file.py  ->  dist/ctfl-practice-exam.html
"""
import base64
import pathlib
import re

root = pathlib.Path(__file__).resolve().parent.parent
html = (root / "index.html").read_text()

def inline_css(match):
    href = match.group(1)
    if href.startswith("http"):
        return match.group(0)
    return "<style>\n" + (root / href).read_text() + "\n</style>"

def inline_js(match):
    src = match.group(1)
    return "<script>\n" + (root / src).read_text() + "\n</script>"

html = re.sub(r'<link rel="stylesheet" href="([^"]+)">', inline_css, html)
html = re.sub(r'<script src="([^"]+)"></script>', inline_js, html)

# embed the favicon, drop everything the single file cannot use
icon = base64.b64encode((root / "icons" / "favicon-32.png").read_bytes()).decode()
html = re.sub(r'<link rel="icon"[^>]*>', '<link rel="icon" href="data:image/png;base64,' + icon + '">', html)
html = re.sub(r'<link rel="manifest"[^>]*>\s*', "", html)
html = re.sub(r'<link rel="apple-touch-icon"[^>]*>\s*', "", html)
html = re.sub(r'<script>\s*if \("serviceWorker".*?</script>', "", html, flags=re.S)

out = root / "dist" / "ctfl-practice-exam.html"
out.parent.mkdir(exist_ok=True)
out.write_text(html)
print("wrote", out, out.stat().st_size, "bytes")
