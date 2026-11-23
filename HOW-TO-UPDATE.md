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

## Series-wide store links

Amazon also has a page listing every book in a series. Put that kind of link in the series' `seriesLinks` (near the top of `data/books.js`):

```js
seriesLinks: {
  en: { kindle: "https://www.amazon.com/dp/B0HMN3V31C?binding=kindle_edition" },
  es: { kindle: "", paperback: "" },
},
```

It shows as a "Get the series" button on the series page, and every book in that series uses it for any button that doesn't have its own link yet. As soon as you add a book's own link, that book switches to it.

## Add a new book

1. Put its pictures in a new folder, for example `images/mks/21/`: `cover.jpg`, `wide.jpg` and `01.jpg` … `06.jpg`.
   (Claude can do this for you from a "Book 21 - …" upload folder with `tools/import_images.py`.)
2. In `data/books.js`, copy the last entry of the right list (from `{` to the matching `},`), paste it below,
   and change the `number`, `title`, `tagline`, `blurb` and `learn` lines:
   - **Max Millhopper:** the `MAX_BOOKS` list. Store links go in `MAX_STORE_LINKS` by book number.
   - **Merlin's Knight School:** the `MKS_BOOKS` list (Books 2 onward). Store and YouTube links go in `MKS_LINKS` by book number:
     `21: { buy: { en: { kindle: "…" } }, youtube: { en: "…" } },`
3. If the book was listed as "Coming soon", delete its line from `comingSoon` at the bottom of `data/books.js`.
4. Commit. The book appears on the home page ("Newest books"), on its series page in reading order, and gets its own page.

## "Coming soon" books

Planned books that aren't finished are listed in `comingSoon` at the bottom of `data/books.js`:

```js
{ series: "mks", number: 21, title: "The Tide That Came Late" },
{ series: "max", number: 21, title: "" },   // no title yet
```

They show at the end of the series page as a plain card marked "Coming soon", with no page of their own.

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
