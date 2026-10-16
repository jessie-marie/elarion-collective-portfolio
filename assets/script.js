const projects = [
  {
    emoji: "🧙", title: "Witch's Hollow",
    subtitle: "Idle defense game",
    blurb: "An idle tower-defense game where you play the witch: hold the hollow against waves of villagers, hunters, and boss clergy with a dual-currency upgrade economy and fully procedural audio.",
    stack: ["JavaScript", "Canvas", "Vite", "Firebase", "Capacitor"],
    tags: ["game", "web"], badge: "Flagship game",
    repo: null, demo: null,
    details: {
      context: "A from-scratch browser game built to learn game-engine architecture — and to be genuinely fun on both desktop and phone. No game engine, no audio files, no backend required to play.",
      built: [
        "Modular engine: game loop with delta-time math, high-DPI canvas renderer with screen shake, and a procedural Web Audio synthesizer (every sound generated in code)",
        "Dual-currency economy: gold for in-run upgrades (resets on death), mushrooms as permanent cross-run progression saved to localStorage",
        "Three upgrade trees — Hexes (damage), Wards (survival), Plunder (economy) — plus mastery milestone surges every 10 levels",
        "Six enemy types with distinct AI (chargers, tanks, ranged priests) and boss clergy every 10 waves",
        "Mobile-first UI with Firebase Google sign-in and a Capacitor pipeline for Android packaging"
      ],
      outcome: "Playable end-to-end with infinite wave scaling. Currently wiring cloud saves and leaderboards."
    }
  },
  {
    emoji: "💇", title: "Monarch Crossings Dashboard",
    subtitle: "Salon revenue analytics",
    blurb: "A revenue dashboard for a salon: Square payments and bookings flow in through OAuth and webhooks, and come out as KPIs, revenue trends, and booking insights.",
    stack: ["PHP 8", "Square API", "SQLite / MySQL", "Chart.js"],
    tags: ["dashboard", "web"], badge: "Client work",
    repo: null, demo: null,
    details: {
      context: "A salon owner needed to see how the business was actually doing — revenue, ticket size, new vs. returning clients, upcoming bookings — without exporting CSVs from Square by hand.",
      built: [
        "Square OAuth + webhooks syncing payments, customers, and appointments into a normalized schema",
        "KPIs for trailing 7/30/60/90 days: revenue, average ticket, new customers, bookings in the next 7 days",
        "Chart.js revenue trend chart plus a one-click Sync Now path",
        "A demo, SQLite, and MySQL pipeline sharing one UI and JSON contract — demo today, live with real Square data when ready"
      ],
      outcome: "One dashboard, three environments — demo today, live with real data when the client is ready."
    }
  },
  {
    emoji: "🚂", title: "Railroad Museum Scavenger Hunt",
    subtitle: "Mobile museum adventure",
    blurb: "A mobile-first scavenger hunt for a railroad museum: pick an adventure, earn badges, play in teams, and explore the exhibits — built for real visitors on real phones.",
    stack: ["HTML", "Bootstrap 5", "JavaScript", "PHP"],
    tags: ["web"], badge: "Public good",
    repo: "https://github.com/jessie-marie/rrmuseum", repoLabel: "GitHub", demo: null,
    details: {
      context: "Museums need interactive experiences that work on whatever phone a visitor pulls out of their pocket — no app install, no account, no friction.",
      built: [
        "Game-card adventures with setup, gameplay, badge, and team screens in a single-page flow",
        "Badge and team systems with a PHP save endpoint for persisting game state",
        "Share, map, donate, and about flows so the hunt doubles as visitor engagement",
        "Big tap targets, modal navigation, and a bold high-contrast theme tuned for glare and outdoor use"
      ],
      outcome: "A complete playable hunt that runs from any static host with one PHP endpoint."
    }
  },
  {
    emoji: "🪐", title: "Planetary Sigil Generator",
    subtitle: "Esoteric creative tool",
    blurb: "Turn words into sacred geometry: type an intention, pick a planet, and get a sigil drawn from its traditional magic square — savable to a personal, synced dictionary.",
    stack: ["JavaScript", "Firebase", "Firestore", "SunCalc"],
    tags: ["web"], badge: "Esoteric engineering",
    repo: "https://github.com/jessie-marie/Planetary-Sigil-Generator", repoLabel: "GitHub", demo: null,
    details: {
      context: "A devotional tool as much as a technical one: planetary kamea (magic squares from Hermetic tradition) mapped to letter-to-number ciphers, rendered as SVG paths in the browser.",
      built: [
        "All seven planetary squares (Sun through Saturn) with letter-to-number transmutation",
        "Dynamic SVG sigil rendering with optional grid and number overlays for study",
        "Personal sigil dictionary: save, search, tag, and edit, synced to Firestore behind Firebase Auth",
        "Planetary-hour theming via SunCalc plus dark and light modes"
      ],
      outcome: "Open source and crafted with devotion — fork it, remix it, honor the flame."
    }
  },
  {
    emoji: "🔮", title: "Astrology Engine",
    subtitle: "Chart API + generation pipeline",
    blurb: "A birth-chart backend: PHP endpoints for charts, natal aspects, and transits, backed by a Python generation pipeline with offline demo caches for fast UI work.",
    stack: ["PHP 8", "Python", "kerykeion"],
    tags: ["web"], badge: "API + engine",
    repo: null, demo: null,
    details: {
      context: "Astrology UIs are only as good as their calculation layer. This project separates the two: a Python-first generation pipeline with a thin PHP demo surface on top.",
      built: [
        "PHP endpoints for birth charts, natal aspects, and transit aspects with a live endpoint-status widget",
        "Python tooling (kerykeion adapters) for real chart generation, archived alongside the demo",
        "File-based offline caches so the UI can be developed and demoed with zero external API calls",
        "A documented path from mocked data to live generation without changing the frontend contract"
      ],
      outcome: "Demo the UI today on cached data; wire in live generation when ready."
    }
  },
  {
    emoji: "🏨", title: "Hospitality Startup",
    subtitle: "Database, app & CRM — case study",
    blurb: "For a hospitality loyalty startup: designed the company database, wired the automations, shipped a no-code mobile app with the design team, and ran the CRM day to day.",
    stack: ["Database Design", "Adalo", "Automations", "CRM Ops"],
    tags: ["case-study", "dashboard"], badge: "Case study · Startup",
    repo: null, demo: null,
    details: {
      context: "An early-stage hospitality tech startup needed its operational backbone: somewhere for the data to live, something to move it around, an app for users, and someone to run customer relationships.",
      built: [
        "Designed and built the company database from scratch",
        "Wired core business automations across the stack",
        "Shipped a no-code mobile app in collaboration with the design team",
        "Ran day-to-day CRM operations — the human side of the data"
      ],
      outcome: "Anonymous case study — full details available on request."
    }
  },
  {
    emoji: "🌿", title: "Wellness Practice",
    subtitle: "Website, CRM & launch event — case study",
    blurb: "For a solo wellness coach: built her website and CRM from scratch, then co-created and co-hosted a community event to launch her local presence.",
    stack: ["Web Design", "CRM Setup", "Community Events"],
    tags: ["case-study", "web"], badge: "Case study · Solo practitioner",
    repo: null, demo: null,
    details: {
      context: "A wellness coach starting out needed everything at once: a web presence, a way to manage clients, and a reason for the local community to meet her.",
      built: [
        "Designed and built the practice website end to end",
        "Set up a CRM matched to a solo practitioner's actual workflow",
        "Co-created and co-hosted a community launch event"
      ],
      outcome: "Anonymous case study — full details available on request."
    }
  },
  {
    emoji: "🤝", title: "48in48",
    subtitle: "Websites for nonprofits — volunteering",
    blurb: "Three weekend sprints building nonprofit websites in 48 hours: WordPress developer twice, project manager once — leading designers, writers, and devs to ship.",
    stack: ["WordPress", "Project Management", "Volunteering"],
    tags: ["volunteering", "web"], badge: "Volunteering",
    repo: null, demo: "https://48in48.org", demoLabel: "48in48.org",
    details: {
      context: "48in48 gathers volunteers to design, build, and launch nonprofit websites in a single weekend. Real organizations, real deadlines, no extensions.",
      built: [
        "WordPress developer on two sprint builds — theme work, content, and launch",
        "Project manager on the third — coordinating designers, copywriters, and developers against a 48-hour clock",
        "Shipped working sites for nonprofits that couldn't have afforded agency builds"
      ],
      outcome: "Three sprints, three launched sites, one very tired but happy volunteer."
    }
  }
];

const grid = document.getElementById("project-grid");
const backdrop = document.getElementById("modal-backdrop");

function linkButtons(p) {
  const hasLinks = (p.repo && p.repo !== "#") || (p.demo && p.demo !== "#");
  if (!hasLinks) return `<div class="card-links"><span class="note">No public source — details on request</span></div>`;
  return `<div class="card-links">
    ${p.demo && p.demo !== "#" ? `<a class="primary" href="${p.demo}" target="_blank" rel="noopener" data-stop>${p.demoLabel || "Live demo"}</a>` : ""}
    ${p.repo && p.repo !== "#" ? `<a href="${p.repo}" target="_blank" rel="noopener" data-stop>${p.repoLabel || "Repo"}</a>` : ""}
  </div>`;
}

function render(filter = "all") {
  grid.innerHTML = "";
  projects
    .filter(p => filter === "all" || p.tags.includes(filter))
    .forEach(p => {
      const el = document.createElement("article");
      el.className = "card";
      el.tabIndex = 0;
      el.setAttribute("role", "button");
      el.setAttribute("aria-label", `Read more about ${p.title}`);
      el.innerHTML = `
        <span class="badge">${p.badge}</span>
        <div class="emoji">${p.emoji}</div>
        <h3>${p.title}</h3>
        ${p.subtitle ? `<p class="subtitle">${p.subtitle}</p>` : ""}
        <p>${p.blurb}</p>
        <div class="stack">${p.stack.map(s => `<span>${s}</span>`).join("")}</div>
        <div class="read-more">Read the story →</div>`;
      el.addEventListener("click", () => openModal(p));
      el.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(p); }
      });
      grid.appendChild(el);
    });
}

let lastFocused = null;
function openModal(p) {
  lastFocused = document.activeElement;
  document.getElementById("modal-badge").textContent = p.badge;
  document.getElementById("modal-emoji").textContent = p.emoji;
  document.getElementById("modal-title").textContent = p.subtitle ? `${p.title} — ${p.subtitle}` : p.title;
  document.getElementById("modal-lede").textContent = p.blurb;
  document.getElementById("modal-stack").innerHTML = p.stack.map(s => `<span>${s}</span>`).join("");
  const d = p.details || {};
  document.getElementById("modal-body").innerHTML = `
    ${d.context ? `<h4>The situation</h4><p>${d.context}</p>` : ""}
    ${d.built ? `<h4>What I built</h4><ul>${d.built.map(b => `<li>${b}</li>`).join("")}</ul>` : ""}
    ${d.outcome ? `<h4>Outcome</h4><p>${d.outcome}</p>` : ""}`;
  document.getElementById("modal-links").innerHTML = linkButtons(p);
  backdrop.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("modal-close").focus();
}
function closeModal() {
  backdrop.hidden = true;
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}
document.getElementById("modal-close").addEventListener("click", closeModal);
backdrop.addEventListener("click", e => { if (e.target === backdrop) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !backdrop.hidden) closeModal(); });
document.getElementById("filters").addEventListener("click", e => {
  const btn = e.target.closest("button[data-filter]");
  if (!btn) return;
  document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
  btn.classList.add("active");
  render(btn.dataset.filter);
});
render();
