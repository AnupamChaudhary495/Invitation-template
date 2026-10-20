(function () {
  const C = window.INVITE;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const media = (src, label) =>
    src ? `<img src="${esc(src)}" alt="${esc(label)}">` : `<div class="ph"><span>${esc(label)}</span></div>`;

  // ---------- simple text bindings ----------
  const text = {
    envEyebrow: C.envelope.eyebrow,
    groomFull: C.groom.full,
    brideFull: C.bride.full,
    groomParents: C.groom.parents.join("\n"),
    brideParents: C.bride.parents.join("\n"),
    sealSymbol: C.envelope.sealSymbol,
    teaser: C.envelope.teaser,
    hint: C.envelope.hint,
    mono1: C.monogram[0],
    mono2: C.monogram[1],
    heroEyebrow: C.hero.eyebrow,
    groomFirst: C.groom.first,
    brideFirst: C.bride.first,
    country: C.country,
    city: C.city,
    month: C.date.month,
    day: C.date.day,
    year: C.date.year,
    inviteEyebrow: C.invite.eyebrow,
    inviteHeading: C.invite.heading,
    inviteBody: C.invite.body,
    storyHeading: C.story.heading,
    storyText: C.story.text,
    venueEyebrow: C.venue.eyebrow,
    venueHeading: C.venue.heading,
    venueLabel: C.venue.label,
    venueName: C.venue.name,
    venueName2: C.venue.name,
    venueBlurb: C.venue.blurb,
    venueAddress: C.venue.address,
    schedEyebrow: C.schedule.eyebrow,
    schedHeading: C.schedule.heading,
    fVenue: C.footer.venueName,
    fLine: C.footer.venueLine,
    fDate: C.footer.dateLine
  };
  document.querySelectorAll("[data-k]").forEach((el) => {
    const k = el.getAttribute("data-k");
    if (k in text) el.textContent = text[k];
  });
  document.title = C.siteTitle;

  // ---------- media + links ----------
  $("#heroPhoto").innerHTML = media(C.images.hero, "Couple photo");
  $("#venuePhoto").innerHTML = media(C.images.venue, "Venue photo");
  $("#polaroids").innerHTML = C.images.story
    .map((src, i) => `<div class="polaroid">${media(src, "Story photo " + (i + 1))}</div>`)
    .join("");

  const dir = $("#venueDirections");
  dir.textContent = C.venue.directionsText;
  dir.href = C.venue.directionsUrl || "#";

  // ---------- schedule ----------
  $("#days").innerHTML = C.schedule.days
    .map(
      (d) => `
      <div class="day">
        <p class="day-label reveal">${esc(d.date)}</p>
        ${d.events
          .map(
            (e) => `
          <div class="event reveal">
            <p class="time">${esc(e.time)}</p>
            <h3>${esc(e.title)}</h3>
            <p>${esc(e.desc)}</p>
          </div>`
          )
          .join("")}
      </div>`
    )
    .join("");

  // ---------- second venue ----------
  const sv = C.secondVenue;
  if (sv && sv.enabled) {
    $("#second").innerHTML = `
      <div class="divider"></div>
      <h3 class="venue-title">${esc(sv.name)}</h3>
      <p class="address">${esc(sv.address)}</p>
      <a class="btn" href="${esc(sv.mapsUrl || "#")}" target="_blank" rel="noopener">${esc(sv.mapsText)}</a>
      <a class="btn" href="${esc(sv.directionsUrl || "#")}" target="_blank" rel="noopener">${esc(sv.directionsText)}</a>`;
  } else {
    $("#second").remove();
  }

  // ---------- envelope ----------
  const env = $("#envelope");
  const openEnvelope = () => {
    env.classList.add("open");
    document.body.classList.remove("locked");
    const a = $("#audio");
    if (C.music.src) a.play().catch(() => {});
    setTimeout(() => env.remove(), 1300);
  };
  env.addEventListener("click", openEnvelope);
  env.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") openEnvelope(); });

  // ---------- scroll reveal ----------
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }),
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // ---------- falling petals ----------
  const pc = $("#petals");
  for (let i = 0; i < 14; i++) {
    const p = document.createElement("span");
    p.className = "petal";
    const s = 0.6 + Math.random() * 1.1;
    p.style.left = Math.random() * 100 + "%";
    p.style.transform = `scale(${s})`;
    p.style.animationDuration = 14 + Math.random() * 14 + "s";
    p.style.animationDelay = -Math.random() * 20 + "s";
    pc.appendChild(p);
  }

  // ---------- music ----------
  if (C.music.src) {
    const a = $("#audio"), b = $("#music");
    a.src = C.music.src;
    b.hidden = false;
    b.addEventListener("click", () => {
      if (a.paused) { a.play(); b.classList.remove("off"); } else { a.pause(); b.classList.add("off"); }
    });
  }
})();
