"use strict";
// The four mini-games. Each one draws into the stage returned by gamePage() in site.js.

// ---------------- Max: Diagnose the Case ----------------
function gameDiagnose() {
  const stage = gamePage("g.diag", "max");
  const cases = shuffle(GAMES.diagnose);
  let i = 0;
  let score = 0;
  const intro = () => {
    stage.innerHTML = `<p class="lead">${esc(t("g.diag.intro"))}</p>
      ${pic("images/max/games/diagnose.jpg", t("g.diag.name"), { series: "max", cls: "game-art", label: t("g.diag.name") })}
      <p class="small muted">${esc(t("g.diag.note"))}</p>
      <button class="btn big start">${esc(t("games.play"))}</button>`;
    $(".start", stage).onclick = show;
  };
  const show = () => {
    const c = cases[i];
    const k = `gd.${c.id}`;
    const opts = shuffle(c.options.map((o, j) => [tx(`${k}.opt${j}`, o), j === c.answer]));
    stage.innerHTML = `<p class="progress">${i + 1} / ${cases.length} · ${esc(t("games.score", { s: score, n: cases.length }))}</p>
      <article class="case-file">
        <h2>${esc(tx(`${k}.title`, c.title))}</h2>
        <h3>${esc(t("g.diag.clues"))}</h3>
        <ol class="clues">${c.clues.map((cl, j) => `<li>${esc(tx(`${k}.clue${j}`, cl))}</li>`).join("")}</ol>
        <h3>${esc(t("g.diag.question"))}</h3>
        <div class="choices">${opts.map(([o], j) => `<button class="choice" data-j="${j}">${esc(o)}</button>`).join("")}</div>
        <div class="feedback"></div>
      </article>`;
    stage.querySelectorAll(".choice").forEach((btn) => {
      btn.onclick = () => {
        const right = opts[+btn.dataset.j][1];
        if (right) score++;
        stage.querySelectorAll(".choice").forEach((b2) => {
          b2.disabled = true;
          if (opts[+b2.dataset.j][1]) b2.classList.add("right");
        });
        if (!right) btn.classList.add("wrong");
        $(".feedback", stage).innerHTML = `<p class="verdict ${right ? "ok" : "no"}">${esc(t(right ? "games.correct" : "games.wrong"))}</p>
          <h3>${esc(t("g.diag.science"))}</h3><p>${esc(tx(`${k}.science`, c.science))}</p>
          <button class="btn next">${esc(t("games.next"))} →</button>`;
        $(".next", stage).onclick = () => {
          i++;
          if (i < cases.length) show();
          else done();
        };
      };
    });
  };
  const done = () => {
    stage.innerHTML = `<div class="done"><p class="big-msg">${esc(t("g.diag.done", { s: score, n: cases.length }))}</p>
      <button class="btn big again">${esc(t("games.again"))}</button></div>`;
    $(".again", stage).onclick = () => location.reload();
  };
  intro();
}

// ---------------- MKS: Merlin's Three Questions ----------------
function gameThree() {
  const stage = gamePage("g.three", "mks");
  const scenes = shuffle(GAMES.three);
  let i = 0;
  let score = 0;
  let total = 0;
  const intro = () => {
    stage.innerHTML = `<p class="lead">${esc(t("g.three.intro"))}</p>
      <div class="three-legend">
        <span class="tag see">${esc(t("g.three.see"))}</span> ${esc(t("g.three.seeHint"))}<br>
        <span class="tag mean">${esc(t("g.three.mean"))}</span> ${esc(t("g.three.meanHint"))}<br>
        <span class="tag else">${esc(t("g.three.else"))}</span> ${esc(t("g.three.elseHint"))}
      </div>
      ${pic("images/mks/games/three-questions.jpg", t("g.three.name"), { series: "mks", cls: "game-art", label: t("g.three.name") })}
      <button class="btn big start">${esc(t("games.play"))}</button>`;
    $(".start", stage).onclick = show;
  };
  const show = () => {
    const sc = scenes[i];
    const k = `g3.${sc.id}`;
    const items = shuffle(sc.statements.map(([text, kind], j) => ({ text: tx(`${k}.st${j}`, text), kind })));
    let answered = 0;
    stage.innerHTML = `<p class="progress">${i + 1} / ${scenes.length}</p>
      <article class="case-file">
        <h3>${esc(t("g.three.scene"))}</h3>
        <p class="scene">${esc(tx(`${k}.scene`, sc.scene))}</p>
        <ul class="sort-list">${items.map((it, j) => `<li data-j="${j}"><span>${esc(it.text)}</span>
          <span class="sort-btns"><button class="tag see" data-k="see">${esc(t("g.three.see"))}</button><button class="tag mean" data-k="mean">${esc(t("g.three.mean"))}</button></span></li>`).join("")}</ul>
        <div class="else-part"></div>
      </article>`;
    stage.querySelectorAll(".sort-list li").forEach((li) => {
      li.querySelectorAll("button").forEach((b) => {
        b.onclick = () => {
          const it = items[+li.dataset.j];
          const ok = b.dataset.k === it.kind;
          total++;
          if (ok) score++;
          li.classList.add(ok ? "ok" : "no");
          li.querySelector(".sort-btns").innerHTML = `<span class="tag ${it.kind}">${esc(t(`g.three.${it.kind}`))}</span>${ok ? " ✓" : " ✗"}`;
          if (++answered === items.length) elsePart(sc, k);
        };
      });
    });
  };
  const elsePart = (sc, k) => {
    const opts = shuffle(sc.elseOptions.map((o, j) => [tx(`${k}.else${j}`, o), j === sc.answer]));
    const box = $(".else-part", stage);
    box.innerHTML = `<h3><span class="tag else">${esc(t("g.three.else"))}</span> ${esc(t("g.three.elseHint"))}</h3>
      <div class="choices">${opts.map(([o], j) => `<button class="choice" data-j="${j}">${esc(o)}</button>`).join("")}</div>
      <div class="feedback"></div>`;
    box.querySelectorAll(".choice").forEach((btn) => {
      btn.onclick = () => {
        const right = opts[+btn.dataset.j][1];
        total++;
        if (right) score++;
        box.querySelectorAll(".choice").forEach((b2) => {
          b2.disabled = true;
          if (opts[+b2.dataset.j][1]) b2.classList.add("right");
        });
        if (!right) btn.classList.add("wrong");
        $(".feedback", box).innerHTML = `<p class="verdict ${right ? "ok" : "no"}">${esc(t(right ? "games.correct" : "games.wrong"))}</p>
          <button class="btn next">${esc(t("games.next"))} →</button>`;
        $(".next", box).onclick = () => {
          i++;
          if (i < scenes.length) show();
          else done();
        };
      };
    });
    box.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };
  const done = () => {
    stage.innerHTML = `<div class="done">
      ${pic("images/mks/characters/merlin.jpg", "Merlin", { series: "mks", cls: "char-pic", label: "Merlin" })}
      <p class="big-msg">${esc(t("g.three.done", { s: score, n: total }))}</p>
      <button class="btn big again">${esc(t("games.again"))}</button></div>`;
    $(".again", stage).onclick = () => location.reload();
  };
  intro();
}

// ---------------- Memory match ----------------
function gameMemory() {
  const stage = gamePage("g.memory", null);
  const chars = [];
  for (const s of SITE.series) for (const c of s.characters) chars.push({ ...c, series: s.id, color: s.color });
  let pairs = 6;
  const start = () => {
    const picks = shuffle(chars).slice(0, pairs);
    const deck = shuffle([...picks, ...picks].map((c, n) => ({ ...c, key: c.series + c.id, n })));
    let open = [];
    let moves = 0;
    let found = 0;
    stage.innerHTML = `<div class="mem-bar">
        <span class="moves">${esc(t("g.memory.moves", { m: 0 }))}</span>
        <label>${esc(t("g.memory.level"))}
          <select class="lvl">${[6, 8, 10].map((n) => `<option ${n === pairs ? "selected" : ""} value="${n}">${n * 2}</option>`).join("")}</select>
        </label>
      </div>
      <div class="mem-grid n${pairs}">${deck.map((c, j) => `<button class="mem-card" data-j="${j}" aria-label="?">
        <span class="mem-back"></span>
        <span class="mem-front" style="--c:${c.color}">${pic(c.image, charName(c.series, c), { series: c.series, cls: "mem-pic", label: charName(c.series, c) })}<span class="mem-name">${esc(charName(c.series, c))}</span></span>
      </button>`).join("")}</div>`;
    $(".lvl", stage).onchange = (e) => {
      pairs = +e.target.value;
      start();
    };
    stage.querySelectorAll(".mem-card").forEach((card) => {
      card.onclick = () => {
        if (card.classList.contains("up") || open.length === 2) return;
        card.classList.add("up");
        open.push(card);
        if (open.length < 2) return;
        moves++;
        $(".moves", stage).textContent = t("g.memory.moves", { m: moves });
        const [a, b] = open.map((x) => deck[+x.dataset.j]);
        if (a.key === b.key) {
          open.forEach((x) => x.classList.add("matched"));
          open = [];
          if (++found === pairs) {
            setTimeout(() => {
              stage.insertAdjacentHTML("beforeend", `<div class="done"><p class="big-msg">${esc(t("g.memory.done", { m: moves }))}</p><button class="btn big again">${esc(t("games.again"))}</button></div>`);
              $(".again", stage).onclick = start;
            }, 400);
          }
        } else {
          setTimeout(() => {
            open.forEach((x) => x.classList.remove("up"));
            open = [];
          }, 900);
        }
      };
    });
  };
  start();
}

// ---------------- Which squire are you? ----------------
function gameSquire() {
  const stage = gamePage("g.squire", "mks");
  const qs = GAMES.squireQuiz;
  const mks = seriesById("mks");
  let i = 0;
  const tally = {};
  const show = () => {
    const q = qs[i];
    const answers = shuffle(q.a.map(([text, sq], j) => [tx(`gs.q${i}.a${j}`, text), sq]));
    stage.innerHTML = `<p class="progress">${esc(t("g.squire.q", { i: i + 1, n: qs.length }))}</p>
      <article class="case-file"><h2>${esc(tx(`gs.q${i}`, q.q))}</h2>
      <div class="choices">${answers.map(([text], j) => `<button class="choice" data-j="${j}">${esc(text)}</button>`).join("")}</div></article>`;
    stage.querySelectorAll(".choice").forEach((btn) => {
      btn.onclick = () => {
        const sq = answers[+btn.dataset.j][1];
        tally[sq] = (tally[sq] || 0) + 1;
        i++;
        if (i < qs.length) show();
        else done();
      };
    });
  };
  const done = () => {
    const best = Object.entries(tally).sort((a, b) => b[1] - a[1] || Math.random() - 0.5)[0][0];
    const c = mks.characters.find((x) => x.id === best);
    stage.innerHTML = `<div class="done squire-result">
      ${pic(c.image, c.name, { series: "mks", cls: "char-pic big", label: c.name })}
      <p class="big-msg">${esc(t("g.squire.result", { name: c.name }))}</p>
      <p class="role">${esc(tx(`char.mks.${c.id}.role`, c.role))}</p>
      <p>${esc(tx(`gs.res.${best}`, GAMES.squireResults[best]))}</p>
      <button class="btn big again">${esc(t("games.again"))}</button></div>`;
    $(".again", stage).onclick = () => location.reload();
  };
  show();
}
