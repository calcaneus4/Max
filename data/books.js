// =====================================================================================
//  BOOKS, SERIES AND CHARACTERS
//  This is the one file you edit to add a new book. See HOW-TO-UPDATE.md for a walkthrough.
//
//  - Text here is in English. Translations go in data/lang/es.js, de.js, fr.js, it.js, ja.js
//    (anything not translated there simply shows in English).
//  - Picture paths are relative to the site folder. If a picture file is missing, the site
//    shows a tidy title card instead, so you can add books before their art is ready.
//  - Leave a link as "" until you have it: empty links are hidden automatically.
// =====================================================================================

window.SITE = {
  author: {
    name: "Michael K. Davis",
    photo: "images/author/michael.jpg",
    bio: "Michael K. Davis is a pediatrician in Florida who writes illustrated mysteries for young readers.",
    // Optional: a public contact or newsletter link. Leave "" to hide it.
    contact: "",
  },

  // Languages the books themselves are published in (used for the "Get the book" buttons).
  editions: ["en", "es", "de", "fr", "it"],

  // Formats, in the order the buttons appear.
  formats: ["kindle", "paperback", "hardcover", "youtube"],

  series: [
    {
      id: "max",
      name: "Max Millhopper, Medical Detective",
      short: "Max Millhopper",
      ages: "8–12",
      color: "#2f6f9f",
      accent: "#e8a93c",
      hero: "images/max/hero.jpg",
      logo: "",
      // Series-wide store pages (Amazon's "all books in this series" page), by language and format.
      // A book's own button uses its own link if it has one, otherwise this series link.
      seriesLinks: {
        en: {
          kindle: "https://www.amazon.com/dp/B0HMN3V31C?binding=kindle_edition",
          paperback: "https://www.amazon.com/dp/B0HMN3V31C?binding=paperback",
          hardcover: "https://www.amazon.com/dp/B0HMN3V31C?binding=hardcover",
        },
      },
      tagline: "A twelve-year-old who solves mysteries with real medical science.",
      about:
        "Max Millhopper is twelve, his dad is a Navy doctor far out at sea, and Max solves the mysteries nobody else in town can crack, with his friends Katie and George and a case board full of clues. Every book is a full-length mystery with suspense, humor and real science, explained through the story instead of lectures.",
      readingOrder:
        "Each mystery stands on its own, but the friendships and running jokes grow from book to book, so reading in order is the most fun.",
      characters: [
        { id: "max", name: "Max Millhopper", image: "images/max/characters/max.jpg", role: "The medical detective", bio: "Twelve years old, curious about everything, and always updating his case board. Max notices the small medical clues that others miss." },
        { id: "katie", name: "Katie Williamson", image: "images/max/characters/katie.jpg", role: "The sheriff's daughter", bio: "The sheriff's daughter and Max's partner in every case." },
        { id: "george", name: "George", image: "images/max/characters/george.jpg", role: "The careful one", bio: "Anxious, precise and left-handed, George double-checks everything, which is exactly why the team needs him." },
        { id: "anand", name: "Dr. Priya Anand", image: "images/max/characters/anand.jpg", role: "Max's mentor", bio: "Max's pediatrician and mentor. She answers his questions with better questions." },
        { id: "sheriff", name: "Sheriff Williamson", image: "images/max/characters/sheriff.jpg", role: "The sheriff", bio: "Katie's dad. His lectures about staying out of danger have a way of ending in hugs." },
        { id: "mattie", name: "Aunt Mattie", image: "images/max/characters/mattie.jpg", role: "Max's great-aunt", bio: "Max's great-aunt, who always has a thoughtful word at the end of a case." },
        { id: "ruiz", name: "Deputy Ruiz", image: "images/max/characters/ruiz.jpg", role: "The deputy", bio: "The sheriff's deputy, recognizable by his moustache." },
        { id: "lee", name: "Dr. Lee", image: "images/max/characters/lee.jpg", role: "The medical examiner", bio: "The medical examiner, and a careful man with the facts." },
        { id: "marcus", name: "Marcus Kraut", image: "images/max/characters/marcus.jpg", role: "The reporter", bio: "A reporter who always wants the story first. His newspaper byline wraps up every case." },
      ],
    },
    {
      id: "mks",
      name: "Merlin's Knight School",
      short: "Merlin's Knight School",
      ages: "8–14",
      color: "#6b3d8f",
      accent: "#2fa39a",
      hero: "images/mks/hero.jpg",
      logo: "",
      seriesLinks: {},
      tagline: "Six leftover squires, one reluctant wizard, and mysteries solved by clear thinking.",
      about:
        "No elite cohort picked them, so six misfit squires end up at Merlin's Knight School, where the great wizard teaches them to think before they charge. Each book is a fair-play mystery: every clue is on the page, and the squires learn to separate what they can see from what they only guess.",
      readingOrder:
        "Start with Book 1, Trial by Wyvern. Each book is told by a different squire and solves its own mystery.",
      characters: [
        { id: "kay", name: "Kay", image: "images/mks/characters/kay.jpg", role: "The Improviser", bio: "Cocky grin, scorched sleeve (a design choice) and a coil of rope instead of a sword. Kay acts first and thinks second, with his boar, Tusk, close behind." },
        { id: "lance", name: "Lancelot (Lance)", image: "images/mks/characters/lance.jpg", role: "The Prodigy", bio: "Brilliant with a sword and too proud to ask for help. His russet fox wears a red bandana." },
        { id: "gawain", name: "Gawain", image: "images/mks/characters/gawain.jpg", role: "The Natural Protector", bio: "Brave and strong, and stronger still in sunlight, which fades when clouds roll in. His hawk watches from above." },
        { id: "percival", name: "Percival", image: "images/mks/characters/percival.jpg", role: "The Quiet Observer", bio: "Notices everything, doubts himself, and is gentle with every animal, especially his rabbit." },
        { id: "gwen", name: "Gwen", image: "images/mks/characters/gwen.jpg", role: "The Strategist", bio: "Keeps a leather notebook full of numbered rules (out of order, on purpose) and a loyal hound at her side." },
        { id: "morgan", name: "Morgan", image: "images/mks/characters/morgan.jpg", role: "The Hedge Mage", bio: "Small, tidy hedge magic and a glossy black raven that steals shiny things. \"Fine, I'll fix it myself.\"" },
        { id: "merlin", name: "Merlin", image: "images/mks/characters/merlin.jpg", role: "The Reluctant Mentor", bio: "Speaks little and explains less. Clears his throat before he says anything important. \"Don't get used to it.\"" },
        { id: "admiral", name: "Admiral", image: "images/mks/characters/admiral.jpg", role: "Merlin's duck", bio: "A mallard who is always one step ahead of everyone, including Merlin." },
        { id: "voran", name: "Dean Voran", image: "images/mks/characters/voran.jpg", role: "Dean of the Golden Cohort", bio: "Silver-haired, cold and exact. His highest praise is \"Adequate.\"" },
      ],
    },
  ],

  // -----------------------------------------------------------------------------------
  //  BOOKS. Copy one entry, change the details, and the site does the rest.
  //  id:       short unique name used in the web address (book.html?id=max-16)
  //  cover:    the front cover picture
  //  gallery:  pictures from inside the book (as many as you like)
  //  buy:      one block per language edition; each has kindle / paperback / hardcover links
  //  youtube:  the narrated video, per language
  // -----------------------------------------------------------------------------------
  books: [
    {
      id: "mks-01",
      series: "mks",
      number: 1,
      title: "Trial by Wyvern",
      blurb:
        "Trouble has come to the Harrow Gorge, and everyone is ready to blame the wyvern. Kay and the other leftover squires have to look past the obvious answer and follow the clues to the truth.",
      cover: "images/mks/01/cover.jpg",
      gallery: ["images/mks/01/01.jpg", "images/mks/01/02.jpg", "images/mks/01/03.jpg", "images/mks/01/04.jpg", "images/mks/01/05.jpg", "images/mks/01/06.jpg"],
      buy: {
        en: { kindle: "", paperback: "", hardcover: "" },
        es: { kindle: "", paperback: "", hardcover: "" },
        de: { kindle: "", paperback: "", hardcover: "" },
        fr: { kindle: "", paperback: "", hardcover: "" },
        it: { kindle: "", paperback: "", hardcover: "" },
      },
      youtube: { en: "" },
    },
  ],
};

// The fifteen Max Millhopper books share the same layout, so they are listed compactly here.
// Each row: [number, "Title", "Blurb", "English YouTube link", "Spanish YouTube link"].
// Replace each "Book N" title and add the blurb as you go. Store links (Kindle, paperback,
// hardcover) go in the MAX_STORE_LINKS table below.
const MAX_BOOKS = [
  [1, "Book 1", "", "https://www.youtube.com/watch?v=82bR-ZjKAIo", "https://www.youtube.com/watch?v=Gh6NlLAqraM"],
  [2, "Book 2", "", "https://www.youtube.com/watch?v=KcdEamDZnZE", "https://www.youtube.com/watch?v=yrI3Si2JxiY"],
  [3, "Book 3", "", "https://www.youtube.com/watch?v=WODxJEASpNo", "https://www.youtube.com/watch?v=1Y2-2Kj2i5s"],
  [4, "Book 4", "", "https://www.youtube.com/watch?v=kQSApFHY108", "https://www.youtube.com/watch?v=8MWqDkL5AjQ"],
  [5, "Book 5", "", "https://www.youtube.com/watch?v=vxxO3zlFYu4", ""],
  [6, "Book 6", "", "https://www.youtube.com/watch?v=XA9WI-DJmms", ""],
  [7, "Book 7", "", "https://www.youtube.com/watch?v=szvaQ93jAhU", ""],
  [8, "Book 8", "", "https://www.youtube.com/watch?v=k9mt65-2dU0", ""],
  [9, "Book 9", "", "https://www.youtube.com/watch?v=8k20fNqJmp8", ""],
  [10, "Book 10", "", "https://www.youtube.com/watch?v=5tSQ7sFgdTc", ""],
  [11, "Book 11", "", "https://www.youtube.com/watch?v=31_t4JZHQ84", ""],
  [12, "Book 12", "", "https://www.youtube.com/watch?v=-oOrv5CGXfI", ""],
  [13, "Book 13", "", "https://www.youtube.com/watch?v=35a2I6GYO1Q", ""],
  [14, "Book 14", "", "https://www.youtube.com/watch?v=saaoSg45k3A", ""],
  [15, "Book 15", "", "https://www.youtube.com/watch?v=c86lN_JfDtY", ""],
];

// Store links for the Max books, by book number and language. Fill in what you have;
// anything left out is simply hidden. Example:
//   3: { en: { kindle: "https://www.amazon.com/dp/XXXX", paperback: "", hardcover: "" } },
const MAX_STORE_LINKS = {
};

MAX_BOOKS.forEach(([n, title, blurb, ytEn, ytEs]) => {
  const nn = String(n).padStart(2, "0");
  const store = MAX_STORE_LINKS[n] || {};
  const buy = {};
  for (const ed of ["en", "es", "de", "fr", "it"]) buy[ed] = { kindle: "", paperback: "", hardcover: "", ...(store[ed] || {}) };
  window.SITE.books.push({
    id: `max-${nn}`,
    series: "max",
    number: n,
    title,
    blurb,
    cover: `images/max/${nn}/cover.jpg`,
    gallery: [1, 2, 3, 4, 5, 6].map((k) => `images/max/${nn}/0${k}.jpg`),
    buy,
    youtube: { en: ytEn || "", es: ytEs || "" },
  });
});
