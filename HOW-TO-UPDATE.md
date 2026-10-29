# How to update the website

Everything you will normally change is in **two places**:

| What | Where |
|---|---|
| Books, links, blurbs, characters | `data/books.js` |
| Pictures | the `images/` folder |
| Translations (optional) | `data/lang/es.js`, `fr.js`, `de.js`, `it.js`, `ja.js` |

You can edit these files right on GitHub: open the file, click the pencil icon (**Edit**), make the change, then click **Commit changes**. The live site updates about a minute later.

---

## Add a store or YouTube link

Open `data/books.js`, find the book, and paste the link between the quotes:

```js
buy: {
  en: { kindle: "https://www.amazon.com/dp/XXXXXXXXXX", paperback: "", hardcover: "" },
  es: { kindle: "", paperback: "", hardcover: "" },
  ...
},
youtube: { en: "https://www.youtube.com/watch?v=XXXXXXXXXXX" },
```

- Leave a link as `""` until you have it. Empty links are hidden, and a book with no links at all shows "Links coming soon."
- The language codes are `en` English, `es` Spanish, `de` German, `fr` French, `it` Italian.
- A YouTube link also puts the video player on the book's page.

## Add a new book

1. Put its pictures in a new folder, for example `images/mks/02/`:
   - `cover.jpg` (the front cover)
   - `01.jpg`, `02.jpg`, … (pictures from inside the book, as many as you like)
2. In `data/books.js`, copy an existing book entry (from `{` to the matching `},`), paste it below, and change:
   - `id` (e.g. `"mks-02"`), `number`, `title`, `blurb`
   - the picture paths (`cover`, `gallery`)
   - the links
3. Commit. The book appears on the home page ("Newest books"), on its series page in reading order, and gets its own page.

**Max Millhopper books** are listed in a short table at the bottom of `data/books.js`:

```js
[1, "Book 1", ""],   // [number, "Title", "Blurb"]
```

Replace `"Book 1"` with the title and add the blurb. Their pictures go in `images/max/01/`, `images/max/02/`, and so on (`cover.jpg`, `01.jpg` … `06.jpg`). To give a Max book its store links, move it up into the main `books` list (copy the Merlin's Knight School entry as a pattern).

## Pictures

- Use **JPG** files about **1600 pixels wide** (covers about 1000 px tall). On a Mac you can shrink a copy with:
  `sips -Z 1600 picture.jpg`
- If a picture file is missing, the site shows a tidy coloured title card instead, so nothing ever looks broken.
- The full list of picture names the site looks for is in `images/README.md`.

## Characters

Each series in `data/books.js` has a `characters` list. Add a character by copying one line and changing the `id`, `name`, `role`, `bio` and `image`. Character pictures go in `images/max/characters/` or `images/mks/characters/` (square pictures work best).

## Translations

Anything you write in `data/books.js` is in English. To show a translation, add a line to the language file, using the key pattern below. If there is no translation, the English shows.

| Text | Key |
|---|---|
| A book's title | `"book.mks-02.title"` |
| A book's blurb | `"book.mks-02.blurb"` |
| A series tagline / description / reading-order note | `"series.mks.tagline"`, `"series.mks.about"`, `"series.mks.readingOrder"` |
| A character's role / bio | `"char.mks.kay.role"`, `"char.mks.kay.bio"` |

Example, in `data/lang/es.js`:

```js
"book.mks-02.title": "El guardián del pantano",
"book.mks-02.blurb": "…",
```

Tip: you can ask Claude to "translate the new entries in data/books.js into all five site languages".

## About you

Your one-line bio and photo are at the top of `data/books.js` (`author`). The photo is `images/author/michael.jpg`.

## Test before publishing (optional)

Double-click `index.html` on your computer to open the site in your browser. It works without any setup.
