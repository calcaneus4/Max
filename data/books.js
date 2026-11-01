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
  editions: ["en", "es", "de", "fr", "it", "ja"],

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
      tagline: "Medical mysteries for ages 8–12, written by a pediatrician.",
      motto: "The smallest detail hides the greatest truth.",
      about:
        "Twelve-year-old Max Millhopper has a spiral notebook, a magnifying glass and a knack for spotting what the grown-ups miss. With his best friends Katie and George, he solves medical mysteries in the small coastal town of Cortland Bay, Florida — and every case teaches real science along the way. Each book is a stand-alone mystery, written by a pediatrician.",
      editionsNote:
        "Each book comes as a Kindle eBook (the complete novel) and as an illustrated picture-story edition in paperback and hardcover (full-colour pictures with short captions). Also available in Spanish, German, French, Italian and Japanese.",
      readingOrder:
        "Each book is a stand-alone mystery, so you can start anywhere. Reading in order lets you watch the friendships (and the running jokes) grow.",
      characters: [
        { id: "max", name: "Max Millhopper", image: "images/max/characters/max.jpg", role: "The medical detective", bio: "Twelve years old, with a spiral notebook, a magnifying glass and a knack for spotting what the grown-ups miss. Max always updates his case board when a mystery is solved." },
        { id: "katie", name: "Katie Williamson", image: "images/max/characters/katie.jpg", role: "The sheriff's daughter", bio: "The sheriff's daughter and Max's partner in every case." },
        { id: "george", name: "George Okafor", image: "images/max/characters/george.jpg", role: "The careful one", bio: "Anxious, precise and left-handed, George double-checks everything, which is exactly why the team needs him." },
        { id: "sherlock", name: "Sherlock", image: "images/max/characters/sherlock.jpg", role: "Max's dog", bio: "Max's dog, and a loyal member of the team." },
        { id: "anand", name: "Dr. Priya Anand", image: "images/max/characters/anand.jpg", role: "Max's mentor", bio: "Max's pediatrician and mentor. She answers his questions with better questions." },
        { id: "clavicle", name: "Clavicle", image: "images/max/characters/clavicle.jpg", role: "Dr. Anand's skeleton", bio: "The teaching skeleton in Dr. Anand's office. Very good at standing still." },
        { id: "mattie", name: "Aunt Mattie", image: "images/max/characters/mattie.jpg", role: "Max's great-aunt", bio: "Max's great-aunt, who always has a thoughtful word at the end of a case." },
        { id: "sheriff", name: "Sheriff Williamson", image: "images/max/characters/sheriff.jpg", role: "The sheriff", bio: "Katie's dad. His lectures about staying out of danger have a way of ending in hugs." },
        { id: "ruiz", name: "Deputy Ruiz", image: "images/max/characters/ruiz.jpg", role: "The deputy", bio: "The sheriff's deputy, recognizable by his moustache." },
        { id: "lee", name: "Dr. Lee", image: "images/max/characters/lee.jpg", role: "The medical examiner", bio: "The medical examiner, and a careful man with the facts." },
        { id: "da", name: "George's dad", image: "images/max/characters/da.jpg", role: "The District Attorney", bio: "The district attorney, famous for having the driest line in the room." },
        { id: "marcus", name: "Marcus Kraut", image: "images/max/characters/marcus.jpg", role: "The reporter", bio: "A reporter who always wants the story first. His newspaper byline wraps up every case." },
        { id: "tarrant", name: "Doc Tarrant", image: "images/max/characters/tarrant.jpg", role: "George's great-grandfather", bio: "An Army medic from 1968 and George's great-grandfather, honored with a bronze statue in Cortland Bay." },
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
        "No elite cohort picked them, so six misfit squires end up in the Leftover Yard at Merlin's Knight School, where the great wizard teaches them to think before they charge. Each book is a fair-play mystery for ages 8–14: every clue is on the page, and the squires learn to separate what they can actually see from what they only guess.",
      readingOrder:
        "Start with Book 1, Trial by Wyvern. Each book solves its own mystery, told through Kay's eyes, and the friendships and running jokes grow from book to book.",
      characters: [
        { id: "kay", name: "Kay", image: "images/mks/characters/kay.jpg", role: "The Improviser", bio: "Cocky grin, scorched sleeve (a design choice) and a coil of rope instead of a sword. Kay acts first and thinks second, with his boar, Tusk, close behind." },
        { id: "lance", name: "Lancelot (Lance)", image: "images/mks/characters/lance.jpg", role: "The Prodigy", bio: "Brilliant with a sword and too proud to ask for help. His russet fox wears a red bandana." },
        { id: "gawain", name: "Gawain", image: "images/mks/characters/gawain.jpg", role: "The Natural Protector", bio: "Brave and strong, and stronger still in sunlight; his strength fades when clouds roll in or night falls. His hawk watches from above." },
        { id: "percival", name: "Percival", image: "images/mks/characters/percival.jpg", role: "The Quiet Observer", bio: "Notices everything, doubts himself, and is gentle with every animal, especially his rabbit." },
        { id: "gwen", name: "Gwen", image: "images/mks/characters/gwen.jpg", role: "The Strategist", bio: "Keeps a leather notebook full of numbered rules (out of order, on purpose) and a loyal hound at her side." },
        { id: "morgan", name: "Morgan", image: "images/mks/characters/morgan.jpg", role: "The Hedge Mage", bio: "Small, tidy hedge magic and a glossy black raven that steals shiny things. \"Fine, I'll fix it myself.\"" },
        { id: "merlin", name: "Merlin", image: "images/mks/characters/merlin.jpg", role: "The Reluctant Mentor", bio: "Speaks little and explains less. Clears his throat before he says anything important. \"Don't get used to it.\"" },
        { id: "admiral", name: "Admiral", image: "images/mks/characters/admiral.jpg", role: "Merlin's duck", bio: "A mallard who is always one step ahead of everyone, including Merlin." },
        { id: "voran", name: "Dean Voran", image: "images/mks/characters/voran.jpg", role: "Dean of the school", bio: "Silver-haired, cold and exact, he runs the school's reviews and favours the Golden Cohort. His highest praise is \"Adequate.\"" },
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
      tagline: "Six leftover squires. One very grumpy wyvern.",
      blurb:
        "On their first day at Merlin's Knight School, six misfit squires that no elite cohort picked get exactly three words of instruction from Merlin: \"Forest. Problem. Fix it.\" The problem turns out to be a wyvern sitting on the old rope bridge at Wickerbridge. Merlin's written orders, which said in capital letters DO NOT ENGAGE, are underneath his duck.\n\nKay, Lance, Gawain, Percival, Gwen and Morgan, together with a boar, a fox, a hawk, a rabbit, a hound and a raven, soon notice that the wyvern is not behaving like a monster at all.\n\nWhy would a beast that has hurt no one guard one crumbling tower — and who gains from keeping the bridge closed?",
      learn: [
        "Merlin's Three Questions: SEE, MEAN, ELSE",
        "Telling what you see from what you guess",
        "Why official-looking isn't the same as official",
        "Noticing what's missing",
      ],
      cover: "images/mks/01/cover.jpg",
      gallery: ["images/mks/01/wide.jpg", "images/mks/01/01.jpg", "images/mks/01/02.jpg", "images/mks/01/03.jpg", "images/mks/01/04.jpg", "images/mks/01/05.jpg", "images/mks/01/06.jpg"],
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

// The fifteen Max Millhopper books. Each block has the English title, tagline, back-cover blurb,
// the "In this book you'll learn" list and the YouTube links (en = English video, es = Spanish).
// Translations of these texts live in data/lang/<code>.js under "book.max-01.title" and so on.
// Pictures go in images/max/01/ … images/max/15/ (cover.jpg, 01.jpg … 06.jpg, wide.jpg).
const MAX_BOOKS = [
  {
    number: 1,
    title: "The Case of the Human Fly Trap",
    tagline: "A sealed vault. Missing loot. And an insulin pump that lies.",
    blurb: "Two hundred thousand dollars vanishes from Garber’s Community Bank, and the next morning an employee is found dead inside the sealed vault. For twelve-year-old Max Millhopper, nothing adds up.\n\nWith his best friends Katie and George, a spiral notebook and a head full of real medicine, Max follows the golden thread — from an insulin pump that seemed to be working perfectly to a red pickup truck, a man in a ski mask and a dark storm-drain tunnel.\n\nHow did the money get out of a bank where nothing leaves unnoticed — and who is driving a dead man’s pickup?",
    learn: [
      "How lightning leaves a fern-like pattern on the skin",
      "What happens in a diabetic’s body when insulin runs out",
      "How rigor mortis, lividity and body temperature reveal the time of death",
      "How a coroner in ancient China caught a murderer with flies",
    ],
    youtube: { en: "https://www.youtube.com/watch?v=82bR-ZjKAIo", es: "https://www.youtube.com/watch?v=Gh6NlLAqraM" },
  },
  {
    number: 2,
    title: "Transplant",
    tagline: "A heart on ice. A storm-torn city. And a donor who doesn’t add up.",
    blurb: "A routine organ transplant in the hurricane-battered city of Fenwick turns into a life-or-death mystery the moment the hospital lab discovers that the donor’s blood type doesn’t add up.\n\nWith his best friends Katie and George, a spiral notebook, and a head full of real medicine, Max follows the trail past a small plane, a missing lab tech and a hospital full of people who won’t answer a straight question — all the way to the tropical island of Çinco Lagos.\n\nWhat really went wrong with the transplant — and who is willing to lie to cover it up?",
    learn: [
      "Why a heart can keep beating after the brain has died",
      "Why a donor heart has only four to six hours on ice",
      "Why type O blood is called the universal donor",
      "What the “Swiss cheese effect” is, and how hospitals use it to catch mistakes",
    ],
    youtube: { en: "https://www.youtube.com/watch?v=KcdEamDZnZE", es: "https://www.youtube.com/watch?v=yrI3Si2JxiY" },
  },
  {
    number: 3,
    title: "Time of Death",
    tagline: "One clock says one thing. The evidence says another.",
    blurb: "In a case where every clue comes down to a matter of minutes, twelve-year-old Max Millhopper has to prove exactly when — and how — a Cortland Bay heart really stopped, before the wrong people take the fall.\n\nWith his best friends Katie and George, a spiral notebook, and a head full of real medicine, Max digs into the tiny machines that keep hearts beating on time, and a threat that sounds impossible.\n\nOne clock says one thing. The evidence says another. Why is Max the only one asking why?",
    learn: [
      "How a pacemaker listens to every heartbeat",
      "Why a healthy-looking heart can suddenly stop",
      "How chest compressions and a defibrillator can restart a heart",
      "What doctors learn when they “interrogate” a pacemaker",
    ],
    youtube: { en: "https://www.youtube.com/watch?v=WODxJEASpNo", es: "https://www.youtube.com/watch?v=1Y2-2Kj2i5s" },
  },
  {
    number: 4,
    title: "DNA and DOA",
    tagline: "A weak heart. A closed case. And DNA that tells another story.",
    blurb: "A body found the morning after the Founders’ Day festival looks like an open-and-shut case of a weak heart — until twelve-year-old Max Millhopper takes a second look at the DNA evidence.\n\nWith his best friends Katie and George, a spiral notebook, and a head full of real medicine, Max learns what a spit-in-a-tube test can really tell you, what it can’t, and how a family tree can crack a case.\n\nWhat if the case everyone is ready to close isn’t closed at all?",
    learn: [
      "What a spit-in-a-tube DNA test actually reads",
      "Why an ancestry pie chart is really a very educated guess",
      "How a few invisible skin cells become millions of DNA copies",
      "How family-tree DNA databases crack decades-old cold cases",
    ],
    youtube: { en: "https://www.youtube.com/watch?v=kQSApFHY108", es: "https://www.youtube.com/watch?v=8MWqDkL5AjQ" },
  },
  {
    number: 5,
    title: "The Shocking Truth",
    tagline: "They called it bad luck. Max calls it a clue.",
    blurb: "A fatal electrical accident at The Current science museum has Cortland Bay in mourning, and the grown-ups are calling it bad luck. Twelve-year-old Max Millhopper isn’t so sure.\n\nWith his best friends Katie and George, a spiral notebook, and a head full of real medicine, Max starts pulling at the wires — from the electric eel tank to the secret electricity inside every heartbeat.\n\nWhat truth was someone counting on nobody noticing?",
    learn: [
      "How an electric eel stacks tiny cells into one 600-volt shock",
      "How your heart’s built-in pacemaker keeps every beat on time",
      "What a smartwatch ECG can flag, and what it can’t",
      "What marks electricity leaves, and how a medical examiner reads them",
    ],
    youtube: { en: "https://www.youtube.com/watch?v=vxxO3zlFYu4", es: "" },
  },
  {
    number: 6,
    title: "Blood Spatter",
    tagline: "The haunted house was all pretend. The blood was not.",
    blurb: "A Halloween scare at the old cannery’s haunted house is supposed to be fake — until a blood spatter pattern turns up that isn’t part of the show.\n\nWith his best friends Katie and George, a spiral notebook, and a head full of real medicine, Max has to tell real blood from stage blood, read the story a pattern of drops can tell, and prove that something real happened in a place built entirely to look pretend.\n\nIn a house full of fake monsters, who is the real one?",
    learn: [
      "How a simple swab test tells real blood from stage blood",
      "How the shape of a drop reveals the direction it was travelling",
      "What a blank “void” in a pattern tells a forensic scientist",
      "How low-angle light helps investigators spot dried bloodstains",
    ],
    youtube: { en: "https://www.youtube.com/watch?v=XA9WI-DJmms", es: "" },
  },
  {
    number: 7,
    title: "Germs Attack",
    tagline: "Half the town is sick. One case doesn’t fit the pattern.",
    blurb: "Dozens of festival-goers turn up sick after the Blue Crab & Oyster Festival, and one case on the chart refuses to fit the pattern.\n\nWith his best friends Katie and George, a spiral notebook, and a head full of real medicine, Max becomes a disease detective, following the trail from the festival tents to the hospital waiting room with a map, a list and a lot of questions.\n\nWhere — and how — did Cortland Bay get sick?",
    learn: [
      "How disease detectives map an outbreak",
      "How Dr. John Snow traced cholera to one London water pump",
      "Why oysters carry whatever is in the water they live in",
      "How a germ’s genetic “fingerprint” links dozens of illnesses to one source",
    ],
    youtube: { en: "https://www.youtube.com/watch?v=szvaQ93jAhU", es: "" },
  },
  {
    number: 8,
    title: "Bugs and Bodies",
    tagline: "The witnesses have six legs. And they never lie about time.",
    blurb: "A discovery deep in the Cortland Bay Nature Preserve holds clues that only the insects can tell.\n\nWith his best friends Katie and George, a spiral notebook, and a head full of real medicine, Max isn’t afraid to get his hands dirty — or to learn some seriously gross forensic science — to read the tiny clocks that flies and beetles leave behind.\n\nExactly what happened out there in the marsh — and when?",
    learn: [
      "Why blowflies are the first insects to arrive",
      "How insects show up in an order that works like a calendar",
      "How a maggot’s size helps reveal how old it is",
      "Why museums keep colonies of beetles to clean skeletons",
    ],
    youtube: { en: "https://www.youtube.com/watch?v=k9mt65-2dU0", es: "" },
  },
  {
    number: 9,
    title: "The Golden Tooth",
    tagline: "A sea cave. A lost ship. And one small gleam of gold.",
    blurb: "A single gleaming clue in a sea cave at Blackwood Point sends twelve-year-old Max Millhopper chasing a centuries-old mystery about a lost shipwreck — and a pirate captain nobody ever found.\n\nWith his best friends Katie and George, a spiral notebook, and a head full of real medicine, Max learns to read a skeleton the way a forensic anthropologist does: age, height, and a lifetime of hard work written in bone.\n\nAnd it all starts with one small, unmistakable piece of evidence: a golden tooth.",
    learn: [
      "How a scientist reads age and sex from a skeleton",
      "How a single thigh bone reveals how tall a person stood",
      "How gold teeth were made long before modern dentistry",
      "Why a full moon brings tides that rise higher and faster",
    ],
    youtube: { en: "https://www.youtube.com/watch?v=8k20fNqJmp8", es: "" },
  },
  {
    number: 10,
    title: "Maximum Exposure",
    tagline: "A mountain. A storm. And a guide who knew better.",
    blurb: "When an expert mountain guide is found dead of exposure on Anthem Peak, high above Widow’s Peak Resort, twelve-year-old Max Millhopper has to figure out exactly what the cold can do to a person.\n\nWith his best friends Katie and George, a spiral notebook, and a head full of real medicine, Max trades the Florida coast for thin air and deep snow, where the body plays strange tricks and every degree matters.\n\nWas what happened on that mountain really an accident at all?",
    learn: [
      "Why very cold people sometimes take off their coats",
      "Why it is a danger sign when a cold person stops shivering",
      "Why you should never rub frostbitten fingers",
      "Why thin mountain air makes newcomers sick",
    ],
    youtube: { en: "https://www.youtube.com/watch?v=5tSQ7sFgdTc", es: "" },
  },
  {
    number: 11,
    title: "The Silent Guest",
    tagline: "The alarms never made a sound. The parrot never stopped.",
    blurb: "A tropical storm knocks out the power in Cortland Bay. By morning, every guest on one side of the old Cortland Inn has a pounding headache, the hotel parrot is as noisy as ever, and the man in Room 8 will never wake up.\n\nWith his best friends Katie and George, a spiral notebook, and a head full of real medicine, Max follows a gas nobody can see, smell or taste — starting with a cranky 1958 boiler named Bertha and a graph-paper map of one long hall.\n\nThe alarms never made a sound. Why not?",
    learn: [
      "Why carbon monoxide is called the silent killer",
      "Why a pulse oximeter can read “perfect” on a poisoned patient",
      "Why miners really did carry canaries",
      "What generator and alarm rules keep families safe after a storm",
    ],
    youtube: { en: "https://www.youtube.com/watch?v=31_t4JZHQ84", es: "" },
  },
  {
    number: 12,
    title: "Bones of Contention",
    tagline: "Everyone knows whose bones they are. Everyone is wrong.",
    blurb: "A storm rips the porch half off the old keeper’s cottage at Lantern Point and washes the sand out from under its floor. Lying in the hollow is a skeleton, and all of Cortland Bay knows who it must be: the lighthouse keeper who vanished in 1962.\n\nThen a forensic anthropologist lets Max Millhopper, Katie and George watch as she reads the bones. The growth plates give an age. The thigh bone gives a height, the pelvis the rest. Neither the age nor the height matches the keeper.\n\nSo whose bones are they, where did the keeper go — and why is somebody suddenly so anxious about an old stone post, a copper bolt and a tree?",
    learn: [
      "How a collarbone can tell a scientist your age",
      "What a healed fracture reveals, years later",
      "Why coffins really can float to the surface in a flood",
      "Why some old coffins were built with a bell",
    ],
    youtube: { en: "https://www.youtube.com/watch?v=-oOrv5CGXfI", es: "" },
  },
  {
    number: 13,
    title: "Grave Doubts",
    tagline: "The town built a statue to its hero. Then it dug up his grave.",
    blurb: "Cortland Bay has a new bronze statue: Doc Tarrant, the Army medic who ran back under enemy fire nine times in 1968 and won the Distinguished Service Cross. He is George’s great-grandfather, and for one whole week George is the proudest boy in town.\n\nThen pages from a “lost diary” turn up that say the hero froze and ran. A rock comes through George’s window. To settle it, George’s grandmother gives the medical examiner permission to open the soldier’s grave.\n\nMax, Katie and George have only a forensic pathologist’s patience and their own sharp eyes to work with, while the whole town takes sides. What really happened on that hill in 1968?",
    learn: [
      "How a forensic pathologist tells cause of death from manner of death",
      "How a thigh bone can give away a person’s height",
      "What a dental chart can tell a forensic scientist",
      "How DNA can show whether two people are related",
    ],
    youtube: { en: "https://www.youtube.com/watch?v=35a2I6GYO1Q", es: "" },
  },
  {
    number: 14,
    title: "Silver Screen",
    tagline: "Lights. Camera. Anaphylaxis. Somebody rewrote the script.",
    blurb: "Hollywood has sailed into Cortland Bay. A replica pirate ship, a parrot with its own trailer, and an action star named Dash Montgomery — and Max, Katie and George have been hired as extras.\n\nThen, high in the rigging with a cutlass clenched in his teeth, the star’s lips swell, his breath wheezes, and he collapses. The producer points at the stunt coordinator: “What was in that water, Ray?” But Max saw where the swelling started.\n\nWith a script supervisor’s photographs, a parrot who repeats what he hears, and a few minutes that mean everything, Max sets out to prove what really nearly killed the star — and who was behind it.",
    learn: [
      "What anaphylaxis is, and why minutes matter",
      "How to use an epinephrine auto-injector — and why antihistamines aren’t enough",
      "What mast cells are, and why they overreact to harmless things",
      "How a blood test can prove an allergic reaction after the fact",
    ],
    youtube: { en: "https://www.youtube.com/watch?v=saaoSg45k3A", es: "" },
  },
  {
    number: 15,
    title: "Paint Me a Liar",
    tagline: "A priceless portrait. A two-hundred-year-old lie.",
    blurb: "A portrait of the sea captain who founded Cortland Bay comes home at last, and an appraiser values it at $2.4 million. The donor beams. The museum glows. Half the town crowds in to get a look at it.\n\nThen the museum’s ultraviolet lamp sweeps across the old varnish, and the Captain’s white collar glows a strange lemon-yellow. Meanwhile, an honest witness swears a hit-and-run car was dark green — and a man with a green truck is arrested.\n\nWith a state crime-lab scientist and a flake of paint smaller than a pinhead, Max Millhopper sets out to learn how old the Captain really is — and who has been lying about him.",
    learn: [
      "What a tiny flake of paint can reveal about a painting",
      "Why some pigments work like a date stamp",
      "How X-ray fluorescence finds the chemical elements in paint",
      "Why an honest eyewitness can still be wrong",
    ],
    youtube: { en: "https://www.youtube.com/watch?v=c86lN_JfDtY", es: "" },
  },
];

const MAX_STORE_LINKS = {
};

MAX_BOOKS.forEach((book) => {
  const n = book.number;
  const nn = String(n).padStart(2, "0");
  const store = MAX_STORE_LINKS[n] || {};
  const buy = {};
  for (const ed of ["en", "es", "de", "fr", "it"]) buy[ed] = { kindle: "", paperback: "", hardcover: "", ...(store[ed] || {}) };
  window.SITE.books.push({
    id: `max-${nn}`,
    series: "max",
    ...book,
    cover: `images/max/${nn}/cover.jpg`,
    gallery: ["wide", 1, 2, 3, 4, 5, 6].map((k) => `images/max/${nn}/${k === "wide" ? "wide" : "0" + k}.jpg`),
    buy,
    youtube: { en: "", es: "", ...(book.youtube || {}) },
  });
});
