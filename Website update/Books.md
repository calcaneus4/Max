# Website update — books to add (Max Millhopper 16–20, Merlin's Knight School 2–20)

*Prepared 22 Nov 2026 for the author website (calcaneus4/Max). Everything here comes from the finished book folders; no picture was generated or edited. Every tagline, blurb sentence and "you'll learn" bullet was checked against the book's chapters, and anything that gave away a solution was reworded. The notes below never name a culprit, so this file is safe to keep in the public repository.*

## What is in this folder

```
Website update/
  Books.md                                  (this file)
  Max Millhopper/
    Book 16 - The Swallowed Diamond/ … Book 20 - Smoke and Salt/        (5 books)
    Characters/                                                          (3 new sheets)
  Merlin's Knight School/
    Book 02 - The Bog of Bad Ideas/ … Book 20 - The Isle of Apples/     (19 books)
    Characters/                                                          (11 new sheets)
```

Each book folder holds 8 files, named like the earlier uploads: `Book NN cover.jpg` (the English Kindle cover, 1600×2560), `Book NN wide scene (iNNNN).jpg`, and `Book NN inside 1 (chNN iNNNN).jpg` … `inside 6` (six different chapters, all from chapters 1–10, 1536×1024, the final QC'd stills, byte-for-byte copies).

- **Max Millhopper file names:** as in Books 11–15, `iNNNN` is the picture's position in the whole book, counting from 0. The exact source file is listed under each book.
- **Merlin's Knight School file names:** as in Book 1, `iNNNN` is the shot number within the chapter, so `ch05 i0028` is `images/ch05/ch05_s028.jpg`.
- **To import:** `python3 tools/import_images.py --from "Website update/Max Millhopper"` and `python3 tools/import_images.py --series mks --from "Website update/Merlin's Knight School"`. The new character sheets need entries in the script's `CHARACTERS` table and in `tools/character_crops.json` first (see "New character sheets" below), or they are skipped.

## Status at a glance

| Series | Books | Finished? | On the website now |
|---|---|---|---|
| Max Millhopper, Medical Detective™ | 16–20 | **Finished** in English: text, art, narration, video timeline, YouTube text and thumbnail, Kindle, paperback and hardcover. Spanish video files also built. | Books 1–15 |
| Merlin's Knight School™ | 2–20 | **Finished** in English, Spanish, German, French and Italian (Kindle, paperback, hardcover), plus the English narration, video timeline, YouTube text and thumbnail. | Book 1 |
| Max Millhopper | 21 | **Not finished** (not started; see the end of this file) | — |
| Merlin's Knight School | 21–30 | **Not finished** (planned only; see the end of this file) | — |

**Links:** I found no KDP link and no YouTube link for any of these 24 books. `youtube max links.rtf` stops at English Book 15 and Spanish Book 4; `KDP_Publishing_Tracker.md` covers only the German, French and Italian editions of Max Books 1–15, all still marked "todo"; a web search found no public listing. I could not open the Amazon series page (B0HMN3V31C) to see whether Books 16–20 have been added to it. Until a book has its own link, the site falls back to the series link for Max and shows "Links coming soon" for Merlin's Knight School.

## Max Millhopper, Medical Detective™ — Books 16–20

### Book 16 — The Swallowed Diamond

**Tagline:** A $400,000 pink diamond. One gulp, and it was gone.

**Back-cover blurb (fact-checked and corrected):**

> Cortland Bay wants to relight its old lighthouse, and a widow named Delphine Merriweather is donating her pink diamond, the Lantern Rose, to pay for it. About two hundred people pack the auction tent at the Strawberry Festival.
>
> Then a runaway goat charges into the tent, the auctioneer starts sneezing, and when the dust settles the velvet cushion is empty. Everyone is searched. Nothing turns up. So the diamond must have been swallowed.
>
> With a hospital X-ray room, a gemologist's scale and a petting-zoo goat who nibbles everything in reach, Max Millhopper sets out to find the Lantern Rose.

*What changed from the printed back cover, and why:*
- Tagline: the printed one says “A priceless pink diamond.” The book puts a figure on it (insured for $400,000, ch. 2; bidding passes $300,000, ch. 4) and never says “priceless”, so the tagline above uses the figure. If you read “priceless” as a figure of speech, the printed tagline can stand.
- Blurb and bullets: no changes.

*Check:* 40 separate claims (tagline, blurb, printed bullets and the longer YouTube bullet list) were checked against the chapters by a checker who had not written the text.

**In this book you'll learn:**
- What happens to something you swallow, and what usually passes on its own
- Why a swallowed button battery is an emergency
- Why bones and metal show up white on an X-ray
- How gemologists tell a real diamond from a fake

**Title in other languages:**

| Language | Title | Status |
|---|---|---|
| Spanish (Latin American) | El diamante tragado | Used on the Spanish YouTube text and video files; no Spanish Kindle or print edition yet |
| German | Der verschluckte Diamant | Proposed for the website only; no German edition exists and you have not approved this title |
| French | Le Diamant avalé | Proposed for the website only; no French edition exists and you have not approved this title |
| Italian | Il diamante inghiottito | Proposed for the website only; no Italian edition exists and you have not approved this title |
| Japanese | none | No Japanese edition or title exists |

**Links:** none yet. English Kindle, paperback and hardcover files are built but no KDP link is recorded; the English video and the Spanish video files are built but no YouTube link is recorded.

**Pictures** (folder `Max Millhopper/Book 16 - The Swallowed Diamond/`; cover = English Kindle cover, 1600×2560):

- `Book 16 wide scene (i0036).jpg` — From the lighthouse gallery, Max, Katie, George and Nell Quill look out over the harbor and the whole town of Cortland Bay. (source `images/ch01/ch01_s036.jpg`)
- `Book 16 inside 1 (ch01 i0009).jpg` — Three pelicans sit on a fence as the three friends bike along the causeway toward the lighthouse. (source `images/ch01/ch01_s009.jpg`)
- `Book 16 inside 2 (ch02 i0066).jpg` — Max stands in the jewelry shop with his notebook while rainbow sparkles from the diamond dance over the walls. (source `images/ch02/ch02_s021.jpg`)
- `Book 16 inside 3 (ch03 i0092).jpg` — George, Max and Katie walk through the Strawberry Festival past food stalls, the striped tent and the Ferris wheel. (source `images/ch03/ch03_s003.jpg`)
- `Book 16 inside 4 (ch05 i0172).jpg` — Clementine the goat gallops happily down the aisle of the auction tent while the crowd gasps. (source `images/ch05/ch05_s001.jpg`)
- `Book 16 inside 5 (ch08 i0326).jpg` — Max, Katie and George crowd around Dr. Jo Stiles and her laptop at the back of her vet truck beside the petting-zoo pens. (source `images/ch08/ch08_s022.jpg`)
- `Book 16 inside 6 (ch10 i0389).jpg` — Aunt Mattie, George, Katie and Max walk along Harbor Street to the stairway up to the Hoot & Holler newspaper office. (source `images/ch10/ch10_s000.jpg`)

*Picture note:* Inside 2 is set inside the jeweler's shop, so the shop name on the window reads backwards (correct for a view from inside).

### Book 17 — Silent Springs

**Tagline:** A crystal-clear spring. A dive that went wrong.

**Back-cover blurb (fact-checked; no changes needed):**

> A green glass bottle washes up below Lantern Point with a note from a nine-year-old girl at Silent Springs: the spring is getting quieter every year, so please come and see it. Aunt Mattie drives Max, Katie and George inland to the clearest water they have ever seen.
>
> That morning a hydrologist dives fifty-eight feet down to bring up ten years of measurements about the spring's flow. He shoots back to the surface, confused, and collapses on the dock. The dive club's president says he panicked. His gauge says his tank was full.
>
> With a hospital's hyperbaric chamber, a dive computer's record and a nine-year-old witness, Max sets out to learn what really happened at fifty-eight feet, while George nurses a goldfish that floats upside down.

*Nothing changed from the printed back cover.*

*Check:* 39 separate claims (tagline, blurb, printed bullets and the longer YouTube bullet list) were checked against the chapters by a checker who had not written the text.

**In this book you'll learn:**
- Why air expands as a diver rises, and why divers never hold their breath
- The difference between an air embolism and the bends, and how a hyperbaric chamber treats them
- How Florida's springs work, and why manatees visit them in winter
- How fish use a swim bladder, and why a goldfish can float upside down and still be alive

**Title in other languages:**

| Language | Title | Status |
|---|---|---|
| Spanish (Latin American) | Manantiales silenciosos | Used on the Spanish YouTube text and video files; no Spanish Kindle or print edition yet |
| German | Stille Quellen | Proposed for the website only; no German edition exists and you have not approved this title |
| French | Sources silencieuses | Proposed for the website only; no French edition exists and you have not approved this title |
| Italian | Sorgenti silenziose | Proposed for the website only; no Italian edition exists and you have not approved this title |
| Japanese | none | No Japanese edition or title exists |

**Links:** none yet. English Kindle, paperback and hardcover files are built but no KDP link is recorded; the English video and the Spanish video files are built but no YouTube link is recorded.

**Pictures** (folder `Max Millhopper/Book 17 - Silent Springs/`; cover = English Kindle cover, 1600×2560):

- `Book 17 wide scene (i0063).jpg` — Hazel, Max, Katie and George stand under mossy oaks looking out over the clear turquoise basin of Silent Springs, with the boil in the middle and the dock at the side. (source `images/ch02/ch02_s024.jpg`)
- `Book 17 inside 1 (ch01 i0018).jpg` — At sunrise on the beach below the lighthouse, Max reads the note from the bottle to Katie and George as a pelican glides past. (source `images/ch01/ch01_s018.jpg`)
- `Book 17 inside 2 (ch02 i0072).jpg` — Hazel, Max, Katie and George lean over a wooden footbridge to watch Notch the manatee in the clear spring run. (source `images/ch02/ch02_s033.jpg`)
- `Book 17 inside 3 (ch03 i0117).jpg` — Katie and George watch from the dock as two scuba divers stride off the platform into the spring beside the dive flag. (source `images/ch03/ch03_s038.jpg`)
- `Book 17 inside 4 (ch04 i0128).jpg` — Underwater, a diver's gloved hands photograph a river turtle swimming over a limestone rock. (source `images/ch04/ch04_s009.jpg`)
- `Book 17 inside 5 (ch07 i0283).jpg` — Archimedes the goldfish peers out of his tank, which wears George's hand-lettered FISH ICU sign. (source `images/ch07/ch07_s035.jpg`)
- `Book 17 inside 6 (ch10 i0382).jpg` — The dive shop's big orange cat dozes like a loaf on top of the FILL LOG ledger. (source `images/ch10/ch10_s006.jpg`)

### Book 18 — Stand Still

**Tagline:** A girl who can't stand. A barn that's being framed.

**Back-cover blurb (fact-checked and corrected):**

> Nine-year-old Tilly Brennan rides her pony, Thimble, at Sweetgrass Stables. On Thursday her legs went wobbly. By Friday night she couldn't stand. She has no fever and she is as chatty as ever, but her reflexes are gone, and the weakness is climbing. The hospital fears Guillain-Barré syndrome. Her mother is sure the stable poisoned her.
>
> At Sweetgrass, the champion horse has gone lame, families are pulling their kids out, and the rich neighbor wants to buy the place. Then the horses' health papers go missing with a state inspection on the way.
>
> Max, Katie and George head out to the barn. Katie rides there every Saturday. George is terrified of horses, so he arrives in two helmets with a Tick Defense Kit and is assigned the sleepiest pony at Sweetgrass.

*What changed from the printed back cover, and why:*
- “the rich trainer next door” → “the rich neighbor”: the chapters never call him a trainer; he owns the equestrian center next door (ch. 2–3).
- “go missing just before a state inspection” → “go missing with a state inspection on the way”: the papers are found missing on the day the inspection is announced, about ten days ahead (ch. 9).
- Learn list: the printed second bullet was replaced with one from the longer YouTube list (taught in ch. 1), because the printed bullet points at the medical answer, which is the mystery of this book. The “Tick Defense Kit” joke in the blurb stays: it is a chapter 2 joke and does not give the answer by itself. If you would rather the website text never used that word, replace “with a Tick Defense Kit” with “with his long pants tucked into his socks” (also checked).

*Check:* 44 separate claims (tagline, blurb, printed bullets and the longer YouTube bullet list) were checked against the chapters by a checker who had not written the text.

**In this book you'll learn:**
- How doctors test reflexes, strength and feeling, and what Guillain-Barré syndrome is
- How nerves carry signals to muscles, and what a reflex is
- What a hoof abscess is, and why horse barns need a Coggins test
- Why wilted red maple leaves are dangerous to horses

**Title in other languages:**

| Language | Title | Status |
|---|---|---|
| Spanish (Latin American) | No te muevas | Used on the Spanish YouTube text and video files; no Spanish Kindle or print edition yet |
| German | Halt still | Proposed for the website only; no German edition exists and you have not approved this title |
| French | Ne bouge pas | Proposed for the website only; no French edition exists and you have not approved this title |
| Italian | Non ti muovere | Proposed for the website only; no Italian edition exists and you have not approved this title |
| Japanese | none | No Japanese edition or title exists |

**Links:** none yet. English Kindle, paperback and hardcover files are built but no KDP link is recorded; the English video and the Spanish video files are built but no YouTube link is recorded.

**Pictures** (folder `Max Millhopper/Book 18 - Stand Still/`; cover = English Kindle cover, 1600×2560):

- `Book 18 wide scene (i0053).jpg` — Sweetgrass Stables on a sunny afternoon: the long red barn with its tin roof, the white-railed riding arena and picnic tables under a huge live oak. (source `images/ch02/ch02_s008.jpg`)
- `Book 18 inside 1 (ch01 i0035).jpg` — Thimble the dapple-gray pony stands perfectly still beside the mounting block in the sandy arena, with the red barn behind her. (source `images/ch01/ch01_s035.jpg`)
- `Book 18 inside 2 (ch02 i0060).jpg` — In the barn aisle Max looks up at Domino, the big black-and-white paint horse with one blue eye and a row of blue ribbons on his stall door. (source `images/ch02/ch02_s015.jpg`)
- `Book 18 inside 3 (ch03 i0091).jpg` — Katie leans on the white boundary fence, scowling, in front of grand Hightower Equestrian Center with its clock tower, fountain and navy horse trailers. (source `images/ch03/ch03_s002.jpg`)
- `Book 18 inside 4 (ch04 i0133).jpg` — Locker clean-out on the last week of school: George mourns an old permission slip, Katie holds up a lost sneaker and Max recoils from an ancient sandwich. (source `images/ch04/ch04_s001.jpg`)
- `Book 18 inside 5 (ch09 i0370).jpg` — Marcus Kraut lets out an enormous sneeze in the hospital lobby, papers flying, while Katie and George jump back. (source `images/ch09/ch09_s030.jpg`)
- `Book 18 inside 6 (ch10 i0398).jpg` — Opal Duvall, in her battered straw hat, holds up the three staplers she has just found in her messy stable office. (source `images/ch10/ch10_s014.jpg`)

*Picture note:* None of the seven pictures shows a tick, Tilly's braid or anyone searching a mane, so the medical answer stays hidden. (The cover itself shows Max looking into the pony's mane.)

### Book 19 — Red Tide

**Tagline:** A beach full of dead fish. A clam with a perfect tag.

**Back-cover blurb (fact-checked and corrected):**

> Dead fish are washing up on the beach at Cortland Bay, and everyone on the pier is coughing. It's a red tide. The state has closed the shellfish beds, and George evacuates his goldfish to the library, just in case.
>
> Then seven-year-old Toby Fairbanks can't walk straight. His lips feel fizzy, his parents are dizzy and tingly, and his dad says his ice water is hot. The family ate clams, but the seafood market swears they came from a clean clam farm up the coast, and every bag has the official tag to prove it.
>
> Twelve-year-old Max Millhopper, Katie and George start asking questions, while old Nell Quill at the bait shack talks about ghost lights bobbing on the dark flats below the lighthouse.

*What changed from the printed back cover, and why:*
- “The state closes the shellfish beds” → “The state has closed the shellfish beds”: in the book the beds were closed more than a week before the fish kill and the coughing on the pier (ch. 1, 2, 5).

*Check:* 37 separate claims (tagline, blurb, printed bullets and the longer YouTube bullet list) were checked against the chapters by a checker who had not written the text.

**In this book you'll learn:**
- What a red tide is, and why it makes people cough on the beach
- Why red tide kills fish but not the clams that soak up its toxin
- How doctors recognize shellfish poisoning, and why cooking doesn't help
- How shellfish tags and closures keep store-bought clams safe

**Title in other languages:**

| Language | Title | Status |
|---|---|---|
| Spanish (Latin American) | Marea roja | Used on the Spanish YouTube text and video files; no Spanish Kindle or print edition yet |
| German | Rote Flut | Proposed for the website only; no German edition exists and you have not approved this title |
| French | Marée rouge | Proposed for the website only; no French edition exists and you have not approved this title |
| Italian | Marea rossa | Proposed for the website only; no Italian edition exists and you have not approved this title |
| Japanese | none | No Japanese edition or title exists |

**Links:** none yet. English Kindle, paperback and hardcover files are built but no KDP link is recorded; the English video and the Spanish video files are built but no YouTube link is recorded.

**Pictures** (folder `Max Millhopper/Book 19 - Red Tide/`; cover = English Kindle cover, 1600×2560):

- `Book 19 wide scene (i0266).jpg` — Officer Winslow, Max, Katie and George stand on the rocks looking out over the Lantern Point tidal flats at low tide, with herons, the causeway and the black-and-white lighthouse behind. (source `images/ch07/ch07_s007.jpg`)
- `Book 19 inside 1 (ch01 i0031).jpg` — George tiptoes along the Cortland Bay Pier at sunset in swim goggles and a face mask, hugging his home-made Pier Air Monitor. (source `images/ch01/ch01_s031.jpg`)
- `Book 19 inside 2 (ch02 i0070).jpg` — Dr. Tanabe shows Max, Katie and George a loggerhead sea turtle swimming in a rehab tank behind the Gulfwatch Marine Lab. (source `images/ch02/ch02_s025.jpg`)
- `Book 19 inside 3 (ch04 i0137).jpg` — Max, Katie and George hurry through the blue door of Tibbs' Fresh Catch on Harbor Street as the brass bell rings. (source `images/ch04/ch04_s004.jpg`)
- `Book 19 inside 4 (ch06 i0225).jpg` — Nell Quill sits on a stool behind the counter of her bait shack, with shrimp tanks beside her and the lighthouse visible through the screen door. (source `images/ch06/ch06_s006.jpg`)
- `Book 19 inside 5 (ch09 i0379).jpg` — Toby tugs with all his might on the leash while Sherlock the bloodhound lies flat on the lawn and Max and Katie laugh. (source `images/ch09/ch09_s033.jpg`)
- `Book 19 inside 6 (ch10 i0424).jpg` — Max perches on a stool at the counter of Mattie's Bookstore in the evening, talking to Aunt Mattie as she counts the till. (source `images/ch10/ch10_s034.jpg`)

### Book 20 — Smoke and Salt

**Tagline:** A six-year-old turning blue. An oxygen level that won't go up.

**Back-cover blurb (fact-checked and corrected):**

> It's the Smokeout, Cortland Bay's barbecue cook-off, and Hattie Hollowell's famous beans have won the People's Choice three years running. That night six-year-old Lulu Montalvo arrives at the ER with gray-blue lips. The doctors turn her oxygen all the way up, and her oxygen level won't go up.
>
> Two more people who ate at the same stand turn gray too, and one of them is the town's reporter, Marcus Kraut. Lulu's blood is the color of chocolate milk. The stand is shut down, and the whole town decides that Hattie mixed up her pink salt.
>
> Twelve-year-old Max Millhopper, Katie and George build a timeline of who ate what, and when, while George, newly appointed a junior judge, refuses to taste anything without a written list of ingredients.

*What changed from the printed back cover, and why:*
- “the Father's Day Smokeout” → “the Smokeout”: the chapters only ever call it the Smokeout, and Lulu falls ill on its opening Saturday, eight days before Father's Day. (The banner in the art does read FATHER'S DAY SMOKEOUT.)
- “Their blood is the color of chocolate milk” → “Lulu's blood…”: only Lulu's blood is drawn and described (ch. 1–2).

*Check:* 35 separate claims (tagline, blurb, printed bullets and the longer YouTube bullet list) were checked against the chapters by a checker who had not written the text.

**In this book you'll learn:**
- How hemoglobin carries oxygen, and why extra oxygen can't help when it's been changed
- Why the blood turned chocolate brown, and how a blue medicine turns gray lips pink again
- Why curing salt is colored, and why it isn't the same as Himalayan pink salt
- What makes the pink smoke ring in barbecue, and how health detectives trace a food poisoning

**Title in other languages:**

| Language | Title | Status |
|---|---|---|
| Spanish (Latin American) | Humo y sal | Used on the Spanish YouTube text and video files; no Spanish Kindle or print edition yet |
| German | Rauch und Salz | Proposed for the website only; no German edition exists and you have not approved this title |
| French | Fumée et sel | Proposed for the website only; no French edition exists and you have not approved this title |
| Italian | Fumo e sale | Proposed for the website only; no Italian edition exists and you have not approved this title |
| Japanese | none | No Japanese edition or title exists |

**Links:** none yet. English Kindle, paperback and hardcover files are built but no KDP link is recorded; the English video and the Spanish video files are built but no YouTube link is recorded.

**Pictures** (folder `Max Millhopper/Book 20 - Smoke and Salt/`; cover = English Kindle cover, 1600×2560):

- `Book 20 wide scene (i0120).jpg` — Founders' Square on a hazy Sunday morning: the Doc Tarrant statue, a row of white cook-off canopies under the Father's Day Smokeout banner, the gazebo, and Max, Katie and George walking across the brick paving. (source `images/ch04/ch04_s000.jpg`)
- `Book 20 inside 1 (ch01 i0015).jpg` — Pitmaster Theo Hollowell proudly shows Max a board of sliced smoked sausage at the Hattie's Hollow BBQ stand while Max takes notes. (source `images/ch01/ch01_s015.jpg`)
- `Book 20 inside 2 (ch03 i0115).jpg` — George, on the phone in his kitchen at night, stares in alarm at his own stretched reflection in the toaster. (source `images/ch03/ch03_s034.jpg`)
- `Book 20 inside 3 (ch06 i0231).jpg` — Marcus Kraut waits outside an apartment building holding a big silver hippo balloon as Max, Katie and George walk up. (source `images/ch06/ch06_s028.jpg`)
- `Book 20 inside 4 (ch07 i0272).jpg` — In Mattie's Bookstore, giant pitmaster Mitch Danvers holds up a slice of brisket with a hand on his heart while Earl Sandoval folds his arms and Max watches from the counter. (source `images/ch07/ch07_s026.jpg`)
- `Book 20 inside 5 (ch08 i0290).jpg` — Aunt Mattie drives Max, Katie and George in her pale-blue car past the courthouse toward the County Health Department. (source `images/ch08/ch08_s000.jpg`)
- `Book 20 inside 6 (ch09 i0356).jpg` — Max, Katie and George sit in a quiet row on the front step of a white porch at dusk, under a mossy oak. (source `images/ch09/ch09_s022.jpg`)

## Merlin's Knight School™ — Books 2–20

### Book 2 — The Bog of Bad Ideas

**Tagline:** Six squires. One bog. Too many lights.

**Back-cover blurb (fact-checked and corrected):**

> The morning after Wickerbridge, Merlin sends his six leftover squires on a simple errand: pick a little Moonpetal Moss at the edge of the Marrow Bog. Don't trust every light you see.
>
> By nightfall they are lost, split up and face to face with a very grumpy Bog Guardian, while the village of Mossbury blames the wandering lights, and the 'Bog Troll', for every cart that sinks off the old causeway.
>
> The 'Wisp-Warden of the Fen' plans a torch-lit hunt for the full moon. Kay has one day to work out which lights really lead people astray, and why.

*What changed from the printed back cover, and why:*
- “A famous Wisp-Warden” → “The 'Wisp-Warden of the Fen'”: the book never calls him famous; that is the title he gives himself (ch. 11).

*Check:* 26 separate claims (tagline, blurb, printed bullets and the longer YouTube bullet list) were checked against the chapters by a checker who had not written the text.

**In this book you'll learn:**
- Together isn't the same as because
- How to run a fair test
- Why stories grow every time they're told
- A good theory predicts

**Title in other languages** (approved titles, as printed on the editions):

| Spanish (Latin American) | German | French | Italian | Japanese |
|---|---|---|---|---|
| El pantano de las malas ideas | Der Sumpf der schlechten Ideen | Le Marais des mauvaises idées | La palude delle cattive idee | none (no Japanese edition) |

**Links:** none yet. Kindle, paperback and hardcover files are built in English, Spanish, German, French and Italian, but no KDP link is recorded; the English video is built but no YouTube link is recorded.

**Pictures** (folder `Merlin's Knight School/Book 02 - The Bog of Bad Ideas/`; cover = English Kindle cover, 1600×2560):

- `Book 02 wide scene (i0021).jpg` — Seen from behind, the six squires and their animal companions stand at the forest edge looking out over the flat Marrow Bog, with the old stone causeway running straight across the water. (source `images/ch02/ch02_s021.jpg`)
- `Book 02 inside 1 (ch01 i0032).jpg` — Merlin holds up a glowing vial in his potions classroom while the six squires crowd round the workbench and Admiral the duck sits on a stool. (source `images/ch01/ch01_s032.jpg`)
- `Book 02 inside 2 (ch02 i0043).jpg` — On the causeway at sunset all six squires blow their new whistles at once, Tusk the boar howls along and a startled heron flaps away. (source `images/ch02/ch02_s043.jpg`)
- `Book 02 inside 3 (ch03 i0024).jpg` — Percival kneels on the foggy causeway hugging his rabbit and smiling at a little blue will-o'-wisp, while Gwen watches with folded arms. (source `images/ch03/ch03_s024.jpg`)
- `Book 02 inside 4 (ch05 i0029).jpg` — Kay stares wide-eyed at the corked jar in his hands, which glows bright blue with a smiling wisp and a brass button inside. (source `images/ch05/ch05_s029.jpg`)
- `Book 02 inside 5 (ch06 i0014).jpg` — At sunset Kay stands on a patch of moss facing the big mossy Bog Guardian, who sits in the reeds wearing a clay pot for a hat. (source `images/ch06/ch06_s014.jpg`)
- `Book 02 inside 6 (ch07 i0040).jpg` — Muddy and laughing, Kay, Gawain, Lance, Gwen and Percival sit round a chair-shaped tree stump at night with blue wisps bobbing around them. (source `images/ch07/ch07_s040.jpg`)

### Book 3 — Something's Missing

**Tagline:** Six squires. One empty cushion. A library that knows when you lie.

**Back-cover blurb (fact-checked and corrected):**

> For three hundred years the Founder’s Seal has sat on a velvet cushion in the Restricted Archive. Now there is only the cushion, a key is missing from the Dean’s ring, and a black bird was seen at a window.
>
> The Dean already knows who to blame: the Leftovers. With Founder’s Day two days away, Kay, Lance, Gawain, Percival, Gwen and Morgan sneak into the Archive at night to clear their names, and meet its guardian, who can always tell a lie.
>
> Nothing in the Archive is quite what it seems, and the Seal must be back on its dais by dawn on Founder’s Day.

*What changed from the printed back cover, and why:*
- “a black bird was seen at his window” → “at a window”: chapter 3 says “a window”; it is not the Dean's.
- The last sentence was reworded because it pointed toward the solution; the new ending (the Founder's Day deadline) is from chapter 3.
- Learn list: the printed fourth bullet gave away the twist; replaced with a line the book teaches in chapter 20.

*Check:* 28 separate claims (tagline, blurb, printed bullets and the longer YouTube bullet list) were checked against the chapters by a checker who had not written the text.

**In this book you'll learn:**
- What didn’t happen is evidence too
- An idea isn’t truer because of who says it
- Building a timeline
- The truth counts most when it costs you

**Title in other languages** (approved titles, as printed on the editions):

| Spanish (Latin American) | German | French | Italian | Japanese |
|---|---|---|---|---|
| Algo falta | Etwas fehlt | Quelque chose a disparu | Manca qualcosa | none (no Japanese edition) |

**Links:** none yet. Kindle, paperback and hardcover files are built in English, Spanish, German, French and Italian, but no KDP link is recorded; the English video is built but no YouTube link is recorded.

**Pictures** (folder `Merlin's Knight School/Book 03 - Something's Missing/`; cover = English Kindle cover, 1600×2560):

- `Book 03 wide scene (i0000).jpg` — Kay stands small at the door of the vast Restricted Archive, shelves, spiral stairs and floating candle-orbs rising all round the roped-off glass case in the middle. (source `images/ch02/ch02_s000.jpg`)
- `Book 03 inside 1 (ch01 i0040).jpg` — Tusk the boar cheerfully chews the hem of old porter Hodge's coat while Hodge stares down at him over his open log book. (source `images/ch01/ch01_s040.jpg`)
- `Book 03 inside 2 (ch03 i0002).jpg` — Merlin and the six squires with all their animal companions stand round the empty glass case as Dean Voran, seen from behind, looks them over. (source `images/ch03/ch03_s002.jpg`)
- `Book 03 inside 3 (ch05 i0009).jpg` — Under the kitchen table the hound, the fox and the rabbit doze in a pile while Tusk trots off toward the pantry. (source `images/ch05/ch05_s009.jpg`)
- `Book 03 inside 4 (ch07 i0031).jpg` — Outside the north tower in the afternoon sun Kay spins round and nearly falls over Tusk while the other five squires look on. (source `images/ch07/ch07_s031.jpg`)
- `Book 03 inside 5 (ch08 i0018).jpg` — At dusk in the Leftover Yard the six squires sit round the map board planning, a swallow crossing the purple sky. (source `images/ch08/ch08_s018.jpg`)
- `Book 03 inside 6 (ch10 i0028).jpg` — In the moonlit Archive Lance stands with his face and hands dyed bright blue while the other five stare at him. (source `images/ch10/ch10_s028.jpg`)

### Book 4 — The Maze Doesn't Care About Your Plan

**Tagline:** Six squires. One maze. A sphinx who loves a stumper.

**Back-cover blurb (fact-checked and corrected):**

> This year the Hedge Maze trial decides who goes to the Tournament, and for the first time the Leftovers are allowed to compete. Gwen has a forty-one-page plan. The maze ignores every page of it.
>
> Inside, the hedges move, a theatrical Maze Sphinx asks riddles at every turn, the groundskeeper has been ‘staying’ in the middle for six days, and the Golden Cohort keeps finishing in a time nobody has managed in fifty years.
>
> Kay is sure Cassian is cheating. Proving how anyone finishes that fast will take every page Gwen got wrong.

*What changed from the printed back cover, and why:*
- The last sentence was reworded because it hinted at who is and is not guilty.
- Learn list: the printed third bullet did the same; replaced with one shortened from the longer YouTube list (ch. 12).

*Check:* 27 separate claims (tagline, blurb, printed bullets and the longer YouTube bullet list) were checked against the chapters by a checker who had not written the text.

**In this book you'll learn:**
- A map is not the territory
- Look for the pattern in the surprises
- Too good to be true needs explaining
- Check it twice

**Title in other languages** (approved titles, as printed on the editions):

| Spanish (Latin American) | German | French | Italian | Japanese |
|---|---|---|---|---|
| Al laberinto no le importa tu plan | Dem Labyrinth ist dein Plan egal | Le labyrinthe se moque de ton plan | Al labirinto non importa il tuo piano | none (no Japanese edition) |

**Links:** none yet. Kindle, paperback and hardcover files are built in English, Spanish, German, French and Italian, but no KDP link is recorded; the English video is built but no YouTube link is recorded.

**Pictures** (folder `Merlin's Knight School/Book 04 - The Maze Doesn't Care About Your Plan/`; cover = English Kindle cover, 1600×2560):

- `Book 04 wide scene (i0009).jpg` — The round hedge maze seen from the hillside above, its two stone gate arches in the low wall and the fountain at its centre, with green fields rolling away behind. (source `images/ch02/ch02_s009.jpg`)
- `Book 04 inside 1 (ch01 i0016).jpg` — The six squires and their animal companions gathered in the sunny Leftover Yard among Gwen's scattered plan pages. (source `images/ch01/ch01_s016.jpg`)
- `Book 04 inside 2 (ch03 i0022).jpg` — The six squires stand at the knotwork West Gate of the maze, looking back up the green hill at the castle. (source `images/ch03/ch03_s022.jpg`)
- `Book 04 inside 3 (ch06 i0025).jpg` — Quibble the little winged Maze Sphinx sits grinning on the stone stag's plinth while the six squires, seen from behind, listen to its riddle. (source `images/ch06/ch06_s025.jpg`)
- `Book 04 inside 4 (ch07 i0005).jpg` — A wall of hedge slides across the junction, splitting the startled squires into two groups as leaves fly and Gawain's hawk flaps overhead. (source `images/ch07/ch07_s005.jpg`)
- `Book 04 inside 5 (ch08 i0010).jpg` — Tusk stands nose to nose with a mossy stone boar statue while Kay and Lance look on, amused. (source `images/ch08/ch08_s010.jpg`)
- `Book 04 inside 6 (ch10 i0011).jpg` — In the sunny centre courtyard Admiral the duck sits on top of the fountain while Gwen and Kay look up at him and Tusk drinks from the basin. (source `images/ch10/ch10_s011.jpg`)

*Picture note:* The wide scene is a view of the whole maze with no characters in it.

### Book 5 — The Griffon Who Wouldn't Fly

**Tagline:** Six squires. One very big bird. And the hardest job of all: waiting.

**Back-cover blurb (fact-checked; no changes needed):**

> Merlin’s “nice, calm” rescue drill at the foot of the Aerie Cliffs turns real when a griffon chick starts crying on a ledge high above. Gawain charges straight up the cliff, and the chick’s enormous mother blows him into a juniper bush.
>
> Now the King’s Master of the Tournament Beasts says the griffon is dangerous and will be taken in hand at dawn, chick and all. The mother hasn’t flown in five days, and the stone pinning the chick’s wing has no business being on a red cliff.
>
> To save them, the strongest of the six will have to do the one thing he has never been good at: wait.

*Nothing changed from the printed back cover.*

*Check:* 26 separate claims (tagline, blurb, printed bullets and the longer YouTube bullet list) were checked against the chapters by a checker who had not written the text.

**In this book you'll learn:**
- Ask what it’s trying to do
- Ask where it came from
- “Could have” isn’t “did”
- A small push at the right time

**Title in other languages** (approved titles, as printed on the editions):

| Spanish (Latin American) | German | French | Italian | Japanese |
|---|---|---|---|---|
| El grifo que no quería volar | Der Greif, der nicht fliegen wollte | Le Griffon qui ne voulait pas voler | Il grifone che non voleva volare | none (no Japanese edition) |

**Links:** none yet. Kindle, paperback and hardcover files are built in English, Spanish, German, French and Italian, but no KDP link is recorded; the English video is built but no YouTube link is recorded.

**Pictures** (folder `Merlin's Knight School/Book 05 - The Griffon Who Wouldn't Fly/`; cover = English Kindle cover, 1600×2560):

- `Book 05 wide scene (i0017).jpg` — The six squires, seen from behind, stand on the red sandstone trail at the Notch, where a short rope-and-plank bridge crosses the gap with the wide green valley beyond. (source `images/ch03/ch03_s017.jpg`)
- `Book 05 inside 1 (ch01 i0029).jpg` — In the Leftover Yard Merlin holds up a golden feather as long as a sword while Kay and Morgan, her raven on her arm, stare at it. (source `images/ch01/ch01_s029.jpg`)
- `Book 05 inside 2 (ch04 i0037).jpg` — The griffon mother stands with her wings spread on the high nesting ledge beside her nest, under the overhang and the twisted pine. (source `images/ch04/ch04_s037.jpg`)
- `Book 05 inside 3 (ch05 i0017).jpg` — A wide-eyed mountain hare beside a wind-bent pine watches Gawain slide past down the red scree slope. (source `images/ch05/ch05_s017.jpg`)
- `Book 05 inside 4 (ch06 i0033).jpg` — Merlin sits on the edge of the practice ledge eating an apple beside Sir Sackwell the burlap rescue dummy, with Admiral the duck perched on the dummy's head. (source `images/ch06/ch06_s033.jpg`)
- `Book 05 inside 5 (ch07 i0000).jpg` — The six squires and all their animal companions walk onto Windle green beside the beck and its stone footbridge, the red cliffs rising behind the cottages. (source `images/ch07/ch07_s000.jpg`)
- `Book 05 inside 6 (ch08 i0022).jpg` — Kay holds a brass spyglass while Morgan's raven leans greedily toward it and Morgan raises a warning finger. (source `images/ch08/ch08_s022.jpg`)

### Book 6 — The Practice Knight Walks at Night

**Tagline:** Six squires. One very big knight. And it has somewhere to be.

**Back-cover blurb (fact-checked and corrected):**

> The school’s brand-new practice knight has been walking at night, and its giant footprints lead right to the Leftover Yard gate.
>
> At the joint drill with the Golden Cohort, Cassian turns it up to “tournament difficulty,” it goes wild, and Lance, who has always believed the best do it alone, charges it alone. Now the knight’s maker says someone tampered with his masterpiece, and the Leftovers’ Tournament hopes hang on the Herald’s inspection.
>
> Kay is sure he knows who’s walking the knight. But why do its footprints cross the squires’ own yard, and where does it go at midnight?

*What changed from the printed back cover, and why:*
- “its giant footprints end right at the Leftover Yard gate” → “lead right to”: in the chapters the trail does not stop at the gate (ch. 2, 8).
- “Tournament places” → “Tournament hopes”: the printed word shows how Book 4's trial came out.
- The last paragraph was reworded because its last three sentences gave away part of the solution; the two questions that replace them are from the early chapters.

*Check:* 30 separate claims (tagline, blurb, printed bullets and the longer YouTube bullet list) were checked against the chapters by a checker who had not written the text.

**In this book you'll learn:**
- Ask where it’s going
- One cause, many symptoms
- Test it against the real thing
- Find the rhythm

**Title in other languages** (approved titles, as printed on the editions):

| Spanish (Latin American) | German | French | Italian | Japanese |
|---|---|---|---|---|
| El caballero de prácticas camina de noche | Der Übungsritter geht nachts um | Le chevalier d’entraînement marche la nuit | Il cavaliere d’allenamento cammina di notte | none (no Japanese edition) |

**Links:** none yet. Kindle, paperback and hardcover files are built in English, Spanish, German, French and Italian, but no KDP link is recorded; the English video is built but no YouTube link is recorded.

**Pictures** (folder `Merlin's Knight School/Book 06 - The Practice Knight Walks at Night/`; cover = English Kindle cover, 1600×2560):

- `Book 06 wide scene (i0033).jpg` — The Tournament field on a sunny morning below the gray castle on its green hill: the granite stands with blue-and-gold banners, the long list, and the patched Leftover tent facing the white-and-gold Golden Cohort tent. (source `images/ch01/ch01_s033.jpg`)
- `Book 06 inside 1 (ch02 i0040).jpg` — Nan Pottle stands in the kitchen doorway with her wooden spoon, glaring at her squashed-flat bucket, while Kay tiptoes away across the Leftover Yard. (source `images/ch02/ch02_s040.jpg`)
- `Book 06 inside 2 (ch04 i0043).jpg` — Merlin sits on the bench with Admiral the duck as judge, Tusk sleeps happily in the straw of a dummy he has eaten, and the padded practice knight stands by with its crystal glowing blue. (source `images/ch04/ch04_s043.jpg`)
- `Book 06 inside 3 (ch05 i0040).jpg` — Kay shouts with delight as the runaway practice knight staggers out of the Golden Cohort's tent with white canvas on its helmet like a bonnet, tent pegs flying. (source `images/ch05/ch05_s040.jpg`)
- `Book 06 inside 4 (ch07 i0026).jpg` — Lance and Cassian of the Golden Cohort lie laughing together in a heap of straw on the wrecked practice corner. (source `images/ch07/ch07_s026.jpg`)
- `Book 06 inside 5 (ch08 i0038).jpg` — Supper in the big school kitchen: the six squires round the long table with bowls of stew while Nan Pottle ladles more from the pot. (source `images/ch08/ch08_s038.jpg`)
- `Book 06 inside 6 (ch10 i0000).jpg` — Under a full moon the practice knight climbs the slope toward the dark castle, leaving big square footprints, while the six squires creep after it in a crouching line. (source `images/ch10/ch10_s000.jpg`)

### Book 7 — Something in the Lake

**Tagline:** Six squires. One very big secret. And a lake full of quick fixes.

**Back-cover blurb (fact-checked and corrected):**

> Merlin calls it a simple errand: a fishing village by a lake, where the nets keep vanishing, and some come back neatly mended.
>
> Kay brings a boatful of gadgets nobody asked for. By sunset an enormous lake serpent has surfaced, his net launcher has fired backward, both boats have gone over, and the six are stranded on a reed island for the night. Every quick fix Kay tries makes things worse.
>
> In Lakemere the talk is of a monster. But the nets from near the island come back with their threads pulled out, while the deep nets on the south shore come home as bare cork lines, and someone wants to buy every boat in Lakemere before the village meets at dawn on the third day.

*What changed from the printed back cover, and why:*
- Paragraph 2: the order of events is fixed (the serpent surfaces in ch. 5, before the net launcher misfires in ch. 6), and “both boats are upside down” → “both boats have gone over” (only one ends keel-up).
- Paragraph 3 was rewritten from chapter facts: the printed one gave away part of the solution, and it put the cut nets on “the far side of the lake” (the book says the south shore, below the village).

*Check:* 43 separate claims (tagline, blurb, printed bullets and the longer YouTube bullet list) were checked against the chapters by a checker who had not written the text.

**In this book you'll learn:**
- Two causes can look like one
- Put it on a map
- Stop and plan before you fix
- Measure, don’t repeat

**Title in other languages** (approved titles, as printed on the editions):

| Spanish (Latin American) | German | French | Italian | Japanese |
|---|---|---|---|---|
| Algo en el lago | Etwas im See | Quelque chose dans le lac | Qualcosa nel lago | none (no Japanese edition) |

**Links:** none yet. Kindle, paperback and hardcover files are built in English, Spanish, German, French and Italian, but no KDP link is recorded; the English video is built but no YouTube link is recorded.

**Pictures** (folder `Merlin's Knight School/Book 07 - Something in the Lake/`; cover = English Kindle cover, 1600×2560):

- `Book 07 wide scene (i0019).jpg` — The fishing village of Lakemere seen from the slope above: thatched cottages, three wooden jetties, nets drying on posts, the stone chapel, and the little reed island out on the calm blue lake. (source `images/ch02/ch02_s019.jpg`)
- `Book 07 inside 1 (ch01 i0033).jpg` — In the sunny Leftover Yard Merlin reads out the letter to the six squires while Kay, on a barrel, keeps tinkering with his net launcher. (source `images/ch01/ch01_s033.jpg`)
- `Book 07 inside 2 (ch03 i0040).jpg` — On the jetty little Minnow in her big yellow oilskin tugs Kay's sleeve and points out across the lake, the village behind them. (source `images/ch03/ch03_s040.jpg`)
- `Book 07 inside 3 (ch04 i0034).jpg` — Out on the lake in the two rowboats, Kay cheers as his launcher throws a net in a wide arc over a floating log. (source `images/ch04/ch04_s034.jpg`)
- `Book 07 inside 4 (ch05 i0037).jpg` — At sunset the great blue-green lake serpent rises calmly beside the reed island while the six squires watch from the blue and the red rowboat. (source `images/ch05/ch05_s037.jpg`)
- `Book 07 inside 5 (ch06 i0032).jpg` — Lance stands shoulder-deep in the lake shouting through cupped hands, his soaked fox sitting on his head and the red boat tipped over behind him. (source `images/ch06/ch06_s032.jpg`)
- `Book 07 inside 6 (ch07 i0039).jpg` — Night on the island's shingle beach: the six squires and their animals sit in a row under the half moon, sharing a loaf. (source `images/ch07/ch07_s039.jpg`)

### Book 8 — The Knight Who Kept Watch

**Tagline:** Six squires. One very old knight. And a question nobody has asked in four hundred years.

**Back-cover blurb (fact-checked and corrected):**

> Merlin is carrying a secret, and he’s carrying it alone. When he drops a page in very old handwriting, the six follow its map across the moor to a ruined watchtower on a lonely hill.
>
> In the crypt beneath it they meet Sir Aldric, a ghost knight who has kept watch for four hundred years. He won’t answer their questions. And somebody has been digging in his crypt at night.
>
> Kay is sure he knows who. But the answer won’t come from asking harder. It will come from the one thing none of them is good at: being quiet long enough to listen.

*What changed from the printed back cover, and why:*
- “He's wrong.” was removed: it tells the reader Kay's suspect is innocent, which the book holds back until late.

*Check:* 42 separate claims (tagline, blurb, printed bullets and the longer YouTube bullet list) were checked against the chapters by a checker who had not written the text.

**In this book you'll learn:**
- Listen first
- Rule out what can’t be true
- A light can be a message
- Old books can be wrong

**Title in other languages** (approved titles, as printed on the editions):

| Spanish (Latin American) | German | French | Italian | Japanese |
|---|---|---|---|---|
| El caballero que montaba guardia | Der Ritter, der Wache hielt | Le chevalier qui montait la garde | Il cavaliere che faceva la guardia | none (no Japanese edition) |

**Links:** none yet. Kindle, paperback and hardcover files are built in English, Spanish, German, French and Italian, but no KDP link is recorded; the English video is built but no YouTube link is recorded.

**Pictures** (folder `Merlin's Knight School/Book 08 - The Knight Who Kept Watch/`; cover = English Kindle cover, 1600×2560):

- `Book 08 wide scene (i0018).jpg` — At sunset the six squires step out of the beech woods and look across the purple heather moor to the Leaning Stone and the white track climbing to the ruined watchtower on the far hill. (source `images/ch04/ch04_s018.jpg`)
- `Book 08 inside 1 (ch01 i0022).jpg` — Merlin hurries across the Leftover Yard behind a tall pile of old books, Admiral the duck waddling after him and a hen flapping out of the way, as the six squires watch. (source `images/ch01/ch01_s022.jpg`)
- `Book 08 inside 2 (ch03 i0011).jpg` — In the Restricted Archive Kay, hand on heart with Tusk hiding behind his legs, assures the tall book-golem Archivist that he is reformed. (source `images/ch03/ch03_s011.jpg`)
- `Book 08 inside 3 (ch04 i0013).jpg` — Percival, Morgan and Lance cross the stepping stones of the stream in the beech woods below the castle while Tusk splashes straight through the water. (source `images/ch04/ch04_s013.jpg`)
- `Book 08 inside 4 (ch05 i0024).jpg` — At night at the ivy-covered tower doorway Kay, lantern in hand, starts in surprise at Admiral the duck sitting calmly on the step. (source `images/ch05/ch05_s024.jpg`)
- `Book 08 inside 5 (ch07 i0038).jpg` — In the lantern-lit crypt the six squires stand round the stone tomb as the gentle, glowing ghost of Sir Aldric floats above it with Morgan's raven on his shoulder. (source `images/ch07/ch07_s038.jpg`)
- `Book 08 inside 6 (ch10 i0006).jpg` — At the porter's niche the six squires crowd round Hodge's open log book, their six animals lined up in front, while old Hodge dozes on his stool. (source `images/ch10/ch10_s006.jpg`)

### Book 9 — Touch Nothing Without Asking

**Tagline:** Six squires. Forty kobolds. And a tunnel full of traps.

**Back-cover blurb (fact-checked and corrected):**

> The King’s Tournament Cup comes to the school for safekeeping, and on its very first night it vanishes from a locked cabinet. In the spilled flour: tiny clawed footprints.
>
> That morning a cheerful rat-catcher is at the gate, offering to clear out whatever lives under the hill. Kay is sure the kobolds took the Cup. He goes down into the Hollow Warrens fast, with a gadget for every problem, and sets off one trap after another.
>
> But why do the prints in the flour go to the cabinet and never come back? Something very old is shifting deep below the kobolds’ tunnels. And the only one who can lead Kay safely to the bottom has one rule for visitors.

*What changed from the printed back cover, and why:*
- “By breakfast” → “That morning”: no breakfast in the chapters (ch. 5).
- “sets off every trap in the place” → “sets off one trap after another”: he sets off five (ch. 10); many more are left.
- The first sentence of paragraph 3 was replaced with a question from chapter 4, because the printed sentence gave away part of the solution.
- Learn list: the printed second bullet pointed at a key clue; replaced with Percival's line from chapter 10.

*Check:* 40 separate claims (tagline, blurb, printed bullets and the longer YouTube bullet list) were checked against the chapters by a checker who had not written the text.

**In this book you'll learn:**
- Ask how it works before you touch it
- Fast and clever are not always the same speed
- Notice who knows too much
- Check if it even fits

**Title in other languages** (approved titles, as printed on the editions):

| Spanish (Latin American) | German | French | Italian | Japanese |
|---|---|---|---|---|
| No toques nada sin preguntar | Fass nichts an, ohne zu fragen | Ne touche à rien sans demander | Non toccare niente senza chiedere | none (no Japanese edition) |

**Links:** none yet. Kindle, paperback and hardcover files are built in English, Spanish, German, French and Italian, but no KDP link is recorded; the English video is built but no YouTube link is recorded.

**Pictures** (folder `Merlin's Knight School/Book 09 - Touch Nothing Without Asking/`; cover = English Kindle cover, 1600×2560):

- `Book 09 wide scene (i0015).jpg` — The vast, half-dead Hollow Oak on top of round green Hollow Hill, the hillside dotted with small kobold holes, under a blue sky (no characters). (source `images/ch07/ch07_s015.jpg`)
- `Book 09 inside 1 (ch01 i0026).jpg` — Merlin strolls humming into the Leftover Yard at dawn with a kettle and folding stools, Admiral the duck waddling behind him. (source `images/ch01/ch01_s026.jpg`)
- `Book 09 inside 2 (ch02 i0035).jpg` — Admiral the duck sits unimpressed under one of Kay's nets in the Leftover Yard (source `images/ch02/ch02_s035.jpg`)
- `Book 09 inside 3 (ch03 i0002).jpg` — The six squires eat supper at the long table in the firelit school kitchen under the copper pans, their six animal companions lined up in front. (source `images/ch03/ch03_s002.jpg`)
- `Book 09 inside 4 (ch06 i0042).jpg` — The six squires and their companions set out through the castle's west gate with lanterns, Kay holding up his bell-on-a-pole trap-finder. (source `images/ch06/ch06_s042.jpg`)
- `Book 09 inside 5 (ch09 i0036).jpg` — Underground in the Warrens, the six squires (Kay dyed bright blue) stand with their hands raised while a crowd of small patchwork-clad kobolds stares up at them. (source `images/ch09/ch09_s036.jpg`)
- `Book 09 inside 6 (ch10 i0024).jpg` — In the trinket-hung Great Burrow, the kobold chieftain Nib in his patchwork cloak has a staring contest with Admiral the duck, who is sitting on Nib's cart-wheel throne. (source `images/ch10/ch10_s024.jpg`)

*Picture note:* The wide scene (Hollow Hill) has no characters in it. Kay is bright blue in inside 5 because of a dye trap; that is the story, not an art fault.

### Book 10 — What the School Was Built On

**Tagline:** A tournament. A conjurer. And something enormous under the floor.

**Back-cover blurb (fact-checked and corrected):**

> The King’s Tournament has come to Merlin’s Knight School at last: three days of events, the stands full, and six squires up against the Golden Cohort. Between events, the crowd’s favorite is a dazzling conjurer who makes coins vanish into his closed hand.
>
> Then a familiar face turns up in the crowd. Kay is sure he knows why the man has come back, and chases him through the Tournament tents.
>
> All the while, something is stirring far beneath the school. The ground hums under the Leftover Yard, the crack in the Founder’s Seal glows gold, and Merlin will only say that it wakes “once in a very long while.” He keeps promising to explain everything “after.”

*What changed from the printed back cover, and why:*
- Paragraphs 2 and 3 were rewritten from chapters 1–6. The printed text identified the culprit of Book 3, told the reader who is innocent in this book, and described the climax.
- Learn list: the printed second bullet was replaced for the same reason, with one the book teaches in chapter 10.

*Check:* 43 separate claims (tagline, blurb, printed bullets and the longer YouTube bullet list) were checked against the chapters by a checker who had not written the text.

**In this book you'll learn:**
- Watch the other hand
- Put every clue on one list before you decide
- Test what it does, not how it looks
- Ask what it needs

**Title in other languages** (approved titles, as printed on the editions):

| Spanish (Latin American) | German | French | Italian | Japanese |
|---|---|---|---|---|
| Sobre qué se construyó la escuela | Worauf die Schule gebaut wurde | Sur quoi l’école a été bâtie | Su cosa è stata costruita la scuola | none (no Japanese edition) |

**Links:** none yet. Kindle, paperback and hardcover files are built in English, Spanish, German, French and Italian, but no KDP link is recorded; the English video is built but no YouTube link is recorded.

**Pictures** (folder `Merlin's Knight School/Book 10 - What the School Was Built On/`; cover = English Kindle cover, 1600×2560):

- `Book 10 wide scene (i0015).jpg` — At sunset the six squires and their animal companions, seen from behind in their coloured cloaks, climb the slope path toward the castle-school under an orange sky. (source `images/ch04/ch04_s015.jpg`)
- `Book 10 inside 1 (ch01 i0025).jpg` — Merlin strides through the ivy-covered stone arch into the Leftover Yard in the early sun with his staff, Admiral the duck at his heels. (source `images/ch01/ch01_s025.jpg`)
- `Book 10 inside 2 (ch02 i0022).jpg` — Gawain, glowing gold in the sunshine, charges down the relay lane with a plank on his shoulder and ducks under the great swinging log, the crowd cheering in the stands. (source `images/ch02/ch02_s022.jpg`)
- `Book 10 inside 3 (ch06 i0008).jpg` — On a drizzly day Tusk the boar barrels up the stone stands through startled spectators with Kay running after him. (source `images/ch06/ch06_s008.jpg`)
- `Book 10 inside 4 (ch07 i0002).jpg` — Gawain's hawk, perched on his shoulder, shakes itself dry and sprays a wincing Kay with water, the tournament tents and castle behind them. (source `images/ch07/ch07_s002.jpg`)
- `Book 10 inside 5 (ch08 i0029).jpg` — Kay and Percival, seen from behind, stand in the vast dark Restricted Archive at night, its tall shelves, twin spiral stairs and floating candle-lights rising into shadow. (source `images/ch08/ch08_s029.jpg`)
- `Book 10 inside 6 (ch10 i0044).jpg` — The six squires sit in a row on a bench by the striped tournament tents eating Nan's pies, their six animal companions sitting in front of them. (source `images/ch10/ch10_s044.jpg`)

### Book 11 — The Bell That Rang at Midnight

**Tagline:** Year Two. One bell. And nobody pulling the rope.

**Back-cover blurb (fact-checked and corrected):**

> On the first night of Year Two, the school bell rings twelve times at midnight with nobody in the belfry, and so does the little chapel bell in Windle. By morning the Pennywick Herald is asking “RINGING CURSE?” and a jolly travelling bell-founder is selling brass ward-bells to keep it away.
>
> Morgan, whose magic has come back from the summer three sizes too big, is quietly sure the curse is her. With three brand-new first-years underfoot, a gruff new magic teacher, and a grumpy stone gargoyle only she can hear, the six squires set out to count how often bells ring anyway, and who profits when they do.
>
> And under the school’s bell, Morgan can hear another one, very far away, ringing wrong.

*What changed from the printed back cover, and why:*
- “By morning the whole county is whispering about a 'Ringing Curse'” → “By morning the Pennywick Herald is asking 'RINGING CURSE?'”: the book has no county-wide whispering; it has the Herald's headline.
- Learn list: “Test it small” → “Test an idea by taking one thing away”: no scene teaches the first; the second is the test the squires run (ch. 11, 13).

*Check:* 34 separate claims (tagline, blurb, printed bullets and the longer YouTube bullet list) were checked against the chapters by a checker who had not written the text.

**In this book you'll learn:**
- How often does it happen anyway?
- Count the ordinary before you call it strange
- Who profits from the fear?
- Test an idea by taking one thing away

**Title in other languages** (approved titles, as printed on the editions):

| Spanish (Latin American) | German | French | Italian | Japanese |
|---|---|---|---|---|
| La campana que sonó a medianoche | Die Glocke, die um Mitternacht läutete | La cloche qui sonnait à minuit | La campana che suonò a mezzanotte | none (no Japanese edition) |

**Links:** none yet. Kindle, paperback and hardcover files are built in English, Spanish, German, French and Italian, but no KDP link is recorded; the English video is built but no YouTube link is recorded.

**Pictures** (folder `Merlin's Knight School/Book 11 - The Bell That Rang at Midnight/`; cover = English Kindle cover, 1600×2560):

- `Book 11 wide scene (i0000).jpg` — The hamlet of Windle on market day: gray stone cottages, market stalls, a well on the green, a humped stone bridge over the beck and the little chapel, all under the tall red Aerie Cliffs. (source `images/ch07/ch07_s000.jpg`)
- `Book 11 inside 1 (ch01 i0000).jpg` — Morgan, raven on her shoulder and satchel at her feet, stands on the road as the carrier's cart rolls away up to the castle-school on its green hill. (source `images/ch01/ch01_s000.jpg`)
- `Book 11 inside 2 (ch02 i0016).jpg` — Merlin, with Admiral the duck at his feet, talks to the six squires and their animal companions lined up in the sunny Leftover Yard. (source `images/ch02/ch02_s016.jpg`)
- `Book 11 inside 3 (ch03 i0008).jpg` — In the candlelit Great Hall, Elara of the Golden Cohort hands a stick of charcoal to the quiet first-year Linnet, whose small gray owl sits on her shoulder. (source `images/ch03/ch03_s008.jpg`)
- `Book 11 inside 4 (ch04 i0044).jpg` — In the bell-ringer's loft at night old Hodge dozes on his stool with his feet on a sleeping Tusk, while Gawain comes down the ladder with a lantern and little Wren reaches up beside him. (source `images/ch04/ch04_s044.jpg`)
- `Book 11 inside 5 (ch05 i0022).jpg` — Master Thorne, in his long moss-green coat, teaches Morgan, Percival and Gwen at a candle-lined table in the glass-roofed orangery among orange trees. (source `images/ch05/ch05_s022.jpg`)
- `Book 11 inside 6 (ch06 i0044).jpg` — On the gray road below the castle, big first-year Oswin hides behind Lance from a perfectly calm sheep, with his little goat and Lance's fox looking on. (source `images/ch06/ch06_s044.jpg`)

### Book 12 — Thief in Black Feathers

**Tagline:** A village full of missing silver. And everyone blames the raven.

**Back-cover blurb (fact-checked and corrected):**

> Silver is vanishing all over Pennywick: spoons off tables, buttons off coats, links off the Mayor’s chain, and the old silver “luck” that has hung over the Crooked Crown’s hearth for longer than anyone can remember. Every witness swears they saw a big black bird.
>
> Pennywick’s constable comes to Merlin’s Knight School for Morgan’s raven. Again. Then the raven disappears. Morgan has to do three hard things: ask the others for help, let Gwen ask the questions, and learn a little of the language of crows.
>
> Because the way you ask a question can change what people remember.

*What changed from the printed back cover, and why:*
- The last sentence was shortened: its second half gave away part of the solution and is not stated in the book.

*Check:* 28 separate claims (tagline, blurb, printed bullets and the longer YouTube bullet list) were checked against the chapters by a checker who had not written the text.

**In this book you'll learn:**
- How you ask changes the answer
- Don’t put the answer in the question
- Who wants this clue found?
- Does it fit?

**Title in other languages** (approved titles, as printed on the editions):

| Spanish (Latin American) | German | French | Italian | Japanese |
|---|---|---|---|---|
| El ladrón de plumas negras | Der Dieb mit den schwarzen Federn | Le voleur aux plumes noires | Il ladro dalle piume nere | none (no Japanese edition) |

**Links:** none yet. Kindle, paperback and hardcover files are built in English, Spanish, German, French and Italian, but no KDP link is recorded; the English video is built but no YouTube link is recorded.

**Pictures** (folder `Merlin's Knight School/Book 12 - Thief in Black Feathers/`; cover = English Kindle cover, 1600×2560):

- `Book 12 wide scene (i0021).jpg` — The six squires and their animals stand at the forest edge by the ivy toll tower, looking across the rope bridge over the yellow gorge to the hilltop village of Pennywick. (source `images/ch03/ch03_s021.jpg`)
- `Book 12 inside 1 (ch01 i0028).jpg` — Kay proudly shows off his whirling scarecrow gadget, the Bird-Be-Gone, in the sunny yard while Gwen covers her ears. (source `images/ch01/ch01_s028.jpg`)
- `Book 12 inside 2 (ch02 i0026).jpg` — Morgan's raven perches on top of the old wooden dovecote in the castle yard under a bright blue sky, one black feather drifting down. (source `images/ch02/ch02_s026.jpg`)
- `Book 12 inside 3 (ch05 i0002).jpg` — First-year Oswin ties Clementine the goat to the hitching ring under the Crooked Crown inn sign in Pennywick's yellow-stone street. (source `images/ch05/ch05_s002.jpg`)
- `Book 12 inside 4 (ch06 i0047).jpg` — Morgan sits on the Roost stair at night under a full moon with Old Tom, her grandmother's crow, beside her and a letter tied with green twine in her hands. (source `images/ch06/ch06_s047.jpg`)
- `Book 12 inside 5 (ch08 i0013).jpg` — Kay slips on the stepping stones in the beech woods and splashes one boot into the brown stream. (source `images/ch08/ch08_s013.jpg`)
- `Book 12 inside 6 (ch09 i0047).jpg` — On the moor below the ruined tower crowded with ravens and crows, a young raven lands on Gawain's head while Lance grins and Gawain's hawk looks on. (source `images/ch09/ch09_s047.jpg`)

### Book 13 — The Seer at the Michaelmas Fair

**Tagline:** Seven veils. One fortune-teller. And she is never wrong.

**Back-cover blurb (fact-checked and corrected):**

> At Pennywick’s Michaelmas Fair, Madame Zephyrine, the Seer of Seven Veils, makes predictions, and they come true. A goose leads a squire into trouble. A girl in a starry cloak loses a thing she cannot replace. And then the King’s Cup vanishes from the prize tent overnight.
>
> Morgan, who badly wants to ask the Seer one question of her own, isn’t sure what to believe. Percival starts a table of every prediction, the hits and the misses, and the misses column runs off the page.
>
> Nobody remembers the misses.

*What changed from the printed back cover, and why:*
- “the famous Madame Zephyrine” → “Madame Zephyrine”: nobody in the book calls her famous.
- The closing sentence after “Nobody remembers the misses.” was removed: it gave away part of the solution.
- Learn list: the printed fourth bullet did the same; replaced with a test the book teaches in chapter 12.

*Check:* 28 separate claims (tagline, blurb, printed bullets and the longer YouTube bullet list) were checked against the chapters by a checker who had not written the text.

**In this book you'll learn:**
- Count the misses
- Statements that fit anyone
- Who told her?
- Change one thing and watch what follows

**Title in other languages** (approved titles, as printed on the editions):

| Spanish (Latin American) | German | French | Italian | Japanese |
|---|---|---|---|---|
| La vidente de la feria de San Miguel | Die Seherin vom Michaelismarkt | La voyante de la foire de la Saint-Michel | La veggente della fiera di San Michele | none (no Japanese edition) |

**Links:** none yet. Kindle, paperback and hardcover files are built in English, Spanish, German, French and Italian, but no KDP link is recorded; the English video is built but no YouTube link is recorded.

**Pictures** (folder `Merlin's Knight School/Book 13 - The Seer at the Michaelmas Fair/`; cover = English Kindle cover, 1600×2560):

- `Book 13 wide scene (i0003).jpg` — Gawain, glowing gold in the late-afternoon sun with his hawk on his glove, stands in the middle of the Michaelmas Fair field among the striped stalls, the goose pen, the Seer's purple-striped tent and wagon, with Pennywick on the hill behind. (source `images/ch05/ch05_s003.jpg`)
- `Book 13 inside 1 (ch01 i0044).jpg` — Morgan holds her new hazel staff, topped with raven feathers, in the glass-roofed orangery among orange trees and candles at sunrise. (source `images/ch01/ch01_s044.jpg`)
- `Book 13 inside 2 (ch02 i0001).jpg` — Tusk the boar stands in the castle yard looking sheepish, stuck all over with white goose feathers. (source `images/ch02/ch02_s001.jpg`)
- `Book 13 inside 3 (ch03 i0046).jpg` — Admiral the mallard sits calmly on the round red roof of the Seer's cream-and-crimson wagon under a blue sky. (source `images/ch03/ch03_s046.jpg`)
- `Book 13 inside 4 (ch04 i0039).jpg` — Kay races after a runaway Michaelmas goose down the fair avenue with a little dog at his heels while the crowd laughs and points. (source `images/ch04/ch04_s039.jpg`)
- `Book 13 inside 5 (ch08 i0022).jpg` — Percival and Gwen take notes while Oswin shyly answers their questions at the pie stall on a drizzly morning at the fair. (source `images/ch08/ch08_s022.jpg`)
- `Book 13 inside 6 (ch10 i0046).jpg` — Morgan sits in the hay by the hayloft's round window with her raven on her knee, looking out at Pennywick's lamplit street in the rain. (source `images/ch10/ch10_s046.jpg`)

### Book 14 — Snowbound

**Tagline:** Five days. No sun. No road. No way out.

**Back-cover blurb (fact-checked and corrected):**

> The King’s College has sent five Visitors to inspect Merlin’s Knight School, and soon the castle is buried to its windowsills, every inkwell has frozen, and a tiny glittering figure is drawing pictures in the frost on the windows.
>
> Then the steep lane down from the gate turns to glass every night, however much ash they throw on it. Everyone blames the frost sprite. But the leader of the Visitation must be in her College’s hall by the shortest day, or lose the vote of her life.
>
> Snowed in with strangers and short of sun, Morgan and the squires have five days to ask the hardest question of all: what would prove us wrong?

*What changed from the printed back cover, and why:*
- Tagline: the printed one says “Five days of snow.” In the book snow falls for about a day and a half; what lasts five days is the cloud (ch. 17, 19). If you read it as “five days snowed in”, the printed tagline can stand.
- “five scholars” → “five Visitors”: only three of the five are scholars (ch. 1).
- The printed back cover has a dropped word: “and on morning the castle is buried”. Corrected to “and soon the castle is buried” (the snow reaches the windows by the third day, not the first morning).
- Learn list: “Why ice is slippery (and how ash helps)” → “How ash helps you grip ice”: the book never explains why ice is slippery.

*Check:* 33 separate claims (tagline, blurb, printed bullets and the longer YouTube bullet list) were checked against the chapters by a checker who had not written the text.

**In this book you'll learn:**
- What would prove you wrong?
- Test before you trust
- How ash helps you grip ice
- Salt, frost and water

**Title in other languages** (approved titles, as printed on the editions):

| Spanish (Latin American) | German | French | Italian | Japanese |
|---|---|---|---|---|
| Atrapados por la nieve | Eingeschneit | Prisonniers de la neige | Bloccati dalla neve | none (no Japanese edition) |

**Links:** none yet. Kindle, paperback and hardcover files are built in English, Spanish, German, French and Italian, but no KDP link is recorded; the English video is built but no YouTube link is recorded.

**Pictures** (folder `Merlin's Knight School/Book 14 - Snowbound/`; cover = English Kindle cover, 1600×2560):

- `Book 14 wide scene (i0000).jpg` — The castle-school stands buried in snow on its hilltop under a low gray sky, its windows lit and its glass orangery capped white, with one small cloaked figure walking the path below the walls. (source `images/ch06/ch06_s000.jpg`)
- `Book 14 inside 1 (ch02 i0035).jpg` — The six squires and their animals sit together at supper in the candlelit Great Hall while snow falls past the tall windows. (source `images/ch02/ch02_s035.jpg`)
- `Book 14 inside 2 (ch05 i0008).jpg` — The first-years shelter behind their snow fort in the falling snow: Oswin hugging Clementine the goat, Linnet sketching with her owl on her shoulder, and Wren with her hedgehog tucked in her coat. (source `images/ch05/ch05_s008.jpg`)
- `Book 14 inside 3 (ch07 i0016).jpg` — Kay lies laughing in a deep snowdrift at the bend of the icy lane after sliding down it, with the snow-covered castle on the hill behind him. (source `images/ch07/ch07_s016.jpg`)
- `Book 14 inside 4 (ch08 i0004).jpg` — Art, the kitchen boy, and Nan the cook stand by the great kitchen fire with Captain the ginger cat asleep on the floor and Admiral the mallard looking on. (source `images/ch08/ch08_s004.jpg`)
- `Book 14 inside 5 (ch09 i0026).jpg` — A tiny glittering frost sprite hovers outside the round hayloft window at night, drawing a goat in the frost on the glass while an owl watches from a shelf. (source `images/ch09/ch09_s026.jpg`)
- `Book 14 inside 6 (ch10 i0001).jpg` — Morgan pauses on the snowy stair above the castle yard at first light, staff in hand, with her raven perched on the rail. (source `images/ch10/ch10_s001.jpg`)

### Book 15 — The Unicorn Who Bit Everyone

**Tagline:** Nineteen hunters. One very cross unicorn.

**Back-cover blurb (fact-checked and corrected):**

> Every dusk a hunting horn has sounded from the north, and by Twelfth Night nineteen hunters are waiting at the Cliff and Beck in Windle with nets, hounds and a handbill: the Beast of Windle Wood bites everyone. A bounty of ten gold crowns says she must be gone by the twelfth.
>
> Percival has read three books about unicorns, and every one says unicorns don’t bite. Then he meets one. She is thin, shaggy and very cross, and the spring she drinks from has turned a strange rust-orange.
>
> With five days until the hunt, Morgan and the squires must find out what has gone wrong in Windle Wood, and learn when it is wiser to stop than to keep on digging.

*What changed from the printed back cover, and why:*
- “All winter a hunting horn has sounded” → “Every dusk…”: one horn each dusk for nineteen days (ch. 1).
- “Percival has read every book about unicorns ever written” → “three books about unicorns” (ch. 1).
- “With six days until the hunt” → “five days” (ch. 1; the YouTube text already says five).

*Check:* 30 separate claims (tagline, blurb, printed bullets and the longer YouTube bullet list) were checked against the chapters by a checker who had not written the text.

**In this book you'll learn:**
- Sunk costs: would you start it today?
- Knowing when to stop
- How a stream gets poisoned (and how to test it)
- Reading tracks, water and clues

**Title in other languages** (approved titles, as printed on the editions):

| Spanish (Latin American) | German | French | Italian | Japanese |
|---|---|---|---|---|
| El unicornio que mordía a todos | Das Einhorn, das alle biss | La licorne qui mordait tout le monde | L’unicorno che mordeva tutti | none (no Japanese edition) |

**Links:** none yet. Kindle, paperback and hardcover files are built in English, Spanish, German, French and Italian, but no KDP link is recorded; the English video is built but no YouTube link is recorded.

**Pictures** (folder `Merlin's Knight School/Book 15 - The Unicorn Who Bit Everyone/`; cover = English Kindle cover, 1600×2560):

- `Book 15 wide scene (i0008).jpg` — The six squires ride in Hodge's cart along a frosty white lane toward the long red cliffs of Windle under a clear winter sky. (source `images/ch03/ch03_s008.jpg`)
- `Book 15 inside 1 (ch01 i0033).jpg` — Merlin reads a letter aloud to Gwen, Percival and Kay in the wet school yard, with Gwen's hound sitting at their feet. (source `images/ch01/ch01_s033.jpg`)
- `Book 15 inside 2 (ch02 i0042).jpg` — Kay proudly carries his wrapped-up Horn-Hoop contraption down the stairs by candlelight while Gawain and Lance look on, amused. (source `images/ch02/ch02_s042.jpg`)
- `Book 15 inside 3 (ch04 i0003).jpg` — Gwen takes notes beside the village well and frozen trough as old Goodman Rudd cups his ear to hear her, the red cliffs behind. (source `images/ch04/ch04_s003.jpg`)
- `Book 15 inside 4 (ch05 i0033).jpg` — Percival, sitting in the frosty bracken, holds up a calming hand to the shaggy white unicorn beside the holly and the pool. (source `images/ch05/ch05_s033.jpg`)
- `Book 15 inside 5 (ch06 i0019).jpg` — The unicorn stands alone at the frozen trough on Windle's village green on a starry night, with the well, the bridge and the chapel around her. (source `images/ch06/ch06_s019.jpg`)
- `Book 15 inside 6 (ch10 i0028).jpg` — Morgan, hood up, sweeps her hazel staff over the cloudy pool in the frosty dell as a violet swirl of magic spreads through the water. (source `images/ch10/ch10_s028.jpg`)

*Picture note:* The unicorn is drawn thin and shaggy, as the book describes her.

### Book 16 — The Rematch

**Tagline:** One clockwork hippogriff. One very nervous week.

**Back-cover blurb (fact-checked and corrected):**

> The Royal Exhibition trials have come to Merlin’s Knight School, and with them the King’s Cup rematch: Lance against Cassian, on the same mount. The mount is Fidget, a brand-new clockwork hippogriff that faints when it is frightened.
>
> Then things start going wrong. A greased saddle. A jammed sword rack. A bolt through the fair. Everyone blames Sable, the proud Golden first-year who keeps slipping away at night.
>
> Morgan blames her too, and she has four reasons. With the rematch moved to the very last day, the squires must work out what the prizes are making people do.

*What changed from the printed back cover, and why:*
- “the rematch everyone has waited a year for” → “the King's Cup rematch”: the chapters give no “year”.
- “A bolt down the list.” → “A bolt through the fair.”: Fidget leaves the list and runs through the fair (ch. 11, 14).
- Paragraph 3: two sentences were reworded because they gave away part of the solution.

*Check:* 33 separate claims (tagline, blurb, printed bullets and the longer YouTube bullet list) were checked against the chapters by a checker who had not written the text.

**In this book you'll learn:**
- Incentives: what does the reward make people do?
- Ask who gets paid
- Admitting you were wrong
- Teaching someone else to be good

**Title in other languages** (approved titles, as printed on the editions):

| Spanish (Latin American) | German | French | Italian | Japanese |
|---|---|---|---|---|
| La revancha | Die Revanche | La revanche | La rivincita | none (no Japanese edition) |

**Links:** none yet. Kindle, paperback and hardcover files are built in English, Spanish, German, French and Italian, but no KDP link is recorded; the English video is built but no YouTube link is recorded.

**Pictures** (folder `Merlin's Knight School/Book 16 - The Rematch/`; cover = English Kindle cover, 1600×2560):

- `Book 16 wide scene (i0002).jpg` — Sunrise over the frosty tournament field below the school, with striped tents, the stone stands, the blue and lavender canopies and daffodils on the slope. (source `images/ch08/ch08_s002.jpg`)
- `Book 16 inside 1 (ch01 i0042).jpg` — Morgan sits on the wooden stair of the Roost with her arms folded, talking things over with her raven. (source `images/ch01/ch01_s042.jpg`)
- `Book 16 inside 2 (ch02 i0004).jpg` — The six squires, seen from behind in their coloured cloaks, get their first look at the copper clockwork hippogriff standing in the sunlit barn doorway. (source `images/ch02/ch02_s004.jpg`)
- `Book 16 inside 3 (ch04 i0006).jpg` — Percival, holding his rabbit, and little Wren watch two March hares boxing on the green hill below the castle, with the fair tents beside them. (source `images/ch04/ch04_s006.jpg`)
- `Book 16 inside 4 (ch05 i0010).jpg` — Lance, red cape flying, rides the clockwork hippogriff at the quintain and strikes the star shield cleanly. (source `images/ch05/ch05_s010.jpg`)
- `Book 16 inside 5 (ch07 i0042).jpg` — In the lantern-lit Roost, Gwen kneels to look at a wooden box with air holes while first-years Wren, Oswin and Linnet look on, and the owl watches from a shelf. (source `images/ch07/ch07_s042.jpg`)
- `Book 16 inside 6 (ch09 i0006).jpg` — Gawain, with his hooded hawk on his glove, and Kay share a joke in the candlelit Great Hall. (source `images/ch09/ch09_s006.jpg`)

*Picture note:* The wide scene is an establishing view with no characters in it.

### Book 17 — The Library That Lost Its Words

**Tagline:** One white page. Then hundreds.

**Back-cover blurb (fact-checked and corrected):**

> In the Restricted Archive under Merlin’s Knight School, a page goes white overnight. The words are simply gone, and the pin-holes and ruled lines are still there. For twenty-three days nothing more happens. Then thirty-one more pages go white in a single day, and soon it is hundreds.
>
> The Archivist blames the new magic teacher, Master Thorne, who reads alone at midnight. Morgan has suspected him all year. A tiny paper-eating inkwyrm called Marge is caught nibbling the margins. And the Patroness’s cheerful new copyist is very busy upstairs.
>
> This time Gwen can’t do it all herself. With the first-years helping and a rough number on a slate, the squires must estimate first — because nobody can count a million pages one by one.

*What changed from the printed back cover, and why:*
- “Then it happens again, and again, faster every week.” → the real timing: nothing for twenty-three days, then thirty-one pages in one day (ch. 3, 7).
- The end of the last sentence was replaced (it gave away part of the solution) with a checked line from chapters 3 and 8.

*Check:* 33 separate claims (tagline, blurb, printed bullets and the longer YouTube bullet list) were checked against the chapters by a checker who had not written the text.

**In this book you'll learn:**
- Estimate first: a rough number now beats an exact one never
- Checking a theory against the numbers
- Sharing the work: letting others help
- Saying sorry, properly

**Title in other languages** (approved titles, as printed on the editions):

| Spanish (Latin American) | German | French | Italian | Japanese |
|---|---|---|---|---|
| La biblioteca que perdió sus palabras | Die Bibliothek, die ihre Wörter verlor | La bibliothèque qui perdait ses mots | La biblioteca che perse le sue parole | none (no Japanese edition) |

**Links:** none yet. Kindle, paperback and hardcover files are built in English, Spanish, German, French and Italian, but no KDP link is recorded; the English video is built but no YouTube link is recorded.

**Pictures** (folder `Merlin's Knight School/Book 17 - The Library That Lost Its Words/`; cover = English Kindle cover, 1600×2560):

- `Book 17 wide scene (i0031).jpg` — The great two-storey Restricted Archive seen from the gallery rail at night, with glowing candle-orbs, spiral stairs, rolling ladders and the long reading table below. (source `images/ch08/ch08_s031.jpg`)
- `Book 17 inside 1 (ch01 i0020).jpg` — Gawain steps off the Archive's spiral stair holding out his hands while Kay, Lance, Percival, Gwen and Morgan stand in a row with Gwen's hound and the raven. (source `images/ch01/ch01_s020.jpg`)
- `Book 17 inside 2 (ch02 i0008).jpg` — Kay stands unimpressed in the orangery among the orange and lemon trees, he and his little dog both dusted white with chalk after Morgan's spell went too big. (source `images/ch02/ch02_s008.jpg`)
- `Book 17 inside 3 (ch03 i0046).jpg` — Lance and Golden Cohort rival Cassian glare at each other as they grab the same rolling ladder on the Archive gallery. (source `images/ch03/ch03_s046.jpg`)
- `Book 17 inside 4 (ch05 i0030).jpg` — Marge, the tiny paper-winged inkwyrm, nibbles the edge of a blank scrap of parchment beside a glass-domed candle. (source `images/ch05/ch05_s030.jpg`)
- `Book 17 inside 5 (ch06 i0038).jpg` — Merlin, staff in hand, pauses in the frosty school yard at dawn while Morgan looks toward the open gate and the road beyond. (source `images/ch06/ch06_s038.jpg`)
- `Book 17 inside 6 (ch10 i0040).jpg` — Marshal's man Ashby in his mustard coat walks a rainy country road with Kay, Morgan and a pony cart, the raven riding on the cart, with green fields and a river behind. (source `images/ch10/ch10_s040.jpg`)

*Picture note:* The wide scene is an establishing view of the Archive with no characters in the foreground.

### Book 18 — Agnes

**Tagline:** A crow with no letter. A grandmother who knows too much.

**Back-cover blurb (fact-checked and corrected):**

> Old Tom, Gran’s crow, lands on the yard wall with no letter on his leg. Then Gran herself arrives at Merlin’s Knight School, unannounced, the week of May Eve.
>
> By May morning hedge-witch charms all over the county have gone gray. A cheerful charm-seller in a marigold coat is selling farthing charms that never go gray, and somebody the villagers call the Smoke-Witch is seen at the empty cottages after dark. Morgan is sure she knows who did it, and she says so out loud.
>
> To find the truth, the squires must keep asking one more question — and then what? And at last Gran and Merlin tell them the story of the Watch that failed, fifty years ago.

*What changed from the printed back cover, and why:*
- “every hedge-witch charm in the county” → “hedge-witch charms all over the county”: not every charm goes gray.
- Three phrases in paragraphs 2 and 3 were reworded or shortened because they gave away part of the solution; in chapter 15 the story of the Watch is told by Gran and Merlin.

*Check:* 29 separate claims (tagline, blurb, printed bullets and the longer YouTube bullet list) were checked against the chapters by a checker who had not written the text.

**In this book you'll learn:**
- And then what? Following consequences to their consequences
- Checking whether a fix makes things worse
- Who gains? Following the money
- Owning up when you are wrong

**Title in other languages** (approved titles, as printed on the editions):

| Spanish (Latin American) | German | French | Italian | Japanese |
|---|---|---|---|---|
| Agnes | Agnes | Agnes | Agnes | none (no Japanese edition) |

**Links:** none yet. Kindle, paperback and hardcover files are built in English, Spanish, German, French and Italian, but no KDP link is recorded; the English video is built but no YouTube link is recorded.

**Pictures** (folder `Merlin's Knight School/Book 18 - Agnes/`; cover = English Kindle cover, 1600×2560):

- `Book 18 wide scene (i0046).jpg` — Merlin and the six squires walk down a sunlit woodland path among bluebells, with the Mere and the village of Lakemere behind them and Gawain glowing gold in the sun. (source `images/ch08/ch08_s046.jpg`)
- `Book 18 inside 1 (ch01 i0045).jpg` — Morgan holds a sealed letter up to Old Tom the crow, who sits on the yard wall under a full moon with blossom falling. (source `images/ch01/ch01_s045.jpg`)
- `Book 18 inside 2 (ch02 i0028).jpg` — The raven works Kay's bucket-and-string gadget on the wall and makes off with the cheese while Nan scowls from the kitchen window. (source `images/ch02/ch02_s028.jpg`)
- `Book 18 inside 3 (ch03 i0008).jpg` — Gran walks in through the yard gate on a frosty morning with Old Tom on her shoulder, and little Wren stops short at the sight of her. (source `images/ch03/ch03_s008.jpg`)
- `Book 18 inside 4 (ch05 i0010).jpg` — Morgan's raven shakes dew over her at the yard wall at dawn while Wren, a first-year, runs up laughing (source `images/ch05/ch05_s010.jpg`)
- `Book 18 inside 5 (ch09 i0010).jpg` — Morgan sits in the orangery with her raven on her shoulder, holding a tiny flame on the tip of her staff while Master Thorne sits beside her on the bench. (source `images/ch09/ch09_s010.jpg`)
- `Book 18 inside 6 (ch10 i0028).jpg` — The six squires crowd round Nan's kitchen table on a rainy day, arguing over their notebooks. (source `images/ch10/ch10_s028.jpg`)

*Picture note:* I left out a fine picture of the dragon under the school (ch07 s038) because it gives away how Book 10 ends.

### Book 19 — The Exhibition

**Tagline:** New bells for old. And one old bell goes quiet.

**Back-cover blurb (fact-checked and corrected):**

> Morgan has something she must tell Merlin, and there is nobody left to tell. Merlin and Gran have gone west, and the Royal Exhibition is coming to Merlin’s Knight School, with four silver bells for Lakemere: new bells for old.
>
> The old Lakemere bell is to ring its last hour. The Watch guards it day and night. Then, on the first night of the Exhibition, under a sky full of rockets, the old bell goes quiet. Morgan is sure she knows who did it. She is wrong, out loud.
>
> At the Disputation, everybody must argue the other side first. To see what a clever old woman will do next, Morgan must make the best case for the person she trusts least.

*What changed from the printed back cover, and why:*
- The first sentence was reworded: the printed one gave away the ending of Book 18. The replacement is the YouTube description's own sentence (ch. 1).

*Check:* 29 separate claims (tagline, blurb, printed bullets and the longer YouTube bullet list) were checked against the chapters by a checker who had not written the text.

**In this book you'll learn:**
- Make the best case for the other side
- Spotting the straw man: the worst case is easy, and usually wrong
- Think it from their side to see their next move
- Being wrong among friends is still being wrong

**Title in other languages** (approved titles, as printed on the editions):

| Spanish (Latin American) | German | French | Italian | Japanese |
|---|---|---|---|---|
| La Gran Exhibición | Die Große Schau | La Grande Exposition | La Grande Esposizione | none (no Japanese edition) |

**Links:** none yet. Kindle, paperback and hardcover files are built in English, Spanish, German, French and Italian, but no KDP link is recorded; the English video is built but no YouTube link is recorded.

**Pictures** (folder `Merlin's Knight School/Book 19 - The Exhibition/`; cover = English Kindle cover, 1600×2560):

- `Book 19 wide scene (i0003).jpg` — The view from the Leftover Yard gate down to the Exhibition meadow: striped tents, the stands with their banners and the frame of four silver bells, with green hills beyond. (source `images/ch05/ch05_s003.jpg`)
- `Book 19 inside 1 (ch01 i0012).jpg` — The six squires eat supper at the long table in Nan's kitchen while Nan stirs the pot and Art washes up at the window. (source `images/ch01/ch01_s012.jpg`)
- `Book 19 inside 2 (ch02 i0026).jpg` — In the golden evening yard Lance practises a speech for Gwen, who takes notes, while Morgan and her raven listen from the Roost steps. (source `images/ch02/ch02_s026.jpg`)
- `Book 19 inside 3 (ch05 i0026).jpg` — Master Thorne talks from the shore with Mother Sedge, who stands in her reed-boat on the Mere with Button the otter in the bow. (source `images/ch05/ch05_s026.jpg`)
- `Book 19 inside 4 (ch06 i0028).jpg` — The four silver bells hang on their ribboned frame at sunset, with Admiral the duck sitting on the crossbeam. (source `images/ch06/ch06_s028.jpg`)
- `Book 19 inside 5 (ch07 i0042).jpg` — Lance and Cassian face each other with swords for their exhibition bout on the meadow while Percival keeps the score. (source `images/ch07/ch07_s042.jpg`)
- `Book 19 inside 6 (ch09 i0022).jpg` — Merlin, Gran, Master Thorne and the Herald watch gold fireworks burst over the Exhibition field from the castle wall. (source `images/ch09/ch09_s022.jpg`)

*Picture note:* The wide scene is an establishing view with no characters in it.

### Book 20 — The Isle of Apples

**Tagline:** Three nights. One gray boat. And an island behind the mist.

**Back-cover blurb (fact-checked and corrected):**

> Three nights. A little gray boat waits at the edge of the White Wall, and Gran’s blackthorn stick is gone from beside her bed. Old Fenwick blames the Wall-lights. Morgan is sure she knows who took it. She is wrong.
>
> Gwen chalks a new column on the case board: HOW SURE. Every clue moves the number a little. And behind the mist, on an island where every apple tree is in blossom and fruit at once, something old is waiting for a watch.
>
> Ten in ten is a fact, not a guess. But waiting is a choice too. To keep the watch, Morgan must say how sure she is, and then go.

*What changed from the printed back cover, and why:*
- “Lakemere blames the Wall-lights.” → “Old Fenwick blames the Wall-lights.”: in the chapters only Old Fenwick does (ch. 3, 6).

*Check:* 26 separate claims (tagline, blurb, printed bullets and the longer YouTube bullet list) were checked against the chapters by a checker who had not written the text.

**In this book you'll learn:**
- How sure are you? Then act
- Say it as a number: “probably” means different things
- One clue, one step: change your number a little
- Keep a row for somebody you haven’t thought of

**Title in other languages** (approved titles, as printed on the editions):

| Spanish (Latin American) | German | French | Italian | Japanese |
|---|---|---|---|---|
| La Isla de las Manzanas | Die Apfelinsel | L’Île aux Pommes | L’Isola delle Mele | none (no Japanese edition) |

**Links:** none yet. Kindle, paperback and hardcover files are built in English, Spanish, German, French and Italian, but no KDP link is recorded; the English video is built but no YouTube link is recorded.

**Pictures** (folder `Merlin's Knight School/Book 20 - The Isle of Apples/`; cover = English Kindle cover, 1600×2560):

- `Book 20 wide scene (i0008).jpg` — Lance and Gawain row the blue boat Dabchick across the sunlit Mere, past reeds and yellow irises, toward green hills with mist lying on the far water. (source `images/ch05/ch05_s008.jpg`)
- `Book 20 inside 1 (ch01 i0010).jpg` — Gran, leaning on her blackthorn stick, points the way for Morgan and her raven on Fenwick's jetty at Lakemere under a crescent moon. (source `images/ch01/ch01_s010.jpg`)
- `Book 20 inside 2 (ch02 i0046).jpg` — On a misty morning Gran, bent over a borrowed cane that is much too short for her, wags a finger at a startled Kay while Gawain looks on. (source `images/ch02/ch02_s046.jpg`)
- `Book 20 inside 3 (ch03 i0003).jpg` — Percival, holding his rabbit, talks with Gawain, who glows gold in the morning sun beside the jetty and the thatched cottage. (source `images/ch03/ch03_s003.jpg`)
- `Book 20 inside 4 (ch04 i0026).jpg` — Captain the ginger cat and Button the otter sit facing each other in silence on the jetty, with a reed-boat and the Mere behind them. (source `images/ch04/ch04_s026.jpg`)
- `Book 20 inside 5 (ch08 i0034).jpg` — Kay explains something with a grin while Gwen writes it in her notebook outside the stone net shed by the water. (source `images/ch08/ch08_s034.jpg`)
- `Book 20 inside 6 (ch10 i0044).jpg` — Lance stands with a hand on first-year Oswin's shoulder as Oswin hauls on a mooring rope at the lantern-lit jetty at dusk. (source `images/ch10/ch10_s044.jpg`)


## New character sheets

These are the approved reference sheets (whole sheets, 1152×768) for recurring characters who are not on the website yet. File names avoid the words the import script already matches (for example, Kay's boar is `Tusk.jpg`, not "Kay's boar", so it cannot overwrite Kay's portrait).

**Max Millhopper/Characters/**

| File | Who | Appears in |
|---|---|---|
| `Dr. Jo Stiles.jpg` | The vet, with a mobile veterinary truck | Books 16, 17, 18, 19; she phones Max on the last page of Book 20 |
| `Nell Quill.jpg` | Keeps the bait shack by Lantern Point | Books 16, 17, 19 (and Book 12, according to the series reference) |
| `Bernadette Lowery.jpg` | Works for the county health department | Books 19, 20 |

**Merlin's Knight School/Characters/**

| File | Who | Appears in |
|---|---|---|
| `Tusk.jpg` | Kay's boar | Every book |
| `Nan Pottle.jpg` | The school's cook | Every book |
| `Cassian.jpg` | Golden Cohort squire, sapphire-blue cape; Lance's rival | Every book from 2, mainly 4, 6, 10, 16 |
| `Elara.jpg` | Golden Cohort squire, emerald-green cape | Most books from 2 |
| `Golden Cohort (Zara, Mei, Torvin, Reed).jpg` | The other four Golden Cohort squires, on one labelled sheet | Mainly Books 4, 5, 6, 10 and 16 (Torvin has a large part in Book 5) |
| `Penelope Quill.jpg` | Reporter for the Pennywick *Herald* | Every book |
| `Hodge.jpg` | The night porter of the north tower | From Book 3 |
| `The Archivist.jpg` | The guardian of the Restricted Archive, built of old books | Books 3, 4, 8, 10, 17, 18 |
| `Dame Edda Strand.jpg` | Master of Arms of the Golden Cohort from Book 5; before that the King's Falconer | From Book 5 |
| `Master Brisk.jpg` | Master Wendel Brisk, the old artificer | Books 6, 7, 9, 10, 16 |
| `The King's Herald (Clarice Ambrey).jpg` | Mistress Clarice Ambrey, Royal Tournament Herald | Books 4–6, 9, 10, 16, 19 |

Not included, because no approved sheet is in the book folders:
- **Season 2 regulars (Books 11–20):** Master Thorne, Art the kitchen boy and Captain the cat, the first-years Wren, Oswin, Linnet and Sable, Gran (Agnes) and Lady Marchbank. Books 11–20 have no `refs/` folder on the Mac, so their sheets were never copied down from the cloud workspace.
- **Left out on purpose:** two recurring characters whose sheets exist but whose cards would give away an earlier book's ending.
- **Max's family and neighbors** (Max's mom, Jack and Sarah Millhopper, George's mom, Nana Ruth) have sheets in the Book 20 reference folder; I did not count them as new recurring characters. Say if you want them added.

For the site: each new sheet needs a line in `CHARACTERS` in `tools/import_images.py`, a crop box in `tools/character_crops.json`, and a character entry (name, role, one-line bio) in `data/books.js`.

## Books that are NOT finished

Show these as "coming soon" or leave them out. Nothing in this folder belongs to them.

### Max Millhopper — Book 21 (no title yet)

- **Status:** not started. There is no project folder, manuscript, bible or art.
- **What exists:** only the teaser on the last page of Book 20, where the vet phones Max about goats on a farm that keep falling down, and the farmer's little girl who could not stand up either.

### Max Millhopper — Books 16–20 in other languages

- **Status:** not made. There is no Spanish, German, French, Italian or Japanese Kindle or print edition of Books 16–20 (Books 1–15 have all five).
- **What exists:** the Spanish titles, Spanish YouTube text, Spanish narration and Spanish video timelines for all five books.

### Merlin's Knight School — Season 3, Books 21–30

- **Status:** planned only. `MKS_Season3_PLAN.md` holds the season plan and the titles you approved on 17 Nov 2026. No book folder, bible, manuscript or art exists for any of them.

| Book | Title | Spanish | German | French | Italian |
|---|---|---|---|---|---|
| 21 | The Tide That Came Late | La marea que llegó tarde | Die Flut, die zu spät kam | La marée qui arriva en retard | La marea che arrivò in ritardo |
| 22 | The Boats That Came Home | Los barcos que volvieron | Die Boote, die heimkehrten | Les bateaux qui revinrent | Le barche che tornarono |
| 23 | Shares in the Sea | Acciones en el mar | Anteile am Meer | Des parts dans la mer | Azioni sul mare |
| 24 | What Everybody Knows | Lo que todo el mundo sabe | Was jeder weiß | Ce que tout le monde sait | Quello che tutti sanno |
| 25 | The Wreck of the Petrel | El naufragio del Petrel | Das Wrack der Petrel | Le naufrage du Petrel | Il naufragio del Petrel |
| 26 | The Wall Nobody Needed | El muro que nadie necesitaba | Die Mauer, die niemand brauchte | Le mur dont personne n'avait besoin | Il muro che non serviva a nessuno |
| 27 | The Gullsmouth Regatta | La regata de Gullsmouth | Die Regatta von Gullsmouth | La régate de Gullsmouth | La regata di Gullsmouth |
| 28 | One More Basket | Una canasta más | Noch ein Korb | Encore un panier | Ancora un cesto |
| 29 | The Founder's Ebb | La bajamar del Fundador | Die Ebbe des Gründers | La marée basse du Fondateur | La bassa marea del Fondatore |
| 30 | The Bell Under the Sea | La campana bajo el mar | Die Glocke unter dem Meer | La cloche sous la mer | La campana sotto il mare |

### Merlin's Knight School — Japanese

- **Status:** no Japanese edition of any Merlin's Knight School book exists. The Japanese title of Book 1 on the website is a website translation only.

## Other things the check turned up (nothing was changed in the book folders)

- **Printed back covers.** The corrections listed under each book are corrections to the website text only. The paperback and hardcover back covers, and the KDP listing files that reuse the same blurbs, still carry the printed wording. The ones that matter most: the dropped word on the *Snowbound* back cover ("and on morning the castle is buried"); the back covers of Merlin's Knight School Books 3, 4, 6, 7, 8, 9, 10, 12, 13, 16, 17, 18 and 19, which give away part of a solution or an earlier book's ending; and the second bullet on the *Stand Still* back cover.
- **YouTube text files** (not used above, but they share some of the same slips): the Book 10 description of Merlin's Knight School names the culprit of Book 3; the Book 3 description says the bird was seen "at the Dean's window" (the book says "a window"); *Stand Still* says "the rich trainer next door"; *The Swallowed Diamond* says the lighthouse has been dark "for as long as anyone in town can remember" (Nell remembers it lit); *Red Tide* mentions tracking the bloom with satellites (the book uses water samples and the glider); the Book 9 description has a "cart full of smoke-pots" (the book has one crate of them).
- **German, French and Italian titles for Max Books 16–20** are my proposals for the website and are marked as such under each book. They need your approval before anything is printed with them.
- **Art.** Merlin's Knight School Book 2's stills have a softer, more painted finish than the flat style of the other books; I used them as they are.

## Notes for updating the site

- Book ids are `max-16` … `max-20` and `mks-02` … `mks-20`. Each needs `title`, `tagline`, `blurb` (paragraphs separated by a blank line) and four `learn` lines in `data/books.js`, plus translations of all of those in `data/lang/es.js`, `fr.js`, `de.js`, `it.js` and `ja.js`. Only the titles are translated in this file; the taglines, blurbs and bullets above exist in English only.
- Merlin's Knight School Books 1–10 are told through Kay and Books 11–20 through Morgan, so the site's reading-order note for that series needs a small change when Books 11–20 go up.
- Leave every store and YouTube link empty for these books until you have the real ones.
