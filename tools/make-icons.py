"""Generate the app icons. Run: python3 tools/make-icons.py"""
from PIL import Image, ImageDraw, ImageFont

NAVY = (27, 53, 87)
CRIMSON = (168, 20, 43)
PAPER = (255, 255, 255)
FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"


def draw_icon(size, pad_ratio=0.0, radius_ratio=0.20):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    pad = int(size * pad_ratio)
    box = (pad, pad, size - pad - 1, size - pad - 1)
    inner = box[2] - box[0]
    d.rounded_rectangle(box, radius=int(inner * radius_ratio), fill=NAVY)

    # crimson rule, echoing the exam paper's top stripe
    rule_h = max(2, int(inner * 0.055))
    ry = box[1] + int(inner * 0.235)
    d.rectangle((box[0] + int(inner * 0.18), ry, box[2] - int(inner * 0.18), ry + rule_h), fill=CRIMSON)

    label = "CTFL"
    fs = int(inner * 0.30)
    font = ImageFont.truetype(FONT, fs)
    tb = d.textbbox((0, 0), label, font=font)
    tx = box[0] + (inner - (tb[2] - tb[0])) / 2 - tb[0]
    ty = box[1] + inner * 0.40 - tb[1]
    d.text((tx, ty), label, font=font, fill=PAPER)

    sub = "4.0"
    fs2 = int(inner * 0.17)
    font2 = ImageFont.truetype(FONT, fs2)
    sb = d.textbbox((0, 0), sub, font=font2)
    sx = box[0] + (inner - (sb[2] - sb[0])) / 2 - sb[0]
    sy = box[1] + inner * 0.68 - sb[1]
    d.text((sx, sy), sub, font=font2, fill=(157, 191, 236))
    return img


draw_icon(192).save("icons/icon-192.png")
draw_icon(512).save("icons/icon-512.png")
# maskable icons need their content inside a safe zone, so pad and square off the corners
draw_icon(512, pad_ratio=0.13, radius_ratio=0.08).save("icons/icon-maskable-512.png")
draw_icon(180).save("icons/apple-touch-icon.png")
draw_icon(32, radius_ratio=0.12).save("icons/favicon-32.png")
print("icons written")
