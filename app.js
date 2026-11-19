/* ============================================================
   With The Assist — dashboard interactions
   ============================================================ */

/* ---------- EFFECTS DATA ---------- */
const EFFECTS = [
  {
    title: "Transitions", level: "Easy", icon: "i-arrow",
    items: ["Whip Pan Transition", "Zoom Transition", "Spin Transition", "Glitch Transition", "Flash Transition", "Mask Transition", "Swipe Transition", "Blur Transition", "RGB Split Transition", "Match Cut"]
  },
  {
    title: "Cinematic Effects", level: "Easy", icon: "i-spark",
    items: ["Light Leak", "Lens Flare", "Film Grain", "Vignette", "Chromatic Aberration", "Camera Shake", "Glow Effect", "Film Burn", "Light Streaks"]
  },
  {
    title: "Motion and Speed Effects", level: "Medium", icon: "i-play",
    items: ["Speed Ramp", "Slow Motion", "Hyperlapse", "Motion Blur", "Freeze Frame", "Time Remapping", "Frame Blending", "Stutter Effect", "Velocity Editing"]
  },
  {
    title: "Specific Effects", level: "Medium", icon: "i-target",
    items: ["Player Tracking", "Ball Tracking", "Impact Shake", "Speed Lines", "Player Glow", "Background Removal", "Animated Arrows", "Tactical Play Diagrams", "Impact Flash"]
  },
  {
    title: "Advanced After Effects Techniques", level: "Hard", icon: "i-layers",
    items: ["Rotoscoping", "Motion Tracking", "Camera Tracking", "Green Screen / Chroma Key", "Displacement Map", "Particle Simulation", "3D Camera Animation", "Masking", "Compositing"]
  },
  {
    title: "Text and Motion Graphics", level: "Hard", icon: "i-code",
    items: ["Kinetic Typography", "3D Text Animation", "Text Tracking", "Animated Scoreboard", "Lower Thirds", "Player Name Graphics", "HUD Graphics", "Glitch Text", "3D Logo Animation"]
  },
  {
    title: "Color Grading Effects", level: "Medium", icon: "i-image",
    items: ["Cinematic Color Grade", "Teal and Orange", "High Contrast", "Black and White", "Split Toning", "Color Isolation", "Saturation Boost", "Shadow and Highlight Adjustment"]
  }
];

const TOTAL_EFFECTS = EFFECTS.reduce((n, g) => n + g.items.length, 0); // 63

/* ---------- GALLERY DATA ---------- */
const GALLERY = [
  {
    title: "AI Evidence · Step 1", note: "4 captures · 5 Nov 2026", images: [
      { src: "assets/img/step1-01.png", cap: "10:38:41 PM" },
      { src: "assets/img/step1-02.png", cap: "10:38:48 PM" },
      { src: "assets/img/step1-03.png", cap: "10:38:54 PM" },
      { src: "assets/img/step1-04.png", cap: "10:39:00 PM" }
    ]
  },
  {
    title: "Experiment Captures", note: "10 captures · 10 Nov 2026", images: [
      { src: "assets/img/test-01.png", cap: "10:35:54 AM" },
      { src: "assets/img/test-02.png", cap: "11:48:48 AM" },
      { src: "assets/img/test-03.png", cap: "11:05:18 AM" },
      { src: "assets/img/test-04.png", cap: "11:03:55 AM" },
      { src: "assets/img/test-05.png", cap: "11:04:01 AM" },
      { src: "assets/img/test-06.png", cap: "11:04:06 AM" },
      { src: "assets/img/test-07.png", cap: "11:04:14 AM" },
      { src: "assets/img/test-08.png", cap: "11:04:20 AM" },
      { src: "assets/img/test-09.png", cap: "11:04:26 AM" },
      { src: "assets/img/test-10.png", cap: "11:04:35 AM" }
    ]
  },
  {
    title: "Before / After", note: "3 captures · 10 Nov 2026", images: [
      { src: "assets/img/beforeafter-01.png", cap: "8:47:24 AM" },
      { src: "assets/img/beforeafter-02.png", cap: "8:47:34 AM" },
      { src: "assets/img/beforeafter-03.png", cap: "8:47:41 AM" }
    ]
  },
  {
    title: "Additional Captures", note: "6 captures · 10 Nov 2026", images: [
      { src: "assets/img/extra-01.png", cap: "10:27:14 AM" },
      { src: "assets/img/extra-02.png", cap: "10:22:18 AM" },
      { src: "assets/img/extra-03.png", cap: "10:22:26 AM" },
      { src: "assets/img/extra-04.png", cap: "10:22:32 AM" },
      { src: "assets/img/extra-05.png", cap: "10:22:40 AM" },
      { src: "assets/img/extra-06.png", cap: "10:22:45 AM" }
    ]
  }
];

const TITLES = {
  overview: "Overview", territory: "Territory Pitch", inquiry: "Inquiry Brief",
  sources: "Sources & Notes", effects: "Effects Library", log: "Experiment Log",
  images: "Reference Images", prompts: "Prompts & Tools", workspace: "Workspace Links"
};

/* ---------- NAVIGATION ---------- */
const sidebar = document.getElementById("sidebar");
const scrim = document.getElementById("scrim");

function setSection(name) {
  if (!document.getElementById(name) || !TITLES[name]) name = "overview";
  document.querySelectorAll(".view").forEach(v => v.classList.toggle("active", v.id === name));
  document.querySelectorAll(".nav-item").forEach(n => n.classList.toggle("active", n.dataset.section === name));
  document.getElementById("crumbTitle").textContent = TITLES[name];
  closeMenu();
  window.scrollTo(0, 0);
  updateProgress();
}

function closeMenu() {
  sidebar.classList.remove("open");
  scrim.classList.remove("show");
}

document.querySelectorAll("[data-section]").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault();
    const name = el.dataset.section;
    if (location.hash.slice(1) === name) setSection(name);
    else location.hash = name;
  });
});

window.addEventListener("hashchange", () => setSection(location.hash.slice(1) || "overview"));

document.getElementById("menuBtn").addEventListener("click", () => {
  sidebar.classList.add("open");
  scrim.classList.add("show");
});
scrim.addEventListener("click", closeMenu);

/* ---------- SCROLL PROGRESS ---------- */
const progress = document.getElementById("progress");
progress.innerHTML = "<span></span>";
const progressBar = progress.querySelector("span");

function updateProgress() {
  const h = document.documentElement;
  const max = h.scrollHeight - h.clientHeight;
  progressBar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
}
window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);

/* ---------- EFFECTS LIBRARY ---------- */
const effectSearch = document.getElementById("effectSearch");
const effectGroups = document.getElementById("effectGroups");
const effectCount = document.getElementById("effectCount");
const noResults = document.getElementById("noResults");
let activeDifficulty = "all";

function renderEffects() {
  const q = effectSearch.value.trim().toLowerCase();
  let html = "", total = 0;

  EFFECTS.forEach(group => {
    const groupMatch = !q || group.title.toLowerCase().includes(q);
    const diffMatch = activeDifficulty === "all" || group.level === activeDifficulty;
    const items = (diffMatch) ? group.items.filter(i => !q || groupMatch || i.toLowerCase().includes(q)) : [];

    if (!items.length) return;
    total += items.length;

    html += `<div class="effect-group">
      <div class="eg-head">
        <span class="eg-icon"><svg><use href="#${group.icon}"/></svg></span>
        <div><div class="eg-title">${group.title}</div><div class="eg-meta">${items.length} technique${items.length === 1 ? "" : "s"}</div></div>
        <span class="eg-level ${group.level}">${group.level}</span>
      </div>
      <div class="eg-items">${items.map(i => `<span class="effect-chip">${i}</span>`).join("")}</div>
    </div>`;
  });

  effectGroups.innerHTML = html;
  noResults.hidden = total > 0;
  effectCount.textContent = (q || activeDifficulty !== "all")
    ? `Showing ${total} of ${TOTAL_EFFECTS} effects`
    : `Showing all ${TOTAL_EFFECTS} effects`;
}

effectSearch.addEventListener("input", renderEffects);
document.getElementById("difficultyFilters").addEventListener("click", e => {
  const btn = e.target.closest(".filter");
  if (!btn) return;
  activeDifficulty = btn.dataset.difficulty;
  document.querySelectorAll("#difficultyFilters .filter").forEach(f => f.classList.toggle("active", f === btn));
  renderEffects();
});
document.getElementById("clearFilters").addEventListener("click", () => {
  effectSearch.value = "";
  activeDifficulty = "all";
  document.querySelectorAll("#difficultyFilters .filter").forEach((f, i) => f.classList.toggle("active", i === 0));
  renderEffects();
  effectSearch.focus();
});

/* ---------- GALLERY + LIGHTBOX ---------- */
const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbCap = document.getElementById("lbCap");
const lbCount = document.getElementById("lbCount");
let flatImages = [], lbIndex = 0;

function renderGallery() {
  let html = "";
  flatImages = [];

  GALLERY.forEach(group => {
    html += `<div class="gallery-group">
      <div class="gg-head"><h3>${group.title}</h3><span>${group.note}</span></div>
      <div class="gallery-grid">`;
    group.images.forEach(img => {
      const idx = flatImages.length;
      flatImages.push({ ...img, group: group.title });
      html += `<button class="shot" data-idx="${idx}" aria-label="Open ${img.cap}">
        <img src="${img.src}" alt="${group.title} — ${img.cap}" loading="lazy" />
        <span class="shot-cap">${img.cap}</span>
      </button>`;
    });
    html += `</div></div>`;
  });

  gallery.innerHTML = html;
  gallery.querySelectorAll(".shot").forEach(btn => {
    btn.addEventListener("click", () => openLightbox(Number(btn.dataset.idx)));
  });
}

function openLightbox(i) {
  lbIndex = i;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  updateLightbox();
}

function updateLightbox() {
  const img = flatImages[lbIndex];
  if (!img) return;
  lbImg.src = img.src;
  lbImg.alt = `${img.group} — ${img.cap}`;
  lbCap.textContent = `${img.group} · ${img.cap}`;
  lbCount.textContent = `${lbIndex + 1} / ${flatImages.length}`;
}

function closeLightbox() {
  lightbox.hidden = true;
  lbImg.src = "";
  document.body.style.overflow = "";
}

function stepLightbox(d) {
  lbIndex = (lbIndex + d + flatImages.length) % flatImages.length;
  updateLightbox();
}

document.getElementById("lbClose").addEventListener("click", closeLightbox);
document.getElementById("lbPrev").addEventListener("click", () => stepLightbox(-1));
document.getElementById("lbNext").addEventListener("click", () => stepLightbox(1));
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });

/* ---------- COPY BUTTONS + TOAST ---------- */
const toast = document.getElementById("toast");
let toastTimer;

function showToast() {
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1900);
}

document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", async () => {
    const el = document.getElementById(btn.dataset.copy);
    const text = el ? el.textContent.trim() : "";
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch (e) { /* clipboard unavailable */ }
      ta.remove();
    }
    showToast();
  });
});

/* ---------- KEYBOARD ---------- */
document.addEventListener("keydown", e => {
  if (!lightbox.hidden) {
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") stepLightbox(-1);
    else if (e.key === "ArrowRight") stepLightbox(1);
    return;
  }
  if (e.key === "Escape") closeMenu();
});

/* ---------- INIT ---------- */
renderEffects();
renderGallery();
setSection(location.hash.slice(1) || "overview");
updateProgress();
