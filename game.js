const GameData = {
  version: 1,
  xp: {
    base: 90,
    exponent: 1.08,
    maxLevel: 200,
    rewards: {
      hunt: 30,
      adventure: 75,
      dungeon: 130,
      miniboss: 250,
      boss: 300,
      auto: 15
    }
  },
  classes: {
    Warrior: {
      resource: { name: "Rage", max: 100, regen: 12 },
      stats: { hp: 130, atk: 12, def: 10, crit: 0.05, spd: 1.0 },
      skills: ["Cleave", "Warcry", "Shield Slam"],
      trees: {
        Offense: ["Brutal Force", "Berserker Focus"],
        Defense: ["Iron Wall", "Battle Hardened"],
        Utility: ["Second Wind", "Quick Rally"]
      }
    },
    Rogue: {
      resource: { name: "Energy", max: 80, regen: 15 },
      stats: { hp: 110, atk: 14, def: 8, crit: 0.12, spd: 1.2 },
      skills: ["Backstab", "Smoke Bomb", "Flurry"],
      trees: {
        Offense: ["Shadow Strike", "Blade Tempo"],
        Defense: ["Evasion", "Light Foot"],
        Utility: ["Poison Edge", "Treasure Sense"]
      }
    },
    Mage: {
      resource: { name: "Mana", max: 120, regen: 18 },
      stats: { hp: 95, atk: 16, def: 6, crit: 0.08, spd: 0.95 },
      skills: ["Arcane Bolt", "Frost Nova", "Mana Surge"],
      trees: {
        Offense: ["Spell Power", "Elemental Fury"],
        Defense: ["Arcane Shield", "Ice Barrier"],
        Utility: ["Mana Flow", "Mystic Insight"]
      }
    },
    Cleric: {
      resource: { name: "Faith", max: 100, regen: 16 },
      stats: { hp: 120, atk: 10, def: 9, crit: 0.06, spd: 1.0 },
      skills: ["Smite", "Radiant Heal", "Sanctuary"],
      trees: {
        Offense: ["Holy Fire", "Judgment"],
        Defense: ["Divine Guard", "Blessed Armor"],
        Utility: ["Prayer", "Guidance"]
      }
    },
    Ranger: {
      resource: { name: "Focus", max: 90, regen: 14 },
      stats: { hp: 115, atk: 13, def: 8, crit: 0.09, spd: 1.1 },
      skills: ["Piercing Shot", "Multi Shot", "Camouflage"],
      trees: {
        Offense: ["Sharp Aim", "Hunter's Mark"],
        Defense: ["Wild Reflex", "Thorn Guard"],
        Utility: ["Tracking", "Field Rations"]
      }
    },
    Paladin: {
      resource: { name: "Zeal", max: 110, regen: 12 },
      stats: { hp: 135, atk: 11, def: 11, crit: 0.05, spd: 0.95 },
      skills: ["Hammer of Light", "Aegis", "Zealous Charge"],
      trees: {
        Offense: ["Crusader", "Lightbringer"],
        Defense: ["Guardian", "Sacred Bulwark"],
        Utility: ["Oathkeeper", "Valor"]
      }
    },
    Necromancer: {
      resource: { name: "Souls", max: 90, regen: 10 },
      stats: { hp: 105, atk: 15, def: 7, crit: 0.07, spd: 0.95 },
      skills: ["Soul Drain", "Bone Spear", "Grave Pact"],
      trees: {
        Offense: ["Death Coil", "Dark Ritual"],
        Defense: ["Bone Armor", "Last Breath"],
        Utility: ["Gravecaller", "Harvest"]
      }
    }
  },
  skills: {
    Cleave: { cost: 25, cooldown: 6, effect: { type: "damage", scale: 1.4 } },
    Warcry: { cost: 15, cooldown: 10, effect: { type: "buff", stat: "atk", value: 0.15, duration: 2 } },
    "Shield Slam": { cost: 20, cooldown: 8, effect: { type: "damage", scale: 1.1, secondary: { type: "debuff", stat: "def", value: -0.1, duration: 2 } } },
    Backstab: { cost: 20, cooldown: 6, effect: { type: "damage", scale: 1.6 } },
    "Smoke Bomb": { cost: 25, cooldown: 12, effect: { type: "buff", stat: "def", value: 0.2, duration: 2 } },
    Flurry: { cost: 30, cooldown: 10, effect: { type: "multi", hits: 2, scale: 0.75 } },
    "Arcane Bolt": { cost: 18, cooldown: 5, effect: { type: "damage", scale: 1.5 } },
    "Frost Nova": { cost: 28, cooldown: 9, effect: { type: "damage", scale: 1.1, secondary: { type: "debuff", stat: "spd", value: -0.1, duration: 2 } } },
    "Mana Surge": { cost: 10, cooldown: 12, effect: { type: "resource", amount: 25 } },
    Smite: { cost: 15, cooldown: 5, effect: { type: "damage", scale: 1.3 } },
    "Radiant Heal": { cost: 20, cooldown: 10, effect: { type: "heal", scale: 0.3 } },
    Sanctuary: { cost: 25, cooldown: 12, effect: { type: "buff", stat: "def", value: 0.2, duration: 2 } },
    "Piercing Shot": { cost: 18, cooldown: 6, effect: { type: "damage", scale: 1.4 } },
    "Multi Shot": { cost: 24, cooldown: 9, effect: { type: "multi", hits: 2, scale: 0.8 } },
    Camouflage: { cost: 12, cooldown: 10, effect: { type: "buff", stat: "crit", value: 0.1, duration: 2 } },
    "Hammer of Light": { cost: 22, cooldown: 7, effect: { type: "damage", scale: 1.3 } },
    Aegis: { cost: 18, cooldown: 10, effect: { type: "buff", stat: "def", value: 0.25, duration: 2 } },
    "Zealous Charge": { cost: 30, cooldown: 12, effect: { type: "damage", scale: 1.6 } },
    "Soul Drain": { cost: 22, cooldown: 6, effect: { type: "damage", scale: 1.2, secondary: { type: "heal", scale: 0.15 } } },
    "Bone Spear": { cost: 26, cooldown: 8, effect: { type: "damage", scale: 1.5 } },
    "Grave Pact": { cost: 18, cooldown: 12, effect: { type: "buff", stat: "atk", value: 0.2, duration: 2 } }
  },
  skillNodes: {
    "Brutal Force": { stat: "atk", value: 0.08, cost: 2 },
    "Berserker Focus": { stat: "crit", value: 0.05, cost: 2, prereq: "Brutal Force" },
    "Iron Wall": { stat: "def", value: 0.08, cost: 2 },
    "Battle Hardened": { stat: "hp", value: 0.1, cost: 3, prereq: "Iron Wall" },
    "Second Wind": { stat: "hp", value: 0.06, cost: 2 },
    "Quick Rally": { stat: "spd", value: 0.05, cost: 3, prereq: "Second Wind" },
    "Shadow Strike": { stat: "atk", value: 0.08, cost: 2 },
    "Blade Tempo": { stat: "spd", value: 0.08, cost: 3, prereq: "Shadow Strike" },
    "Evasion": { stat: "def", value: 0.06, cost: 2 },
    "Light Foot": { stat: "crit", value: 0.04, cost: 2, prereq: "Evasion" },
    "Poison Edge": { stat: "atk", value: 0.06, cost: 2 },
    "Treasure Sense": { stat: "gold", value: 0.1, cost: 3, prereq: "Poison Edge" },
    "Spell Power": { stat: "atk", value: 0.09, cost: 3 },
    "Elemental Fury": { stat: "crit", value: 0.05, cost: 3, prereq: "Spell Power" },
    "Arcane Shield": { stat: "def", value: 0.07, cost: 2 },
    "Ice Barrier": { stat: "hp", value: 0.08, cost: 3, prereq: "Arcane Shield" },
    "Mana Flow": { stat: "resource", value: 0.08, cost: 2 },
    "Mystic Insight": { stat: "xp", value: 0.08, cost: 3, prereq: "Mana Flow" },
    "Holy Fire": { stat: "atk", value: 0.07, cost: 2 },
    Judgment: { stat: "crit", value: 0.05, cost: 3, prereq: "Holy Fire" },
    "Divine Guard": { stat: "def", value: 0.08, cost: 2 },
    "Blessed Armor": { stat: "hp", value: 0.08, cost: 3, prereq: "Divine Guard" },
    Prayer: { stat: "resource", value: 0.08, cost: 2 },
    Guidance: { stat: "gold", value: 0.1, cost: 3, prereq: "Prayer" },
    "Sharp Aim": { stat: "atk", value: 0.08, cost: 2 },
    "Hunter's Mark": { stat: "crit", value: 0.06, cost: 3, prereq: "Sharp Aim" },
    "Wild Reflex": { stat: "def", value: 0.07, cost: 2 },
    "Thorn Guard": { stat: "hp", value: 0.08, cost: 3, prereq: "Wild Reflex" },
    Tracking: { stat: "xp", value: 0.08, cost: 3 },
    "Field Rations": { stat: "resource", value: 0.08, cost: 2, prereq: "Tracking" },
    Crusader: { stat: "atk", value: 0.07, cost: 2 },
    Lightbringer: { stat: "crit", value: 0.05, cost: 3, prereq: "Crusader" },
    Guardian: { stat: "def", value: 0.08, cost: 2 },
    "Sacred Bulwark": { stat: "hp", value: 0.09, cost: 3, prereq: "Guardian" },
    Oathkeeper: { stat: "resource", value: 0.08, cost: 2 },
    Valor: { stat: "gold", value: 0.1, cost: 3, prereq: "Oathkeeper" },
    "Death Coil": { stat: "atk", value: 0.08, cost: 2 },
    "Dark Ritual": { stat: "crit", value: 0.06, cost: 3, prereq: "Death Coil" },
    "Bone Armor": { stat: "def", value: 0.08, cost: 2 },
    "Last Breath": { stat: "hp", value: 0.09, cost: 3, prereq: "Bone Armor" },
    Gravecaller: { stat: "resource", value: 0.08, cost: 2 },
    Harvest: { stat: "xp", value: 0.08, cost: 3, prereq: "Gravecaller" }
  },
  rarities: [
    { name: "Common", color: "#9aa0a6", multiplier: 1, weight: 60 },
    { name: "Uncommon", color: "#4cd97b", multiplier: 1.1, weight: 25 },
    { name: "Rare", color: "#4da3ff", multiplier: 1.25, weight: 10 },
    { name: "Epic", color: "#b275ff", multiplier: 1.4, weight: 4 },
    { name: "Legendary", color: "#ffb347", multiplier: 1.6, weight: 1 }
  ],
  gemBonuses: {
    1: { atk: 2 },
    2: { atk: 4 },
    3: { atk: 6 },
    4: { atk: 8 },
    5: { atk: 10 }
  },
  zones: [
    { id: 1, name: "Greenwild", level: 1, gateBoss: "Thorn Guardian" },
    { id: 2, name: "Amber Dunes", level: 20, gateBoss: "Dune Reaver" },
    { id: 3, name: "Frostbite Ridge", level: 40, gateBoss: "Glacier Wyrm" },
    { id: 4, name: "Umbral Marsh", level: 60, gateBoss: "Swamp Horror" },
    { id: 5, name: "Skyreach Peaks", level: 90, gateBoss: "Storm Talon" },
    { id: 6, name: "Obsidian Depths", level: 130, gateBoss: "Lava Behemoth" },
    { id: 7, name: "Astral Sanctum", level: 170, gateBoss: "Eternal Sentinel" }
  ],
  enemyTemplates: {
    hunt: { name: "Wilderness Stalker", hp: 80, atk: 8, def: 4 },
    adventure: { name: "Wild Raider", hp: 120, atk: 10, def: 5 },
    dungeon: { name: "Dungeon Fiend", hp: 140, atk: 11, def: 6 },
    miniboss: { name: "Feral Champion", hp: 180, atk: 13, def: 7 },
    boss: { name: "Ancient Titan", hp: 240, atk: 15, def: 8 },
    gate: { name: "Gate Guardian", hp: 220, atk: 14, def: 8 }
  },
  materials: [
    { id: "wood", name: "Ancient Wood", tier: 1, zoneMax: 2, type: "chop" },
    { id: "herb", name: "Herb", tier: 1, zoneMax: 2, type: "foraging" },
    { id: "ore", name: "Copper Ore", tier: 1, zoneMax: 2, type: "mining" },
    { id: "fish", name: "River Fish", tier: 1, zoneMax: 2, type: "fishing" },
    { id: "leather", name: "Soft Leather", tier: 2, zoneMax: 3, type: "hunting" },
    { id: "mushroom", name: "Moon Mushroom", tier: 2, zoneMax: 3, type: "foraging" },
    { id: "iron", name: "Iron Ore", tier: 3, zoneMax: 5, type: "mining" },
    { id: "crystal", name: "Arcane Crystal", tier: 4, zoneMax: 6, type: "enchanting" },
    { id: "mythril", name: "Mythril Ore", tier: 5, zoneMax: 7, type: "mining" }
  ],
  recipes: [
    { id: "herb-salve", name: "Herb Salve", skill: "Alchemy", tier: 1, zone: 1, inputs: [{ id: "herb", qty: 2 }], output: { id: "potion", qty: 1 } },
    { id: "ore-ingot", name: "Copper Ingot", skill: "Blacksmithing", tier: 1, zone: 1, inputs: [{ id: "ore", qty: 3 }], output: { id: "ingot", qty: 1 } },
    { id: "fish-stew", name: "Fish Stew", skill: "Cooking", tier: 1, zone: 1, inputs: [{ id: "fish", qty: 2 }], output: { id: "meal", qty: 1 } },
    { id: "leather-wrap", name: "Leather Wrap", skill: "Cooking", tier: 2, zone: 2, inputs: [{ id: "leather", qty: 2 }], output: { id: "meal", qty: 1 } },
    { id: "mushroom-tonic", name: "Mushroom Tonic", skill: "Alchemy", tier: 2, zone: 2, inputs: [{ id: "mushroom", qty: 2 }], output: { id: "potion", qty: 1 } },
    { id: "iron-ingot", name: "Iron Ingot", skill: "Blacksmithing", tier: 3, zone: 3, inputs: [{ id: "iron", qty: 3 }], output: { id: "ingot", qty: 1 } },
    { id: "hunter-stew", name: "Hunter's Stew", skill: "Cooking", tier: 3, zone: 3, inputs: [{ id: "leather", qty: 2 }, { id: "mushroom", qty: 1 }], output: { id: "meal", qty: 1 } },
    { id: "crystal-focus", name: "Crystal Focus", skill: "Enchanting", tier: 4, zone: 4, inputs: [{ id: "crystal", qty: 2 }], output: { id: "gem", qty: 1 } },
    { id: "mythril-ingot", name: "Mythril Ingot", skill: "Blacksmithing", tier: 5, zone: 5, inputs: [{ id: "mythril", qty: 3 }], output: { id: "ingot", qty: 1 } }
  ],
  eggs: [
    { tier: 1, name: "Common Egg", rarity: "Common" },
    { tier: 2, name: "Uncommon Egg", rarity: "Uncommon" },
    { tier: 3, name: "Rare Egg", rarity: "Rare" },
    { tier: 4, name: "Epic Egg", rarity: "Epic" },
    { tier: 5, name: "Legendary Egg", rarity: "Legendary" }
  ],
  dragons: [
    { tier: 1, name: "Ember Drake", bonus: "Loot +2%", bonusType: "gold", value: 0.02 },
    { tier: 2, name: "Frost Whelp", bonus: "HP +3%", bonusType: "hp", value: 0.03 },
    { tier: 3, name: "Storm Serpent", bonus: "ATK +4%", bonusType: "atk", value: 0.04 },
    { tier: 4, name: "Void Wyvern", bonus: "XP +5%", bonusType: "xp", value: 0.05 },
    { tier: 5, name: "Celestial Dragon", bonus: "Resource +6%", bonusType: "resource", value: 0.06 }
  ],
  fusionFailure: {
    1: 0.1,
    2: 0.2,
    3: 0.35,
    4: 0.5,
    5: 0.65
  },
  lifeSkills: [
    "Mining",
    "Foraging",
    "Fishing",
    "Hunting",
    "Blacksmithing",
    "Alchemy",
    "Cooking",
    "Enchanting",
    "Dragon Handling"
  ],
  epicActions: [
    { id: "hunt", name: "Hunt", type: "combat" },
    { id: "adventure", name: "Adventure", type: "combat" },
    { id: "dungeon", name: "Dungeon", type: "combat" },
    { id: "miniboss", name: "Mini Boss", type: "combat" },
    { id: "boss", name: "Boss", type: "combat" },
    { id: "work", name: "Work Job", type: "job" },
    { id: "chop", name: "Chop Wood", type: "gather" },
    { id: "mine", name: "Mine Ore", type: "gather" },
    { id: "fish", name: "Fish", type: "gather" }
  ],
  shop: [
    { id: "potion", name: "Healing Potion", cost: 35, type: "consumable" },
    { id: "gem", name: "Lesser Gem", cost: 80, type: "gem", tier: 1, rarity: "Uncommon" }
  ]
};

const defaultState = () => {
  const playerClass = "Warrior";
  const classData = GameData.classes[playerClass];
  return {
    player: {
      name: "Adventurer",
      class: playerClass,
      level: 1,
      xp: 0,
      xpToNext: xpToNextLevel(1),
      gold: 50,
      currentHP: classData.stats.hp,
      maxHP: classData.stats.hp,
      resource: classData.resource.max,
      resourceMax: classData.resource.max,
      skillPoints: 1,
      unlockedNodes: [],
      ascension: 0,
      ascensionBonuses: {},
      currentZone: 1,
      zoneCooldownUntil: 0,
      inCombat: false,
      inDungeonRun: false,
      dungeonProgress: 0,
      buffs: [],
      cooldowns: {},
      settings: {
        uiScale: "medium",
        customScale: 100,
        animations: true,
        lootFilterMode: "normal",
        colorblind: false,
        mobileLayout: false
      }
    },
    enemy: null,
    inventory: {
      gear: [],
      materials: [],
      gems: [],
      consumables: [{ id: "potion", name: "Healing Potion", qty: 2 }],
      eggs: [],
      dragons: []
    },
    equipment: {
      weapon: null,
      armor: null,
      helmet: null,
      boots: null,
      accessory: null
    },
    lifeSkills: GameData.lifeSkills.reduce((acc, skill) => {
      acc[skill] = { level: 1, xp: 0, xpToNext: 50, cooldownUntil: 0 };
      return acc;
    }, {}),
    epicCooldowns: {},
    log: [],
    battleSummary: "",
    selectedFusion: [],
    selectedBreeding: [],
    eggBattleCount: 0
  };
};

let state = loadState();

const ui = {
  logEntries: document.getElementById("logEntries"),
  playerName: document.getElementById("playerName"),
  playerMeta: document.getElementById("playerMeta"),
  hpBar: document.getElementById("hpBar"),
  resBar: document.getElementById("resBar"),
  playerPanel: document.getElementById("playerPanel"),
  enemyPanel: document.getElementById("enemyPanel"),
  combatActions: document.getElementById("combatActions"),
  combatSecondary: document.getElementById("combatSecondary"),
  battleSummary: document.getElementById("battleSummary"),
  zoneList: document.getElementById("zoneList"),
  zoneInfo: document.getElementById("zoneInfo"),
  inventoryList: document.getElementById("inventoryList"),
  inventoryFilter: document.getElementById("inventoryFilter"),
  sellAll: document.getElementById("sellAll"),
  skillTree: document.getElementById("skillTree"),
  lifeSkills: document.getElementById("lifeSkills"),
  epicActions: document.getElementById("epicActions"),
  dragonList: document.getElementById("dragonList"),
  shopList: document.getElementById("shopList"),
  uiScale: document.getElementById("uiScale"),
  customScale: document.getElementById("customScale"),
  customScaleValue: document.getElementById("customScaleValue"),
  toggleAnimations: document.getElementById("toggleAnimations"),
  toggleColorblind: document.getElementById("toggleColorblind"),
  lootFilterMode: document.getElementById("lootFilterMode"),
  toggleMobileLayout: document.getElementById("toggleMobileLayout"),
  resetSave: document.getElementById("resetSave"),
  mobileActionBar: document.getElementById("mobileActionBar"),
  navToggle: document.getElementById("navToggle"),
  navOverlay: document.getElementById("navOverlay"),
  fusionSlot: document.getElementById("fusionSlot"),
  fusionTier: document.getElementById("fusionTier"),
  fusionRarity: document.getElementById("fusionRarity"),
  fusionSearch: document.getElementById("fusionSearch"),
  fusionSelection: document.getElementById("fusionSelection"),
  fuseButton: document.getElementById("fuseButton")
};

const formatter = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 });

function formatNumber(value) {
  return formatter.format(value);
}

function xpToNextLevel(level) {
  return Math.floor(GameData.xp.base * Math.pow(GameData.xp.exponent, level - 1));
}

function logMessage(message) {
  state.log.unshift({ message, time: Date.now() });
  if (state.log.length > 30) state.log.pop();
  renderLog();
}

function renderLog() {
  ui.logEntries.innerHTML = state.log
    .map((entry) => `<div>${entry.message}</div>`)
    .join("");
}

function saveState() {
  localStorage.setItem("epicAdventureSave", JSON.stringify(state));
}

const debouncedSave = debounce(saveState, 600);

function loadState() {
  const raw = localStorage.getItem("epicAdventureSave");
  if (!raw) return defaultState();
  try {
    const parsed = JSON.parse(raw);
    const base = defaultState();
    return {
      ...base,
      ...parsed,
      player: {
        ...base.player,
        ...parsed.player,
        settings: {
          ...base.player.settings,
          ...(parsed.player?.settings || {})
        }
      },
      inventory: {
        ...base.inventory,
        ...parsed.inventory
      },
      equipment: {
        ...base.equipment,
        ...parsed.equipment
      },
      lifeSkills: {
        ...base.lifeSkills,
        ...parsed.lifeSkills
      }
    };
  } catch (error) {
    return defaultState();
  }
}

function debounce(fn, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };
}

function updateAll() {
  applySettings();
  updatePlayerMeta();
  renderCombat();
  renderZones();
  renderInventory();
  renderSkillTree();
  renderLifeSkills();
  renderDragons();
  renderShop();
  renderSettings();
  renderFusionFilters();
  debouncedSave();
}

function applySettings() {
  const scaleMap = { small: 0.95, medium: 1, large: 1.1 };
  const customScale = Math.min(160, Math.max(60, Number(state.player.settings.customScale || 100))) / 100;
  const finalScale = state.player.settings.uiScale === "custom"
    ? customScale
    : (scaleMap[state.player.settings.uiScale] || 1);
  document.documentElement.style.setProperty("--scale", finalScale);
  document.body.dataset.theme = state.player.settings.colorblind ? "colorblind" : "dark";
  document.body.dataset.nav = state.player.settings.mobileLayout ? "drawer" : document.body.dataset.nav;
  document.body.classList.toggle("no-anim", !state.player.settings.animations);
}

function updatePlayerMeta() {
  const player = state.player;
  ui.playerName.textContent = `${player.name} • ${player.class}`;
  ui.playerMeta.textContent = `Lv ${player.level} • XP ${formatNumber(player.xp)}/${formatNumber(player.xpToNext)} • Gold ${formatNumber(player.gold)}`;
  const hpPercent = Math.max(0, player.currentHP / player.maxHP) * 100;
  ui.hpBar.className = "resource hp";
  ui.hpBar.innerHTML = `<div class="fill" style="width:${hpPercent}%"></div><span>${formatNumber(player.currentHP)}/${formatNumber(player.maxHP)} HP</span>`;
  const resPercent = Math.max(0, player.resource / player.resourceMax) * 100;
  ui.resBar.className = "resource res";
  ui.resBar.innerHTML = `<div class="fill" style="width:${resPercent}%"></div><span>${playerResourceLabel()} ${formatNumber(player.resource)}/${formatNumber(player.resourceMax)}</span>`;
}

function playerResourceLabel() {
  return GameData.classes[state.player.class].resource.name;
}

function baseStats() {
  const classStats = GameData.classes[state.player.class].stats;
  const equipmentBonus = Object.values(state.equipment)
    .filter(Boolean)
    .reduce(
      (acc, gear) => {
        Object.entries(gear.stats).forEach(([stat, value]) => {
          acc[stat] = (acc[stat] || 0) + value;
        });
        gear.gems.forEach((gem) => {
          const bonus = GameData.gemBonuses[gem.tier] || {};
          Object.entries(bonus).forEach(([stat, value]) => {
            acc[stat] = (acc[stat] || 0) + value;
          });
        });
        return acc;
      },
      {}
    );
  const bonus = state.player.unlockedNodes.reduce(
    (acc, node) => {
      const data = GameData.skillNodes[node];
      acc[data.stat] = (acc[data.stat] || 0) + data.value;
      return acc;
    },
    {}
  );
  const dragonBonus = state.inventory.dragons.reduce(
    (acc, dragon) => {
      if (dragon.bonusType) acc[dragon.bonusType] = (acc[dragon.bonusType] || 0) + dragon.value;
      return acc;
    },
    {}
  );
  const maxHP = Math.round(classStats.hp * (1 + (bonus.hp || 0) + (dragonBonus.hp || 0)) + (equipmentBonus.hp || 0));
  const atk = Math.round(classStats.atk * (1 + (bonus.atk || 0) + (dragonBonus.atk || 0)) + (equipmentBonus.atk || 0));
  const def = Math.round(classStats.def * (1 + (bonus.def || 0) + (dragonBonus.def || 0)) + (equipmentBonus.def || 0));
  const crit = classStats.crit + (bonus.crit || 0) + ((equipmentBonus.crit || 0) / 100);
  const spd = classStats.spd + (bonus.spd || 0);
  const resourceMax = Math.round(
    GameData.classes[state.player.class].resource.max * (1 + (bonus.resource || 0) + (dragonBonus.resource || 0))
  );
  return { maxHP, atk, def, crit, spd, resourceMax };
}

function refreshStats() {
  const stats = baseStats();
  state.player.maxHP = stats.maxHP;
  state.player.resourceMax = stats.resourceMax;
  state.player.currentHP = Math.min(state.player.currentHP, state.player.maxHP);
  state.player.resource = Math.min(state.player.resource, state.player.resourceMax);
}

function renderCombat() {
  refreshStats();
  const player = state.player;
  ui.playerPanel.innerHTML = `
    <div><strong>Player</strong></div>
    <div>HP: ${formatNumber(player.currentHP)}/${formatNumber(player.maxHP)}</div>
    <div>${playerResourceLabel()}: ${formatNumber(player.resource)}/${formatNumber(player.resourceMax)}</div>
    <div>ATK ${formatNumber(baseStats().atk)} | DEF ${formatNumber(baseStats().def)}</div>
    <div>CRIT ${formatNumber(baseStats().crit * 100)}% | SPD ${formatNumber(baseStats().spd)}</div>
  `;
  if (state.enemy) {
    const hpPercent = Math.max(0, state.enemy.hp / state.enemy.maxHP) * 100;
    ui.enemyPanel.innerHTML = `
      <div><strong>${state.enemy.name}</strong></div>
      <div class="resource hp"><div class="fill" style="width:${hpPercent}%"></div><span>${formatNumber(state.enemy.hp)}/${formatNumber(state.enemy.maxHP)} HP</span></div>
    `;
  } else {
    ui.enemyPanel.innerHTML = "<div>No active enemy.</div>";
  }

  renderCombatButtons();
  ui.battleSummary.textContent = state.battleSummary || "Take an action to see results.";
}

function renderCombatButtons() {
  const actions = [
    { id: "attack", label: "Attack" },
    { id: "heal", label: "Heal" },
    { id: "auto", label: "Auto Battle" }
  ];

  const actionButtons = actions.map((action) => {
    const combatDisabled = !state.player.inCombat && action.id !== "auto";
    const disabled = combatDisabled || (action.id === "auto" && (cooldownRemaining("auto") > 0 || state.player.inCombat));
    return `<button class="action" data-action="${action.id}" ${disabled ? "disabled" : ""}>${action.label}</button>`;
  });

  const skillButtons = GameData.classes[state.player.class].skills.map((skill) => {
    const cooldown = cooldownRemaining(`skill-${skill}`);
    const disabled = !state.player.inCombat || state.player.resource < GameData.skills[skill].cost || cooldown > 0;
    return `<button class="action" data-skill="${skill}" ${disabled ? "disabled" : ""}>
      ${skill} ${cooldown > 0 ? `(${Math.ceil(cooldown)}s)` : ""}
    </button>`;
  });

  const loopButtons = state.player.inCombat
    ? []
    : [
        `<button class="action" data-action="hunt">Hunt</button>`,
        `<button class="action" data-action="adventure">Adventure</button>`,
        `<button class="action" data-action="miniboss">Mini Boss</button>`,
        `<button class="action" data-action="boss">Boss</button>`
      ];
  const dungeonButton = `<button class="action" data-action="dungeon" ${state.player.inDungeonRun ? "disabled" : ""}>Start Dungeon</button>`;
  const gateZone = nextGateZone();
  const gateButton = gateZone ? `<button class="action" data-action="gate">Gate Boss • Zone ${gateZone.id}</button>` : "";
  const exitButton = state.player.inDungeonRun ? `<button class="action danger" data-action="exit-dungeon">Exit Dungeon</button>` : "";

  ui.combatActions.innerHTML = actionButtons.join("");
  ui.combatSecondary.innerHTML = [...loopButtons, ...skillButtons, dungeonButton, gateButton, exitButton].join("");

  ui.mobileActionBar.innerHTML = [...actionButtons, ...loopButtons, ...skillButtons, dungeonButton, gateButton, exitButton].join("");
}

function renderZones() {
  const now = Date.now();
  ui.zoneList.innerHTML = GameData.zones
    .map((zone) => {
      const unlocked = isZoneUnlocked(zone.id);
      return `
      <div class="zone-card ${unlocked ? "" : "locked"} ${state.player.currentZone === zone.id ? "active" : ""}" data-zone="${zone.id}">
        <strong>${zone.name}</strong>
        <div>Recommended Lv ${zone.level}</div>
        <div>Gate Boss: ${zone.gateBoss}</div>
        <div>${unlocked ? "Unlocked" : `Unlock: Lv ${zone.level} + Gate Boss`}</div>
      </div>
    `;
    })
    .join("");

  const cooldown = Math.max(0, state.player.zoneCooldownUntil - now);
  ui.zoneInfo.innerHTML = `
    <div>Current Zone: ${currentZone().name}</div>
    <div>Switch cooldown: ${cooldown > 0 ? `${Math.ceil(cooldown / 60000)} min` : "Ready"}</div>
  `;
}

function renderInventory() {
  const filter = ui.inventoryFilter.value || "all";
  const items = getInventoryItems(filter);
  ui.inventoryList.innerHTML = items
    .map((item) => {
      if (item.type === "gear") {
        const canSocket = state.inventory.gems.some((gem) => gem.qty > 0);
        const canRemove = item.gearTier >= 4 && item.gems.length > 0;
        return `
          <div class="inventory-item" data-item="${item.id}">
            <div class="meta">
              <strong class="rarity" style="color:${item.color}">${item.name}</strong>
              <span class="tooltip">${item.rarity} • Tier ${item.gearTier} • iLvl ${item.itemLevel}</span>
              <span class="tooltip">${gearStatLine(item)}${item.gems.length ? ` • Gems: ${item.gems.map((gem) => gem.name).join(", ")}` : ""}</span>
            </div>
            <div>
              <button class="secondary" data-equip="${item.id}">Equip</button>
              <button class="secondary" data-sell="${item.id}">Sell</button>
              ${canSocket ? `<button class="secondary" data-socket="${item.id}">Socket Gem</button>` : ""}
              ${canRemove ? `<button class="secondary" data-remove-gem="${item.id}">Remove Gem</button>` : ""}
            </div>
          </div>
        `;
      }
      const detail = item.type === "gems" ? `Tier ${item.tier} • ${item.rarity}` : `${item.qty} owned`;
      return `
        <div class="inventory-item">
          <div class="meta">
            <strong>${item.name}</strong>
            <span class="tooltip">${detail}</span>
          </div>
          <div>
            ${item.type === "eggs" ? `<button class="secondary" data-hatch="${item.id}">${item.ready ? "Hatch Egg" : "Not Ready"}</button>` : ""}
            ${item.type === "dragons" ? `<button class="secondary" data-release="${item.id}">Release</button>` : ""}
          </div>
        </div>
      `;
    })
    .join("");
}

function gearStatLine(item) {
  return Object.entries(item.stats)
    .map(([key, value]) => `${key.toUpperCase()} +${formatNumber(value)}`)
    .join(" • ");
}

function renderSkillTree() {
  const classTree = GameData.classes[state.player.class].trees;
  const entries = Object.entries(classTree)
    .map(([branch, nodes]) => {
      const available = nodes.filter((node) => !state.player.unlockedNodes.includes(node) && prerequisitesMet(node));
      const options = available
        .map((node) => {
          const data = GameData.skillNodes[node];
          return `<div class="skill-node">
            <strong>${node}</strong>
            <div>${data.stat.toUpperCase()} +${formatNumber(data.value * 100)}%</div>
            <div>Cost: ${data.cost} points</div>
            <button class="secondary" data-skillnode="${node}">Learn</button>
          </div>`;
        })
        .join("");
      return `
        <details open>
          <summary><strong>${branch}</strong></summary>
          <div>${options || "All nodes unlocked."}</div>
        </details>
      `;
    })
    .join("");

  ui.skillTree.innerHTML = `<div>Skill Points: ${state.player.skillPoints}</div>${entries}`;
}

function prerequisitesMet(node) {
  const prereq = GameData.skillNodes[node].prereq;
  return !prereq || state.player.unlockedNodes.includes(prereq);
}

function renderLifeSkills() {
  ui.lifeSkills.innerHTML = GameData.lifeSkills
    .map((skill) => {
      const data = state.lifeSkills[skill];
      const ready = Date.now() >= data.cooldownUntil;
      return ready
        ? `<div class="life-item">
            <strong>${skill}</strong>
            <div>Lv ${data.level} • XP ${formatNumber(data.xp)}/${formatNumber(data.xpToNext)}</div>
            <button class="secondary" data-life="${skill}">Practice</button>
          </div>`
        : "";
    })
    .join("") || "All skills on cooldown.";

  ui.epicActions.innerHTML = GameData.epicActions
    .map((action) => {
      const ready = cooldownRemaining(`epic-${action.id}`) <= 0;
      const disabled = !ready;
      return `<div class="epic-item">
        <strong>${action.name}</strong>
        <div>${ready ? "Ready" : "Cooling down"}</div>
        <button class="secondary" data-epic="${action.id}" ${disabled ? "disabled" : ""}>Go</button>
      </div>`;
    })
    .join("");
}

function renderDragons() {
  const eggs = state.inventory.eggs.map((egg) => {
    const ready = egg.progress >= egg.required;
    return `
      <div class="inventory-item">
        <div class="meta">
          <strong>${egg.name}</strong>
          <span class="tooltip">Progress ${egg.progress}/${egg.required}</span>
        </div>
        <div>
          <button class="secondary" data-hatch="${egg.id}" ${ready ? "" : "disabled"}>Hatch Egg</button>
          <button class="secondary" data-sell-egg="${egg.id}">Sell</button>
        </div>
      </div>
    `;
  });

  const dragons = state.inventory.dragons.map((dragon) => `
      <div class="inventory-item">
        <div class="meta">
          <strong>${dragon.name}</strong>
          <span class="tooltip">${dragon.bonus}</span>
        </div>
        <div>
          <button class="secondary" data-breed="${dragon.id}">${state.selectedBreeding.includes(dragon.id) ? "Selected" : "Select"}</button>
        </div>
      </div>
  `);

  const selected = state.selectedBreeding
    .map((id) => state.inventory.dragons.find((dragon) => dragon.id === id)?.name)
    .filter(Boolean);

  ui.dragonList.innerHTML = `
    <h3>Eggs</h3>
    ${eggs.join("") || "No eggs yet."}
    <h3>Dragons</h3>
    ${dragons.join("") || "No dragons yet."}
    <div class="skill-node">
      <strong>Breeding</strong>
      <div>Choose 2-3 dragons to breed.</div>
      <div class="tooltip">Selected: ${selected.join(", ") || "None"}</div>
      <button class="secondary" data-breed-action="start">Breed Selected</button>
    </div>
  `;
}

function renderShop() {
  ui.shopList.innerHTML = GameData.shop
    .map((item) => {
      return `<div class="shop-item">
        <strong>${item.name}</strong>
        <div>Cost: ${item.cost} gold</div>
        <button class="secondary" data-buy="${item.id}">Buy</button>
      </div>`;
    })
    .join("");
}

function renderSettings() {
  ui.uiScale.value = state.player.settings.uiScale;
  ui.customScale.value = String(state.player.settings.customScale || 100);
  ui.customScaleValue.textContent = `${ui.customScale.value}%`;
  ui.customScale.disabled = state.player.settings.uiScale !== "custom";
  ui.toggleAnimations.checked = state.player.settings.animations;
  ui.toggleColorblind.checked = state.player.settings.colorblind;
  ui.lootFilterMode.value = state.player.settings.lootFilterMode;
  ui.toggleMobileLayout.checked = state.player.settings.mobileLayout;
}

function renderFusionFilters() {
  const slotValue = ui.fusionSlot.value || "all";
  const tierValue = ui.fusionTier.value || "all";
  const rarityValue = ui.fusionRarity.value || "all";
  ui.fusionSlot.innerHTML = ["all", "weapon", "armor", "helmet", "boots", "accessory"]
    .map((slot) => `<option value="${slot}">${slot}</option>`)
    .join("");
  ui.fusionTier.innerHTML = ["all", 1, 2, 3, 4, 5]
    .map((tier) => `<option value="${tier}">Tier ${tier}</option>`)
    .join("");
  ui.fusionRarity.innerHTML = ["all", ...GameData.rarities.map((r) => r.name.toLowerCase())]
    .map((rarity) => `<option value="${rarity}">${rarity}</option>`)
    .join("");
  ui.fusionSlot.value = slotValue;
  ui.fusionTier.value = tierValue;
  ui.fusionRarity.value = rarityValue;
  renderFusionSelection();
}

function renderFusionSelection() {
  const items = state.inventory.gear.filter((gear) => filterFusionItem(gear));
  ui.fusionSelection.innerHTML = items
    .map((item) => `
      <div class="inventory-item">
        <div class="meta">
          <strong style="color:${item.color}">${item.name}</strong>
          <span class="tooltip">${item.rarity} • Tier ${item.gearTier}</span>
        </div>
        <button class="secondary" data-fuse-select="${item.id}">${state.selectedFusion.includes(item.id) ? "Selected" : "Select"}</button>
      </div>
    `)
    .join("");
}

function filterFusionItem(item) {
  const slot = ui.fusionSlot.value;
  const tier = ui.fusionTier.value;
  const rarity = ui.fusionRarity.value;
  const search = ui.fusionSearch.value.toLowerCase();
  if (slot !== "all" && item.slot !== slot) return false;
  if (tier !== "all" && item.gearTier !== Number(tier)) return false;
  if (rarity !== "all" && item.rarity.toLowerCase() !== rarity) return false;
  if (search && !item.name.toLowerCase().includes(search)) return false;
  return true;
}

function getInventoryItems(filter) {
  const items = [];
  if (filter === "all" || filter === "gear") {
    items.push(...state.inventory.gear.map((item) => ({ ...item, type: "gear" })));
  }
  if (filter === "all" || filter === "materials") {
    items.push(...state.inventory.materials.map((item) => ({ ...item, type: "materials" })));
  }
  if (filter === "all" || filter === "gems") {
    items.push(...state.inventory.gems.map((item) => ({ ...item, type: "gems" })));
  }
  if (filter === "all" || filter === "consumables") {
    items.push(...state.inventory.consumables.map((item) => ({ ...item, type: "consumables" })));
  }
  if (filter === "all" || filter === "eggs") {
    items.push(...state.inventory.eggs.map((item) => ({ ...item, type: "eggs", ready: item.progress >= item.required })));
  }
  if (filter === "all" || filter === "dragons") {
    items.push(...state.inventory.dragons.map((item) => ({ ...item, type: "dragons" })));
  }
  return items;
}

function currentZone() {
  return GameData.zones.find((zone) => zone.id === state.player.currentZone);
}

function nextGateZone() {
  return GameData.zones.find((zone) => !state.player[`gate-${zone.id}`] && state.player.level >= zone.level);
}

function isZoneUnlocked(zoneId) {
  if (zoneId === 1) return true;
  const zone = GameData.zones.find((z) => z.id === zoneId);
  const gateDefeated = state.player[`gate-${zoneId}`];
  return state.player.level >= zone.level && gateDefeated;
}

function setZone(zoneId) {
  const now = Date.now();
  if (now < state.player.zoneCooldownUntil) {
    logMessage("Zone switch is on cooldown.");
    return;
  }
  if (!isZoneUnlocked(zoneId)) {
    logMessage("Zone locked: meet requirements and defeat Gate Boss.");
    return;
  }
  state.player.currentZone = zoneId;
  state.player.zoneCooldownUntil = now + 20 * 60 * 1000;
  logMessage(`Traveled to ${currentZone().name}.`);
  updateAll();
}

function startCombat(type, isGate = false, zoneOverride = null) {
  if (state.player.inCombat) return;
  const zone = zoneOverride ? GameData.zones.find((entry) => entry.id === zoneOverride) : currentZone();
  const templateKey = isGate ? "gate" : type;
  const template = GameData.enemyTemplates[templateKey];
  const enemyLevel = zone.level;
  const enemy = {
    name: isGate ? zone.gateBoss : template.name,
    hp: Math.round(template.hp + enemyLevel * 2),
    maxHP: Math.round(template.hp + enemyLevel * 2),
    atk: Math.round(template.atk + enemyLevel * 0.5),
    def: Math.round(template.def + enemyLevel * 0.3),
    type,
    zoneId: zone.id
  };
  state.enemy = enemy;
  state.player.inCombat = true;
  logMessage(`${enemy.name} appears!`);
  updateAll();
}

function performPlayerAction(action, skillName) {
  if (!state.enemy) {
    logMessage("No enemy to act on.");
    return;
  }
  if (!state.player.inCombat) return;

  let summary = "";
  if (action === "attack") {
    const damage = calculateDamage(baseStats().atk, state.enemy.def);
    summary = `You strike for ${formatNumber(damage)} damage.`;
    state.enemy.hp -= damage;
  }
  if (action === "heal") {
    const potion = state.inventory.consumables.find((item) => item.id === "potion" && item.qty > 0);
    if (!potion) {
      logMessage("No healing items available.");
      return;
    }
    potion.qty -= 1;
    const healAmount = Math.round(state.player.maxHP * 0.3);
    state.player.currentHP = Math.min(state.player.maxHP, state.player.currentHP + healAmount);
    summary = `You heal for ${formatNumber(healAmount)} HP.`;
  }
  if (action === "skill" && skillName) {
    const skill = GameData.skills[skillName];
    if (state.player.resource < skill.cost) {
      logMessage("Not enough resource.");
      return;
    }
    const now = Date.now();
    if (now < (state.player.cooldowns[`skill-${skillName}`] || 0)) {
      logMessage("Skill is on cooldown.");
      return;
    }
    state.player.resource -= skill.cost;
    applySkill(skillName, skill);
    state.player.cooldowns[`skill-${skillName}`] = now + skill.cooldown * 1000;
    summary = `${skillName} used.`;
  }

  state.battleSummary = summary;
  if (state.enemy.hp <= 0) {
    handleVictory();
    return;
  }
  enemyTurn();
}

function applySkill(name, skill) {
  const stats = baseStats();
  const applyDamage = (scale) => {
    const damage = calculateDamage(stats.atk * scale, state.enemy.def);
    state.enemy.hp -= damage;
    logMessage(`${name} hits for ${formatNumber(damage)}.`);
  };
  const applyHeal = (scale) => {
    const healAmount = Math.round(state.player.maxHP * scale);
    state.player.currentHP = Math.min(state.player.maxHP, state.player.currentHP + healAmount);
    logMessage(`${name} heals for ${formatNumber(healAmount)}.`);
  };

  if (skill.effect.type === "damage") {
    applyDamage(skill.effect.scale);
    if (skill.effect.secondary) applySecondary(skill.effect.secondary);
  } else if (skill.effect.type === "multi") {
    for (let i = 0; i < skill.effect.hits; i += 1) applyDamage(skill.effect.scale);
  } else if (skill.effect.type === "heal") {
    applyHeal(skill.effect.scale);
  } else if (skill.effect.type === "buff") {
    state.player.buffs.push({ ...skill.effect, expires: Date.now() + skill.effect.duration * 1000 });
    logMessage(`${name} grants a buff.`);
  } else if (skill.effect.type === "resource") {
    state.player.resource = Math.min(state.player.resourceMax, state.player.resource + skill.effect.amount);
    logMessage(`${name} restores resource.`);
  }
}

function applySecondary(effect) {
  if (effect.type === "debuff") {
    state.enemy.debuffs = state.enemy.debuffs || [];
    state.enemy.debuffs.push({ ...effect, expires: Date.now() + effect.duration * 1000 });
  }
  if (effect.type === "heal") {
    const healAmount = Math.round(state.player.maxHP * effect.scale);
    state.player.currentHP = Math.min(state.player.maxHP, state.player.currentHP + healAmount);
  }
}

function enemyTurn() {
  if (!state.enemy || state.enemy.hp <= 0) return;
  const damage = calculateDamage(state.enemy.atk, baseStats().def);
  state.player.currentHP -= damage;
  logMessage(`${state.enemy.name} hits for ${formatNumber(damage)}.`);
  state.player.resource = Math.min(
    state.player.resourceMax,
    state.player.resource + GameData.classes[state.player.class].resource.regen
  );
  if (state.player.currentHP <= 0) {
    handleDeath();
  }
  updateAll();
}

function calculateDamage(atk, def) {
  const crit = Math.random() < baseStats().crit;
  const raw = Math.max(1, atk - def * 0.5);
  return Math.round(crit ? raw * 1.5 : raw);
}

function handleVictory() {
  const enemy = state.enemy;
  state.player.inCombat = false;
  state.enemy = null;
  const xpReward = GameData.xp.rewards[enemy.type] || 0;
  const loot = rollLoot(enemy.zoneId);
  gainXp(xpReward);
  state.player.gold += loot.gold;
  state.battleSummary = `Victory! +${xpReward} XP, +${loot.gold} gold.`;
  if (enemy.type === "gate") {
    state.player[`gate-${enemy.zoneId}`] = true;
    const zone = GameData.zones.find((entry) => entry.id === enemy.zoneId);
    logMessage(`Gate Boss defeated in ${zone.name}!`);
  }
  advanceEggProgress();
  if (state.player.inDungeonRun) {
    state.player.dungeonProgress += 1;
    if (state.player.dungeonProgress >= 5) {
      state.player.inDungeonRun = false;
      state.player.dungeonProgress = 0;
      logMessage("Dungeon cleared!");
    } else {
      startCombat("dungeon");
      return;
    }
  }
  updateAll();
}

function handleDeath() {
  state.player.inCombat = false;
  state.enemy = null;
  const goldLoss = Math.floor(state.player.gold * 0.25);
  state.player.gold -= goldLoss;
  const xpLoss = Math.floor(state.player.xp * 0.75);
  state.player.xp = Math.max(0, state.player.xp - xpLoss);
  state.player.currentHP = state.player.maxHP;
  logMessage(`You were defeated. Lost ${goldLoss} gold and ${xpLoss} XP.`);
  state.player.inDungeonRun = false;
  state.player.dungeonProgress = 0;
  updateAll();
}

function gainXp(amount) {
  const bonus = getBonus("xp");
  state.player.xp += Math.round(amount * (1 + bonus));
  while (state.player.xp >= state.player.xpToNext && state.player.level < GameData.xp.maxLevel) {
    state.player.xp -= state.player.xpToNext;
    state.player.level += 1;
    state.player.skillPoints += 1;
    state.player.xpToNext = xpToNextLevel(state.player.level);
    state.player.currentHP = state.player.maxHP;
    logMessage(`Level up! Now level ${state.player.level}.`);
  }
}

function rollLoot(zoneId = state.player.currentZone) {
  const zone = GameData.zones.find((entry) => entry.id === zoneId);
  const gold = Math.round((20 + zone.level * 1.5) * (1 + getBonus("gold")));
  const gearDrop = Math.random() < 0.55;
  if (gearDrop) {
    const gear = generateGear(zone.id);
    state.inventory.gear.push(gear);
  }
  const material = rollMaterial(zone.id);
  if (material) addMaterial(material);
  const potionDrop = Math.random() < 0.3;
  if (potionDrop) addConsumable("potion", "Healing Potion", 1);
  const eggDrop = Math.random() < 0.12;
  if (eggDrop) addEgg(zone.id);
  const gemDrop = Math.random() < 0.12;
  if (gemDrop) addGem({ name: "Lesser Gem", tier: 1, rarity: "Uncommon" });
  return { gold };
}

function generateGear(zoneId) {
  const slotOptions = ["weapon", "armor", "helmet", "boots", "accessory"];
  const slot = slotOptions[Math.floor(Math.random() * slotOptions.length)];
  const rarity = rollRarity(zoneId);
  const gearTier = Math.min(5, Math.ceil(zoneId / 2));
  const itemLevel = zoneId * 5 + Math.floor(Math.random() * 5);
  const stats = rollGearStats(gearTier, rarity.multiplier);
  return {
    id: crypto.randomUUID(),
    name: `${rarity.name} ${slot}`,
    slot,
    rarity: rarity.name,
    color: rarity.color,
    gearTier,
    itemLevel,
    stats,
    gems: []
  };
}

function rollGearStats(tier, multiplier) {
  const statPool = ["atk", "def", "hp", "crit"];
  const statCount = Math.min(3, 1 + Math.floor(Math.random() * 3));
  const stats = {};
  for (let i = 0; i < statCount; i += 1) {
    const stat = statPool[Math.floor(Math.random() * statPool.length)];
    const base = 4 * tier;
    stats[stat] = Math.round((base + Math.random() * base) * multiplier);
  }
  return stats;
}

function rollRarity(zoneId) {
  const baseWeights = GameData.rarities.map((rarity) => rarity.weight);
  const zoneShift = zoneId - 1;
  const weights = baseWeights.map((weight, index) => {
    if (index <= 1) return weight + Math.max(0, 6 - zoneShift * 2);
    return Math.max(1, weight + zoneShift * index * 0.8);
  });
  const total = weights.reduce((sum, w) => sum + w, 0);
  let roll = Math.random() * total;
  for (let i = 0; i < GameData.rarities.length; i += 1) {
    roll -= weights[i];
    if (roll <= 0) return GameData.rarities[i];
  }
  return GameData.rarities[0];
}

function rollMaterial(zoneId) {
  const materials = GameData.materials.filter((mat) => mat.zoneMax >= zoneId && mat.tier <= Math.ceil(zoneId / 2));
  if (materials.length === 0) return null;
  return materials[Math.floor(Math.random() * materials.length)];
}

function addMaterial(material) {
  const existing = state.inventory.materials.find((item) => item.id === material.id);
  if (existing) {
    existing.qty += 1;
  } else {
    state.inventory.materials.push({ id: material.id, name: material.name, qty: 1 });
  }
}

function addConsumable(id, name, qty) {
  const existing = state.inventory.consumables.find((item) => item.id === id);
  if (existing) existing.qty += qty;
  else state.inventory.consumables.push({ id, name, qty });
}

function addGem({ name, tier, rarity }) {
  const existing = state.inventory.gems.find((item) => item.name === name && item.tier === tier);
  if (existing) existing.qty += 1;
  else state.inventory.gems.push({ id: crypto.randomUUID(), name, qty: 1, tier, rarity });
}

function addEgg(zoneId) {
  const tier = Math.min(5, Math.ceil(zoneId / 2));
  const eggData = GameData.eggs.find((egg) => egg.tier === tier);
  const requiredBase = Math.floor(10 + Math.random() * 11);
  const required = Math.round(requiredBase * Math.pow(1.25, tier - 1));
  state.inventory.eggs.push({
    id: crypto.randomUUID(),
    name: eggData.name,
    tier,
    progress: 0,
    required
  });
}

function handleAutoBattle() {
  const cooldown = cooldownRemaining("auto");
  if (cooldown > 0) {
    logMessage("Auto battle on cooldown.");
    return;
  }
  const fights = 3 + Math.floor(Math.random() * 3);
  let wins = 0;
  let gold = 0;
  let hpLost = 0;
  const lootList = [];
  for (let i = 0; i < fights; i += 1) {
    wins += 1;
    gold += 10 + currentZone().level;
    hpLost += 6 + currentZone().level;
    if (Math.random() < 0.4) lootList.push("Gear");
  }
  gold = Math.round(gold * (1 + getBonus("gold")));
  state.player.currentHP = Math.max(1, state.player.currentHP - hpLost);
  state.player.gold += gold;
  gainXp(GameData.xp.rewards.auto);
  state.player.cooldowns.auto = Date.now() + 15000;
  state.battleSummary = `Auto Battle: ${fights} fights, ${wins} wins, +${gold} gold, HP lost ${hpLost}. Loot: ${lootList.join(", ") || "None"}.`;
  logMessage("Auto battle completed.");
  updateAll();
}

function cooldownRemaining(key) {
  const now = Date.now();
  const until = state.player.cooldowns[key] || state.epicCooldowns[key] || 0;
  return Math.max(0, (until - now) / 1000);
}

function handleLifeSkill(skill) {
  const data = state.lifeSkills[skill];
  data.xp += 15;
  if (data.xp >= data.xpToNext) {
    data.xp -= data.xpToNext;
    data.level += 1;
    data.xpToNext = Math.round(data.xpToNext * 1.2);
  }
  data.cooldownUntil = Date.now() + 45000;
  const material = GameData.materials.find((mat) => mat.type.toLowerCase() === skill.toLowerCase());
  if (material) addMaterial(material);
  logMessage(`${skill} practiced.`);
  updateAll();
}

function handleEpicAction(id) {
  const action = GameData.epicActions.find((entry) => entry.id === id);
  if (!action) return;
  if (state.player.inCombat && action.type === "combat") {
    logMessage("Finish your current fight first.");
    return;
  }
  state.epicCooldowns[`epic-${id}`] = Date.now() + (action.type === "combat" ? 20000 : 30000);
  if (action.type === "combat") {
    startCombat(id);
  } else if (action.type === "gather") {
    const materialMap = { chop: "wood", mine: "ore", fish: "fish" };
    const materialId = materialMap[id];
    const material = GameData.materials.find((mat) => mat.id === materialId);
    if (material) addMaterial(material);
    logMessage(`${action.name} completed.`);
  } else {
    state.player.gold += 20;
    logMessage("Work job completed. +20 gold.");
  }
  updateAll();
}

function getBonus(type) {
  const nodes = state.player.unlockedNodes.reduce((sum, node) => {
    const data = GameData.skillNodes[node];
    if (data.stat === type) sum += data.value;
    return sum;
  }, 0);
  const dragons = state.inventory.dragons.reduce((sum, dragon) => {
    if (dragon.bonusType === type) sum += dragon.value;
    return sum;
  }, 0);
  return nodes + dragons;
}

function equipItem(itemId) {
  const item = state.inventory.gear.find((gear) => gear.id === itemId);
  if (!item) return;
  const slot = item.slot;
  if (state.equipment[slot]) state.inventory.gear.push(state.equipment[slot]);
  state.equipment[slot] = item;
  state.inventory.gear = state.inventory.gear.filter((gear) => gear.id !== itemId);
  logMessage(`${item.name} equipped.`);
  updateAll();
}

function sellItem(itemId) {
  const index = state.inventory.gear.findIndex((gear) => gear.id === itemId);
  if (index >= 0) {
    const [item] = state.inventory.gear.splice(index, 1);
    const value = Math.round(20 + item.gearTier * 10);
    state.player.gold += value;
    logMessage(`${item.name} sold for ${value} gold.`);
    updateAll();
  }
}

function sellAllFiltered() {
  const filter = ui.inventoryFilter.value || "all";
  if (filter === "gear" || filter === "all") {
    const sellable = state.player.settings.lootFilterMode === "strict"
      ? state.inventory.gear.filter((item) => ["Common", "Uncommon"].includes(item.rarity))
      : state.inventory.gear;
    const value = sellable.reduce((sum, item) => sum + Math.round(20 + item.gearTier * 10), 0);
    state.inventory.gear = state.inventory.gear.filter((item) => !sellable.includes(item));
    state.player.gold += value;
    logMessage(`Sold gear for ${value} gold.`);
  }
  if (filter === "materials" || filter === "all") {
    const count = state.inventory.materials.reduce((sum, item) => sum + item.qty, 0);
    state.inventory.materials = [];
    state.player.gold += count * 2;
    if (count) logMessage(`Sold materials for ${count * 2} gold.`);
  }
  if (filter === "gems" || filter === "all") {
    const count = state.inventory.gems.reduce((sum, item) => sum + item.qty, 0);
    state.inventory.gems = [];
    state.player.gold += count * 10;
    if (count) logMessage(`Sold gems for ${count * 10} gold.`);
  }
  if (filter === "consumables" || filter === "all") {
    const count = state.inventory.consumables.reduce((sum, item) => sum + item.qty, 0);
    state.inventory.consumables = [];
    state.player.gold += count * 5;
    if (count) logMessage(`Sold consumables for ${count * 5} gold.`);
  }
  if (filter === "eggs" || filter === "all") {
    const count = state.inventory.eggs.length;
    state.inventory.eggs = [];
    state.player.gold += count * 50;
    if (count) logMessage(`Sold eggs for ${count * 50} gold.`);
  }
  updateAll();
}

function learnNode(node) {
  const data = GameData.skillNodes[node];
  if (state.player.skillPoints < data.cost) {
    logMessage("Not enough skill points.");
    return;
  }
  if (!prerequisitesMet(node)) return;
  state.player.skillPoints -= data.cost;
  state.player.unlockedNodes.push(node);
  refreshStats();
  updateAll();
}

function hatchEgg(eggId) {
  const eggIndex = state.inventory.eggs.findIndex((egg) => egg.id === eggId);
  if (eggIndex === -1) return;
  const egg = state.inventory.eggs[eggIndex];
  if (egg.progress < egg.required) return;
  const dragonTemplate = GameData.dragons.find((dragon) => dragon.tier === egg.tier);
  state.inventory.dragons.push({
    id: crypto.randomUUID(),
    name: dragonTemplate.name,
    bonus: dragonTemplate.bonus,
    bonusType: dragonTemplate.bonusType,
    value: dragonTemplate.value
  });
  state.inventory.eggs.splice(eggIndex, 1);
  logMessage(`${dragonTemplate.name} has hatched!`);
  updateAll();
}

function breedDragons() {
  if (state.selectedBreeding.length < 2 || state.selectedBreeding.length > 3) {
    logMessage("Select 2 or 3 dragons to breed.");
    return;
  }
  state.selectedBreeding = [];
  addEgg(state.player.currentZone);
  logMessage("Breeding complete. An egg was produced.");
  updateAll();
}

function sellEgg(eggId) {
  const eggIndex = state.inventory.eggs.findIndex((egg) => egg.id === eggId);
  if (eggIndex === -1) return;
  state.inventory.eggs.splice(eggIndex, 1);
  state.player.gold += 50;
  logMessage("Egg sold.");
  updateAll();
}

function releaseDragon(dragonId) {
  state.inventory.dragons = state.inventory.dragons.filter((dragon) => dragon.id !== dragonId);
  state.selectedBreeding = state.selectedBreeding.filter((id) => id !== dragonId);
  logMessage("Dragon released.");
  updateAll();
}

function handleGateBoss() {
  const zone = nextGateZone();
  if (!zone) {
    logMessage("No Gate Boss available.");
    return;
  }
  startCombat("gate", true, zone.id);
}

function handleDungeonStart() {
  if (state.player.inDungeonRun) return;
  state.player.inDungeonRun = true;
  state.player.dungeonProgress = 0;
  startCombat("dungeon");
}

function exitDungeon() {
  state.player.inDungeonRun = false;
  state.player.dungeonProgress = 0;
  state.enemy = null;
  state.player.inCombat = false;
  logMessage("Exited dungeon.");
  updateAll();
}

function advanceEggProgress() {
  state.inventory.eggs.forEach((egg) => {
    egg.progress += 1;
  });
}

function handleShopBuy(id) {
  const item = GameData.shop.find((entry) => entry.id === id);
  if (!item) return;
  if (state.player.gold < item.cost) {
    logMessage("Not enough gold.");
    return;
  }
  state.player.gold -= item.cost;
  if (item.type === "consumable") addConsumable(item.id, item.name, 1);
  if (item.type === "gem") addGem({ name: item.name, tier: item.tier, rarity: item.rarity });
  logMessage(`${item.name} purchased.`);
  updateAll();
}

function handleFusion() {
  if (state.selectedFusion.length !== 2) {
    logMessage("Select exactly 2 items to fuse.");
    return;
  }
  const [first, second] = state.selectedFusion.map((id) => state.inventory.gear.find((gear) => gear.id === id));
  if (!first || !second) return;
  if (first.slot !== second.slot || first.gearTier !== second.gearTier) {
    logMessage("Fusion requires same slot and tier.");
    return;
  }
  const failureChance = GameData.fusionFailure[first.gearTier];
  state.inventory.gear = state.inventory.gear.filter((gear) => !state.selectedFusion.includes(gear.id));
  state.selectedFusion = [];
  if (Math.random() < failureChance) {
    logMessage("Fusion failed. Items lost.");
    updateAll();
    return;
  }
  const newTier = Math.min(5, first.rarity === second.rarity ? first.gearTier + 1 : first.gearTier);
  const newItem = generateGear(Math.min(7, Math.ceil(newTier * 1.4)));
  newItem.gearTier = newTier;
  state.inventory.gear.push(newItem);
  logMessage(`Fusion success: ${newItem.name}.`);
  updateAll();
}

function socketGem(gearId) {
  const gear = state.inventory.gear.find((item) => item.id === gearId);
  const gem = state.inventory.gems.find((item) => item.qty > 0);
  if (!gear || !gem) return;
  if (gem.tier > gear.gearTier) {
    logMessage("Gem tier too high for this gear.");
    return;
  }
  gem.qty -= 1;
  if (gem.qty <= 0) state.inventory.gems = state.inventory.gems.filter((item) => item.qty > 0);
  gear.gems.push({ name: gem.name, tier: gem.tier, rarity: gem.rarity });
  logMessage(`Socketed ${gem.name} into ${gear.name}.`);
  updateAll();
}

function removeGem(gearId) {
  const gear = state.inventory.gear.find((item) => item.id === gearId);
  if (!gear || gear.gearTier < 4 || gear.gems.length === 0) return;
  const gem = gear.gems.pop();
  addGem(gem);
  logMessage(`Removed ${gem.name} from ${gear.name}.`);
  updateAll();
}

function handleNavToggle() {
  if (window.innerWidth <= 900 || state.player.settings.mobileLayout) {
    document.body.dataset.nav = document.body.dataset.nav === "drawer" ? "closed" : "drawer";
    ui.navOverlay.setAttribute("aria-hidden", document.body.dataset.nav !== "drawer");
  } else {
    document.body.dataset.nav = document.body.dataset.nav === "collapsed" ? "expanded" : "collapsed";
  }
}

function closeDrawer() {
  if (window.innerWidth <= 900 || state.player.settings.mobileLayout) {
    document.body.dataset.nav = "closed";
    ui.navOverlay.setAttribute("aria-hidden", "true");
  }
}

function switchTab(tab) {
  document.querySelectorAll(".panel").forEach((panel) => panel.classList.remove("active"));
  document.getElementById(`panel-${tab}`).classList.add("active");
  document.querySelectorAll(".tab-button").forEach((button) => button.classList.remove("active"));
  document.querySelector(`.tab-button[data-tab="${tab}"]`).classList.add("active");
  if (tab !== "combat") ui.mobileActionBar.style.display = "none";
  else ui.mobileActionBar.style.display = "";
  closeDrawer();
}

function handleSettingsChange() {
  state.player.settings.uiScale = ui.uiScale.value;
  state.player.settings.customScale = Number(ui.customScale.value);
  ui.customScaleValue.textContent = `${ui.customScale.value}%`;
  ui.customScale.disabled = state.player.settings.uiScale !== "custom";
  state.player.settings.animations = ui.toggleAnimations.checked;
  state.player.settings.colorblind = ui.toggleColorblind.checked;
  state.player.settings.lootFilterMode = ui.lootFilterMode.value;
  state.player.settings.mobileLayout = ui.toggleMobileLayout.checked;
  updateAll();
}

function resetSave() {
  if (!confirm("Reset all progress?")) return;
  localStorage.removeItem("epicAdventureSave");
  state = defaultState();
  updateAll();
}

function handleSwipe() {
  let startX = 0;
  let startY = 0;
  document.addEventListener("touchstart", (event) => {
    const touch = event.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
  });
  document.addEventListener("touchend", (event) => {
    const touch = event.changedTouches[0];
    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      if (dx > 0 && startX < 40) document.body.dataset.nav = "drawer";
      if (dx < 0) closeDrawer();
    }
  });
}

function updateOrientation() {
  const orientation = window.innerWidth > window.innerHeight ? "landscape" : "portrait";
  document.body.dataset.orientation = orientation;
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then((registration) => {
      registration.update();
      registration.addEventListener("updatefound", () => {
        const worker = registration.installing;
        if (!worker) return;
        worker.addEventListener("statechange", () => {
          if (worker.state === "activated") {
            logMessage("Update applied. Refreshing UI cache.");
          }
        });
      });
    });

    let refreshing = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (refreshing) return;
      refreshing = true;
      window.location.reload();
    });
  }
}

function setupEventListeners() {
  document.body.addEventListener("click", (event) => {
    const tabButton = event.target.closest(".tab-button");
    if (tabButton) {
      switchTab(tabButton.dataset.tab);
      return;
    }
    if (event.target.matches("#navOverlay")) {
      closeDrawer();
      return;
    }
    const actionButton = event.target.closest("button[data-action]");
    if (actionButton) {
      const action = actionButton.dataset.action;
      if (action === "attack") performPlayerAction("attack");
      if (action === "heal") performPlayerAction("heal");
      if (action === "auto") handleAutoBattle();
      if (action === "hunt") startCombat("hunt");
      if (action === "adventure") startCombat("adventure");
      if (action === "miniboss") startCombat("miniboss");
      if (action === "boss") startCombat("boss");
      if (action === "dungeon") handleDungeonStart();
      if (action === "gate") handleGateBoss();
      if (action === "exit-dungeon") exitDungeon();
      return;
    }
    const skillButton = event.target.closest("button[data-skill]");
    if (skillButton) {
      performPlayerAction("skill", skillButton.dataset.skill);
      return;
    }
    const zoneCard = event.target.closest(".zone-card");
    if (zoneCard && !zoneCard.classList.contains("locked")) {
      setZone(Number(zoneCard.dataset.zone));
      return;
    }
    const equipButton = event.target.closest("button[data-equip]");
    if (equipButton) {
      equipItem(equipButton.dataset.equip);
      return;
    }
    const sellButton = event.target.closest("button[data-sell]");
    if (sellButton) {
      sellItem(sellButton.dataset.sell);
      return;
    }
    const releaseButton = event.target.closest("button[data-release]");
    if (releaseButton) {
      releaseDragon(releaseButton.dataset.release);
      return;
    }
    const skillNodeButton = event.target.closest("button[data-skillnode]");
    if (skillNodeButton) {
      learnNode(skillNodeButton.dataset.skillnode);
      return;
    }
    const lifeButton = event.target.closest("button[data-life]");
    if (lifeButton) {
      handleLifeSkill(lifeButton.dataset.life);
      return;
    }
    const epicButton = event.target.closest("button[data-epic]");
    if (epicButton) {
      handleEpicAction(epicButton.dataset.epic);
      return;
    }
    const hatchButton = event.target.closest("button[data-hatch]");
    if (hatchButton) {
      hatchEgg(hatchButton.dataset.hatch);
      return;
    }
    const sellEggButton = event.target.closest("button[data-sell-egg]");
    if (sellEggButton) {
      sellEgg(sellEggButton.dataset.sellEgg);
      return;
    }
    const buyButton = event.target.closest("button[data-buy]");
    if (buyButton) {
      handleShopBuy(buyButton.dataset.buy);
      return;
    }
    const socketButton = event.target.closest("button[data-socket]");
    if (socketButton) {
      socketGem(socketButton.dataset.socket);
      return;
    }
    const removeGemButton = event.target.closest("button[data-remove-gem]");
    if (removeGemButton) {
      removeGem(removeGemButton.dataset.removeGem);
      return;
    }
    const breedButton = event.target.closest("button[data-breed]");
    if (breedButton) {
      const id = breedButton.dataset.breed;
      if (state.selectedBreeding.includes(id)) {
        state.selectedBreeding = state.selectedBreeding.filter((item) => item !== id);
      } else if (state.selectedBreeding.length < 3) {
        state.selectedBreeding.push(id);
      }
      renderDragons();
      return;
    }
    const breedActionButton = event.target.closest("button[data-breed-action]");
    if (breedActionButton) {
      breedDragons();
      return;
    }
    const fuseSelect = event.target.closest("button[data-fuse-select]");
    if (fuseSelect) {
      const id = fuseSelect.dataset.fuseSelect;
      if (state.selectedFusion.includes(id)) {
        state.selectedFusion = state.selectedFusion.filter((item) => item !== id);
      } else if (state.selectedFusion.length < 2) {
        state.selectedFusion.push(id);
      }
      renderFusionSelection();
    }
  });

  ui.navToggle.addEventListener("click", handleNavToggle);
  ui.inventoryFilter.addEventListener("change", renderInventory);
  ui.sellAll.addEventListener("click", sellAllFiltered);
  ui.resetSave.addEventListener("click", resetSave);
  ui.uiScale.addEventListener("change", handleSettingsChange);
  ui.customScale.addEventListener("input", handleSettingsChange);
  ui.customScale.addEventListener("change", handleSettingsChange);
  ui.toggleAnimations.addEventListener("change", handleSettingsChange);
  ui.toggleColorblind.addEventListener("change", handleSettingsChange);
  ui.lootFilterMode.addEventListener("change", handleSettingsChange);
  ui.toggleMobileLayout.addEventListener("change", handleSettingsChange);
  ui.navOverlay.addEventListener("click", closeDrawer);
  ui.fusionSlot.addEventListener("change", renderFusionSelection);
  ui.fusionTier.addEventListener("change", renderFusionSelection);
  ui.fusionRarity.addEventListener("change", renderFusionSelection);
  ui.fusionSearch.addEventListener("input", renderFusionSelection);
  ui.fuseButton.addEventListener("click", handleFusion);

  window.addEventListener("resize", updateOrientation);
  handleSwipe();
}

function initGame() {
  updateOrientation();
  setupEventListeners();
  registerServiceWorker();
  updateAll();
}

initGame();
