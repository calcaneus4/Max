// Content for the mini-games (English). Translations live in data/lang/<code>.js under the
// same keys shown in brackets, e.g. "gd.swim.title". Missing translations fall back to English.
window.GAMES = {
  // ---------------- Max: Diagnose the Case ----------------
  // answer = index of the right option (0, 1 or 2). The options are shuffled on screen.
  diagnose: [
    {
      id: "swim",
      title: "The Summer Camp Earache",
      clues: [
        "Jordan has been swimming in the lake every day at summer camp.",
        "His right ear hurts, and it hurts MORE when he tugs on his earlobe.",
        "He has no cold and no fever.",
      ],
      options: ["Swimmer's ear (an infection of the outer ear canal)", "A middle-ear infection after a cold", "Too much earwax"],
      answer: 0,
      science:
        "Water that stays in the ear canal softens the skin so germs can grow there. That outer-ear infection is called swimmer's ear. Because the canal is attached to the outside of the ear, tugging on the earlobe makes it hurt more. Middle-ear infections usually follow a cold and sit behind the eardrum, so tugging doesn't change the pain much.",
    },
    {
      id: "milk",
      title: "The Milkshake Mystery",
      clues: [
        "Ava gets a tummy ache, gas and bloating about an hour after milkshakes or ice cream.",
        "Pizza with lots of cheese bothers her a little too.",
        "Other foods are fine, and she has no fever or rash.",
      ],
      options: ["A stomach virus", "Lactose intolerance", "A food allergy to strawberries"],
      answer: 1,
      science:
        "Milk contains a sugar called lactose. To digest it, the small intestine uses an enzyme called lactase. Many people make less lactase as they grow up, so the lactose travels on to the large intestine, where bacteria eat it and make gas. A virus would not show up only after dairy foods.",
    },
    {
      id: "heat",
      title: "The Hot Soccer Saturday",
      clues: [
        "Liam played two soccer games on a very hot afternoon.",
        "He forgot his water bottle.",
        "Now he has a headache, feels dizzy when he stands up, and his pee is dark yellow.",
      ],
      options: ["Dehydration", "A broken ankle", "Seasonal allergies"],
      answer: 0,
      science:
        "Sweat cools your body, but it uses up water. If you don't drink enough to replace it, your blood volume drops a little, which can cause headaches and dizziness, and your kidneys save water by making darker, more concentrated urine. Resting in the shade and drinking fluids helps; if someone is confused or very sick, get help right away.",
    },
    {
      id: "sneeze",
      title: "The Springtime Sneezes",
      clues: [
        "Every spring, Mia sneezes all day and her eyes itch and water.",
        "It is worst after the grass is mowed.",
        "She has no fever, and it lasts for weeks, not days.",
      ],
      options: ["A cold", "Seasonal allergies (hay fever)", "Pink eye from a swimming pool"],
      answer: 1,
      science:
        "With seasonal allergies, the immune system mistakes harmless pollen for an invader and releases chemicals like histamine, which cause sneezing and itchy, watery eyes. Colds often come with a fever or sore throat and get better within about a week or two. Allergies come back at the same time each year.",
    },
    {
      id: "blue",
      title: "The Case of the Blue Tongue",
      clues: [
        "Noah's tongue is bright blue!",
        "He feels completely fine and is breathing normally.",
        "An hour ago he finished a giant blue-raspberry slushy.",
      ],
      options: ["He is very cold", "Food coloring from the slushy", "He is running out of oxygen"],
      answer: 1,
      science:
        "The tiny bumps on your tongue (papillae) soak up dyes from food and drinks, so a blue slushy can turn a tongue blue for a while. A person who is truly short of oxygen would look unwell and have trouble breathing, and their LIPS would turn bluish too, which is an emergency. Noah feels fine, so the slushy is the answer.",
    },
    {
      id: "scurvy",
      title: "The Sailors' Mystery",
      clues: [
        "Long ago, sailors spent many months at sea eating only hard biscuits and salted meat.",
        "After a few months, their gums bled and their cuts healed very slowly.",
        "When the ship reached land and they ate oranges and lemons, they got better.",
      ],
      options: ["Seasickness", "Not enough vitamin C (scurvy)", "Too much salt water"],
      answer: 1,
      science:
        "Our bodies need vitamin C to make collagen, the protein that holds gums, skin and blood vessels together. Without fresh fruit or vegetables, sailors' bodies ran out of it and they developed scurvy. In the 1700s a Navy doctor, James Lind, tested citrus fruit on sailors with scurvy, one of the earliest controlled experiments in medicine.",
    },
  ],

  // ---------------- MKS: Merlin's Three Questions ----------------
  // Part 1: sort each statement as "see" (you can point at it) or "mean" (a guess).
  // Part 2: pick the ELSE explanation that fits every SEE clue (answer = index).
  three: [
    {
      id: "oats",
      scene:
        "The stable door is open. The lid of the oat barrel is lying on the floor, and the barrel is half empty. Muddy boot prints lead from the door to the barrel. The horse in the nearest stall has oats stuck to its whiskers.",
      statements: [
        ["The barrel lid is on the floor.", "see"],
        ["A thief stole the oats in the night.", "mean"],
        ["There are oats on the horse's whiskers.", "see"],
        ["The thief was wearing muddy boots.", "mean"],
        ["Boot prints lead from the door to the barrel.", "see"],
      ],
      elseOptions: [
        "The horse got loose, nosed the lid off and ate the oats; the boot prints belong to whoever fed the horses that morning.",
        "The oats dried up and shrank in the sun.",
        "A dragon flew in through the roof and ate them.",
      ],
      answer: 0,
    },
    {
      id: "pie",
      scene:
        "A pie is cooling on the kitchen windowsill. A big bite is missing from the side nearest the window. Crumbs are scattered on the sill OUTSIDE. Kay walks in with flour all over his sleeve.",
      statements: [
        ["Kay's sleeve is covered in flour.", "see"],
        ["Kay ate the pie.", "mean"],
        ["The crumbs are on the outside of the sill.", "see"],
        ["A bite is missing from the side nearest the window.", "see"],
        ["Kay was trying to hide what he did.", "mean"],
      ],
      elseOptions: [
        "The pie ate itself.",
        "Kay was helping the cook bake (hence the flour), and something outside the window, like a hungry duck, took the bite.",
        "Kay ate it from inside the kitchen and threw the crumbs outside.",
      ],
      answer: 1,
    },
    {
      id: "book",
      scene:
        "There is a gap on the library shelf where a book should be. The gap is free of dust, but the shelf around it is dusty. A reading lamp on the table nearby is still warm. The library opened at dawn.",
      statements: [
        ["There is a gap on the shelf.", "see"],
        ["The book was stolen.", "mean"],
        ["The gap has no dust in it.", "see"],
        ["The lamp is still warm.", "see"],
        ["The thief is still in the library.", "mean"],
      ],
      elseOptions: [
        "The book was never on the shelf in the first place.",
        "The book turned invisible.",
        "Someone took the book down recently to read it by the lamp and borrowed it.",
      ],
      answer: 2,
    },
    {
      id: "dummy",
      scene:
        "In the training yard, the wooden practice dummy is lying on its side. There are deep hoof prints beside it. A rope is tied around its base, and the other end runs to a pulley on the fence.",
      statements: [
        ["The dummy is lying on its side.", "see"],
        ["A horse kicked the dummy over.", "mean"],
        ["A rope is tied around the dummy's base.", "see"],
        ["The rope runs to a pulley on the fence.", "see"],
        ["Someone was angry at the dummy.", "mean"],
      ],
      elseOptions: [
        "Someone's pulley contraption pulled it over (perhaps one that went backward).",
        "The dummy got tired and lay down.",
        "An earthquake shook only this one dummy.",
      ],
      answer: 0,
    },
  ],

  // ---------------- Which squire are you? ----------------
  // Each answer adds a point to one squire.
  squireQuiz: [
    {
      q: "A rope bridge over a gorge looks wobbly. What do you do?",
      a: [
        ["Run across fast. It'll hold!", "kay"],
        ["Walk across first to show everyone how it's done.", "lance"],
        ["Go first so I can catch anyone who slips.", "gawain"],
        ["Look closely at the knots and planks before anyone steps on it.", "percival"],
        ["Make a plan: one at a time, lightest first.", "gwen"],
        ["Quietly fix the worst knot with a little magic.", "morgan"],
      ],
    },
    {
      q: "What's your favorite thing to bring on an adventure?",
      a: [
        ["A coil of rope. You can make anything with rope.", "kay"],
        ["My sword, polished.", "lance"],
        ["Snacks for everyone.", "gawain"],
        ["Something to feed any animals we meet.", "percival"],
        ["My notebook and a pencil.", "gwen"],
        ["A pouch of shiny odds and ends.", "morgan"],
      ],
    },
    {
      q: "Your team's plan just fell apart. You...",
      a: [
        ["Improvise something brand new on the spot.", "kay"],
        ["Handle it myself. I don't need help.", "lance"],
        ["Stand in front of my friends until we regroup.", "gawain"],
        ["Notice something everyone else missed.", "percival"],
        ["Feel annoyed, then write a new plan.", "gwen"],
        ["Say \"Fine, I'll fix it myself.\"", "morgan"],
      ],
    },
    {
      q: "Pick an animal companion.",
      a: [
        ["A boar", "kay"],
        ["A fox", "lance"],
        ["A hawk", "gawain"],
        ["A rabbit", "percival"],
        ["A hound", "gwen"],
        ["A raven", "morgan"],
      ],
    },
    {
      q: "When do you feel strongest?",
      a: [
        ["When everyone says it can't be done.", "kay"],
        ["When people are watching.", "lance"],
        ["On a bright, sunny day.", "gawain"],
        ["In a quiet place where I can think.", "percival"],
        ["When everything is organized.", "gwen"],
        ["At night, when things get mysterious.", "morgan"],
      ],
    },
    {
      q: "What would your friends say is your best quality?",
      a: [
        ["I'm never boring.", "kay"],
        ["I'm talented.", "lance"],
        ["I'm brave and loyal.", "gawain"],
        ["I'm kind and observant.", "percival"],
        ["I'm smart and prepared.", "gwen"],
        ["I'm clever and resourceful.", "morgan"],
      ],
    },
  ],
  squireResults: {
    kay: "Like Kay, you're an improviser: quick, bold and full of ideas (some of them work). Just remember to think before you leap!",
    lance: "Like Lance, you're a natural talent who aims high. Your secret power-up: asking for help now and then.",
    gawain: "Like Gawain, you're a protector: brave, loyal and warm as sunshine. Pair your courage with a little caution!",
    percival: "Like Percival, you notice what others miss, and animals trust you. Believe in yourself: your observations matter.",
    gwen: "Like Gwen, you're a strategist with a plan (and probably a numbered list). When plans break, you're the one who makes a better one.",
    morgan: "Like Morgan, you're clever and resourceful, with a bit of magic about you. It's okay to ask for help sometimes!",
  },
};
