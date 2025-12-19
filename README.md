# Epic Adventure

A single-page, dependency-free RPG inspired by EPIC RPG. Everything runs in the browser with localStorage saves, progressive tabs, cooldown-driven combat, crafting, dragons, and offline support.

## Files
- `index.html` – SPA shell, navigation, and panels.
- `styles.css` – Responsive layout, desktop sidebar, mobile overlay, and combat bottom bar.
- `game.js` – Core game logic (combat, loot, zones, crafting, dragons, life skills, ascension, saving).
- `manifest.json` – PWA manifest.
- `sw.js` – Service worker for offline caching.

## Running locally
1. Open `index.html` directly in your browser **or** serve the folder with a simple server (e.g., `python -m http.server 8000`).
2. Play! Progress is saved automatically via `localStorage`.

### Mobile tips
- The navigation sidebar is hidden behind the hamburger button on small screens.
- Combat actions appear in the fixed bottom bar; swipe horizontally if needed.

## Deploying to GitHub Pages
1. Push the repository to GitHub.
2. In the repo settings, enable GitHub Pages for the `main` branch (root directory).
3. Visit the published URL; the service worker will precache `index.html`, `styles.css`, `game.js`, and `manifest.json` for offline play.

## Gameplay highlights
- **Classes & Resources:** 7 classes each with unique resource regeneration and skills.
- **Combat:** Turn-based hunts, adventures, bosses, dungeons, plus auto-battle simulation on its own cooldown.
- **Zones:** Seven unlockable zones with gate bosses and movement cooldowns.
- **Loot & Gear:** Rarity-scaled drops, sockets, gems, fusion with failure risk, inventory filters, and selling.
- **Progression:** Level cap 200, skill trees, ascension resets with permanent bonuses, and XP curve.
- **Life Skills & EPIC Systems:** Combined tab for gathering, crafting, and EPIC actions with separate cooldown groups.
- **Dragons:** Eggs with hatch counters, breeding, and sell/hatch controls.
- **PWA:** Offline-ready with manifest and service worker.
