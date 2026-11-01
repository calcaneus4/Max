"use strict";
// Shared code for every page: language switching, header and footer, picture fallbacks and
// the page renderers. Content comes from data/books.js and data/lang/*.js.

const LANGS = ["en", "es", "fr", "de", "it", "ja"];
const LANG_LABELS = { en: "English", es: "Español", fr: "Français", de: "Deutsch", it: "Italiano", ja: "日本語" };

// ---------- Language ----------
function pickLang() {
  const q = new URLSearchParams(location.search).get("lang");
  if (q && LANGS.includes(q)) {
    try { localStorage.setItem("lang", q); } catch (e) {}
    return q;
  }
  try {
    const saved = localStorage.getItem("lang");
    if (saved && LANGS.includes(saved)) return saved;
  } catch (e) {}
  const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
  return LANGS.includes(nav) ? nav : "en";
}
const LANG_CODE = pickLang();
document.documentElement.lang = LANG_CODE;

// Interface text by key, with {placeholders}.
function t(key, vars) {
  const table = (window.LANG && window.LANG[LANG_CODE]) || {};
  let s = table[key] ?? (window.LANG.en || {})[key] ?? key;
  if (vars) for (const [k, v] of Object.entries(vars)) s = s.split(`{${k}}`).join(v);
  return s;
}

// Content text: the translation if there is one, otherwise the English from data files.
function tx(key, english) {
  const table = (window.LANG && window.LANG[LANG_CODE]) || {};
  return table[key] || english || "";
}

function setLang(code) {
  try { localStorage.setItem("lang", code); } catch (e) {}
  const url = new URL(location.href);
  url.searchParams.set("lang", code);
  location.href = url.toString();
}

// Keeps the chosen language on internal links.
function link(href) {
  if (LANG_CODE === "en") return href;
  return href + (href.includes("?") ? "&" : "?") + "lang=" + LANG_CODE;
}

// ---------- Small helpers ----------
const $ = (sel, root = document) => root.querySelector(sel);
function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function el(html) {
  const tpl = document.createElement("template");
  tpl.innerHTML = html.trim();
  return tpl.content.firstElementChild;
}
const SITE = window.SITE;
const seriesById = (id) => SITE.series.find((s) => s.id === id);
const booksIn = (id) => SITE.books.filter((b) => b.series === id).sort((a, b) => a.number - b.number);
const seriesName = (s) => tx(`series.${s.id}.name`, s.name);
// Placeholder titles ("Book 3") are shown in the visitor's language until a real title is set.
const charName = (sid, c) => tx(`char.${sid}.${c.id}.name`, c.name);
// Turns blank-line-separated text into paragraphs.
const paras = (text, cls = "") => String(text || "").split(/\n\s*\n/).map((x) => `<p${cls ? ` class="${cls}"` : ""}>${esc(x.trim())}</p>`).join("");
const bookTitle = (b) => (/^Book \d+$/.test(b.title) ? t("book.number", { n: b.number }) : tx(`book.${b.id}.title`, b.title));
const seriesShort = (s) => tx(`series.${s.id}.short`, LANG_CODE === "en" ? s.short : tx(`series.${s.id}.name`, s.short));
const bookCount = (id) => {
  const n = booksIn(id).length;
  return n === 1 ? t("series.countOne") : t("series.count", { n });
};

// ---------- Pictures ----------
// "images/max/01/02.jpg" -> "images/max/01/02-sm.jpg" (the small copy made by tools/import_images.py).
const small = (src) => String(src).replace(/\.jpg$/i, "-sm.jpg");
// A picture that falls back to a drawn title card when its file is missing.
function pic(src, alt, opts = {}) {
  const s = opts.series ? seriesById(opts.series) : null;
  const style = s ? `--c:${s.color};--a:${s.accent}` : "";
  return `<span class="pic ${opts.cls || ""}" style="${style}"${opts.hideMissing ? ' data-hide-missing="1"' : ""} data-label="${esc(opts.label || alt)}" data-sub="${esc(opts.sub || "")}">
    <img src="${esc(opts.small ? small(src) : src)}" alt="${esc(alt)}" loading="lazy" onerror="${opts.small ? "if (!this.dataset.tried) { this.dataset.tried = 1; this.src = this.dataset.big; } else picFail(this)" : "picFail(this)"}" data-big="${esc(src)}">
  </span>`;
}
window.picFail = function (img) {
  const box = img.parentElement;
  img.remove();
  box.classList.add("ph");
  if (box.dataset.hideMissing) {
    box.remove();
    return;
  }
  box.insertAdjacentHTML("beforeend", `<span class="ph-label">${esc(box.dataset.label)}</span>${box.dataset.sub ? `<span class="ph-sub">${esc(box.dataset.sub)}</span>` : ""}`);
};
// Gallery pictures are simply left out when their file is missing.
function galleryPic(src, alt, series) {
  const s = seriesById(series);
  return `<button class="gal" style="--c:${s.color}" data-full="${esc(src)}" aria-label="${esc(alt)}">
    <img src="${esc(small(src))}" alt="${esc(alt)}" loading="lazy" onerror="if (!this.dataset.full) { this.dataset.full = 1; this.src = this.closest('.gal').dataset.full; } else { this.closest('.gal').remove(); galleryCheck(); }">
  </button>`;
}
window.galleryCheck = function () {
  document.querySelectorAll("[data-gallery]").forEach((g) => {
    if (!g.querySelector(".gal")) g.closest("section")?.classList.add("empty-gallery");
  });
};

// ---------- Lightbox ----------
function initLightbox() {
  document.addEventListener("click", (e) => {
    const g = e.target.closest(".gal");
    if (!g) return;
    const all = [...document.querySelectorAll(".gal")];
    let i = all.indexOf(g);
    const box = el(`<div class="lightbox" role="dialog" aria-modal="true">
      <button class="lb-close" aria-label="Close">×</button>
      <button class="lb-prev" aria-label="Previous">‹</button>
      <img alt="">
      <button class="lb-next" aria-label="Next">›</button>
    </div>`);
    const img = $("img", box);
    const show = () => { img.src = all[i].dataset.full; img.alt = all[i].getAttribute("aria-label"); };
    const close = () => { box.remove(); document.removeEventListener("keydown", onKey); };
    const step = (d) => { i = (i + d + all.length) % all.length; show(); };
    const onKey = (ev) => { if (ev.key === "Escape") close(); if (ev.key === "ArrowLeft") step(-1); if (ev.key === "ArrowRight") step(1); };
    box.addEventListener("click", (ev) => {
      if (ev.target === box || ev.target.classList.contains("lb-close")) close();
      if (ev.target.classList.contains("lb-prev")) step(-1);
      if (ev.target.classList.contains("lb-next")) step(1);
    });
    document.addEventListener("keydown", onKey);
    show();
    document.body.appendChild(box);
  });
}

// ---------- Header and footer ----------
function renderChrome(active) {
  const nav = [
    ["index.html", t("nav.home"), "home"],
    ...SITE.series.map((s) => [`series.html?id=${s.id}`, seriesShort(s), s.id]),
    ["games.html", t("nav.games"), "games"],
    ["index.html#about", t("nav.about"), "about"],
  ];
  const header = el(`<header class="site-header">
    <a class="brand" href="${link("index.html")}"><span class="brand-mark" aria-hidden="true">✎</span>${esc(SITE.author.name)}</a>
    <button class="menu-btn" aria-label="Menu" aria-expanded="false">☰</button>
    <nav class="site-nav">
      ${nav.map(([href, label, id]) => `<a href="${link(href)}" class="${id === active ? "on" : ""}">${esc(label)}</a>`).join("")}
      <label class="lang-pick"><span class="sr">${esc(t("nav.language"))}</span>
        <select aria-label="${esc(t("nav.language"))}">
          ${LANGS.map((c) => `<option value="${c}" ${c === LANG_CODE ? "selected" : ""}>${LANG_LABELS[c]}</option>`).join("")}
        </select>
      </label>
    </nav>
  </header>`);
  $("select", header).addEventListener("change", (e) => setLang(e.target.value));
  $(".menu-btn", header).addEventListener("click", (e) => {
    const open = header.classList.toggle("open");
    e.currentTarget.setAttribute("aria-expanded", open);
  });
  document.body.prepend(header);
  document.body.appendChild(el(`<footer class="site-footer">
    <p>© ${new Date().getFullYear()} ${esc(SITE.author.name)}. ${esc(t("footer.rights"))}</p>
    <p class="small">${esc(t("footer.tm"))}</p>
  </footer>`));
  initLightbox();
}

// ---------- Shared pieces ----------
function bookCard(b) {
  const s = seriesById(b.series);
  return `<a class="book-card" href="${link(`book.html?id=${b.id}`)}" style="--c:${s.color};--a:${s.accent}">
    ${pic(b.cover, bookTitle(b), { series: b.series, cls: "cover", label: bookTitle(b), sub: seriesShort(s), small: true })}
    <span class="book-num">${esc(t("book.number", { n: b.number }))}</span>
    <span class="book-title">${esc(bookTitle(b))}</span>
  </a>`;
}

// One picture from each book in turn (the first is each book's wide scene), so every book shows up.
function roundRobin(series, limit) {
  const books = booksIn(series);
  const out = [];
  for (let i = 0; out.length < limit && books.some((b) => (b.gallery || [])[i]); i++) {
    for (const b of books) if ((b.gallery || [])[i] && out.length < limit) out.push([b.gallery[i], bookTitle(b), series]);
  }
  return out;
}

function seriesGallery(series, limit) {
  return roundRobin(series, limit).map(([src, alt]) => galleryPic(src, alt, series)).join("");
}

// ---------- Pages ----------
function renderHome() {
  renderChrome("home");
  const main = $("main");
  const latest = SITE.series.map((s) => booksIn(s.id).slice(-1)[0]).filter(Boolean);
  // Mixed gallery: alternate pictures from each series.
  const mixed = [];
  const lists = SITE.series.map((s) => roundRobin(s.id, 16));
  for (let i = 0; mixed.length < 16 && lists.some((l) => l[i]); i++) for (const l of lists) if (l[i]) mixed.push(l[i]);
  const a = SITE.author;
  main.innerHTML = `
    <section class="hero">
      <div class="hero-art">
        ${SITE.series.map((s, i) => `<div class="hero-slide${i ? "" : " on"}" data-series="${s.id}">
          <img src="${esc(s.hero)}" alt="${esc(seriesName(s))}" onerror="heroFail(this)">
        </div>`).join("")}
      </div>
      <div class="hero-text">
        <h1 class="hero-title">${esc(tx(`series.${SITE.series[0].id}.bannerTitle`, SITE.series[0].bannerTitle))}</h1>
        <p class="lead hero-line">${esc(tx(`series.${SITE.series[0].id}.bannerLine`, SITE.series[0].bannerLine))}</p>
        <div class="hero-toggle" role="tablist" aria-label="${esc(t("home.explore"))}">
          ${SITE.series.map((s, i) => `<button role="tab" class="hero-tab${i ? "" : " on"}" data-series="${s.id}" style="--c:${s.color};--a:${s.accent}" aria-selected="${!i}">${esc(seriesShort(s))}</button>`).join("")}
        </div>
        <a class="hero-go" href="${link(`series.html?id=${SITE.series[0].id}`)}">${esc(t("series.view"))} →</a>
      </div>
    </section>

    <section class="wrap">
      <h2 class="section-title">${esc(t("home.explore"))}</h2>
      <div class="series-grid">
        ${SITE.series.map((s) => `
          <article class="series-card" style="--c:${s.color};--a:${s.accent}">
            <a href="${link(`series.html?id=${s.id}`)}" class="series-card-art">
              ${booksIn(s.id).slice(0, 3).map((b) => pic(b.cover, bookTitle(b), { series: s.id, cls: "cover fan", label: bookTitle(b), sub: seriesShort(s), small: true })).join("")}
            </a>
            <div class="series-card-body">
              <h3>${esc(seriesName(s))}</h3>
              <p class="meta">${esc(t("series.ages", { ages: s.ages }))} · ${esc(bookCount(s.id))}</p>
              <p>${esc(tx(`series.${s.id}.tagline`, s.tagline))}</p>
              <a class="btn" href="${link(`series.html?id=${s.id}`)}">${esc(t("series.view"))} →</a>
            </div>
          </article>`).join("")}
      </div>
    </section>

    <section class="wrap">
      <h2 class="section-title">${esc(t("home.gallery"))}</h2>
      <div class="gallery" data-gallery>${mixed.map(([src, alt, sid]) => galleryPic(src, alt, sid)).join("")}</div>
    </section>

    <section class="wrap">
      <h2 class="section-title">${esc(t("home.latest"))}</h2>
      <div class="book-row">${latest.map(bookCard).join("")}</div>
    </section>

    <section class="wrap games-teaser">
      <h2 class="section-title">${esc(t("home.games"))}</h2>
      <p class="lead small">${esc(t("home.gamesLead"))}</p>
      ${gameTiles()}
    </section>

    <section class="wrap about" id="about">
      <h2 class="section-title">${esc(t("about.title"))}</h2>
      <div class="about-row">
        ${pic(a.photo, a.name, { cls: "author-photo", label: "MKD" })}
        <p>${esc(tx("author.bio", a.bio))}</p>
      </div>
      ${a.contact ? `<p><a class="btn" href="${esc(a.contact)}">${esc(t("about.contact"))}</a></p>` : ""}
    </section>`;
  galleryCheck();
  initHero();
}

// ---------- Home banner: one slide per series, cross-fading, with series buttons ----------
window.heroFail = function (img) {
  // No banner picture for this series yet: drop its slide and button.
  const id = img.closest(".hero-slide").dataset.series;
  document.querySelectorAll(`[data-series="${id}"]`).forEach((n) => n.remove());
  const first = document.querySelector(".hero-slide");
  if (first && !document.querySelector(".hero-slide.on")) showHero(first.dataset.series);
  const tabs = document.querySelectorAll(".hero-tab");
  if (tabs.length < 2) tabs.forEach((x) => (x.hidden = true));
};

function showHero(id) {
  const s = seriesById(id);
  document.querySelectorAll(".hero-slide").forEach((n) => n.classList.toggle("on", n.dataset.series === id));
  document.querySelectorAll(".hero-tab").forEach((n) => {
    n.classList.toggle("on", n.dataset.series === id);
    n.setAttribute("aria-selected", n.dataset.series === id);
  });
  const box = $(".hero-text");
  if (box && s) {
    box.style.setProperty("--c", s.color);
    $(".hero-go", box).href = link(`series.html?id=${id}`);
    // Each series has its own headline and line; they fade over with the picture.
    const title = tx(`series.${id}.bannerTitle`, s.bannerTitle);
    const line = tx(`series.${id}.bannerLine`, s.bannerLine);
    const h = $(".hero-title", box);
    const l = $(".hero-line", box);
    if (h.textContent !== title) {
      box.classList.add("swap");
      setTimeout(() => {
        h.textContent = title;
        l.textContent = line;
        box.classList.remove("swap");
      }, 250);
    }
  }
}

function initHero() {
  const hero = $(".hero");
  if (!hero) return;
  let paused = false;
  hero.addEventListener("mouseenter", () => (paused = true));
  hero.addEventListener("mouseleave", () => (paused = false));
  hero.addEventListener("click", (e) => {
    const tab = e.target.closest(".hero-tab");
    if (!tab) return;
    showHero(tab.dataset.series);
    paused = true; // a visitor who picks a series keeps it
  });
  showHero(SITE.series[0].id);
  const still = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (still) return;
  setInterval(() => {
    const slides = [...document.querySelectorAll(".hero-slide")];
    if (paused || slides.length < 2 || document.hidden) return;
    const i = slides.findIndex((n) => n.classList.contains("on"));
    showHero(slides[(i + 1) % slides.length].dataset.series);
  }, HERO_SECONDS * 1000);
}
const HERO_SECONDS = 8;

function renderSeries() {
  const id = new URLSearchParams(location.search).get("id") || SITE.series[0].id;
  const s = seriesById(id) || SITE.series[0];
  renderChrome(s.id);
  document.title = `${seriesName(s)} · ${SITE.author.name}`;
  const books = booksIn(s.id);
  $("main").innerHTML = `
    <section class="series-hero" style="--c:${s.color};--a:${s.accent}">
      ${pic(s.hero, seriesName(s), { series: s.id, cls: "series-hero-pic", label: seriesName(s) })}
      <div class="series-hero-text">
        <h1>${esc(seriesName(s))}</h1>
        <p class="meta">${esc(t("series.ages", { ages: s.ages }))} · ${esc(bookCount(s.id))}</p>
        <p class="lead">${esc(tx(`series.${s.id}.tagline`, s.tagline))}</p>
      </div>
    </section>
    <section class="wrap prose" style="--c:${s.color}">
      ${s.motto ? `<blockquote class="motto">“${esc(tx(`series.${s.id}.motto`, s.motto))}”<cite>${esc(t("series.motto"))}</cite></blockquote>` : ""}
      ${paras(tx(`series.${s.id}.about`, s.about))}
      ${s.editionsNote ? `<p class="small">${esc(tx(`series.${s.id}.editionsNote`, s.editionsNote))}</p>` : ""}
    </section>
    <section class="wrap" style="--c:${s.color};--a:${s.accent}">
      ${seriesStoreButtons(s)}
      <h2 class="section-title">${esc(t("series.order"))}</h2>
      <p class="small">${esc(tx(`series.${s.id}.readingOrder`, s.readingOrder))}</p>
      <ol class="book-grid">${books.map((b) => `<li>${bookCard(b)}</li>`).join("")}</ol>
    </section>
    <section class="wrap" style="--c:${s.color};--a:${s.accent}">
      <h2 class="section-title">${esc(t("series.characters"))}</h2>
      <div class="char-grid">
        ${s.characters.map((c) => `
          <article class="char-card">
            <button class="gal char-zoom" style="--c:${s.color}" data-full="${esc(c.image.replace(/\.jpg$/i, "-sheet.jpg"))}" aria-label="${esc(charName(s.id, c))}">
              ${pic(c.image, charName(s.id, c), { series: s.id, cls: "char-pic", label: charName(s.id, c), small: true })}
            </button>
            <h3>${esc(charName(s.id, c))}</h3>
            <p class="role">${esc(tx(`char.${s.id}.${c.id}.role`, c.role))}</p>
            <p>${esc(tx(`char.${s.id}.${c.id}.bio`, c.bio))}</p>
          </article>`).join("")}
      </div>
    </section>
    <section class="wrap">
      <h2 class="section-title">${esc(t("series.gallery"))}</h2>
      <div class="gallery" data-gallery>${seriesGallery(s.id, 24)}</div>
    </section>`;
  galleryCheck();
}

// "Get the series" buttons on a series page, from its seriesLinks.
function seriesStoreButtons(s) {
  const rows = [];
  const order = [...SITE.editions].sort((x, y) => (y === LANG_CODE) - (x === LANG_CODE));
  for (const ed of order) {
    const links = (s.seriesLinks || {})[ed] || {};
    const btns = SITE.formats.filter((f) => links[f]).map((f) => `<a class="btn" href="${esc(links[f])}" target="_blank" rel="noopener">${esc(t(`format.${f}`))}</a>`);
    if (btns.length) rows.push(`<div class="buy-row"><span class="buy-ed">${esc(t(`edition.${ed}`))}</span>${btns.join("")}</div>`);
  }
  return rows.length ? `<div class="series-store"><h2 class="mini-title">${esc(t("series.get"))}</h2>${rows.join("")}</div>` : "";
}

function buyButtons(b) {
  const rows = [];
  // The visitor's own language edition first, then the rest.
  const order = [...SITE.editions].sort((x, y) => (y === LANG_CODE) - (x === LANG_CODE));
  for (const ed of order) {
    // The book's own link, or else the series-wide store page for that language and format.
    const seriesLinks = (seriesById(b.series).seriesLinks || {})[ed] || {};
    const links = { ...seriesLinks, ...Object.fromEntries(Object.entries((b.buy || {})[ed] || {}).filter(([, v]) => v)) };
    const yt = (b.youtube || {})[ed];
    const btns = SITE.formats
      .map((f) => [f, f === "youtube" ? yt : links[f]])
      .filter(([, url]) => url)
      .map(([f, url]) => `<a class="btn ${f === "youtube" ? "btn-yt" : ""}" href="${esc(url)}" target="_blank" rel="noopener">${esc(t(`format.${f}`))}</a>`);
    if (btns.length) rows.push(`<div class="buy-row"><span class="buy-ed">${esc(t(`edition.${ed}`))}</span>${btns.join("")}</div>`);
  }
  return rows.length ? rows.join("") : `<p class="small muted">${esc(t("book.soon"))}</p>`;
}

function youtubeEmbed(b) {
  const url = (b.youtube || {})[LANG_CODE] || (b.youtube || {}).en;
  const m = url && url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
  if (!m) return "";
  return `<section class="wrap"><h2 class="section-title">${esc(t("book.watch"))}</h2>
    <div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${m[1]}" title="${esc(bookTitle(b))}" allowfullscreen loading="lazy"></iframe></div></section>`;
}

function renderBook() {
  const id = new URLSearchParams(location.search).get("id");
  const b = SITE.books.find((x) => x.id === id) || SITE.books[0];
  const s = seriesById(b.series);
  renderChrome(s.id);
  document.title = `${bookTitle(b)} · ${seriesName(s)}`;
  const list = booksIn(s.id);
  const i = list.indexOf(b);
  const prev = list[i - 1];
  const next = list[i + 1];
  $("main").innerHTML = `
    <section class="wrap book-top" style="--c:${s.color};--a:${s.accent}">
      ${pic(b.cover, bookTitle(b), { series: s.id, cls: "cover big", label: bookTitle(b), sub: seriesShort(s) })}
      <div class="book-info">
        <a class="crumb" href="${link(`series.html?id=${s.id}`)}">${esc(seriesName(s))}</a>
        <p class="book-num">${esc(t("book.number", { n: b.number }))}</p>
        <h1>${esc(bookTitle(b))}</h1>
        ${b.tagline ? `<p class="tagline">${esc(tx(`book.${b.id}.tagline`, b.tagline))}</p>` : ""}
        <div class="blurb">${paras(tx(`book.${b.id}.blurb`, b.blurb))}</div>
        ${b.learn && b.learn.length ? `<div class="learn"><h2 class="mini-title">${esc(t("book.learn"))}</h2>
          <ul>${b.learn.map((l, i) => `<li>${esc(tx(`book.${b.id}.learn${i}`, l))}</li>`).join("")}</ul></div>` : ""}
        <h2 class="mini-title">${esc(t("book.get"))}</h2>
        <div class="buy">${buyButtons(b)}</div>
      </div>
    </section>
    ${youtubeEmbed(b)}
    <section class="wrap">
      <h2 class="section-title">${esc(t("book.inside"))}</h2>
      <div class="gallery" data-gallery>${(b.gallery || []).map((g) => galleryPic(g, bookTitle(b), s.id)).join("")}</div>
    </section>
    <nav class="wrap book-nav" style="--c:${s.color}">
      ${prev ? `<a class="btn ghost" href="${link(`book.html?id=${prev.id}`)}">← ${esc(t("book.prev"))}</a>` : "<span></span>"}
      <a class="btn ghost" href="${link(`series.html?id=${s.id}`)}">${esc(t("book.back"))}</a>
      ${next ? `<a class="btn ghost" href="${link(`book.html?id=${next.id}`)}">${esc(t("book.next"))} →</a>` : "<span></span>"}
    </nav>`;
  galleryCheck();
}

function gameTiles() {
  const games = [
    ["game-diagnose.html", "g.diag", "max", "🩺"],
    ["game-three-questions.html", "g.three", "mks", "🔍"],
    ["game-memory.html", "g.memory", null, "🃏"],
    ["game-squire.html", "g.squire", "mks", "🛡️"],
  ];
  return `<div class="game-grid">${games.map(([href, k, sid, icon]) => {
    const s = sid ? seriesById(sid) : null;
    return `<a class="game-tile" href="${link(href)}" style="--c:${s ? s.color : "#c0392b"};--a:${s ? s.accent : "#e8a93c"}">
      <span class="game-icon" aria-hidden="true">${icon}</span>
      <span class="game-name">${esc(t(`${k}.name`))}</span>
      <span class="game-desc">${esc(t(`${k}.desc`))}</span>
      <span class="btn small">${esc(t("games.play"))}</span>
    </a>`;
  }).join("")}</div>`;
}

function renderGames() {
  renderChrome("games");
  document.title = `${t("games.title")} · ${SITE.author.name}`;
  $("main").innerHTML = `<section class="wrap"><h1 class="page-title">${esc(t("games.title"))}</h1>
    <p class="lead">${esc(t("games.lead"))}</p>${gameTiles()}</section>`;
}

// Standard frame for a game page.
function gamePage(key, seriesId) {
  renderChrome("games");
  document.title = `${t(`${key}.name`)} · ${SITE.author.name}`;
  const s = seriesId ? seriesById(seriesId) : null;
  const main = $("main");
  main.innerHTML = `<section class="wrap game" style="--c:${s ? s.color : "#c0392b"};--a:${s ? s.accent : "#e8a93c"}">
    <a class="crumb" href="${link("games.html")}">← ${esc(t("games.back"))}</a>
    <h1 class="page-title">${esc(t(`${key}.name`))}</h1>
    <div class="game-stage"></div>
  </section>`;
  return $(".game-stage", main);
}

function shuffle(a) {
  const r = a.slice();
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}
