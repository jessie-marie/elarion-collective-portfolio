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
    repo: "https://github.com/jessie-marie/rrmuseum", repoLabel: "GitHub", demo: null
  },
  {
    emoji: "🪐", title: "Planetary Sigil Generator",
    blurb: "Turn intentions into sacred geometry with 7 planetary kamea. Dynamic SVG sigils, save/search/tag dictionary, Firestore sync with Firebase Auth, planetary-hour responsive theming.",
    stack: ["HTML/CSS/JS", "Firebase", "Firestore", "SunCalc"],
    tags: ["web"], badge: "Esoteric engineering",
    repo: "https://github.com/jessie-marie/Planetary-Sigil-Generator", repoLabel: "GitHub", demo: null
  },
  {
    emoji: "🔮", title: "Astrology Engine",
    blurb: "Birth-chart / natal / transit PHP endpoints backed by a Python + kerykeion generation pipeline. Offline cache demos in v_01/cache for fast UI iteration without external APIs.",
    stack: ["PHP 8", "Python", "kerykeion"],
    tags: ["web"], badge: "API + engine",
    repo: "#", demo: "#"
  },
  {
    emoji: "🏨", title: "Hospitality Startup — Database, App & CRM",
    blurb: "Anonymous case study: designed and built the company database, wired core business automations, shipped a no-code mobile app in collaboration with the design team, and ran day-to-day CRM operations for a hospitality loyalty startup.",
    stack: ["Database Design", "Adalo", "Automations", "CRM Ops"],
    tags: ["case-study", "dashboard"], badge: "Case study · Startup",
    repo: null, demo: null
  },
  {
    emoji: "🌿", title: "Wellness Practice — Website, CRM & Launch Event",
    blurb: "Anonymous case study: designed and built a wellness coach's website and CRM from scratch, then co-created and co-hosted a community event to launch her local presence.",
    stack: ["Web Design", "CRM Setup", "Community Events"],
    tags: ["case-study", "web"], badge: "Case study · Solo practitioner",
    repo: null, demo: null
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
      const hasLinks = (p.repo && p.repo !== "#") || (p.demo && p.demo !== "#");
      const links = hasLinks
        ? `<div class="card-links">
          ${p.demo && p.demo !== "#" ? `<a class="primary" href="${p.demo}" target="_blank" rel="noopener">Live demo</a>` : ""}
          ${p.repo && p.repo !== "#" ? `<a href="${p.repo}" target="_blank" rel="noopener">${p.repoLabel || "Repo"}</a>` : ""}
        </div>`
        : `<div class="card-links"><span class="note">No public source — details on request</span></div>`;
      el.innerHTML = `
        <span class="badge">${p.badge}</span>
        <div class="emoji">${p.emoji}</div>
        <h3>${p.title}</h3>
        <p>${p.blurb}</p>
        <div class="stack">${p.stack.map(s => `<span>${s}</span>`).join("")}</div>
        ${links}`;
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
