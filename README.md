# Epic Adventure RPG

Single-page, vanilla HTML/CSS/JS RPG inspired by EPIC RPG loops. Progress persists with localStorage and supports offline play via service worker.

## Features
- 7 classes with resources, skills, skill trees, and scaling stats.
- Zones with gate boss unlocks and zone switch cooldown.
- Turn-based combat, auto battle, and dungeon loop with exit.
- Loot system with gear rarities, materials, gems, eggs, and dragons.
- Inventory filters, sell/sell-all, fusion with failure, and gem handling.
- Life skills + EPIC systems combined tab with separate progress.
- Mobile-friendly navigation drawer and fixed combat action bar.
- Settings panel with persistent UI scale, animations, and colorblind labels.
- Offline support via PWA manifest and service worker.

## Change Tracking Table (Update Every PR)
Use this table to keep a running history of game changes.

| Date | Version/Commit | Area | Change | Player Impact | Validation |
|---|---|---|---|---|---|
| 2026-02-13 | `c8a49b6` | Performance + QoL | Active-panel rendering, inventory sort/lock, compact/cozy nav toggle, SW strategy update | Faster UI updates and safer inventory actions | `node --check`, Playwright smoke |
| 2026-02-13 | `9489065` | Save System + QoL | Versioned sectioned saves, migration path, export/import/backup restore, stat memoization | Safer persistence and improved recovery tools | `node --check`, Playwright settings export test |

## Skill ↔ Enemy Interaction Design Tracker (Template)
Track how each skill behaves against different enemy archetypes so balancing is consistent.

| Skill | Enemy Type | Interaction Rule | Counterplay | VFX/Log Note | Balance Status |
|---|---|---|---|---|---|
| Example: Cleave | Swarm | +20% damage to grouped targets | Swarm can apply bleed stacks | "Cleave hit all nearby foes" | Needs tuning |
| Example: Frost Nova | Fast | Applies 1-turn slow and removes enemy haste | Fast enemies can resist at high tier | "Target slowed" | Stable |

## Recommended Enemy Interaction Rules
- **Armor vs. penetration loop:** Give some enemies armor that reduces direct-hit skills unless the skill has penetration tags.
- **Affliction interactions:** Define which enemies are immune/resistant/vulnerable to stun, slow, poison, burn, fear, etc.
- **Phase traits on bosses:** Let boss phases alter skill effectiveness (e.g., phase 2 reflects ranged, phase 3 weak to holy).
- **Tag-based skills:** Add tags like `melee`, `ranged`, `magic`, `holy`, `shadow` and enemy tag reactions.
- **Readability first:** Log every meaningful reaction in concise format (e.g., "Resisted Stun", "Vulnerable: +25% Fire").
- **Scaling safety rails:** Cap multiplicative stacking from interactions to avoid runaway one-shots.

## Run Locally
Open `index.html` in a browser (or serve locally) and play. The game is fully client-side.

## Reset Save
Use the **Reset Save** button in Settings to clear localStorage.
