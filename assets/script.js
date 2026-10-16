const projects = [
  {
    emoji: "🧙", title: "Witch's Hollow — Idle Defense Game",
    blurb: "Hold the hollow as a witch against villagers, hunters, horsemen, templars, priests & boss clergy every 10 waves. Dual-currency economy (gold resets, mushrooms persist), mastery milestones, procedural Web Audio, Firebase Google SSO, Capacitor Android-ready.",
    stack: ["JS ES Modules", "Canvas", "Vite", "Firebase", "Capacitor"],
    tags: ["game", "web"], badge: "Flagship game",
    repo: "#", demo: "#"
  },
  {
    emoji: "💇", title: "Monarch Crossings Dashboard",
    blurb: "Salon revenue analytics: Square OAuth + webhooks, KPIs for 7/30/60/90 days, Chart.js revenue trends, demo-JSON → SQLite → MySQL pipeline for SiteGround. Same UI + JSON contract from demo to live.",
    stack: ["PHP 8", "Square API", "SQLite", "MySQL", "Chart.js"],
    tags: ["dashboard", "web"], badge: "Client work",
    repo: "#", demo: "#"
  },
  {
    emoji: "🚂", title: "Railroad Museum Scavenger Hunt",
    blurb: "Mobile-first museum adventure with game cards, badges, teams, share, map & donate flows. Built for real visitors on real phones — big tap targets, Bootstrap modals, PHP save endpoint.",
    stack: ["HTML", "Bootstrap 5", "Vanilla JS", "PHP"],
    tags: ["web"], badge: "Public good",
    repo: "#", demo: "#"
  },
  {
    emoji: "🪐", title: "Planetary Sigil Generator",
    blurb: "Turn intentions into sacred geometry with 7 planetary kamea. Dynamic SVG sigils, save/search/tag dictionary, Firestore sync with Firebase Auth, planetary-hour responsive theming.",
    stack: ["HTML/CSS/JS", "Firebase", "Firestore", "SunCalc"],
    tags: ["web"], badge: "Esoteric engineering",
    repo: "#", demo: "https://jessiemarie.me"
  },
  {
    emoji: "🔮", title: "Astrology Engine",
    blurb: "Birth-chart / natal / transit PHP endpoints backed by a Python + kerykeion generation pipeline. Offline cache demos in v_01/cache for fast UI iteration without external APIs.",
    stack: ["PHP 8", "Python", "kerykeion"],
    tags: ["web", "data"], badge: "API + engine",
    repo: "#", demo: "#"
  },
  {
    emoji: "🎧", title: "Spotify Scrobbler → Airtable",
    blurb: "Daily automation: scrapes yesterday's Last.fm scrobbles and logs them to Airtable in batches of 10. Runs headless via Windows Task Scheduler — set it and forget it.",
    stack: ["Python", "Last.fm API", "Airtable"],
    tags: ["automation", "data"], badge: "Automation",
    repo: "#", demo: "#"
  },
  {
    emoji: "📶", title: "Wi-Fi Heal",
    blurb: "Self-healing Wi-Fi for Windows: Event ID 8003 trigger auto-restarts the adapter after a settle window, logs to ProgramData. One-click admin installer included.",
    stack: ["PowerShell", "Task Scheduler"],
    tags: ["automation"], badge: "Systems",
    repo: "#", demo: "#"
  },
  {
    emoji: "📓", title: "DA Notebooks & Playlist Analysis",
    blurb: "Data-acquisition experiments: coordinate-grid rendering from published tables (letters.ipynb) and Spotify playlist scraping/analysis (wok.csv + notebooks) with pandas + BeautifulSoup.",
    stack: ["Python", "pandas", "BeautifulSoup"],
    tags: ["data"], badge: "Notebooks",
    repo: "#", demo: "#"
  }
];

const grid = document.getElementById("project-grid");
function render(filter = "all") {
  grid.innerHTML = "";
  projects
    .filter(p => filter === "all" || p.tags.includes(filter))
    .forEach(p => {
      const el = document.createElement("article");
      el.className = "card";
      el.innerHTML = `
        <span class="badge">${p.badge}</span>
        <div class="emoji">${p.emoji}</div>
        <h3>${p.title}</h3>
        <p>${p.blurb}</p>
        <div class="stack">${p.stack.map(s => `<span>${s}</span>`).join("")}</div>
        <div class="card-links">
          <a class="primary" href="${p.demo}" target="_blank" rel="noopener">Live demo</a>
          <a href="${p.repo}" target="_blank" rel="noopener">Repo</a>
        </div>`;
      grid.appendChild(el);
    });
}
document.getElementById("filters").addEventListener("click", e => {
  const btn = e.target.closest("button[data-filter]");
  if (!btn) return;
  document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
  btn.classList.add("active");
  render(btn.dataset.filter);
});
render();
