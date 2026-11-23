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
      // Home-page banner text for this series.
      bannerTitle: "Real medicine. Real clues. One twelve-year-old detective.",
      bannerLine: "Max Millhopper and his friends Katie and George solve medical mysteries in Cortland Bay, Florida — and every case teaches real science.",
      about:
        "Twelve-year-old Max Millhopper has a spiral notebook, a magnifying glass and a knack for spotting what the grown-ups miss. With his best friends Katie and George, he solves medical mysteries in the small coastal town of Cortland Bay, Florida — and every case teaches real science along the way. Each book is a stand-alone mystery, written by a pediatrician.",
      editionsNote:
        "Each book comes as a Kindle eBook (the complete novel) and as an illustrated picture-story edition in paperback and hardcover (full-colour pictures with short captions). Books 1–15 are also available in Spanish, German, French, Italian and Japanese.",
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
        { id: "stiles", name: "Dr. Jo Stiles", image: "images/max/characters/stiles.jpg", role: "The vet", bio: "A veterinarian who makes her rounds in a mobile veterinary truck." },
        { id: "nell", name: "Nell Quill", image: "images/max/characters/nell.jpg", role: "Bait-shack keeper", bio: "Keeps the bait shack by Lantern Point." },
        { id: "lowery", name: "Bernadette Lowery", image: "images/max/characters/lowery.jpg", role: "The health department", bio: "Works for the county health department, so she is the one to call when something is making people sick." },
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
      // Home-page banner text for this series.
      bannerTitle: "Six leftover squires. One reluctant wizard.",
      bannerLine: "Fair-play mysteries where every clue is on the page, and the squires learn to tell what they see from what they only guess.",
      about:
        "No elite cohort picked them, so six misfit squires end up in the Leftover Yard at Merlin's Knight School, where the great wizard teaches them to think before they charge. Each book is a fair-play mystery for ages 8–14: every clue is on the page, and the squires learn to separate what they can actually see from what they only guess.",
      readingOrder:
        "Start with Book 1, Trial by Wyvern. Each book solves its own mystery, and the friendships and running jokes grow from book to book. Books 1–10 are told through Kay's eyes, and Books 11–20 through Morgan's.",
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
        { id: "tusk", name: "Tusk", image: "images/mks/characters/tusk.jpg", role: "Kay's boar", bio: "Kay's boar, never far behind him." },
        { id: "nan", name: "Nan Pottle", image: "images/mks/characters/nan.jpg", role: "The school cook", bio: "Runs the school kitchen, wooden spoon in hand." },
        { id: "cassian", name: "Cassian", image: "images/mks/characters/cassian.jpg", role: "Golden Cohort squire", bio: "A Golden Cohort squire in a sapphire-blue cape, and Lance's rival." },
        { id: "elara", name: "Elara", image: "images/mks/characters/elara.jpg", role: "Golden Cohort squire", bio: "A Golden Cohort squire in an emerald-green cape." },
        { id: "cohort", name: "Zara, Mei, Torvin and Reed", image: "images/mks/characters/cohort.jpg", role: "The rest of the Golden Cohort", bio: "The other four squires of the Golden Cohort, the school's elite group." },
        { id: "edda", name: "Dame Edda Strand", image: "images/mks/characters/edda.jpg", role: "Master of Arms", bio: "Master of Arms of the Golden Cohort from Book 5. Before that, she was the King's Falconer." },
        { id: "penelope", name: "Penelope Quill", image: "images/mks/characters/penelope.jpg", role: "The reporter", bio: "Writes for the Pennywick Herald and is always looking for her next story." },
        { id: "hodge", name: "Hodge", image: "images/mks/characters/hodge.jpg", role: "The night porter", bio: "The night porter of the north tower, with his lantern and his big leather book." },
        { id: "archivist", name: "The Archivist", image: "images/mks/characters/archivist.jpg", role: "Guardian of the archive", bio: "Built of old books, it guards the school's Restricted Archive." },
        { id: "brisk", name: "Master Brisk", image: "images/mks/characters/brisk.jpg", role: "The old artificer", bio: "Master Wendel Brisk, the old artificer, never far from his oil can." },
        { id: "herald", name: "Clarice Ambrey", image: "images/mks/characters/herald.jpg", role: "The King's Herald", bio: "Mistress Clarice Ambrey, Royal Tournament Herald. When she raises her trumpet, everyone listens." },
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

// The Max Millhopper books. Each block has the English title, tagline, back-cover blurb,
// the "In this book you'll learn" list and the YouTube links (en = English video, es = Spanish).
// Translations of these texts live in data/lang/<code>.js under "book.max-01.title" and so on.
// Pictures go in images/max/01/ … images/max/20/ (cover.jpg, 01.jpg … 06.jpg, wide.jpg).
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
  {
    number: 16,
    title: "The Swallowed Diamond",
    tagline: "A $400,000 pink diamond. One gulp, and it was gone.",
    blurb: "Cortland Bay wants to relight its old lighthouse, and a widow named Delphine Merriweather is donating her pink diamond, the Lantern Rose, to pay for it. About two hundred people pack the auction tent at the Strawberry Festival.\n\nThen a runaway goat charges into the tent, the auctioneer starts sneezing, and when the dust settles the velvet cushion is empty. Everyone is searched. Nothing turns up. So the diamond must have been swallowed.\n\nWith a hospital X-ray room, a gemologist's scale and a petting-zoo goat who nibbles everything in reach, Max Millhopper sets out to find the Lantern Rose.",
    learn: [
      "What happens to something you swallow, and what usually passes on its own",
      "Why a swallowed button battery is an emergency",
      "Why bones and metal show up white on an X-ray",
      "How gemologists tell a real diamond from a fake",
    ],
    youtube: { en: "", es: "" },
  },
  {
    number: 17,
    title: "Silent Springs",
    tagline: "A crystal-clear spring. A dive that went wrong.",
    blurb: "A green glass bottle washes up below Lantern Point with a note from a nine-year-old girl at Silent Springs: the spring is getting quieter every year, so please come and see it. Aunt Mattie drives Max, Katie and George inland to the clearest water they have ever seen.\n\nThat morning a hydrologist dives fifty-eight feet down to bring up ten years of measurements about the spring's flow. He shoots back to the surface, confused, and collapses on the dock. The dive club's president says he panicked. His gauge says his tank was full.\n\nWith a hospital's hyperbaric chamber, a dive computer's record and a nine-year-old witness, Max sets out to learn what really happened at fifty-eight feet, while George nurses a goldfish that floats upside down.",
    learn: [
      "Why air expands as a diver rises, and why divers never hold their breath",
      "The difference between an air embolism and the bends, and how a hyperbaric chamber treats them",
      "How Florida's springs work, and why manatees visit them in winter",
      "How fish use a swim bladder, and why a goldfish can float upside down and still be alive",
    ],
    youtube: { en: "", es: "" },
  },
  {
    number: 18,
    title: "Stand Still",
    tagline: "A girl who can't stand. A barn that's being framed.",
    blurb: "Nine-year-old Tilly Brennan rides her pony, Thimble, at Sweetgrass Stables. On Thursday her legs went wobbly. By Friday night she couldn't stand. She has no fever and she is as chatty as ever, but her reflexes are gone, and the weakness is climbing. The hospital fears Guillain-Barré syndrome. Her mother is sure the stable poisoned her.\n\nAt Sweetgrass, the champion horse has gone lame, families are pulling their kids out, and the rich neighbor wants to buy the place. Then the horses' health papers go missing with a state inspection on the way.\n\nMax, Katie and George head out to the barn. Katie rides there every Saturday. George is terrified of horses, so he arrives in two helmets with a Tick Defense Kit and is assigned the sleepiest pony at Sweetgrass.",
    learn: [
      "How doctors test reflexes, strength and feeling, and what Guillain-Barré syndrome is",
      "How nerves carry signals to muscles, and what a reflex is",
      "What a hoof abscess is, and why horse barns need a Coggins test",
      "Why wilted red maple leaves are dangerous to horses",
    ],
    youtube: { en: "", es: "" },
  },
  {
    number: 19,
    title: "Red Tide",
    tagline: "A beach full of dead fish. A clam with a perfect tag.",
    blurb: "Dead fish are washing up on the beach at Cortland Bay, and everyone on the pier is coughing. It's a red tide. The state has closed the shellfish beds, and George evacuates his goldfish to the library, just in case.\n\nThen seven-year-old Toby Fairbanks can't walk straight. His lips feel fizzy, his parents are dizzy and tingly, and his dad says his ice water is hot. The family ate clams, but the seafood market swears they came from a clean clam farm up the coast, and every bag has the official tag to prove it.\n\nTwelve-year-old Max Millhopper, Katie and George start asking questions, while old Nell Quill at the bait shack talks about ghost lights bobbing on the dark flats below the lighthouse.",
    learn: [
      "What a red tide is, and why it makes people cough on the beach",
      "Why red tide kills fish but not the clams that soak up its toxin",
      "How doctors recognize shellfish poisoning, and why cooking doesn't help",
      "How shellfish tags and closures keep store-bought clams safe",
    ],
    youtube: { en: "", es: "" },
  },
  {
    number: 20,
    title: "Smoke and Salt",
    tagline: "A six-year-old turning blue. An oxygen level that won't go up.",
    blurb: "It's the Smokeout, Cortland Bay's barbecue cook-off, and Hattie Hollowell's famous beans have won the People's Choice three years running. That night six-year-old Lulu Montalvo arrives at the ER with gray-blue lips. The doctors turn her oxygen all the way up, and her oxygen level won't go up.\n\nTwo more people who ate at the same stand turn gray too, and one of them is the town's reporter, Marcus Kraut. Lulu's blood is the color of chocolate milk. The stand is shut down, and the whole town decides that Hattie mixed up her pink salt.\n\nTwelve-year-old Max Millhopper, Katie and George build a timeline of who ate what, and when, while George, newly appointed a junior judge, refuses to taste anything without a written list of ingredients.",
    learn: [
      "How hemoglobin carries oxygen, and why extra oxygen can't help when it's been changed",
      "Why the blood turned chocolate brown, and how a blue medicine turns gray lips pink again",
      "Why curing salt is colored, and why it isn't the same as Himalayan pink salt",
      "What makes the pink smoke ring in barbecue, and how health detectives trace a food poisoning",
    ],
    youtube: { en: "", es: "" },
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

// Merlin's Knight School Books 2–20 (Book 1 is written out in full above, with its link blocks).
// Store and YouTube links: add them in MKS_LINKS by book number, e.g.
//   2: { buy: { en: { kindle: "…" } }, youtube: { en: "…" } },
// Pictures go in images/mks/02/ … images/mks/20/ (cover.jpg, 01.jpg … 06.jpg, wide.jpg).
const MKS_BOOKS = [
  {
    number: 2,
    title: "The Bog of Bad Ideas",
    tagline: "Six squires. One bog. Too many lights.",
    blurb: "The morning after Wickerbridge, Merlin sends his six leftover squires on a simple errand: pick a little Moonpetal Moss at the edge of the Marrow Bog. Don't trust every light you see.\n\nBy nightfall they are lost, split up and face to face with a very grumpy Bog Guardian, while the village of Mossbury blames the wandering lights, and the 'Bog Troll', for every cart that sinks off the old causeway.\n\nThe 'Wisp-Warden of the Fen' plans a torch-lit hunt for the full moon. Kay has one day to work out which lights really lead people astray, and why.",
    learn: [
      "Together isn't the same as because",
      "How to run a fair test",
      "Why stories grow every time they're told",
      "A good theory predicts",
    ],
  },
  {
    number: 3,
    title: "Something's Missing",
    tagline: "Six squires. One empty cushion. A library that knows when you lie.",
    blurb: "For three hundred years the Founder’s Seal has sat on a velvet cushion in the Restricted Archive. Now there is only the cushion, a key is missing from the Dean’s ring, and a black bird was seen at a window.\n\nThe Dean already knows who to blame: the Leftovers. With Founder’s Day two days away, Kay, Lance, Gawain, Percival, Gwen and Morgan sneak into the Archive at night to clear their names, and meet its guardian, who can always tell a lie.\n\nNothing in the Archive is quite what it seems, and the Seal must be back on its dais by dawn on Founder’s Day.",
    learn: [
      "What didn’t happen is evidence too",
      "An idea isn’t truer because of who says it",
      "Building a timeline",
      "The truth counts most when it costs you",
    ],
  },
  {
    number: 4,
    title: "The Maze Doesn't Care About Your Plan",
    tagline: "Six squires. One maze. A sphinx who loves a stumper.",
    blurb: "This year the Hedge Maze trial decides who goes to the Tournament, and for the first time the Leftovers are allowed to compete. Gwen has a forty-one-page plan. The maze ignores every page of it.\n\nInside, the hedges move, a theatrical Maze Sphinx asks riddles at every turn, the groundskeeper has been ‘staying’ in the middle for six days, and the Golden Cohort keeps finishing in a time nobody has managed in fifty years.\n\nKay is sure Cassian is cheating. Proving how anyone finishes that fast will take every page Gwen got wrong.",
    learn: [
      "A map is not the territory",
      "Look for the pattern in the surprises",
      "Too good to be true needs explaining",
      "Check it twice",
    ],
  },
  {
    number: 5,
    title: "The Griffon Who Wouldn't Fly",
    tagline: "Six squires. One very big bird. And the hardest job of all: waiting.",
    blurb: "Merlin’s “nice, calm” rescue drill at the foot of the Aerie Cliffs turns real when a griffon chick starts crying on a ledge high above. Gawain charges straight up the cliff, and the chick’s enormous mother blows him into a juniper bush.\n\nNow the King’s Master of the Tournament Beasts says the griffon is dangerous and will be taken in hand at dawn, chick and all. The mother hasn’t flown in five days, and the stone pinning the chick’s wing has no business being on a red cliff.\n\nTo save them, the strongest of the six will have to do the one thing he has never been good at: wait.",
    learn: [
      "Ask what it’s trying to do",
      "Ask where it came from",
      "“Could have” isn’t “did”",
      "A small push at the right time",
    ],
  },
  {
    number: 6,
    title: "The Practice Knight Walks at Night",
    tagline: "Six squires. One very big knight. And it has somewhere to be.",
    blurb: "The school’s brand-new practice knight has been walking at night, and its giant footprints lead right to the Leftover Yard gate.\n\nAt the joint drill with the Golden Cohort, Cassian turns it up to “tournament difficulty,” it goes wild, and Lance, who has always believed the best do it alone, charges it alone. Now the knight’s maker says someone tampered with his masterpiece, and the Leftovers’ Tournament hopes hang on the Herald’s inspection.\n\nKay is sure he knows who’s walking the knight. But why do its footprints cross the squires’ own yard, and where does it go at midnight?",
    learn: [
      "Ask where it’s going",
      "One cause, many symptoms",
      "Test it against the real thing",
      "Find the rhythm",
    ],
  },
  {
    number: 7,
    title: "Something in the Lake",
    tagline: "Six squires. One very big secret. And a lake full of quick fixes.",
    blurb: "Merlin calls it a simple errand: a fishing village by a lake, where the nets keep vanishing, and some come back neatly mended.\n\nKay brings a boatful of gadgets nobody asked for. By sunset an enormous lake serpent has surfaced, his net launcher has fired backward, both boats have gone over, and the six are stranded on a reed island for the night. Every quick fix Kay tries makes things worse.\n\nIn Lakemere the talk is of a monster. But the nets from near the island come back with their threads pulled out, while the deep nets on the south shore come home as bare cork lines, and someone wants to buy every boat in Lakemere before the village meets at dawn on the third day.",
    learn: [
      "Two causes can look like one",
      "Put it on a map",
      "Stop and plan before you fix",
      "Measure, don’t repeat",
    ],
  },
  {
    number: 8,
    title: "The Knight Who Kept Watch",
    tagline: "Six squires. One very old knight. And a question nobody has asked in four hundred years.",
    blurb: "Merlin is carrying a secret, and he’s carrying it alone. When he drops a page in very old handwriting, the six follow its map across the moor to a ruined watchtower on a lonely hill.\n\nIn the crypt beneath it they meet Sir Aldric, a ghost knight who has kept watch for four hundred years. He won’t answer their questions. And somebody has been digging in his crypt at night.\n\nKay is sure he knows who. But the answer won’t come from asking harder. It will come from the one thing none of them is good at: being quiet long enough to listen.",
    learn: [
      "Listen first",
      "Rule out what can’t be true",
      "A light can be a message",
      "Old books can be wrong",
    ],
  },
  {
    number: 9,
    title: "Touch Nothing Without Asking",
    tagline: "Six squires. Forty kobolds. And a tunnel full of traps.",
    blurb: "The King’s Tournament Cup comes to the school for safekeeping, and on its very first night it vanishes from a locked cabinet. In the spilled flour: tiny clawed footprints.\n\nThat morning a cheerful rat-catcher is at the gate, offering to clear out whatever lives under the hill. Kay is sure the kobolds took the Cup. He goes down into the Hollow Warrens fast, with a gadget for every problem, and sets off one trap after another.\n\nBut why do the prints in the flour go to the cabinet and never come back? Something very old is shifting deep below the kobolds’ tunnels. And the only one who can lead Kay safely to the bottom has one rule for visitors.",
    learn: [
      "Ask how it works before you touch it",
      "Fast and clever are not always the same speed",
      "Notice who knows too much",
      "Check if it even fits",
    ],
  },
  {
    number: 10,
    title: "What the School Was Built On",
    tagline: "A tournament. A conjurer. And something enormous under the floor.",
    blurb: "The King’s Tournament has come to Merlin’s Knight School at last: three days of events, the stands full, and six squires up against the Golden Cohort. Between events, the crowd’s favorite is a dazzling conjurer who makes coins vanish into his closed hand.\n\nThen a familiar face turns up in the crowd. Kay is sure he knows why the man has come back, and chases him through the Tournament tents.\n\nAll the while, something is stirring far beneath the school. The ground hums under the Leftover Yard, the crack in the Founder’s Seal glows gold, and Merlin will only say that it wakes “once in a very long while.” He keeps promising to explain everything “after.”",
    learn: [
      "Watch the other hand",
      "Put every clue on one list before you decide",
      "Test what it does, not how it looks",
      "Ask what it needs",
    ],
  },
  {
    number: 11,
    title: "The Bell That Rang at Midnight",
    tagline: "Year Two. One bell. And nobody pulling the rope.",
    blurb: "On the first night of Year Two, the school bell rings twelve times at midnight with nobody in the belfry, and so does the little chapel bell in Windle. By morning the Pennywick Herald is asking “RINGING CURSE?” and a jolly travelling bell-founder is selling brass ward-bells to keep it away.\n\nMorgan, whose magic has come back from the summer three sizes too big, is quietly sure the curse is her. With three brand-new first-years underfoot, a gruff new magic teacher, and a grumpy stone gargoyle only she can hear, the six squires set out to count how often bells ring anyway, and who profits when they do.\n\nAnd under the school’s bell, Morgan can hear another one, very far away, ringing wrong.",
    learn: [
      "How often does it happen anyway?",
      "Count the ordinary before you call it strange",
      "Who profits from the fear?",
      "Test an idea by taking one thing away",
    ],
  },
  {
    number: 12,
    title: "Thief in Black Feathers",
    tagline: "A village full of missing silver. And everyone blames the raven.",
    blurb: "Silver is vanishing all over Pennywick: spoons off tables, buttons off coats, links off the Mayor’s chain, and the old silver “luck” that has hung over the Crooked Crown’s hearth for longer than anyone can remember. Every witness swears they saw a big black bird.\n\nPennywick’s constable comes to Merlin’s Knight School for Morgan’s raven. Again. Then the raven disappears. Morgan has to do three hard things: ask the others for help, let Gwen ask the questions, and learn a little of the language of crows.\n\nBecause the way you ask a question can change what people remember.",
    learn: [
      "How you ask changes the answer",
      "Don’t put the answer in the question",
      "Who wants this clue found?",
      "Does it fit?",
    ],
  },
  {
    number: 13,
    title: "The Seer at the Michaelmas Fair",
    tagline: "Seven veils. One fortune-teller. And she is never wrong.",
    blurb: "At Pennywick’s Michaelmas Fair, Madame Zephyrine, the Seer of Seven Veils, makes predictions, and they come true. A goose leads a squire into trouble. A girl in a starry cloak loses a thing she cannot replace. And then the King’s Cup vanishes from the prize tent overnight.\n\nMorgan, who badly wants to ask the Seer one question of her own, isn’t sure what to believe. Percival starts a table of every prediction, the hits and the misses, and the misses column runs off the page.\n\nNobody remembers the misses.",
    learn: [
      "Count the misses",
      "Statements that fit anyone",
      "Who told her?",
      "Change one thing and watch what follows",
    ],
  },
  {
    number: 14,
    title: "Snowbound",
    tagline: "Five days. No sun. No road. No way out.",
    blurb: "The King’s College has sent five Visitors to inspect Merlin’s Knight School, and soon the castle is buried to its windowsills, every inkwell has frozen, and a tiny glittering figure is drawing pictures in the frost on the windows.\n\nThen the steep lane down from the gate turns to glass every night, however much ash they throw on it. Everyone blames the frost sprite. But the leader of the Visitation must be in her College’s hall by the shortest day, or lose the vote of her life.\n\nSnowed in with strangers and short of sun, Morgan and the squires have five days to ask the hardest question of all: what would prove us wrong?",
    learn: [
      "What would prove you wrong?",
      "Test before you trust",
      "How ash helps you grip ice",
      "Salt, frost and water",
    ],
  },
  {
    number: 15,
    title: "The Unicorn Who Bit Everyone",
    tagline: "Nineteen hunters. One very cross unicorn.",
    blurb: "Every dusk a hunting horn has sounded from the north, and by Twelfth Night nineteen hunters are waiting at the Cliff and Beck in Windle with nets, hounds and a handbill: the Beast of Windle Wood bites everyone. A bounty of ten gold crowns says she must be gone by the twelfth.\n\nPercival has read three books about unicorns, and every one says unicorns don’t bite. Then he meets one. She is thin, shaggy and very cross, and the spring she drinks from has turned a strange rust-orange.\n\nWith five days until the hunt, Morgan and the squires must find out what has gone wrong in Windle Wood, and learn when it is wiser to stop than to keep on digging.",
    learn: [
      "Sunk costs: would you start it today?",
      "Knowing when to stop",
      "How a stream gets poisoned (and how to test it)",
      "Reading tracks, water and clues",
    ],
  },
  {
    number: 16,
    title: "The Rematch",
    tagline: "One clockwork hippogriff. One very nervous week.",
    blurb: "The Royal Exhibition trials have come to Merlin’s Knight School, and with them the King’s Cup rematch: Lance against Cassian, on the same mount. The mount is Fidget, a brand-new clockwork hippogriff that faints when it is frightened.\n\nThen things start going wrong. A greased saddle. A jammed sword rack. A bolt through the fair. Everyone blames Sable, the proud Golden first-year who keeps slipping away at night.\n\nMorgan blames her too, and she has four reasons. With the rematch moved to the very last day, the squires must work out what the prizes are making people do.",
    learn: [
      "Incentives: what does the reward make people do?",
      "Ask who gets paid",
      "Admitting you were wrong",
      "Teaching someone else to be good",
    ],
  },
  {
    number: 17,
    title: "The Library That Lost Its Words",
    tagline: "One white page. Then hundreds.",
    blurb: "In the Restricted Archive under Merlin’s Knight School, a page goes white overnight. The words are simply gone, and the pin-holes and ruled lines are still there. For twenty-three days nothing more happens. Then thirty-one more pages go white in a single day, and soon it is hundreds.\n\nThe Archivist blames the new magic teacher, Master Thorne, who reads alone at midnight. Morgan has suspected him all year. A tiny paper-eating inkwyrm called Marge is caught nibbling the margins. And the Patroness’s cheerful new copyist is very busy upstairs.\n\nThis time Gwen can’t do it all herself. With the first-years helping and a rough number on a slate, the squires must estimate first — because nobody can count a million pages one by one.",
    learn: [
      "Estimate first: a rough number now beats an exact one never",
      "Checking a theory against the numbers",
      "Sharing the work: letting others help",
      "Saying sorry, properly",
    ],
  },
  {
    number: 18,
    title: "Agnes",
    tagline: "A crow with no letter. A grandmother who knows too much.",
    blurb: "Old Tom, Gran’s crow, lands on the yard wall with no letter on his leg. Then Gran herself arrives at Merlin’s Knight School, unannounced, the week of May Eve.\n\nBy May morning hedge-witch charms all over the county have gone gray. A cheerful charm-seller in a marigold coat is selling farthing charms that never go gray, and somebody the villagers call the Smoke-Witch is seen at the empty cottages after dark. Morgan is sure she knows who did it, and she says so out loud.\n\nTo find the truth, the squires must keep asking one more question — and then what? And at last Gran and Merlin tell them the story of the Watch that failed, fifty years ago.",
    learn: [
      "And then what? Following consequences to their consequences",
      "Checking whether a fix makes things worse",
      "Who gains? Following the money",
      "Owning up when you are wrong",
    ],
  },
  {
    number: 19,
    title: "The Exhibition",
    tagline: "New bells for old. And one old bell goes quiet.",
    blurb: "Morgan has something she must tell Merlin, and there is nobody left to tell. Merlin and Gran have gone west, and the Royal Exhibition is coming to Merlin’s Knight School, with four silver bells for Lakemere: new bells for old.\n\nThe old Lakemere bell is to ring its last hour. The Watch guards it day and night. Then, on the first night of the Exhibition, under a sky full of rockets, the old bell goes quiet. Morgan is sure she knows who did it. She is wrong, out loud.\n\nAt the Disputation, everybody must argue the other side first. To see what a clever old woman will do next, Morgan must make the best case for the person she trusts least.",
    learn: [
      "Make the best case for the other side",
      "Spotting the straw man: the worst case is easy, and usually wrong",
      "Think it from their side to see their next move",
      "Being wrong among friends is still being wrong",
    ],
  },
  {
    number: 20,
    title: "The Isle of Apples",
    tagline: "Three nights. One gray boat. And an island behind the mist.",
    blurb: "Three nights. A little gray boat waits at the edge of the White Wall, and Gran’s blackthorn stick is gone from beside her bed. Old Fenwick blames the Wall-lights. Morgan is sure she knows who took it. She is wrong.\n\nGwen chalks a new column on the case board: HOW SURE. Every clue moves the number a little. And behind the mist, on an island where every apple tree is in blossom and fruit at once, something old is waiting for a watch.\n\nTen in ten is a fact, not a guess. But waiting is a choice too. To keep the watch, Morgan must say how sure she is, and then go.",
    learn: [
      "How sure are you? Then act",
      "Say it as a number: “probably” means different things",
      "One clue, one step: change your number a little",
      "Keep a row for somebody you haven’t thought of",
    ],
  },
];

const MKS_LINKS = {
};

MKS_BOOKS.forEach((book) => {
  const n = book.number;
  const nn = String(n).padStart(2, "0");
  const links = MKS_LINKS[n] || {};
  const buy = {};
  for (const ed of ["en", "es", "de", "fr", "it"]) buy[ed] = { kindle: "", paperback: "", hardcover: "", ...((links.buy || {})[ed] || {}) };
  window.SITE.books.push({
    id: `mks-${nn}`,
    series: "mks",
    ...book,
    cover: `images/mks/${nn}/cover.jpg`,
    gallery: ["wide", 1, 2, 3, 4, 5, 6].map((k) => `images/mks/${nn}/${k === "wide" ? "wide" : "0" + k}.jpg`),
    buy,
    youtube: { en: "", ...(links.youtube || {}) },
  });
});

// Books that are planned but not finished: shown at the end of the series list as "Coming soon"
// (a plain card, no page of their own). Leave title "" if there is no title yet.
// When a book is finished, delete it here and add it above as a normal book.
window.SITE.comingSoon = [
  { series: "max", number: 21, title: "" },
  { series: "mks", number: 21, title: "The Tide That Came Late" },
  { series: "mks", number: 22, title: "The Boats That Came Home" },
  { series: "mks", number: 23, title: "Shares in the Sea" },
  { series: "mks", number: 24, title: "What Everybody Knows" },
  { series: "mks", number: 25, title: "The Wreck of the Petrel" },
  { series: "mks", number: 26, title: "The Wall Nobody Needed" },
  { series: "mks", number: 27, title: "The Gullsmouth Regatta" },
  { series: "mks", number: 28, title: "One More Basket" },
  { series: "mks", number: 29, title: "The Founder's Ebb" },
  { series: "mks", number: 30, title: "The Bell Under the Sea" },
];
