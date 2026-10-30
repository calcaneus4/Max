#!/usr/bin/env python3
"""Sort, rename and shrink book pictures for the website.

Drop pictures (any folder structure, names as exported from the "Author Website" Drive folder)
into incoming/, then run:   python3 tools/import_images.py
Recognised names (case doesn't matter):
  "Book 07 cover.jpg"                   -> images/max/07/cover.jpg
  "Book 07 inside 3 (ch01 i0479).jpg"   -> images/max/07/03.jpg
  "Book 07 wide scene (i0158).jpg"      -> images/max/07/wide.jpg
  "Max Millhopper banner - ....jpg"     -> images/max/hero.jpg
  "Alternate - ....jpg"                 -> images/max/banner-alt-N.jpg (spare banners)
  character pictures by name            -> images/max/characters/<id>.jpg
Add "--series mks" for Merlin's Knight School pictures. Originals in incoming/ are left alone.
"""
import re
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SERIES = sys.argv[sys.argv.index("--series") + 1] if "--series" in sys.argv else "max"
# Source folder: incoming/ by default, or a folder given with --from "Folder name".
SRC = ROOT / (sys.argv[sys.argv.index("--from") + 1] if "--from" in sys.argv else "incoming")

# Longest side in pixels for each kind of picture.
SIZES = {"cover": 1100, "inside": 1600, "wide": 1800, "hero": 2200, "char": 600, "sheet": 1800}
THUMBS = {"cover": 420, "inside": 640, "wide": 640, "char": 360}

CHARACTERS = {
    "max": {
        "max millhopper": "max", "katie": "katie", "george okafor": "george", "sherlock": "sherlock",
        "priya anand": "anand", "clavicle": "clavicle", "aunt mattie": "mattie", "sheriff": "sheriff",
        "deputy ruiz": "ruiz", "dr. lee": "lee", "george's dad": "da", "marcus": "marcus", "doc tarrant": "tarrant",
    },
    "mks": {
        "kay": "kay", "lance": "lance", "gawain": "gawain", "percival": "percival", "gwen": "gwen",
        "morgan": "morgan", "merlin": "merlin", "admiral": "admiral", "voran": "voran",
    },
}


# Character reference sheets: the card shows a square portrait cropped from the sheet
# (centre x, centre y and side, as fractions; see tools/character_crops.json) and the
# whole sheet is kept as <id>-sheet.jpg for the click-to-enlarge view.
CROP_FILE = ROOT / "tools" / "character_crops.json"
CROPS = {k: v[1:] for k, v in __import__("json").load(open(CROP_FILE)).items()} if CROP_FILE.exists() else {}


def save_character(src, dest):
    save(src, dest.with_name(dest.stem + "-sheet.jpg"), "sheet")
    cid = dest.stem
    if cid not in CROPS:
        save(src, dest, "char")
        return
    cx, cy, s = CROPS[cid]
    with Image.open(src) as im:
        im = im.convert("RGB")
        w, h = im.size
        side = s * h
        crop = im.crop((int(cx * w - side / 2), int(cy * h - side / 2), int(cx * w + side / 2), int(cy * h + side / 2)))
        tmp = dest.with_name(dest.stem + "-crop.png")
        dest.parent.mkdir(parents=True, exist_ok=True)
        crop.save(tmp)
    save(tmp, dest, "char")
    tmp.unlink()


def save(src, dest, kind):
    dest.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(src) as im:
        im = im.convert("RGB")
        im.thumbnail((SIZES[kind], SIZES[kind]), Image.LANCZOS)
        im.save(dest, "JPEG", quality=82, optimize=True, progressive=True)
        # A small copy for grids and cards; the full picture opens when clicked.
        if kind in THUMBS:
            im.thumbnail((THUMBS[kind], THUMBS[kind]), Image.LANCZOS)
            im.save(dest.with_name(dest.stem + "-sm.jpg"), "JPEG", quality=80, optimize=True, progressive=True)
    print(f"{src.name:60} -> {dest.relative_to(ROOT)}  ({dest.stat().st_size // 1024} KB)")


def target(name):
    low = name.lower()
    m = re.match(r"book\s*(\d+)\s+(cover|inside\s*(\d+)|wide)", low)
    if m:
        nn = f"{int(m.group(1)):02d}"
        if m.group(2) == "cover":
            return f"images/{SERIES}/{nn}/cover.jpg", "cover"
        if m.group(2).startswith("wide"):
            return f"images/{SERIES}/{nn}/wide.jpg", "wide"
        return f"images/{SERIES}/{nn}/{int(m.group(3)):02d}.jpg", "inside"
    if "banner" in low:
        return f"images/{SERIES}/hero.jpg", "hero"
    if low.startswith("alternate"):
        return None, "alt"
    for key, cid in CHARACTERS[SERIES].items():
        if key in low:
            return f"images/{SERIES}/characters/{cid}.jpg", "char"
    return None, None


def main():
    files = sorted(p for p in SRC.rglob("*") if p.suffix.lower() in (".jpg", ".jpeg", ".png"))
    if not files:
        sys.exit(f"No pictures found in {SRC}")
    alt = 0
    skipped = []
    for f in files:
        rel, kind = target(f.name)
        if kind == "alt":
            alt += 1
            save(f, ROOT / f"images/{SERIES}/banner-alt-{alt}.jpg", "hero")
        elif rel and kind == "char":
            save_character(f, ROOT / rel)
        elif rel:
            save(f, ROOT / rel, kind)
        else:
            skipped.append(f.name)
    if skipped:
        print("\nNot recognised (left alone):", *skipped, sep="\n  ")


if __name__ == "__main__":
    main()
