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
SRC = ROOT / "incoming"

# Longest side in pixels for each kind of picture.
SIZES = {"cover": 1100, "inside": 1600, "wide": 1800, "hero": 2200, "char": 700}

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


def save(src, dest, kind):
    dest.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(src) as im:
        im = im.convert("RGB")
        im.thumbnail((SIZES[kind], SIZES[kind]), Image.LANCZOS)
        im.save(dest, "JPEG", quality=82, optimize=True, progressive=True)
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
        elif rel:
            save(f, ROOT / rel, kind)
        else:
            skipped.append(f.name)
    if skipped:
        print("\nNot recognised (left alone):", *skipped, sep="\n  ")


if __name__ == "__main__":
    main()
