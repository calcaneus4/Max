# Michael K. Davis author website — instructions for Claude

Live site: https://calcaneus4.github.io/Max/ (GitHub Pages, published from `main`, folder `/`).
Plain static site: HTML + CSS + classic `<script>` files, **no build step, no npm, no framework**.
Pushing to `main` is publishing: the live site updates about a minute later. Michael asks Claude to
make updates and push them; there is no PR/review step unless he asks for one.

Author: Michael K. Davis (pediatrician). Keep the "About" to one line + small photo — he asked to
downplay his biography. Never add CV details, phone numbers or email addresses.

## Status (update this section whenever something changes)

- **Max Millhopper, Medical Detective™** — 15 books, ages 8–12. Titles (6 languages), taglines,
  blurbs, "In this book you'll learn" lists, 13 characters, covers + 6 inside pictures + a wide scene
  per book, banner: all done. YouTube: English Books 1–15, Spanish Books 1–4.
  Store links: only the **English series pages** (Kindle, paperback, hardcover → Amazon series page
  B0HMN3V31C) in `seriesLinks`. No per-book store links yet; no other-language links yet.
- **Merlin's Knight School™** — Book 1 *Trial by Wyvern* only, ages 8–14. Banner, cover, 7 pictures,
  9 characters, fact-checked blurb, tagline, learn list: done. No store or YouTube links yet
  (not published on KDP as of Nov 2026). Notes from the book pipeline:
  `docs/Merlin's Knight School - Titles, Blurbs and Links.md`.
- **Languages:** English, Spanish, French, German, Italian, Japanese — everything is translated.
- **Games:** Diagnose the Case (Max), Merlin's Three Questions, Memory Match, Which Squire Are You?
- **Home banner** cross-fades between the two series every 8 s, each with its own headline/line.
- **Phones:** checked on iPhone 13 and SE (Nov 2026): no sideways scroll, finger-sized buttons.

## Where things live

| What | File |
|---|---|
| Series, characters, books, store/YouTube links, banner text | `data/books.js` |
| Interface text + **all translations** | `data/lang/{en,es,fr,de,it,ja}.js` |
| Game content (English) | `data/games.js` |
| Page rendering, banner, lightbox | `assets/js/site.js`; games in `assets/js/games.js` |
| Styles (incl. phone rules at the end) | `assets/css/site.css` |
| Pictures | `images/max/…`, `images/mks/…` (see `images/README.md`) |
| Picture import/resize | `tools/import_images.py`, crop boxes in `tools/character_crops.json` |
| Plain-English guide for Michael | `HOW-TO-UPDATE.md` |

## How to make common updates

**Store / YouTube links.**
- Max books: `MAX_STORE_LINKS` in `data/books.js`, by book number and language:
  `3: { en: { kindle: "…", paperback: "", hardcover: "" }, es: { kindle: "…" } },`
  YouTube links are in each `MAX_BOOKS` entry: `youtube: { en: "…", es: "…" }`.
- Merlin's Knight School books: the book's own `buy` / `youtube` blocks.
- A link to Amazon's "all books in this series" page goes in the series' `seriesLinks`; every book
  falls back to it for any format without its own link.
- Strip tracking junk from Amazon URLs (`&ref=…`, `ref_=…`); keep `?binding=…` when present.
- Language codes: en, es, de, fr, it, ja. Empty links (`""`) are hidden automatically.

**New book.**
1. Text: add an entry (Max → `MAX_BOOKS`; MKS → the `books` list, copying `mks-01`) with number,
   title, tagline, blurb (paragraphs separated by a blank line `\n\n`), `learn` list, links.
2. Translations: add to each of es/fr/de/it/ja: `book.<id>.title`, `.tagline`, `.blurb`,
   `.learn0`…`.learn3` (ids look like `max-16`, `mks-02`). Use Michael's approved titles if he gives
   them. Rules: character and place names stay in English (Japanese uses katakana); Latin American
   Spanish, «insectos» never «bichos»; no school grades for Max (he is twelve); no spoilers; factual,
   no hype. Keep `\n\n` breaks in the same places.
3. Pictures: see below. 4. Update the **Status** section of this file.

**Pictures.** Michael uploads a folder named like his Google Drive folders (e.g. `Book 16 - …/`
with `Book 16 cover.jpg`, `Book 16 inside 1 (…).jpg` … `inside 6`, `Book 16 wide scene (…).jpg`;
`Characters/<Name>.jpg`; `Banner/…banner….jpg`) to the repo root. Then:
`python3 tools/import_images.py --from "<folder>"` (add `--series mks` for Merlin's Knight School).
It resizes into `images/<series>/<NN>/` and makes `-sm.jpg` thumbnails. For a **new character
reference sheet**, add a crop box to `tools/character_crops.json` (`[file, centre-x, centre-y, side]`
as fractions of the sheet; check the crop visually), plus a character entry in `data/books.js` and
the mapping in `CHARACTERS` in the import script. Afterwards `git rm -r` the raw upload folder.
Pillow is needed (`pip install pillow` if missing).

**Banner text** — `bannerTitle` / `bannerLine` per series in `data/books.js`, translations
`series.<id>.bannerTitle` / `.bannerLine` in each language file.

## Before pushing

1. `node --check` every changed `.js` file.
2. Open the changed pages in a headless browser (Playwright/Chromium is usually available) at desktop
   width and phone width (iPhone 13, 390 px): no console errors, no sideways scrolling, pictures load.
   Spot-check one other language (`?lang=es`).
3. Commit with a clear message, push to `main`, then tell Michael what changed in plain language
   and that the live site updates in about a minute.

## Related repositories (separate sites)

- `calcaneus4/egg-wars` — Egg Wars game (https://calcaneus4.github.io/egg-wars/).
- `calcaneus4/ultima` — Spanish phrase flash cards (https://calcaneus4.github.io/ultima/).
