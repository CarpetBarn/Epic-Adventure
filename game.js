const GameData = {
  version: 1,
  xp: {
    base: 90,
    exponent: 1.10,
    maxLevel: 200,
    rewards: {
      hunt: 20,
      adventure: 55,
      dungeon: 110,
      miniboss: 250,
      boss: 300,
      auto: 10
    }
  },
  classes: {
    Warrior: {
      resource: { name: "Rage", max: 100, regen: 12 },
      stats: { hp: 130, atk: 12, def: 10, crit: 0.05, spd: 1.0 },
      skills: ["Cleave", "Warcry", "Shield Slam", "Whirlwind"],
      trees: {
        Offense: ["Brutal Force", "Berserker Focus"],
        Defense: ["Iron Wall", "Battle Hardened"],
        Utility: ["Second Wind", "Quick Rally"]
      }
    },
    Rogue: {
      resource: { name: "Energy", max: 80, regen: 15 },
      stats: { hp: 110, atk: 14, def: 8, crit: 0.12, spd: 1.2 },
      skills: ["Backstab", "Smoke Bomb", "Flurry", "Venom Strike"],
      trees: {
        Offense: ["Shadow Strike", "Blade Tempo"],
        Defense: ["Evasion", "Light Foot"],
        Utility: ["Poison Edge", "Treasure Sense"]
      }
    },
    Mage: {
      resource: { name: "Mana", max: 120, regen: 18 },
      stats: { hp: 95, atk: 16, def: 6, crit: 0.08, spd: 0.95 },
      skills: ["Arcane Bolt", "Frost Nova", "Mana Surge", "Flame Lance"],
      trees: {
        Offense: ["Spell Power", "Elemental Fury"],
        Defense: ["Arcane Shield", "Ice Barrier"],
        Utility: ["Mana Flow", "Mystic Insight"]
      }
    },
    Cleric: {
      resource: { name: "Faith", max: 100, regen: 16 },
      stats: { hp: 120, atk: 10, def: 9, crit: 0.06, spd: 1.0 },
      skills: ["Smite", "Radiant Heal", "Sanctuary", "Purge"],
      trees: {
        Offense: ["Holy Fire", "Judgment"],
        Defense: ["Divine Guard", "Blessed Armor"],
        Utility: ["Prayer", "Guidance"]
      }
    },
    Ranger: {
      resource: { name: "Focus", max: 90, regen: 14 },
      stats: { hp: 115, atk: 13, def: 8, crit: 0.09, spd: 1.1 },
      skills: ["Piercing Shot", "Multi Shot", "Camouflage", "Explosive Arrow"],
      trees: {
        Offense: ["Sharp Aim", "Hunter's Mark"],
        Defense: ["Wild Reflex", "Thorn Guard"],
        Utility: ["Tracking", "Field Rations"]
      }
    },
    Paladin: {
      resource: { name: "Zeal", max: 110, regen: 12 },
      stats: { hp: 135, atk: 11, def: 11, crit: 0.05, spd: 0.95 },
      skills: ["Hammer of Light", "Aegis", "Zealous Charge", "Judgment Blade"],
      trees: {
        Offense: ["Crusader", "Lightbringer"],
        Defense: ["Guardian", "Sacred Bulwark"],
        Utility: ["Oathkeeper", "Valor"]
      }
    },
    Necromancer: {
      resource: { name: "Souls", max: 90, regen: 10 },
      stats: { hp: 105, atk: 15, def: 7, crit: 0.07, spd: 0.95 },
      skills: ["Soul Drain", "Bone Spear", "Grave Pact", "Death Bloom"],
      trees: {
        Offense: ["Death Coil", "Dark Ritual"],
        Defense: ["Bone Armor", "Last Breath"],
        Utility: ["Gravecaller", "Harvest"]
      }
    }
  },
  skills: {
    Cleave: { cost: 25, cooldown: 6, tags: ["physical", "melee"], effect: { type: "damage", scale: 1.4 } },
    Warcry: { cost: 15, cooldown: 10, effect: { type: "buff", stat: "atk", value: 0.15, duration: 2 } },
    "Shield Slam": { cost: 20, cooldown: 8, tags: ["physical", "melee"], effect: { type: "damage", scale: 1.1, secondary: { type: "debuff", stat: "def", value: -0.1, duration: 2 } } },
    Backstab: { cost: 20, cooldown: 6, tags: ["physical", "melee"], effect: { type: "damage", scale: 1.6 } },
    "Smoke Bomb": { cost: 25, cooldown: 12, effect: { type: "buff", stat: "def", value: 0.2, duration: 2 } },
    Flurry: { cost: 30, cooldown: 10, tags: ["physical", "melee"], effect: { type: "multi", hits: 2, scale: 0.75 } },
    "Arcane Bolt": { cost: 18, cooldown: 5, tags: ["magic", "arcane"], effect: { type: "damage", scale: 1.5 } },
    "Frost Nova": { cost: 28, cooldown: 9, tags: ["magic", "ice"], effect: { type: "damage", scale: 1.1, secondary: { type: "debuff", stat: "spd", value: -0.1, duration: 2 } } },
    "Mana Surge": { cost: 10, cooldown: 12, effect: { type: "resource", amount: 25 } },
    Smite: { cost: 15, cooldown: 5, tags: ["holy", "magic"], effect: { type: "damage", scale: 1.3 } },
    "Radiant Heal": { cost: 20, cooldown: 10, effect: { type: "heal", scale: 0.3 } },
    Sanctuary: { cost: 25, cooldown: 12, effect: { type: "buff", stat: "def", value: 0.2, duration: 2 } },
    "Piercing Shot": { cost: 18, cooldown: 6, tags: ["physical", "ranged"], effect: { type: "damage", scale: 1.4 } },
    "Multi Shot": { cost: 24, cooldown: 9, tags: ["physical", "ranged"], effect: { type: "multi", hits: 2, scale: 0.8 } },
    Camouflage: { cost: 12, cooldown: 10, effect: { type: "buff", stat: "crit", value: 0.1, duration: 2 } },
    "Hammer of Light": { cost: 22, cooldown: 7, tags: ["holy", "melee"], effect: { type: "damage", scale: 1.3 } },
    Aegis: { cost: 18, cooldown: 10, effect: { type: "buff", stat: "def", value: 0.25, duration: 2 } },
    "Zealous Charge": { cost: 30, cooldown: 12, tags: ["holy", "physical", "melee"], effect: { type: "damage", scale: 1.6 } },
    "Soul Drain": { cost: 22, cooldown: 6, tags: ["shadow", "magic"], effect: { type: "damage", scale: 1.2, secondary: { type: "heal", scale: 0.15 } } },
    "Bone Spear": { cost: 26, cooldown: 8, tags: ["shadow", "physical", "ranged"], effect: { type: "damage", scale: 1.5 } },
    "Grave Pact": { cost: 18, cooldown: 12, effect: { type: "buff", stat: "atk", value: 0.2, duration: 2 } },
    Whirlwind: { cost: 28, cooldown: 11, tags: ["physical", "melee"], effect: { type: "multi", hits: 2, scale: 0.9 } },
    "Venom Strike": { cost: 22, cooldown: 8, tags: ["shadow", "melee"], effect: { type: "damage", scale: 1.35 } },
    "Flame Lance": { cost: 26, cooldown: 9, tags: ["magic", "fire"], effect: { type: "damage", scale: 1.45 } },
    Purge: { cost: 24, cooldown: 10, tags: ["holy", "magic"], effect: { type: "damage", scale: 1.4 } },
    "Explosive Arrow": { cost: 25, cooldown: 10, tags: ["physical", "ranged", "fire"], effect: { type: "damage", scale: 1.5 } },
    "Judgment Blade": { cost: 27, cooldown: 10, tags: ["holy", "physical", "melee"], effect: { type: "damage", scale: 1.5 } },
    "Death Bloom": { cost: 24, cooldown: 9, tags: ["shadow", "magic"], effect: { type: "multi", hits: 2, scale: 0.85 } }
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
    1: { atk: 1.0 },
    2: { atk: 1.5 },
    3: { atk: 2.0 },
    4: { atk: 2.5 },
    5: { atk: 3.0 }
  },
  gemTypes: [
    "Slayer", "Penetrator", "Executioner",
    "Bastion", "Lifebloom", "Wardstone",
    "Flow", "Precision", "Momentum"
  ],
  zones: [
    { id: 1, name: "Greenwild", level: 1, gateBoss: "Thorn Guardian" },
    { id: 2, name: "Amber Dunes", level: 20, gateBoss: "Dune Reaver" },
    { id: 3, name: "Frostbite Ridge", level: 40, gateBoss: "Glacier Wyrm" },
    { id: 4, name: "Umbral Marsh", level: 60, gateBoss: "Swamp Horror" },
    { id: 5, name: "Skyreach Peaks", level: 90, gateBoss: "Storm Talon" },
    { id: 6, name: "Obsidian Depths", level: 130, gateBoss: "Lava Behemoth" },
    { id: 7, name: "Astral Sanctum", level: 170, gateBoss: "Eternal Sentinel" }
  ],
  resistanceProfiles: {
    neutral: {},
    armored: { physical: 0.8, melee: 0.85, magic: 1.1 },
    swift: { ranged: 0.8, melee: 1.1 },
    undead: { shadow: 0.7, holy: 1.3 },
    elemental: { ice: 0.7, fire: 1.2, arcane: 1.1 },
    boss: { physical: 0.9, magic: 0.9, holy: 0.9, shadow: 0.9 }
  },
  traitRules: {
    Armored: { melee: 0.9, physical: 0.9 },
    Undead: { shadow: 0.85, holy: 1.2 },
    Swift: { ranged: 0.9, melee: 1.05 },
    Boss: { physical: 0.92, magic: 0.92 }
  },
  enemyTemplates: {
    hunt: { name: "Wilderness Stalker", hp: 80, atk: 8, def: 4, profile: "swift", traits: ["Beast", "Swift"] },
    adventure: { name: "Wild Raider", hp: 120, atk: 10, def: 5, profile: "armored", traits: ["Humanoid", "Armored"] },
    dungeon: { name: "Dungeon Fiend", hp: 140, atk: 11, def: 6, profile: "undead", traits: ["Undead"] },
    miniboss: { name: "Feral Champion", hp: 180, atk: 13, def: 7, profile: "elemental", traits: ["Elemental"] },
    boss: { name: "Ancient Titan", hp: 240, atk: 15, def: 8, profile: "boss", traits: ["Boss"] },
    gate: { name: "Gate Guardian", hp: 220, atk: 14, def: 8, profile: "boss", traits: ["Gate Boss"] }
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
  lifeSkillMaxLevel: 100,
  lifeSkillBreakpoints: [10, 20, 30, 40, 50, 75, 100],
  consumableDefs: {
    potion: { id: "potion", name: "Healing Potion", type: "potion", healPct: 0.30 },
    ironhide: { id: "ironhide", name: "Ironhide", type: "potion", status: { id: "ironhide", type: "dmg-in", potency: -0.20, duration: 3, tickTiming: "start" } },
    weakening: { id: "weakening", name: "Weakening", type: "potion", status: { id: "weakening", type: "dmg-out", potency: -0.15, duration: 2, tickTiming: "start", target: "enemy" } },
    purge: { id: "purge", name: "Purge", type: "potion", purge: true },
    fracture: { id: "fracture", name: "Fracture", type: "potion", status: { id: "fracture", type: "dmg-in", potency: 0.20, duration: 2, tickTiming: "start", target: "enemy" } },
    hunter_stew: { id: "hunter_stew", name: "Hunter’s Stew", type: "meal", meal: { stat: "crit", value: 0.15 } },
    ironroot_soup: { id: "ironroot_soup", name: "Ironroot Soup", type: "meal", meal: { stat: "hp", value: 0.20 } },
    mages_broth: { id: "mages_broth", name: "Mage’s Broth", type: "meal", meal: { stat: "resourceRegen", value: 0.25 } },
    ember_feast: { id: "ember_feast", name: "Ember Feast", type: "meal", meal: { stat: "bossDmg", value: 0.20 } },
    guardian_platter: { id: "guardian_platter", name: "Guardian Platter", type: "meal", meal: { stat: "dmgReduction", value: 0.10 } }
  },
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

Object.values(GameData.skillNodes).forEach((node) => {
  const isKeystone = Boolean(node.prereq) && node.cost >= 3;
  const isMid = !isKeystone && (Boolean(node.prereq) || node.cost >= 3);
  node.value = isKeystone ? 0.06 : (isMid ? 0.04 : 0.03);
});

const SAVE_VERSION = 5;
const SAVE_KEYS = {
  meta: "epicAdventureSaveMeta",
  player: "epicAdventureSavePlayer",
  inventory: "epicAdventureSaveInventory",
  equipment: "epicAdventureSaveEquipment",
  lifeSkills: "epicAdventureSaveLifeSkills",
  misc: "epicAdventureSaveMisc",
  legacy: "epicAdventureSave",
  backup: "epicAdventureSaveBackup"
};

function getDefaultSkillLoadouts() {
  return Object.fromEntries(
    Object.entries(GameData.classes).map(([className, classData]) => [className, classData.skills.slice(0, 2)])
  );
}

const defaultState = (selectedClass = "Warrior") => {
  const playerClass = GameData.classes[selectedClass] ? selectedClass : "Warrior";
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
      statuses: [],
      cooldowns: {},
      preparedBuffs: [],
      activeGearLoadoutId: "farm",
      gearLoadouts: {
        version: 1,
        slots: [
          { id: "farm", name: "Farm", equipmentSnapshot: { weapon: null, armor: null, helmet: null, boots: null, accessory: null } },
          { id: "boss", name: "Boss", equipmentSnapshot: { weapon: null, armor: null, helmet: null, boots: null, accessory: null } },
          { id: "dungeon", name: "Dungeon", equipmentSnapshot: { weapon: null, armor: null, helmet: null, boots: null, accessory: null } }
        ]
      },
      settings: {
        uiScale: "medium",
        customScale: 100,
        animations: true,
        lootFilterMode: "normal",
        colorblind: false,
        mobileLayout: false,
        compactNav: true
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
    combatTurn: 0,
    logFilter: "all",
    logAutoScrollPaused: false,
    selectedSkills: getDefaultSkillLoadouts(),
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
  battleResultLog: document.getElementById("battleResultLog"),
  logFilters: document.getElementById("logFilters"),
  resumeLog: document.getElementById("resumeLog"),
  equippedSummary: document.getElementById("equippedSummary"),
  inventoryActions: document.getElementById("inventoryActions"),
  zoneList: document.getElementById("zoneList"),
  zoneInfo: document.getElementById("zoneInfo"),
  inventoryList: document.getElementById("inventoryList"),
  inventoryFilter: document.getElementById("inventoryFilter"),
  inventorySort: document.getElementById("inventorySort"),
  sellAll: document.getElementById("sellAll"),
  gearLoadouts: document.getElementById("gearLoadouts"),
  skillLoadout: document.getElementById("skillLoadout"),
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
  toggleCompactNav: document.getElementById("toggleCompactNav"),
  newGameClass: document.getElementById("newGameClass"),
  startNewGame: document.getElementById("startNewGame"),
  exportSave: document.getElementById("exportSave"),
  importSave: document.getElementById("importSave"),
  restoreBackup: document.getElementById("restoreBackup"),
  saveDataField: document.getElementById("saveDataField"),
  resetSave: document.getElementById("resetSave"),
  mobileActionBar: document.getElementById("mobileActionBar"),
  navToggle: document.getElementById("navToggle"),
  navOverlay: document.getElementById("navOverlay"),
  toastStack: document.getElementById("toastStack"),
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

function levelGrowth(level) {
  const gainedLevels = Math.max(0, level - 1);
  const earlyLevels = Math.min(gainedLevels, 39);
  const lateLevels = Math.max(0, level - 40);
  return {
    hp: earlyLevels * 4 + lateLevels * 3,
    atk: earlyLevels * 0.4 + lateLevels * 0.3,
    def: earlyLevels * 0.35 + lateLevels * 0.25,
    crit: gainedLevels * 0.001
  };
}

function nodeBonusCap(stat, level) {
  const caps = {
    atk: Math.min(0.20, 0.012 * level),
    def: Math.min(0.22, 0.013 * level),
    hp: Math.min(0.26, 0.015 * level),
    crit: Math.min(0.10, 0.006 * level)
  };
  return caps[stat] ?? Infinity;
}

function gemConstraintsForLevel(level) {
  if (level <= 15) return { maxSockets: 1, maxTier: 1, atkBudget: 2 };
  if (level <= 40) return { maxSockets: 2, maxTier: 3, atkBudget: 8 };
  return { maxSockets: 5, maxTier: 5, atkBudget: Infinity };
}

function gemAtkValue(tier, level, rarity = "Uncommon") {
  const base = GameData.gemBonuses[tier]?.atk || 1;
  const scalar = 1 + Math.min(0.8, level * 0.01);
  const rarityScale = gemRarityMultiplier(rarity);
  const legendaryFloor = rarity === "Legendary" ? 1.25 : 1;
  return Math.max(1, Math.floor(base * scalar * rarityScale * legendaryFloor));
}

function allOwnedGear() {
  return [...state.inventory.gear, ...Object.values(state.equipment).filter(Boolean)];
}

function totalSocketedGems() {
  return allOwnedGear().reduce((sum, gear) => sum + (gear.gems?.length || 0), 0);
}

function totalGemAtkFromSockets(level) {
  return allOwnedGear().reduce(
    (sum, gear) => sum + (gear.gems || []).reduce((sub, gem) => sub + gemAtkValue(gem.tier, level, gem.rarity), 0),
    0
  );
}

function gemRarityMultiplier(rarity = "Uncommon") {
  const map = { Common: 1.0, Uncommon: 1.1, Rare: 1.25, Epic: 1.45, Legendary: 1.9 };
  return map[rarity] || 1.0;
}

function chooseGemType() {
  const enchanting = state.lifeSkills?.Enchanting?.level || 1;
  if (enchanting < 10) return "Basic";
  return GameData.gemTypes[Math.floor(Math.random() * GameData.gemTypes.length)];
}

function gemTypeEffects() {
  const effects = {
    bossDmg: 0, armorIgnore: 0, executeBonus: 0,
    damageReduction: 0, healOnKill: 0, debuffDurationReduction: 0,
    resourceRegen: 0, critConversion: 0, firstSkillBonus: 0
  };
  const enchanting = state.lifeSkills?.Enchanting?.level || 1;
  const secondaryUnlocked = enchanting >= 30;
  Object.values(state.equipment).filter(Boolean).forEach((gear) => {
    (gear.gems || []).forEach((gem) => {
      const base = (gem.tier || 1) * 0.01 * gemRarityMultiplier(gem.rarity);
      const boost = gem.rarity === "Legendary" && secondaryUnlocked ? 1.5 : 1;
      const v = base * boost;
      if (gem.type === "Slayer") effects.bossDmg += v * 2;
      if (gem.type === "Penetrator") effects.armorIgnore += v * 1.8;
      if (gem.type === "Executioner") effects.executeBonus += v * 1.6;
      if (gem.type === "Bastion") effects.damageReduction += v * 1.6;
      if (gem.type === "Lifebloom") effects.healOnKill += v * 2.2;
      if (gem.type === "Wardstone") effects.debuffDurationReduction += v * 1.8;
      if (gem.type === "Flow") effects.resourceRegen += v * 1.6;
      if (gem.type === "Precision") effects.critConversion += v * 1.3;
      if (gem.type === "Momentum") effects.firstSkillBonus += v * 2.2;
    });
  });
  return effects;
}

function getLifeSkillLevel(name) {
  return state.lifeSkills?.[name]?.level || 1;
}

function activePreparedBuffs() {
  const buffs = Array.isArray(state.player.preparedBuffs) ? state.player.preparedBuffs : [];
  state.player.preparedBuffs = buffs.filter((buff) => buff.remainingBattles > 0);
  return state.player.preparedBuffs;
}

function mealBuffLimit() {
  const cooking = getLifeSkillLevel("Cooking");
  return cooking >= 75 ? 3 : cooking >= 30 ? 2 : 1;
}

function mealDurationBattles() {
  const cooking = getLifeSkillLevel("Cooking");
  return 2 + Math.floor(cooking / 25);
}

function lifeSkillPassives() {
  const mining = getLifeSkillLevel("Mining");
  const foraging = getLifeSkillLevel("Foraging");
  const alchemy = getLifeSkillLevel("Alchemy");
  const cooking = getLifeSkillLevel("Cooking");
  const hunting = getLifeSkillLevel("Hunting");
  const mealBonuses = activePreparedBuffs().reduce((acc, buff) => {
    if (buff.stat) acc[buff.stat] = (acc[buff.stat] || 0) + buff.value;
    return acc;
  }, {});
  return {
    armorPen: 0.08 + mining * 0.0025,
    dotMitigation: Math.min(0.45, foraging * 0.004),
    potionBoost: Math.min(0.5, foraging * 0.005),
    alchemyDebuffBoost: Math.min(0.35, alchemy * 0.003),
    alchemyDebuffChance: Math.min(0.95, 0.7 + alchemy * 0.0025),
    ignoreBossResDebuff: alchemy >= 75,
    mealSlots: mealBuffLimit(),
    mealDuration: mealDurationBattles(),
    bossDmg: 0.06 + hunting * 0.002 + (mealBonuses.bossDmg || 0),
    executeThreshold: hunting >= 50 ? 0.12 : 0,
    damageReduction: Math.min(0.35, hunting * 0.0015) + (mealBonuses.dmgReduction || 0),
    critBonus: (mealBonuses.crit || 0),
    hpBonus: (mealBonuses.hp || 0),
    resourceRegenBonus: (mealBonuses.resourceRegen || 0)
  };
}

function preparedBonusesSummary() {
  const p = lifeSkillPassives();
  return `Armor Pen ${Math.round(p.armorPen * 100)}% • DoT Mit ${Math.round(p.dotMitigation * 100)}% • Boss Dmg +${Math.round(p.bossDmg * 100)}% • DR ${Math.round(p.damageReduction * 100)}%`;
}

function currentLogGroup() {
  if (!state.player.inCombat) return null;
  return `P${state.enemy?.phase || 1} • T${state.combatTurn || 1}`;
}

function logMessage(message, category = "system", group = null) {
  state.log.unshift({ message, time: Date.now(), category, group: group ?? currentLogGroup() });
  if (state.log.length > 60) state.log.pop();
  renderLog();
}

function renderLog() {
  const filter = state.logFilter || "all";
  const entries = state.log.filter((entry) => filter === "all" || (entry.category || "system") === filter);
  const html = [];
  let lastGroup = null;
  entries.forEach((entry) => {
    if (entry.group && entry.group !== lastGroup) {
      html.push(`<div class="log-group-title">${entry.group}</div>`);
      lastGroup = entry.group;
    }
    const cat = entry.category || "system";
    html.push(`<div class="log-entry" data-cat="${cat}">${entry.message}</div>`);
  });
  ui.logEntries.innerHTML = html.join("");
  if (!state.logAutoScrollPaused) ui.logEntries.scrollTop = 0;
  if (ui.resumeLog) ui.resumeLog.hidden = !state.logAutoScrollPaused;
}

function ensureToastStack() {
  if (!ui.toastStack) {
    const node = document.createElement("div");
    node.id = "toastStack";
    node.className = "toast-stack";
    document.body.appendChild(node);
    ui.toastStack = node;
  }
}

function showToast(message) {
  ensureToastStack();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  ui.toastStack.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 20);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 220);
  }, 1800);
}

function initPanelHeaders() {
  const primaryByPanel = {
    combat: { label: "Hunt", action: "hunt" },
    zones: { label: "To Combat", tab: "combat" },
    inventory: { label: "Sell All", click: "#sellAll" },
    skills: { label: "To Combat", tab: "combat" },
    life: { label: "Hunt", action: "hunt" },
    dragons: { label: "To Inventory", tab: "inventory" },
    shop: { label: "Buy Potion", buy: "potion" },
    settings: { label: "Export Save", click: "#exportSave" }
  };

  document.querySelectorAll(".panel").forEach((panel) => {
    const card = panel.querySelector(".card");
    const title = card?.querySelector("h2");
    if (!card || !title || card.querySelector(".panel-header")) return;
    const panelName = panel.id.replace("panel-", "");
    const config = primaryByPanel[panelName] || { label: "Open Combat", tab: "combat" };
    const header = document.createElement("div");
    header.className = "panel-header";
    const action = document.createElement("button");
    action.className = "secondary panel-primary";
    action.textContent = config.label;
    if (config.action) action.dataset.action = config.action;
    if (config.tab) action.dataset.panelTab = config.tab;
    if (config.click) action.dataset.panelClick = config.click;
    if (config.buy) action.dataset.buy = config.buy;
    title.replaceWith(header);
    header.appendChild(title);
    header.appendChild(action);
  });
}

let lastSavedSnapshot = {};

function saveState() {
  const sections = {
    meta: { version: SAVE_VERSION, timestamp: Date.now() },
    player: state.player,
    inventory: state.inventory,
    equipment: state.equipment,
    lifeSkills: state.lifeSkills,
    misc: {
      enemy: state.enemy,
      epicCooldowns: state.epicCooldowns,
      log: state.log,
      battleSummary: state.battleSummary,
      selectedFusion: state.selectedFusion,
      selectedBreeding: state.selectedBreeding,
      eggBattleCount: state.eggBattleCount
    }
  };

  for (const [section, value] of Object.entries(sections)) {
    const payload = JSON.stringify(value);
    if (lastSavedSnapshot[section] !== payload) {
      localStorage.setItem(SAVE_KEYS[section], payload);
      lastSavedSnapshot[section] = payload;
    }
  }
}

const debouncedSave = debounce(saveState, 800);

function migrateSaveBundle(bundle) {
  const migrated = { ...bundle };
  if (!migrated.meta) migrated.meta = { version: 1 };
  if (migrated.meta.version < 2) {
    migrated.player = migrated.player || {};
    migrated.player.settings = {
      compactNav: true,
      ...(migrated.player.settings || {})
    };
    migrated.meta.version = 2;
  }
  if (migrated.meta.version < 3) {
    migrated.player = migrated.player || {};
    migrated.player.preparedBuffs = Array.isArray(migrated.player.preparedBuffs) ? migrated.player.preparedBuffs : [];
    migrated.meta.version = 3;
  }
  if (migrated.meta.version < 4) {
    migrated.player = migrated.player || {};
    migrated.player.activeGearLoadoutId = migrated.player.activeGearLoadoutId || "farm";
    migrated.player.gearLoadouts = migrated.player.gearLoadouts || {
      version: 1,
      slots: [
        { id: "farm", name: "Farm", equipmentSnapshot: { weapon: null, armor: null, helmet: null, boots: null, accessory: null } },
        { id: "boss", name: "Boss", equipmentSnapshot: { weapon: null, armor: null, helmet: null, boots: null, accessory: null } },
        { id: "dungeon", name: "Dungeon", equipmentSnapshot: { weapon: null, armor: null, helmet: null, boots: null, accessory: null } }
      ]
    };
    migrated.meta.version = 4;
  }
  if (migrated.meta.version < 5) {
    migrated.player = migrated.player || {};
    const slots = migrated.player.gearLoadouts?.slots || [];
    migrated.player.gearLoadouts = {
      version: 1,
      slots: slots.map((slot) => ({
        ...slot,
        equipmentSnapshot: {
          weapon: slot?.equipmentSnapshot?.weapon || null,
          armor: slot?.equipmentSnapshot?.armor || null,
          helmet: slot?.equipmentSnapshot?.helmet || null,
          boots: slot?.equipmentSnapshot?.boots || null,
          accessory: slot?.equipmentSnapshot?.accessory || null
        }
      }))
    };
    migrated.meta.version = 5;
  }
  return migrated;
}

function buildStateFromBundle(bundle) {
  const base = defaultState();
  const migrated = migrateSaveBundle(bundle);
  return {
    ...base,
    ...migrated.misc,
    player: {
      ...base.player,
      ...(migrated.player || {}),
      settings: {
        ...base.player.settings,
        ...(migrated.player?.settings || {})
      }
    },
    inventory: {
      ...base.inventory,
      ...(migrated.inventory || {})
    },
    equipment: {
      ...base.equipment,
      ...(migrated.equipment || {})
    },
    lifeSkills: {
      ...base.lifeSkills,
      ...(migrated.lifeSkills || {})
    }
  };
}

function loadState() {
  try {
    const metaRaw = localStorage.getItem(SAVE_KEYS.meta);
    if (metaRaw) {
      const bundle = {
        meta: JSON.parse(metaRaw),
        player: JSON.parse(localStorage.getItem(SAVE_KEYS.player) || "{}"),
        inventory: JSON.parse(localStorage.getItem(SAVE_KEYS.inventory) || "{}"),
        equipment: JSON.parse(localStorage.getItem(SAVE_KEYS.equipment) || "{}"),
        lifeSkills: JSON.parse(localStorage.getItem(SAVE_KEYS.lifeSkills) || "{}"),
        misc: JSON.parse(localStorage.getItem(SAVE_KEYS.misc) || "{}")
      };
      return buildStateFromBundle(bundle);
    }

    const legacyRaw = localStorage.getItem(SAVE_KEYS.legacy);
    if (!legacyRaw) return defaultState();
    const parsed = JSON.parse(legacyRaw);
    const upgraded = buildStateFromBundle({
      meta: { version: 1 },
      player: parsed.player,
      inventory: parsed.inventory,
      equipment: parsed.equipment,
      lifeSkills: parsed.lifeSkills,
      misc: {
        enemy: parsed.enemy,
        epicCooldowns: parsed.epicCooldowns,
        log: parsed.log,
        battleSummary: parsed.battleSummary,
        selectedFusion: parsed.selectedFusion,
        selectedBreeding: parsed.selectedBreeding,
        eggBattleCount: parsed.eggBattleCount
      }
    });
    localStorage.removeItem(SAVE_KEYS.legacy);
    return upgraded;
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

function ensureStateIntegrity() {
  state.inventory.gear = (state.inventory.gear || []).map((gear) => ({
    ...gear,
    gems: (Array.isArray(gear.gems) ? gear.gems : []).map((gem) => ({
      ...gem,
      type: gem.type || "Basic",
      rarity: gem.rarity || "Uncommon"
    })),
    locked: Boolean(gear.locked),
    gearScore: typeof gear.gearScore === "number" ? gear.gearScore : Math.round(((gear.stats?.atk || 0) * 1.4) + ((gear.stats?.def || 0) * 1.2) + ((gear.stats?.hp || 0) * 0.18) + ((gear.stats?.crit || 0) * 8))
  }));

  Object.keys(state.equipment || {}).forEach((slot) => {
    const gear = state.equipment[slot];
    if (!gear) return;
    gear.gems = (Array.isArray(gear.gems) ? gear.gems : []).map((gem) => ({
      ...gem,
      type: gem.type || "Basic",
      rarity: gem.rarity || "Uncommon"
    }));
    gear.gearScore = typeof gear.gearScore === "number"
      ? gear.gearScore
      : Math.round(((gear.stats?.atk || 0) * 1.4) + ((gear.stats?.def || 0) * 1.2) + ((gear.stats?.hp || 0) * 0.18) + ((gear.stats?.crit || 0) * 8));
  });

  Object.values(state.lifeSkills || {}).forEach((entry) => {
    entry.level = Math.min(GameData.lifeSkillMaxLevel, Math.max(1, entry.level || 1));
  });
  state.inventory.gems = (state.inventory.gems || []).map((gem) => ({
    ...gem,
    type: gem.type || "Basic",
    rarity: gem.rarity || "Uncommon"
  }));
  state.player.preparedBuffs = Array.isArray(state.player.preparedBuffs) ? state.player.preparedBuffs : [];
  state.combatTurn = Number.isFinite(state.combatTurn) ? state.combatTurn : 0;
  state.logFilter = state.logFilter || "all";
  state.logAutoScrollPaused = Boolean(state.logAutoScrollPaused);
  const normalizeGearLike = (gear) => {
    if (!gear) return null;
    return {
      ...gear,
      gems: (Array.isArray(gear.gems) ? gear.gems : []).map((gem) => ({
        ...gem,
        type: gem.type || "Basic",
        rarity: gem.rarity || "Uncommon"
      })),
      locked: Boolean(gear.locked),
      gearScore: typeof gear.gearScore === "number"
        ? gear.gearScore
        : Math.round(((gear.stats?.atk || 0) * 1.4) + ((gear.stats?.def || 0) * 1.2) + ((gear.stats?.hp || 0) * 0.18) + ((gear.stats?.crit || 0) * 8))
    };
  };
  const defaultSlots = [
    { id: "farm", name: "Farm", equipmentSnapshot: { weapon: null, armor: null, helmet: null, boots: null, accessory: null } },
    { id: "boss", name: "Boss", equipmentSnapshot: { weapon: null, armor: null, helmet: null, boots: null, accessory: null } },
    { id: "dungeon", name: "Dungeon", equipmentSnapshot: { weapon: null, armor: null, helmet: null, boots: null, accessory: null } }
  ];
  state.player.gearLoadouts = state.player.gearLoadouts || { version: 1, slots: defaultSlots };
  state.player.gearLoadouts.version = 1;
  state.player.gearLoadouts.slots = (state.player.gearLoadouts.slots || defaultSlots).map((slot, idx) => ({
    id: slot.id || defaultSlots[idx]?.id || `slot-${idx+1}`,
    name: slot.name || defaultSlots[idx]?.name || `Slot ${idx+1}`,
    equipmentSnapshot: {
      weapon: normalizeGearLike(slot.equipmentSnapshot?.weapon),
      armor: normalizeGearLike(slot.equipmentSnapshot?.armor),
      helmet: normalizeGearLike(slot.equipmentSnapshot?.helmet),
      boots: normalizeGearLike(slot.equipmentSnapshot?.boots),
      accessory: normalizeGearLike(slot.equipmentSnapshot?.accessory)
    }
  })).slice(0,3);
  while (state.player.gearLoadouts.slots.length < 3) state.player.gearLoadouts.slots.push(defaultSlots[state.player.gearLoadouts.slots.length]);
  if (!state.player.gearLoadouts.slots.some((slot) => slot.id === state.player.activeGearLoadoutId)) {
    state.player.activeGearLoadoutId = state.player.gearLoadouts.slots[0].id;
  }

  const defaults = getDefaultSkillLoadouts();
  state.selectedSkills = state.selectedSkills || {};
  Object.keys(GameData.classes).forEach((className) => {
    const pool = GameData.classes[className].skills;
    const current = Array.isArray(state.selectedSkills[className]) ? state.selectedSkills[className] : defaults[className];
    const valid = current.filter((skill) => pool.includes(skill));
    while (valid.length < 2) {
      const candidate = pool.find((skill) => !valid.includes(skill));
      if (!candidate) break;
      valid.push(candidate);
    }
    state.selectedSkills[className] = valid.slice(0, 2);
  });
}

function activeTabName() {
  const activePanel = document.querySelector(".panel.active");
  return activePanel ? activePanel.id.replace("panel-", "") : "combat";
}

function renderActivePanel() {
  const tab = activeTabName();
  if (tab === "combat") renderCombat();
  if (tab === "zones") renderZones();
  if (tab === "inventory") {
    renderInventory();
    renderFusionFilters();
  }
  if (tab === "skills") renderSkillTree();
  if (tab === "life") renderLifeSkills();
  if (tab === "dragons") renderDragons();
  if (tab === "shop") renderShop();
  if (tab === "settings") renderSettings();
}

function updateAll() {
  applySettings();
  updatePlayerMeta();
  renderCombat();
  renderActivePanel();
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
  document.body.dataset.navstyle = state.player.settings.compactNav ? "compact" : "cozy";
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

let statsCache = { signature: "", value: null };

function buildStatsSignature() {
  return JSON.stringify({
    className: state.player.class,
    level: state.player.level,
    unlocked: state.player.unlockedNodes,
    equipment: state.equipment,
    dragons: state.inventory.dragons
  });
}

function baseStats() {
  const signature = buildStatsSignature();
  if (statsCache.signature === signature && statsCache.value) {
    return statsCache.value;
  }

  const classStats = GameData.classes[state.player.class].stats;
  const growth = levelGrowth(state.player.level);
  const passives = lifeSkillPassives();
  const gemEffects = gemTypeEffects();
  const effectiveClassStats = {
    hp: classStats.hp + growth.hp,
    atk: classStats.atk + growth.atk,
    def: classStats.def + growth.def,
    crit: classStats.crit + growth.crit + passives.critBonus + gemEffects.critConversion * 0.05,
    spd: classStats.spd
  };
  const constraints = gemConstraintsForLevel(state.player.level);
  const equipmentBonus = Object.values(state.equipment)
    .filter(Boolean)
    .reduce(
      (acc, gear) => {
        Object.entries(gear.stats).forEach(([stat, value]) => {
          acc[stat] = (acc[stat] || 0) + value;
        });
        return acc;
      },
      {}
    );
  const gemAtkBonus = Math.min(totalGemAtkFromSockets(state.player.level), constraints.atkBudget);
  equipmentBonus.atk = (equipmentBonus.atk || 0) + gemAtkBonus;
  const rawBonus = state.player.unlockedNodes.reduce(
    (acc, node) => {
      const data = GameData.skillNodes[node];
      acc[data.stat] = (acc[data.stat] || 0) + data.value;
      return acc;
    },
    {}
  );
  const bonus = {
    ...rawBonus,
    atk: Math.min(rawBonus.atk || 0, nodeBonusCap("atk", state.player.level)),
    def: Math.min(rawBonus.def || 0, nodeBonusCap("def", state.player.level)),
    hp: Math.min(rawBonus.hp || 0, nodeBonusCap("hp", state.player.level)),
    crit: Math.min(rawBonus.crit || 0, nodeBonusCap("crit", state.player.level))
  };
  const dragonBonus = state.inventory.dragons.reduce(
    (acc, dragon) => {
      if (dragon.bonusType) acc[dragon.bonusType] = (acc[dragon.bonusType] || 0) + dragon.value;
      return acc;
    },
    {}
  );
  const maxHP = Math.round(effectiveClassStats.hp * (1 + (bonus.hp || 0) + (dragonBonus.hp || 0) + passives.hpBonus) + (equipmentBonus.hp || 0));
  const atk = Math.round(effectiveClassStats.atk * (1 + (bonus.atk || 0) + (dragonBonus.atk || 0)) + (equipmentBonus.atk || 0));
  const def = Math.round(effectiveClassStats.def * (1 + (bonus.def || 0) + (dragonBonus.def || 0)) + (equipmentBonus.def || 0));
  const crit = effectiveClassStats.crit + (bonus.crit || 0) + ((equipmentBonus.crit || 0) / 100);
  const spd = classStats.spd + (bonus.spd || 0);
  const resourceMax = Math.round(
    GameData.classes[state.player.class].resource.max * (1 + (bonus.resource || 0) + (dragonBonus.resource || 0))
  );

  statsCache = {
    signature,
    value: { maxHP, atk, def, crit, spd, resourceMax }
  };
  return statsCache.value;
}


function refreshStats() {
  const stats = baseStats();
  state.player.maxHP = stats.maxHP;
  state.player.resourceMax = stats.resourceMax;
  state.player.currentHP = Math.min(state.player.currentHP, state.player.maxHP);
  state.player.resource = Math.min(state.player.resource, state.player.resourceMax);
}

function cloneEquipmentSnapshot(equipment) {
  return {
    weapon: equipment.weapon ? { ...equipment.weapon, gems: (equipment.weapon.gems || []).map((g) => ({ ...g })) } : null,
    armor: equipment.armor ? { ...equipment.armor, gems: (equipment.armor.gems || []).map((g) => ({ ...g })) } : null,
    helmet: equipment.helmet ? { ...equipment.helmet, gems: (equipment.helmet.gems || []).map((g) => ({ ...g })) } : null,
    boots: equipment.boots ? { ...equipment.boots, gems: (equipment.boots.gems || []).map((g) => ({ ...g })) } : null,
    accessory: equipment.accessory ? { ...equipment.accessory, gems: (equipment.accessory.gems || []).map((g) => ({ ...g })) } : null
  };
}

function loadoutById(id) {
  return (state.player.gearLoadouts?.slots || []).find((slot) => slot.id === id);
}

function loadoutGearScore(snapshot) {
  return Object.values(snapshot || {}).filter(Boolean).reduce((sum, item) => sum + gearScore(item), 0);
}

function saveCurrentToLoadout(id) {
  const slot = loadoutById(id);
  if (!slot) return;
  slot.equipmentSnapshot = cloneEquipmentSnapshot(state.equipment);
  logMessage(`Saved current equipment to ${slot.name}.`);
  showToast(`Saved ${slot.name}`);
  updateAll();
}

function equipLoadout(id) {
  if (state.player.inCombat) {
    logMessage("Cannot switch loadouts during combat.");
    return;
  }
  const slot = loadoutById(id);
  if (!slot) return;
  state.equipment = cloneEquipmentSnapshot(slot.equipmentSnapshot || {});
  state.player.activeGearLoadoutId = slot.id;
  statsCache = { signature: "", value: null };
  refreshStats();
  logMessage(`Equipped loadout: ${slot.name}.`);
  showToast(`Equipped ${slot.name}`);
  updateAll();
}

function renameLoadout(id) {
  const slot = loadoutById(id);
  if (!slot) return;
  const next = prompt("Rename loadout:", slot.name);
  if (!next) return;
  slot.name = next.trim().slice(0, 24) || slot.name;
  updateAll();
}

function clearLoadout(id) {
  const slot = loadoutById(id);
  if (!slot) return;
  slot.equipmentSnapshot = { weapon: null, armor: null, helmet: null, boots: null, accessory: null };
  logMessage(`Cleared loadout: ${slot.name}.`);
  updateAll();
}

function renderGearLoadoutsPanel() {
  if (!ui.gearLoadouts) return;
  const slots = state.player.gearLoadouts?.slots || [];
  ui.gearLoadouts.innerHTML = slots.map((slot) => {
    const score = loadoutGearScore(slot.equipmentSnapshot);
    const active = slot.id === state.player.activeGearLoadoutId;
    return `<div class="inventory-item ${active ? "active" : ""}">
      <div class="meta">
        <strong>${slot.name}${active ? " • Active" : ""}</strong>
        <span class="tooltip">GearScore ${score}</span>
      </div>
      <div>
        <button class="secondary" data-loadout-save="${slot.id}">Save Current</button>
        <button class="secondary" data-loadout-equip="${slot.id}">Equip</button>
        <button class="secondary" data-loadout-rename="${slot.id}">Rename</button>
        <button class="secondary" data-loadout-clear="${slot.id}">Clear</button>
      </div>
    </div>`;
  }).join("");
}


function renderBattleResultLog() {
  if (!ui.battleResultLog) return;
  const player = state.player;
  const enemy = state.enemy;
  const stats = baseStats();
  if (!enemy) {
    ui.battleResultLog.textContent = `Last Result: ${state.battleSummary || "None"}
Player: ${player.name} (${player.class}) Lv ${player.level} | HP ${formatNumber(player.currentHP)}/${formatNumber(player.maxHP)} | ${playerResourceLabel()} ${formatNumber(player.resource)}/${formatNumber(player.resourceMax)}
Stats: ATK ${formatNumber(stats.atk)} DEF ${formatNumber(stats.def)} CRIT ${formatNumber(stats.crit * 100)}% SPD ${formatNumber(stats.spd)}
Enemy: None`;
    return;
  }

  const enemyStatuses = (enemy.statuses || []).map((st) => `${st.id}(${st.duration})`).join(', ') || 'None';
  ui.battleResultLog.textContent = `Last Result: ${state.battleSummary || "In Progress"}
Player: ${player.name} (${player.class}) Lv ${player.level} | HP ${formatNumber(player.currentHP)}/${formatNumber(player.maxHP)} | ${playerResourceLabel()} ${formatNumber(player.resource)}/${formatNumber(player.resourceMax)}
Stats: ATK ${formatNumber(stats.atk)} DEF ${formatNumber(stats.def)} CRIT ${formatNumber(stats.crit * 100)}% SPD ${formatNumber(stats.spd)}
Enemy: ${enemy.name} | HP ${formatNumber(enemy.hp)}/${formatNumber(enemy.maxHP)} | ATK ${formatNumber(enemy.atk)} DEF ${formatNumber(enemy.def)} | Phase ${enemy.phase || 1}
Traits: ${(enemy.traits || []).join(', ') || 'None'} | Resists: ${formatResistanceSummary(enemy.resistances)}
Enemy Statuses: ${enemyStatuses}`;
}

function renderCombat() {
  refreshStats();
  const player = state.player;
  const equippedRows = ["weapon", "armor", "helmet", "boots", "accessory"]
    .map((slot) => {
      const item = state.equipment[slot];
      if (!item) return `<div>${slot}: Empty</div>`;
      return `<div>${slot}: ${item.name} (${gearScore(item)}) <button class="secondary" data-unequip="${slot}">Unequip</button></div>`;
    })
    .join("");
  const loadoutChips = (state.player.gearLoadouts?.slots || []).map((slot) => `<button class="secondary" data-loadout-equip="${slot.id}" ${slot.id===state.player.activeGearLoadoutId ? "disabled" : ""}>${slot.name}</button>`).join("");
  const pStatuses = (player.statuses || []).map((st) => `<span class="status-pill">${st.id} (${st.duration})</span>`).join("") || '<span class="status-pill">No Status</span>';
  ui.playerPanel.innerHTML = `
    <div><strong>Player</strong></div>
    <div class="bars">
      <div class="resource hp"><div class="fill" style="width:${Math.max(0, player.currentHP / player.maxHP) * 100}%"></div><span>${formatNumber(player.currentHP)}/${formatNumber(player.maxHP)} HP</span></div>
      <div class="resource res"><div class="fill" style="width:${Math.max(0, player.resource / player.resourceMax) * 100}%"></div><span>${playerResourceLabel()} ${formatNumber(player.resource)}/${formatNumber(player.resourceMax)}</span></div>
    </div>
    <div>ATK ${formatNumber(baseStats().atk)} | DEF ${formatNumber(baseStats().def)} | CRIT ${formatNumber(baseStats().crit * 100)}% | SPD ${formatNumber(baseStats().spd)}</div>
    <div class="status-row">${pStatuses}</div>
    <details><summary>Details</summary>
      <div class="tooltip">Loadouts: ${loadoutChips} <button class="secondary" data-tab="inventory">Manage</button></div>
      <div class="tooltip">Gear Score Cap: ${Number.isFinite(gearScoreCap()) ? gearScoreCap() : "∞"} | Equipped: ${formatNumber(equippedGearScoreTotal())}</div>
      <div>${equippedRows}</div>
    </details>
  `;
  if (state.enemy) {
    const hpPercent = Math.max(0, state.enemy.hp / state.enemy.maxHP) * 100;
    const eStatuses = (state.enemy.statuses || []).map((st) => `<span class="status-pill">${st.id} (${st.duration})</span>`).join("") || '<span class="status-pill">No Status</span>';
    ui.enemyPanel.innerHTML = `
      <div><strong>${state.enemy.name}</strong></div>
      <div class="bars"><div class="resource hp"><div class="fill" style="width:${hpPercent}%"></div><span>${formatNumber(state.enemy.hp)}/${formatNumber(state.enemy.maxHP)} HP</span></div></div>
      <div>ATK ${formatNumber(state.enemy.atk)} | DEF ${formatNumber(state.enemy.def)} | Phase ${state.enemy.phase || 1}</div>
      <div class="status-row">${eStatuses}</div>
      <details><summary>Details</summary>
        <div class="tooltip">Traits: ${(state.enemy.traits || []).join(", ") || "None"}</div>
        <div class="tooltip">Resists: ${formatResistanceSummary(state.enemy.resistances)}</div>
      </details>
    `;
  } else {
    ui.enemyPanel.innerHTML = `<div class="idle-cta">No active enemy. Start an encounter to enter combat.</div>`;
  }

  const panelsWrap = document.querySelector(".combat-panels");
  if (panelsWrap) panelsWrap.classList.add("vs-row");
  const card = ui.playerPanel.closest(".card");
  if (card) card.classList.add("combat-frame");
  renderCombatButtons();
  ui.battleSummary.textContent = state.battleSummary || "Take an action to see results.";
  renderBattleResultLog();
}

function getActiveCombatSkills() {
  const pool = GameData.classes[state.player.class].skills;
  const selected = state.selectedSkills?.[state.player.class] || [];
  const valid = selected.filter((skill) => pool.includes(skill));
  while (valid.length < 2) {
    const candidate = pool.find((skill) => !valid.includes(skill));
    if (!candidate) break;
    valid.push(candidate);
  }
  state.selectedSkills[state.player.class] = valid.slice(0, 2);
  return state.selectedSkills[state.player.class];
}

function renderCombatButtons() {
  const actions = [
    { id: "attack", label: "Attack" },
    { id: "heal", label: "Heal" },
    { id: "auto", label: "Auto Battle" }
  ];

  const reasonForAction = (action, skill) => {
    if (skill) {
      const cooldown = cooldownRemaining(`skill-${skill}`);
      if (!state.player.inCombat) return "Start combat to use skills.";
      if (state.player.resource < GameData.skills[skill].cost) return "Not enough resource.";
      if (cooldown > 0) return `Cooldown ${Math.ceil(cooldown)}s remaining.`;
      return "";
    }
    if (action.id === "auto") {
      const cdr = cooldownRemaining("auto");
      if (state.player.inCombat) return "Finish current combat first.";
      if (cdr > 0) return `Auto battle cooldown ${Math.ceil(cdr)}s.`;
      return "";
    }
    if (!state.player.inCombat) return "Start combat first.";
    return "";
  };

  const actionButtons = actions.map((action) => {
    const reason = reasonForAction(action, null);
    const disabled = Boolean(reason);
    return `<button class="action" data-action="${action.id}" ${disabled ? "disabled" : ""} title="${reason || action.label}">${action.label}</button>`;
  });

  const activeSkills = getActiveCombatSkills();
  const skillButtons = activeSkills.map((skill) => {
    const reason = reasonForAction(null, skill);
    const disabled = Boolean(reason);
    const tagLabel = (GameData.skills[skill].tags || ["physical"]).join("/");
    const cooldown = cooldownRemaining(`skill-${skill}`);
    return `<button class="action" data-skill="${skill}" ${disabled ? "disabled" : ""} title="${reason || `Tags: ${tagLabel}`}">${skill} ${cooldown > 0 ? `(${Math.ceil(cooldown)}s)` : ""}</button>`;
  });

  const loopButtons = state.player.inCombat
    ? []
    : [
        `<button class="action" data-action="hunt">Hunt</button>`,
        `<button class="action" data-action="adventure">Adventure</button>`,
        `<button class="action" data-action="miniboss">Mini Boss</button>`,
        `<button class="action" data-action="boss">Boss</button>`
      ];
  const dungeonButton = `<button class="action" data-action="dungeon" ${state.player.inDungeonRun ? 'disabled title="Already in dungeon run."' : ""}>Start Dungeon</button>`;
  const gateZone = nextGateZone();
  const gateButton = gateZone ? `<button class="action" data-action="gate">Gate Boss • Zone ${gateZone.id}</button>` : "";
  const exitButton = state.player.inDungeonRun ? `<button class="action danger" data-action="exit-dungeon">Exit Dungeon</button>` : "";

  const grouped = [
    { name: "Primary", items: actionButtons },
    { name: "Encounter", items: [...loopButtons, dungeonButton, gateButton, exitButton].filter(Boolean) },
    { name: "Skills", items: skillButtons }
  ];

  const oocPotion = outOfCombatPotionState();
  const idleHealBtn = `<button class="action" data-action="heal-oot" ${oocPotion.disabled ? "disabled" : ""} title="${oocPotion.reason}">Use Potion</button>`;
  if (!state.player.inCombat) grouped[0].items.push(idleHealBtn);
  const groupHtml = grouped
    .filter((group) => group.items.length)
    .map((group) => `<details class="action-group" ${window.innerWidth <= 900 && group.name !== "Primary" ? "" : "open"}><summary>${group.name}</summary><div class="action-group-body">${group.items.join("")}</div></details>`)
    .join("");

  ui.combatActions.innerHTML = groupHtml;
  ui.combatSecondary.innerHTML = "";
  ui.mobileActionBar.innerHTML = groupHtml;
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
  renderGearLoadoutsPanel();
  const equippedRows = ["weapon", "armor", "helmet", "boots", "accessory"].map((slot) => {
    const item = state.equipment[slot];
    return `<div class="inventory-item"><div class="meta"><strong>${slot}</strong><span class="tooltip">${item ? `${item.name} • GearScore ${gearScore(item)}` : "Empty"}</span></div></div>`;
  }).join("");
  if (ui.equippedSummary) ui.equippedSummary.innerHTML = equippedRows;
  const healState = outOfCombatPotionState();
  if (ui.inventoryActions) {
    ui.inventoryActions.innerHTML = `<div class="inventory-item"><div class="meta"><strong>Consumables</strong><span class="tooltip">Use healing potion outside combat.</span></div><div class="inventory-actions"><button class="secondary" data-action="heal-oot" ${healState.disabled ? "disabled" : ""} title="${healState.reason}">Use Potion</button></div></div>`;
  }
  const filter = ui.inventoryFilter.value || "all";
  const items = getInventoryItems(filter);
  ui.inventoryList.innerHTML = items
    .map((item) => {
      if (item.type === "gear") {
        const canSocket = state.inventory.gems.some((gem) => gem.qty > 0);
        const canRemove = item.gearTier >= 4 && item.gems.length > 0;
        const compare = compareVsEquipped(item);
        return `
          <div class="inventory-item ${item.locked ? "locked" : ""}" data-item="${item.id}">
            <div class="meta">
              <strong class="rarity" style="color:${item.color}">${item.name}${item.locked ? " 🔒" : ""} <span>${compare.badge}</span></strong>
              <span class="tooltip">${item.rarity} • Tier ${item.gearTier} • iLvl ${item.itemLevel}</span>
              <span class="tooltip">${gearStatLine(item)}${item.gems.length ? ` • Gems: ${item.gems.map((gem) => `${gem.name}(${gem.type || "Basic"})`).join(", ")}` : ""}</span>
              <span class="tooltip">GearScore ${gearScore(item)} (ATK ${(item.stats.atk || 0) * 1.4} + DEF ${(item.stats.def || 0) * 1.2} + HP ${Math.round((item.stats.hp || 0) * 0.18)} + CRIT ${(item.stats.crit || 0) * 8}) • Δ ${compare.delta >= 0 ? "+" : ""}${formatNumber(compare.delta)} vs equipped</span>
            </div>
            <div>
              <button class="secondary" data-lock="${item.id}">${item.locked ? "Unlock" : "Lock"}</button>
              <button class="secondary" data-equip="${item.id}" ${item.locked ? "disabled" : ""}>Equip</button>
              <button class="secondary" data-swap="${item.id}" ${item.locked ? "disabled" : ""}>Swap</button>
              <button class="secondary" data-sell="${item.id}" ${item.locked ? "disabled" : ""}>Sell</button>
              ${canSocket ? `<button class="secondary" data-socket="${item.id}">Socket Gem</button>` : ""}
              ${canRemove ? `<button class="secondary" data-remove-gem="${item.id}">Remove Gem</button>` : ""}
            </div>
          </div>
        `;
      }
      const detail = item.type === "gems" ? `Type ${item.typeLabel || item.type || "Basic"} • Tier ${item.tier} • ${item.rarity}` : `${item.qty} owned`;
      return `
        <div class="inventory-item">
          <div class="meta">
            <strong>${item.name}</strong>
            <span class="tooltip">${detail}</span>
          </div>
          <div>
            ${item.type === "consumables" ? `<button class="secondary" data-use-consumable="${item.id}">Use</button>` : ""}
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

function gearScore(item) {
  if (!item) return 0;
  if (typeof item.gearScore === "number") return item.gearScore;
  const stats = item.stats || {};
  return Math.round((stats.atk || 0) * 1.4 + (stats.def || 0) * 1.2 + (stats.hp || 0) * 0.18 + (stats.crit || 0) * 8);
}

function gearScoreCap(level = state.player.level) {
  if (level <= 15) return 38;
  if (level <= 40) return 85;
  return Infinity;
}

function equippedGearScoreTotal() {
  return Object.values(state.equipment).filter(Boolean).reduce((sum, item) => sum + gearScore(item), 0);
}

function compareVsEquipped(item) {
  const equipped = state.equipment[item.slot];
  const deltaRaw = gearScore(item) - (equipped ? gearScore(equipped) : 0);
  const deltaDisplay = Math.round(deltaRaw * 10) / 10;
  const badge = deltaDisplay > 0 ? "▲" : deltaDisplay < 0 ? "▼" : "＝";
  return { delta: deltaDisplay, badge };
}

function renderSkillTree() {
  const classData = GameData.classes[state.player.class];
  const classTree = classData.trees;
  const activeSkills = getActiveCombatSkills();
  const skillOptions = classData.skills
    .map((skill) => `<option value="${skill}">${skill}</option>`)
    .join("");

  ui.skillLoadout.innerHTML = `
    <div class="skill-node">
      <strong>Combat Skill Loadout (2 active in combat)</strong>
      <div class="tooltip">Choose any 2 from ${classData.skills.length} skills for ${state.player.class}.</div>
      <div class="fusion-controls">
        <label>Slot 1<select data-loadout-slot="0">${skillOptions}</select></label>
        <label>Slot 2<select data-loadout-slot="1">${skillOptions}</select></label>
      </div>
    </div>
  `;

  ui.skillLoadout.querySelector('[data-loadout-slot="0"]').value = activeSkills[0];
  ui.skillLoadout.querySelector('[data-loadout-slot="1"]').value = activeSkills[1];

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

function updateSkillLoadout(slotIndex, skillName) {
  if (state.player.inCombat) {
    logMessage("Cannot change combat skills during combat.");
    renderSkillTree();
    return;
  }
  const pool = GameData.classes[state.player.class].skills;
  if (!pool.includes(skillName)) return;
  const current = [...getActiveCombatSkills()];
  const otherIndex = slotIndex === 0 ? 1 : 0;
  if (current[otherIndex] === skillName) {
    logMessage("Both active skill slots must be different.");
    renderSkillTree();
    return;
  }
  current[slotIndex] = skillName;
  state.selectedSkills[state.player.class] = current;
  logMessage(`Active skill slot ${slotIndex + 1} set to ${skillName}.`);
  updateAll();
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
            <div>Lv ${data.level}/100 • XP ${formatNumber(data.xp)}/${formatNumber(data.xpToNext)}</div>
            <div class="tooltip">Breakpoints: ${GameData.lifeSkillBreakpoints.join("/")}</div>
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
  if (ui.newGameClass.options.length === 0) {
    const classOptions = Object.keys(GameData.classes)
      .map((className) => `<option value="${className}">${className}</option>`)
      .join("");
    ui.newGameClass.innerHTML = classOptions;
  }
  ui.newGameClass.value = state.player.class;
  ui.uiScale.value = state.player.settings.uiScale;
  ui.customScale.value = String(state.player.settings.customScale || 100);
  ui.customScaleValue.textContent = `${ui.customScale.value}%`;
  ui.customScale.disabled = state.player.settings.uiScale !== "custom";
  ui.toggleAnimations.checked = state.player.settings.animations;
  ui.toggleColorblind.checked = state.player.settings.colorblind;
  ui.lootFilterMode.value = state.player.settings.lootFilterMode;
  ui.toggleMobileLayout.checked = state.player.settings.mobileLayout;
  ui.toggleCompactNav.checked = state.player.settings.compactNav;
}

function renderFusionFilters() {
  const slotValue = ui.fusionSlot.value || "all";
  const tierValue = ui.fusionTier.value || "all";
  const rarityValue = ui.fusionRarity.value || "all";
  if (ui.fusionSlot.options.length === 0) {
    ui.fusionSlot.innerHTML = ["all", "weapon", "armor", "helmet", "boots", "accessory"]
      .map((slot) => `<option value="${slot}">${slot}</option>`)
      .join("");
  }
  if (ui.fusionTier.options.length === 0) {
    ui.fusionTier.innerHTML = ["all", 1, 2, 3, 4, 5]
      .map((tier) => `<option value="${tier}">Tier ${tier}</option>`)
      .join("");
  }
  if (ui.fusionRarity.options.length === 0) {
    ui.fusionRarity.innerHTML = ["all", ...GameData.rarities.map((r) => r.name.toLowerCase())]
      .map((rarity) => `<option value="${rarity}">${rarity}</option>`)
      .join("");
  }
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
        <button class="secondary" data-fuse-select="${item.id}" ${item.locked ? "disabled" : ""}>${item.locked ? "Locked" : (state.selectedFusion.includes(item.id) ? "Selected" : "Select")}</button>
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
    const gearItems = state.inventory.gear.map((item) => ({ ...item, type: "gear" }));
    items.push(...sortGearItems(gearItems));
  }
  if (filter === "all" || filter === "materials") {
    items.push(...state.inventory.materials.map((item) => ({ ...item, type: "materials" })));
  }
  if (filter === "all" || filter === "gems") {
    const gemItems = state.inventory.gems.map((item) => ({ ...item, type: "gems", typeLabel: item.type || "Basic" }));
    if ((ui.inventorySort?.value || "") === "gemtype") gemItems.sort((a, b) => (a.typeLabel || "").localeCompare(b.typeLabel || ""));
    items.push(...gemItems);
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


function sortGearItems(gearItems) {
  const mode = ui.inventorySort?.value || "default";
  if (mode === "default") return gearItems;
  const rarityRank = Object.fromEntries(GameData.rarities.map((r, i) => [r.name, i]));
  const sorted = [...gearItems];
  sorted.sort((a, b) => {
    if (mode === "rarity") return (rarityRank[b.rarity] || 0) - (rarityRank[a.rarity] || 0);
    if (mode === "tier") return b.gearTier - a.gearTier;
    if (mode === "ilevel") return b.itemLevel - a.itemLevel;
    if (mode === "name") return a.name.localeCompare(b.name);
    if (mode === "gemtype") return 0;
    return 0;
  });
  return sorted;
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
    zoneId: zone.id,
    traits: template.traits || [],
    profile: template.profile,
    statuses: [],
    phase: 1,
    phaseThresholds: [0.7, 0.35],
    phaseProfiles: [template.profile || "neutral", "armored", "elemental"],
    phasePassivePotency: [0, 4, 7],
    firstSkillUsed: false,
    resistances: { ...(GameData.resistanceProfiles[template.profile] || {}) }
  };
  state.enemy = enemy;
  state.player.inCombat = true;
  state.combatTurn = 1;
  if (["boss", "dungeon"].includes(type)) {
    logMessage(`Prepared Bonuses: ${preparedBonusesSummary()}`);
    state.player.preparedBuffs = activePreparedBuffs().map((buff) => ({ ...buff, remainingBattles: Math.max(0, buff.remainingBattles - 1) }));
  }
  logMessage(`${enemy.name} appears!`);
  updateAll();
}

function normalizeStatuses(target) {
  target.statuses = Array.isArray(target.statuses) ? target.statuses : [];
}

function addStatus(target, status) {
  normalizeStatuses(target);
  const payload = {
    id: status.id,
    source: status.source || "system",
    duration: status.duration ?? 1,
    stacks: status.stacks ?? 1,
    potency: status.potency ?? 0,
    tickTiming: status.tickTiming || "start",
    type: status.type || "dot",
    target: status.target || "self",
    skipNextTick: Boolean(status.skipNextTick)
  };
  if (target === state.player && ["dmg-in", "def-down", "dot"].includes(payload.type)) {
    payload.duration = Math.max(1, Math.round(payload.duration * (1 - gemTypeEffects().debuffDurationReduction)));
  }
  const existing = target.statuses.find((entry) => entry.id === payload.id && entry.source === payload.source);
  if (existing) {
    existing.stacks += payload.stacks;
    existing.duration = Math.max(existing.duration, payload.duration);
    existing.potency = Math.max(existing.potency, payload.potency);
  } else {
    target.statuses.push(payload);
  }
}

function tickStatuses(target, timing = "start") {
  normalizeStatuses(target);
  const notes = [];
  target.statuses = target.statuses.filter((status) => {
    if (status.tickTiming === timing) {
      if (status.skipNextTick) {
        status.skipNextTick = false;
        return true;
      }
      const stacks = Math.max(1, status.stacks || 1);
      if (status.type === "dot") {
        const rawDot = Math.max(1, Math.round((status.potency || 1) * stacks));
        const mitigated = target === state.player ? Math.max(1, Math.round(rawDot * (1 - lifeSkillPassives().dotMitigation))) : rawDot;
        if (target === state.player) target.currentHP = Math.max(0, target.currentHP - mitigated);
        else target.hp = Math.max(0, target.hp - mitigated);
        notes.push(`${status.id} -${formatNumber(mitigated)}`);
      }
      if (status.type === "hot") {
        const hot = Math.max(1, Math.round((status.potency || 1) * stacks));
        target.currentHP = Math.min(target.maxHP, target.currentHP + hot);
        notes.push(`${status.id} +${formatNumber(hot)}`);
      }
      if (status.type === "phase-pulse" && target === state.enemy && state.player.inCombat) {
        const pulse = Math.max(1, Math.round(status.potency));
        state.player.currentHP = Math.max(0, state.player.currentHP - pulse);
        notes.push(`Phase Pulse -${formatNumber(pulse)} HP`);
      }
      status.duration -= 1;
    }
    return status.duration > 0;
  });
  return notes;
}

function resolveTagTraitModifiers(enemy, tags = []) {
  if (!enemy) return { multiplier: 1, notes: [] };
  let multiplier = 1;
  const notes = [];

  tags.forEach((tag) => {
    const tagMult = enemy.resistances?.[tag];
    if (typeof tagMult === "number") multiplier *= tagMult;
  });

  (enemy.traits || []).forEach((trait) => {
    const traitTable = (GameData.traitRules || {})[trait];
    if (!traitTable) return;
    tags.forEach((tag) => {
      const traitMult = traitTable[tag];
      if (typeof traitMult === "number") {
        multiplier *= traitMult;
        if (traitMult < 1) notes.push(`Resisted (${trait})`);
        else if (traitMult > 1) notes.push(`Exposed (${trait})`);
      }
    });
  });

  return { multiplier, notes: [...new Set(notes)] };
}

function statMultiplierFromStatuses(attacker, defender) {
  const out = (attacker.statuses || []).reduce((acc, status) => {
    if (status.type === "dmg-out") return acc * (1 + status.potency * status.stacks);
    return acc;
  }, 1);
  const incoming = (defender.statuses || []).reduce((acc, status) => {
    if (status.type === "dmg-in") return acc * (1 + status.potency * status.stacks);
    return acc;
  }, 1);
  return out * incoming;
}

function effectiveDefense(defender, attacker) {
  const debuffMult = (defender.statuses || []).reduce((acc, status) => {
    if (status.type === "def-down") return acc * (1 - status.potency * status.stacks);
    return acc;
  }, 1);
  const baseDef = typeof defender.def === "number"
    ? defender.def
    : (defender === state.player ? baseStats().def : 0);
  let out = Math.max(0, baseDef * debuffMult);
  if (attacker === state.player && (defender.traits || []).includes("Armored")) {
    out *= Math.max(0.35, 1 - lifeSkillPassives().armorPen - gemTypeEffects().armorIgnore);
  }
  return out;
}

function resolveDamagePipeline({ attacker, defender, attackValue, tags, critChance }) {
  const baseDamage = Math.max(1, attackValue - effectiveDefense(defender, attacker) * 0.5);
  const traitTag = resolveTagTraitModifiers(defender, tags);
  const buffDebuffMult = statMultiplierFromStatuses(attacker, defender);
  const crit = Math.random() < critChance;
  const critMult = crit ? 1.5 : 1;
  let final = Math.max(1, Math.round(baseDamage * traitTag.multiplier * buffDebuffMult * critMult));
  if (attacker === state.player && (defender.traits || []).includes("Boss")) {
    const gemEffects = gemTypeEffects();
    final = Math.round(final * (1 + lifeSkillPassives().bossDmg + gemEffects.bossDmg));
    const threshold = lifeSkillPassives().executeThreshold;
    const gemExec = gemEffects.executeBonus;
    if (threshold > 0 && defender.hp / defender.maxHP <= threshold + gemExec * 0.25) final = Math.round(final * 1.35);
  }
  if (defender === state.player) {
    const gemEffects = gemTypeEffects();
    final = Math.max(1, Math.round(final * (1 - lifeSkillPassives().damageReduction - gemEffects.damageReduction)));
  }

  const labels = [];
  if (crit) labels.push("CRIT");
  labels.push(...traitTag.notes);
  return { damage: final, labels };
}

function checkBossPhaseChange() {
  const enemy = state.enemy;
  if (!enemy || !(enemy.traits || []).includes("Boss")) return false;
  const hpRatio = enemy.hp / enemy.maxHP;
  const targetPhase = hpRatio <= enemy.phaseThresholds[1] ? 3 : hpRatio <= enemy.phaseThresholds[0] ? 2 : 1;
  if (targetPhase <= enemy.phase) return false;
  while (enemy.phase < targetPhase) {
    enemy.phase += 1;
    const profile = enemy.phaseProfiles[enemy.phase - 1] || "boss";
    enemy.resistances = { ...(GameData.resistanceProfiles[profile] || {}) };
    enemy.statuses = (enemy.statuses || []).filter((status) => status.id !== "boss-phase-passive");
    addStatus(enemy, {
      id: "boss-phase-passive",
      source: `phase-${enemy.phase}`,
      duration: 999,
      stacks: 1,
      potency: enemy.phasePassivePotency[enemy.phase - 1] || 0,
      tickTiming: "start",
      type: "phase-pulse",
      target: "player",
      skipNextTick: true
    });
    logMessage(`${enemy.name} shifts to Phase ${enemy.phase}!`);
  }
  return true;
}

function summarizeTurn(actor, actionLabel, result) {
  const tags = (result.labels || []).join(", ");
  const suffix = tags ? ` [${tags}]` : "";
  const line = `${actor}: ${actionLabel} ${formatNumber(result.damage)} dmg${suffix}`;
  state.battleSummary = line;
  logMessage(line, "combat");
}

function outOfCombatPotionState() {
  const potion = state.inventory.consumables.find((item) => item.id === "potion" && item.qty > 0);
  if (state.player.inCombat) return { disabled: true, hidden: false, reason: "Unavailable in combat." };
  if (!potion) return { disabled: true, hidden: false, reason: "No healing potions available." };
  if (state.player.currentHP >= state.player.maxHP) return { disabled: true, hidden: false, reason: "HP is already full." };
  return { disabled: false, hidden: false, reason: "Use potion outside combat." };
}

function usePotionOutOfCombat() {
  if (state.player.inCombat) return;
  const st = outOfCombatPotionState();
  if (st.disabled) return;
  if (!consumeItem("potion")) return;
  applyConsumableEffect("potion");
  logMessage("Used Healing Potion outside combat.", "system", null);
  showToast("Potion used");
  updateAll();
}

function consumeItem(itemId) {
  const item = state.inventory.consumables.find((entry) => entry.id === itemId && entry.qty > 0);
  if (!item) return false;
  item.qty -= 1;
  if (item.qty <= 0) state.inventory.consumables = state.inventory.consumables.filter((entry) => entry.qty > 0);
  return true;
}

function applyConsumableEffect(itemId) {
  const def = GameData.consumableDefs[itemId];
  if (!def) return false;
  const passives = lifeSkillPassives();
  const gemEffects = gemTypeEffects();
  if (def.healPct) {
    const healAmount = Math.round(state.player.maxHP * def.healPct * (1 + passives.potionBoost));
    state.player.currentHP = Math.min(state.player.maxHP, state.player.currentHP + healAmount);
    state.battleSummary = `${def.name}: +${formatNumber(healAmount)} HP`;
    logMessage(state.battleSummary);
    return true;
  }
  if (def.purge) {
    state.player.statuses = (state.player.statuses || []).filter((status) => !["dmg-in", "def-down", "dot"].includes(status.type));
    logMessage("Purge removed all debuffs.");
    return true;
  }
  if (def.status) {
    const statusDef = { ...def.status, source: def.name, duration: def.status.duration + Math.floor(getLifeSkillLevel("Alchemy") / 25) };
    if (statusDef.target === "enemy") addStatus(state.enemy, statusDef);
    else addStatus(state.player, statusDef);
    logMessage(`${def.name} applied.`);
    return true;
  }
  if (def.meal) {
    const buffs = activePreparedBuffs();
    const limit = mealBuffLimit();
    if (buffs.length >= limit) buffs.shift();
    buffs.push({ id: def.id, stat: def.meal.stat, value: def.meal.value, remainingBattles: mealDurationBattles() });
    state.player.preparedBuffs = buffs;
    logMessage(`${def.name} prepared (${mealDurationBattles()} battles).`);
    return true;
  }
  return false;
}

function performPlayerAction(action, skillName) {
  if (!state.enemy) {
    logMessage("No enemy to act on.");
    return;
  }
  if (!state.player.inCombat) return;

  const playerTickNotes = tickStatuses(state.player, "start");
  if (playerTickNotes.length) logMessage(`Start Turn: ${playerTickNotes.join(" • ")}`);
  if (state.player.currentHP <= 0) {
    handleDeath();
    return;
  }

  if (action === "attack") {
    const stats = baseStats();
    const resolved = resolveDamagePipeline({
      attacker: state.player,
      defender: state.enemy,
      attackValue: stats.atk,
      tags: ["physical", "melee"],
      critChance: stats.crit
    });
    state.enemy.hp -= resolved.damage;
    summarizeTurn("You", "Attack", resolved);
  }
  if (action === "heal") {
    const potion = state.inventory.consumables.find((item) => item.id === "potion" && item.qty > 0);
    if (!potion || !consumeItem("potion")) {
      logMessage("No healing items available.");
      return;
    }
    applyConsumableEffect("potion");
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
    state.battleSummary = applySkill(skillName, skill);
    state.player.cooldowns[`skill-${skillName}`] = now + skill.cooldown * 1000;
  }

  checkBossPhaseChange();
  if (state.enemy.hp <= 0) {
    handleVictory();
    return;
  }
  enemyTurn();
}

function applySkill(name, skill) {
  const stats = baseStats();
  const skillTags = skill.tags || ["physical"];
  const firstSkillBonus = (!state.enemy.firstSkillUsed ? gemTypeEffects().firstSkillBonus : 0);
  const applyDamage = (scale) => resolveDamagePipeline({
    attacker: state.player,
    defender: state.enemy,
    attackValue: Math.max(1, stats.atk * scale * (1 + firstSkillBonus)),
    tags: skillTags,
    critChance: stats.crit
  });

  if (skill.effect.type === "damage") {
    const resolved = applyDamage(skill.effect.scale);
    state.enemy.firstSkillUsed = true;
    state.enemy.hp -= resolved.damage;
    if (skill.effect.secondary) applySecondary(skill.effect.secondary);
    summarizeTurn("You", name, resolved);
    return state.battleSummary;
  }
  if (skill.effect.type === "multi") {
    let total = 0;
    const labels = [];
    for (let i = 0; i < skill.effect.hits; i += 1) {
      const resolved = applyDamage(skill.effect.scale);
      state.enemy.firstSkillUsed = true;
      total += resolved.damage;
      labels.push(...resolved.labels);
      state.enemy.hp -= resolved.damage;
      if (state.enemy.hp <= 0) break;
    }
    summarizeTurn("You", `${name} x${skill.effect.hits}`, { damage: total, labels: [...new Set(labels)] });
    return state.battleSummary;
  }
  if (skill.effect.type === "heal") {
    const healAmount = Math.round(state.player.maxHP * skill.effect.scale);
    state.player.currentHP = Math.min(state.player.maxHP, state.player.currentHP + healAmount);
    const line = `${name}: +${formatNumber(healAmount)} HP`;
    logMessage(line, "combat");
    return line;
  }
  if (skill.effect.type === "buff") {
    addStatus(state.player, {
      id: `${name.toLowerCase().replace(/\s+/g, "-")}-buff`,
      source: name,
      duration: skill.effect.duration || 2,
      stacks: 1,
      potency: skill.effect.value || 0,
      tickTiming: "start",
      type: skill.effect.stat === "def" ? "dmg-in" : "dmg-out"
    });
    const line = `${name}: Buff applied`;
    logMessage(line, "combat");
    return line;
  }
  if (skill.effect.type === "resource") {
    state.player.resource = Math.min(state.player.resourceMax, state.player.resource + skill.effect.amount);
    const line = `${name}: Resource restored`;
    logMessage(line, "combat");
    return line;
  }
  return `${name} used.`;
}

function applySecondary(effect) {
  if (effect.type === "debuff") {
    const passives = lifeSkillPassives();
  const gemEffects = gemTypeEffects();
    if (Math.random() > passives.alchemyDebuffChance) {
      logMessage("Debuff failed to apply.");
      return;
    }
    addStatus(state.enemy, {
      id: `${effect.stat}-down`,
      source: "skill-secondary",
      duration: (effect.duration || 2) + Math.floor(getLifeSkillLevel("Alchemy") / 25),
      stacks: 1,
      potency: Math.abs(effect.value || 0.1) * (1 + passives.alchemyDebuffBoost),
      tickTiming: "start",
      ignoreBossRes: passives.ignoreBossResDebuff,
      type: effect.stat === "def" ? "def-down" : "dmg-in"
    });
  }
  if (effect.type === "heal") {
    const healAmount = Math.round(state.player.maxHP * effect.scale);
    state.player.currentHP = Math.min(state.player.maxHP, state.player.currentHP + healAmount);
  }
}

function resolveTagResistance(baseDamage, enemy, tags = []) {
  const traitTag = resolveTagTraitModifiers(enemy, tags);
  const damage = Math.max(1, Math.round(baseDamage * traitTag.multiplier));
  const note = traitTag.notes.length ? ` ${traitTag.notes.join(", ")}` : "";
  return { damage, note };
}

function formatResistanceSummary(resistances = {}) {
  const entries = Object.entries(resistances)
    .map(([tag, mult]) => `${tag}:${Math.round(mult * 100)}%`)
    .join(" • ");
  return entries || "None";
}

function enemyTurn() {
  if (!state.enemy || state.enemy.hp <= 0) return;
  const enemyTickNotes = tickStatuses(state.enemy, "start");
  if (enemyTickNotes.length) logMessage(`Enemy Start: ${enemyTickNotes.join(" • ")}`);
  if (!state.enemy || state.enemy.hp <= 0) {
    handleVictory();
    return;
  }
  if (state.player.currentHP <= 0) {
    handleDeath();
    return;
  }

  const resolved = resolveDamagePipeline({
    attacker: state.enemy,
    defender: state.player,
    attackValue: state.enemy.atk,
    tags: ["physical"],
    critChance: 0.08
  });
  state.player.currentHP -= resolved.damage;
  summarizeTurn(state.enemy.name, "Attack", resolved);
  const regenBoost = lifeSkillPassives().resourceRegenBonus + gemTypeEffects().resourceRegen;
  state.player.resource = Math.min(
    state.player.resourceMax,
    state.player.resource + Math.round(GameData.classes[state.player.class].resource.regen * (1 + regenBoost))
  );
  if (state.player.currentHP <= 0) {
    handleDeath();
  }
  state.combatTurn += 1;
  updateAll();
}

function calculateDamage(atk, def) {
  return Math.max(1, atk - def * 0.5);
}

function handleVictory() {
  const enemy = state.enemy;
  state.player.inCombat = false;
  state.enemy = null;
  const xpReward = GameData.xp.rewards[enemy.type] || 0;
  const loot = rollLoot(enemy.zoneId);
  gainXp(xpReward);
  state.player.gold += loot.gold;
  const lifebloomHeal = gemTypeEffects().healOnKill > 0 ? Math.round(state.player.maxHP * Math.min(0.25, gemTypeEffects().healOnKill)) : 0;
  if (lifebloomHeal > 0) state.player.currentHP = Math.min(state.player.maxHP, state.player.currentHP + lifebloomHeal);
  state.battleSummary = `Victory! +${xpReward} XP, +${loot.gold} gold.${lifebloomHeal > 0 ? ` Lifebloom +${lifebloomHeal} HP.` : ""}`;
  if (enemy.type === "gate") {
    state.player[`gate-${enemy.zoneId}`] = true;
    const zone = GameData.zones.find((entry) => entry.id === enemy.zoneId);
    logMessage(`Gate Boss defeated in ${zone.name}!`, "rewards");
  }
  advanceEggProgress();
  if (state.player.inDungeonRun) {
    state.player.dungeonProgress += 1;
    if (state.player.dungeonProgress >= 5) {
      state.player.inDungeonRun = false;
      state.player.dungeonProgress = 0;
      logMessage("Dungeon cleared!", "rewards");
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

function rarityBudgetBand(rarityName) {
  const bands = {
    Common: [0.9, 1.0],
    Uncommon: [1.02, 1.12],
    Rare: [1.15, 1.3],
    Epic: [1.35, 1.55],
    Legendary: [1.8, 2.05]
  };
  return bands[rarityName] || [1, 1.1];
}

function rollGearStats(itemLevel, tier, rarityName) {
  const [low, high] = rarityBudgetBand(rarityName);
  const baseBudget = itemLevel * 1.5 + tier * 8;
  const budget = baseBudget * (low + Math.random() * (high - low));
  const mix = {
    atk: 0.30 + Math.random() * 0.12,
    def: 0.26 + Math.random() * 0.12,
    hp: 0.30 + Math.random() * 0.14,
    crit: 0.06 + Math.random() * 0.06
  };
  const totalMix = Object.values(mix).reduce((a, b) => a + b, 0);
  const norm = Object.fromEntries(Object.entries(mix).map(([k, v]) => [k, v / totalMix]));
  const stats = {
    atk: Math.max(1, Math.round((budget * norm.atk) / 1.4)),
    def: Math.max(1, Math.round((budget * norm.def) / 1.2)),
    hp: Math.max(1, Math.round((budget * norm.hp) / 0.18)),
    crit: Math.max(0, Math.round((budget * norm.crit) / 8))
  };
  const score = Math.round(budget);
  return { stats, score };
}

function generateGear(zoneId) {
  const slotOptions = ["weapon", "armor", "helmet", "boots", "accessory"];
  const slot = slotOptions[Math.floor(Math.random() * slotOptions.length)];
  const rarity = rollRarity(zoneId);
  const gearTier = Math.min(5, Math.ceil(zoneId / 2));
  const itemLevel = zoneId * 5 + Math.floor(Math.random() * 5);
  const rolled = rollGearStats(itemLevel, gearTier, rarity.name);
  return {
    id: crypto.randomUUID(),
    name: `${rarity.name} ${slot}`,
    slot,
    rarity: rarity.name,
    color: rarity.color,
    gearTier,
    itemLevel,
    stats: rolled.stats,
    gearScore: rolled.score,
    gems: [],
    locked: false
  };
}

function rollRarity(zoneId) {
  const baseWeights = GameData.rarities.map((rarity) => rarity.weight);
  const zoneShift = zoneId - 1;
  const weights = baseWeights.map((weight, index) => {
    if (index <= 1) return weight + Math.max(0, 6 - zoneShift * 2);
    return Math.max(1, weight + zoneShift * index * 0.8);
  });
  const legendaryIndex = GameData.rarities.findIndex((rarity) => rarity.name === "Legendary");
  if (legendaryIndex >= 0 && zoneId < 5) weights[legendaryIndex] = 0;
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

function addGem({ name, tier, rarity, type }) {
  const gemType = type || chooseGemType();
  const existing = state.inventory.gems.find((item) => item.name === name && item.tier === tier && (item.type || "Basic") === gemType && item.rarity === rarity);
  if (existing) existing.qty += 1;
  else state.inventory.gems.push({ id: crypto.randomUUID(), name, qty: 1, tier, rarity, type: gemType });
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

function pickAutoSkill(enemy) {
  const skills = getActiveCombatSkills();
  const miningHigh = getLifeSkillLevel("Mining") >= 40;
  const alchemyHigh = getLifeSkillLevel("Alchemy") >= 50;
  const options = skills.map((skillName) => {
    const skill = GameData.skills[skillName];
    const tags = skill.tags || ["physical"];
    const mod = resolveTagTraitModifiers(enemy, tags);
    let score = mod.multiplier;
    if (miningHigh && (enemy.traits || []).includes("Armored") && tags.some((tag) => ["physical", "melee"].includes(tag))) score += 0.2;
    if (alchemyHigh && (enemy.traits || []).includes("Boss") && skill.effect?.secondary?.type === "debuff") score += 0.25;
    if (mod.multiplier < 0.75) score -= 0.25;
    return { skillName, score };
  }).sort((a, b) => b.score - a.score);
  if (!options[0] || options[0].score < 0.8) return null;
  return options[0].skillName;
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
  let phasePauses = 0;

  for (let i = 0; i < fights; i += 1) {
    const template = i === fights - 1 ? GameData.enemyTemplates.boss : GameData.enemyTemplates.hunt;
    const enemy = {
      ...template,
      phase: 1,
      maxHP: template.hp,
      hp: template.hp,
      phaseThresholds: [0.7, 0.35],
      traits: template.traits || [],
      resistances: { ...(GameData.resistanceProfiles[template.profile] || {}) }
    };

    const underDot = (state.player.statuses || []).some((status) => status.type === "dot");
    if (state.player.currentHP < state.player.maxHP * 0.35 || (getLifeSkillLevel("Foraging") >= 40 && underDot)) {
      const recovered = Math.round(state.player.maxHP * 0.12 * (1 + lifeSkillPassives().potionBoost));
      state.player.currentHP = Math.min(state.player.maxHP, state.player.currentHP + recovered);
    } else {
      const bestSkill = pickAutoSkill(enemy);
      hpLost += bestSkill ? Math.max(4, currentZone().level - 2) : (6 + currentZone().level);
      if ((enemy.traits || []).includes("Boss")) {
        enemy.hp = Math.max(0, enemy.hp - Math.round(enemy.maxHP * 0.4));
        const nextPhase = enemy.hp / enemy.maxHP <= enemy.phaseThresholds[1] ? 3 : enemy.hp / enemy.maxHP <= enemy.phaseThresholds[0] ? 2 : 1;
        if (nextPhase > enemy.phase) {
          enemy.phase = nextPhase;
          phasePauses += 1;
        }
      }
    }

    wins += 1;
    gold += 10 + currentZone().level;
    if (Math.random() < 0.4) lootList.push("Gear");
  }

  gold = Math.round(gold * (1 + getBonus("gold")));
  state.player.currentHP = Math.max(1, state.player.currentHP - hpLost);
  state.player.gold += gold;
  gainXp(GameData.xp.rewards.auto);
  state.player.cooldowns.auto = Date.now() + 15000;
  state.battleSummary = `Auto Battle: ${fights} fights, ${wins} wins, +${gold} gold, HP lost ${hpLost}, phase pauses ${phasePauses}. Loot: ${lootList.join(", ") || "None"}.`;
  logMessage("Auto battle completed.", "combat");
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
  if (data.level < GameData.lifeSkillMaxLevel && data.xp >= data.xpToNext) {
    data.xp -= data.xpToNext;
    data.level = Math.min(GameData.lifeSkillMaxLevel, data.level + 1);
    data.xpToNext = Math.round(data.xpToNext * 1.2);
    if (GameData.lifeSkillBreakpoints.includes(data.level)) logMessage(`${skill} reached breakpoint ${data.level}!`);
  }
  data.cooldownUntil = Date.now() + 45000;
  const material = GameData.materials.find((mat) => mat.type.toLowerCase() === skill.toLowerCase());
  if (material) addMaterial(material);

  if (skill === "Alchemy") {
    const table = ["potion", "ironhide", "weakening", "purge", "fracture"];
    const unlocked = table.slice(0, Math.min(table.length, 1 + Math.floor(data.level / 20)));
    const id = unlocked[Math.floor(Math.random() * unlocked.length)];
    addConsumable(id, GameData.consumableDefs[id].name, 1);
  }
  if (skill === "Cooking") {
    const meals = ["hunter_stew", "ironroot_soup", "mages_broth", "ember_feast", "guardian_platter"];
    const unlocked = meals.slice(0, Math.min(meals.length, 1 + Math.floor(data.level / 20)));
    const id = unlocked[Math.floor(Math.random() * unlocked.length)];
    addConsumable(id, GameData.consumableDefs[id].name, 1);
  }

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
  const current = state.equipment[slot];
  const currentTotal = equippedGearScoreTotal();
  const projected = currentTotal - (current ? gearScore(current) : 0) + gearScore(item);
  const cap = gearScoreCap();
  if (Number.isFinite(cap) && projected > cap) {
    logMessage(`Equip blocked by early gear cap (${cap}).`);
    return;
  }
  if (current) state.inventory.gear.push(current);
  state.equipment[slot] = item;
  state.inventory.gear = state.inventory.gear.filter((gear) => gear.id !== itemId);
  logMessage(`${item.name} equipped.`);
  showToast(`${item.name} equipped`);
  updateAll();
}

function swapGear(itemId) {
  equipItem(itemId);
}

function unequipSlot(slot) {
  const item = state.equipment[slot];
  if (!item) return;
  state.inventory.gear.push(item);
  state.equipment[slot] = null;
  logMessage(`${item.name} unequipped.`);
  showToast(`${item.name} unequipped`);
  updateAll();
}

function sellItem(itemId) {
  const index = state.inventory.gear.findIndex((gear) => gear.id === itemId);
  if (index >= 0) {
    const item = state.inventory.gear[index];
    if (item.locked) {
      logMessage("Item is locked. Unlock it before selling.");
      return;
    }
    state.inventory.gear.splice(index, 1);
    const value = Math.round(20 + item.gearTier * 10);
    state.player.gold += value;
    logMessage(`${item.name} sold for ${value} gold.`);
    showToast(`Sold ${item.name}`);
    updateAll();
  }
}

function toggleLockItem(itemId) {
  const item = state.inventory.gear.find((gear) => gear.id === itemId);
  if (!item) return;
  item.locked = !item.locked;
  logMessage(`${item.name} ${item.locked ? "locked" : "unlocked"}.`);
  updateAll();
}

function sellAllFiltered() {
  const filter = ui.inventoryFilter.value || "all";
  if (filter === "gear" || filter === "all") {
    const basePool = state.player.settings.lootFilterMode === "strict"
      ? state.inventory.gear.filter((item) => ["Common", "Uncommon"].includes(item.rarity))
      : state.inventory.gear;
    const sellable = basePool.filter((item) => !item.locked);
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
  if (first.locked || second.locked) {
    logMessage("Unlock items before fusion.");
    return;
  }
  if (first.slot !== second.slot || first.gearTier !== second.gearTier) {
    logMessage("Fusion requires same slot and tier.");
    return;
  }
  const failureChance = GameData.fusionFailure[first.gearTier];
  state.inventory.gear = state.inventory.gear.filter((gear) => !state.selectedFusion.includes(gear.id));
  state.selectedFusion = [];
  if (Math.random() < failureChance) {
    logMessage("Fusion failed. Items lost.");
    showToast("Fusion failed");
    updateAll();
    return;
  }
  const newTier = Math.min(5, first.rarity === second.rarity ? first.gearTier + 1 : first.gearTier);
  const newItem = generateGear(Math.min(7, Math.ceil(newTier * 1.4)));
  newItem.gearTier = newTier;
  state.inventory.gear.push(newItem);
  logMessage(`Fusion success: ${newItem.name}.`);
  showToast("Fusion success");
  updateAll();
}

function socketGem(gearId) {
  const gear = state.inventory.gear.find((item) => item.id === gearId);
  const gem = state.inventory.gems.find((item) => item.qty > 0);
  if (!gear || !gem) return;

  const constraints = gemConstraintsForLevel(state.player.level);
  if (totalSocketedGems() >= constraints.maxSockets || gear.gems.length >= constraints.maxSockets) {
    logMessage(`Gem socket cap reached for your level (max ${constraints.maxSockets}).`);
    return;
  }
  if (gem.tier > constraints.maxTier) {
    logMessage(`Your level allows only gem tier ${constraints.maxTier} or lower.`);
    return;
  }
  if (gem.tier > gear.gearTier) {
    logMessage("Gem tier too high for this gear.");
    return;
  }

  const projectedGemAtk = totalGemAtkFromSockets(state.player.level) + gemAtkValue(gem.tier, state.player.level, gem.rarity);
  if (projectedGemAtk > constraints.atkBudget) {
    logMessage(`Gem ATK budget exceeded for your level (max ${constraints.atkBudget}).`);
    return;
  }

  gem.qty -= 1;
  if (gem.qty <= 0) state.inventory.gems = state.inventory.gems.filter((item) => item.qty > 0);
  gear.gems.push({ name: gem.name, tier: gem.tier, rarity: gem.rarity, type: gem.type || "Basic" });
  logMessage(`Socketed ${gem.name} into ${gear.name}.`);
  showToast(`Socketed ${gem.name}`);
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

function setNavState(next) {
  document.body.dataset.nav = next;
  const drawerOpen = next === "drawer";
  ui.navOverlay.setAttribute("aria-hidden", String(!drawerOpen));
  document.body.classList.toggle("nav-open", drawerOpen);
}

function handleNavToggle() {
  if (window.innerWidth <= 900 || state.player.settings.mobileLayout) {
    setNavState(document.body.dataset.nav === "drawer" ? "closed" : "drawer");
  } else {
    setNavState(document.body.dataset.nav === "collapsed" ? "expanded" : "collapsed");
  }
}

function closeDrawer() {
  if (window.innerWidth <= 900 || state.player.settings.mobileLayout) {
    setNavState("closed");
  }
}

function switchTab(tab) {
  document.querySelectorAll(".panel").forEach((panel) => panel.classList.remove("active"));
  document.getElementById(`panel-${tab}`).classList.add("active");
  document.querySelectorAll(".tab-button").forEach((button) => button.classList.remove("active"));
  document.querySelector(`.tab-button[data-tab="${tab}"]`).classList.add("active");
  if (tab !== "combat") ui.mobileActionBar.style.display = "none";
  else ui.mobileActionBar.style.display = "";
  renderActivePanel();
  if (window.innerWidth <= 900 || state.player.settings.mobileLayout) closeDrawer();
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
  state.player.settings.compactNav = ui.toggleCompactNav.checked;
  updateAll();
}


function clearPersistedSave() {
  localStorage.removeItem(SAVE_KEYS.legacy);
  localStorage.removeItem(SAVE_KEYS.meta);
  localStorage.removeItem(SAVE_KEYS.player);
  localStorage.removeItem(SAVE_KEYS.inventory);
  localStorage.removeItem(SAVE_KEYS.equipment);
  localStorage.removeItem(SAVE_KEYS.lifeSkills);
  localStorage.removeItem(SAVE_KEYS.misc);
  lastSavedSnapshot = {};
}

function resetSave() {
  if (!confirm("Reset all progress?")) return;
  const selectedClass = ui.newGameClass.value;
  createBackupSnapshot();
  clearPersistedSave();
  state = defaultState(selectedClass);
  logMessage(`New ${selectedClass} created.`);
  updateAll();
}

function startNewGame() {
  if (!confirm("Start a new game with the selected class? Current progress will be erased.")) return;
  const selectedClass = ui.newGameClass.value;
  createBackupSnapshot();
  clearPersistedSave();
  state = defaultState(selectedClass);
  logMessage(`New game started as ${selectedClass}.`);
  updateAll();
}

function createBackupSnapshot() {
  const backup = {
    meta: { version: SAVE_VERSION, timestamp: Date.now() },
    player: state.player,
    inventory: state.inventory,
    equipment: state.equipment,
    lifeSkills: state.lifeSkills,
    misc: {
      enemy: state.enemy,
      epicCooldowns: state.epicCooldowns,
      log: state.log,
      battleSummary: state.battleSummary,
      selectedFusion: state.selectedFusion,
      selectedBreeding: state.selectedBreeding,
      eggBattleCount: state.eggBattleCount
    }
  };
  localStorage.setItem(SAVE_KEYS.backup, JSON.stringify(backup));
}

function exportSave() {
  saveState();
  const payload = {
    meta: JSON.parse(localStorage.getItem(SAVE_KEYS.meta) || "{}"),
    player: JSON.parse(localStorage.getItem(SAVE_KEYS.player) || "{}"),
    inventory: JSON.parse(localStorage.getItem(SAVE_KEYS.inventory) || "{}"),
    equipment: JSON.parse(localStorage.getItem(SAVE_KEYS.equipment) || "{}"),
    lifeSkills: JSON.parse(localStorage.getItem(SAVE_KEYS.lifeSkills) || "{}"),
    misc: JSON.parse(localStorage.getItem(SAVE_KEYS.misc) || "{}")
  };
  ui.saveDataField.value = JSON.stringify(payload);
  ui.saveDataField.select();
  document.execCommand("copy");
  logMessage("Save exported to text field (and copied if supported).");
}

function importSave() {
  const raw = ui.saveDataField.value.trim();
  if (!raw) {
    logMessage("Paste a save payload first.");
    return;
  }
  try {
    const parsed = JSON.parse(raw);
    const bundle = parsed.meta ? parsed : {
      meta: { version: 1 },
      player: parsed.player || {},
      inventory: parsed.inventory || {},
      equipment: parsed.equipment || {},
      lifeSkills: parsed.lifeSkills || {},
      misc: {
        enemy: parsed.enemy,
        epicCooldowns: parsed.epicCooldowns,
        log: parsed.log,
        battleSummary: parsed.battleSummary,
        selectedFusion: parsed.selectedFusion,
        selectedBreeding: parsed.selectedBreeding,
        eggBattleCount: parsed.eggBattleCount
      }
    };
    const merged = buildStateFromBundle(bundle);
    createBackupSnapshot();
    state = merged;
    ensureStateIntegrity();
    lastSavedSnapshot = {};
    saveState();
    logMessage("Save imported successfully.");
    updateAll();
  } catch (error) {
    logMessage("Invalid save payload.");
  }
}

function restoreBackup() {
  const raw = localStorage.getItem(SAVE_KEYS.backup);
  if (!raw) {
    logMessage("No backup snapshot available.");
    return;
  }
  try {
    state = buildStateFromBundle(JSON.parse(raw));
    lastSavedSnapshot = {};
    saveState();
    logMessage("Backup restored.");
    updateAll();
  } catch (error) {
    logMessage("Backup restore failed.");
  }
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
    navigator.serviceWorker.register("sw.js", { updateViaCache: "none" }).then((registration) => {
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
    const panelHeaderButton = event.target.closest(".panel-primary");
    if (panelHeaderButton) {
      if (panelHeaderButton.dataset.panelTab) switchTab(panelHeaderButton.dataset.panelTab);
      if (panelHeaderButton.dataset.action) {
        const proxy = document.querySelector(`button[data-action="${panelHeaderButton.dataset.action}"]`);
        if (proxy && !proxy.disabled) proxy.click();
      }
      if (panelHeaderButton.dataset.panelClick) {
        const proxy = document.querySelector(panelHeaderButton.dataset.panelClick);
        if (proxy) proxy.click();
      }
      if (panelHeaderButton.dataset.buy) handleShopBuy(panelHeaderButton.dataset.buy);
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
      if (action === "heal-oot") usePotionOutOfCombat();
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
    const loadoutSaveBtn = event.target.closest("button[data-loadout-save]");
    if (loadoutSaveBtn) {
      saveCurrentToLoadout(loadoutSaveBtn.dataset.loadoutSave);
      return;
    }
    const loadoutEquipBtn = event.target.closest("button[data-loadout-equip]");
    if (loadoutEquipBtn) {
      equipLoadout(loadoutEquipBtn.dataset.loadoutEquip);
      return;
    }
    const loadoutRenameBtn = event.target.closest("button[data-loadout-rename]");
    if (loadoutRenameBtn) {
      renameLoadout(loadoutRenameBtn.dataset.loadoutRename);
      return;
    }
    const loadoutClearBtn = event.target.closest("button[data-loadout-clear]");
    if (loadoutClearBtn) {
      clearLoadout(loadoutClearBtn.dataset.loadoutClear);
      return;
    }
    const equipButton = event.target.closest("button[data-equip]");
    if (equipButton) {
      equipItem(equipButton.dataset.equip);
      return;
    }
    const swapButton = event.target.closest("button[data-swap]");
    if (swapButton) {
      swapGear(swapButton.dataset.swap);
      return;
    }
    const unequipButton = event.target.closest("button[data-unequip]");
    if (unequipButton) {
      unequipSlot(unequipButton.dataset.unequip);
      return;
    }
    const sellButton = event.target.closest("button[data-sell]");
    if (sellButton) {
      sellItem(sellButton.dataset.sell);
      return;
    }
    const lockButton = event.target.closest("button[data-lock]");
    if (lockButton) {
      toggleLockItem(lockButton.dataset.lock);
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
    const useConsumableButton = event.target.closest("button[data-use-consumable]");
    if (useConsumableButton) {
      const id = useConsumableButton.dataset.useConsumable;
      if (consumeItem(id)) {
        applyConsumableEffect(id);
        updateAll();
      }
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

  document.body.addEventListener("change", (event) => {
    const select = event.target.closest("select[data-loadout-slot]");
    if (!select) return;
    updateSkillLoadout(Number(select.dataset.loadoutSlot), select.value);
  });

  ui.navToggle.addEventListener("click", handleNavToggle);
  ui.inventoryFilter.addEventListener("change", renderInventory);
  ui.inventorySort.addEventListener("change", renderInventory);

  if (ui.logEntries) {
    ui.logEntries.addEventListener("scroll", () => {
      state.logAutoScrollPaused = ui.logEntries.scrollTop > 8;
      if (ui.resumeLog) ui.resumeLog.hidden = !state.logAutoScrollPaused;
    });
  }
  if (ui.logFilters) {
    ui.logFilters.addEventListener("click", (event) => {
      const btn = event.target.closest("button[data-log-filter]");
      if (!btn) return;
      state.logFilter = btn.dataset.logFilter;
      ui.logFilters.querySelectorAll("button[data-log-filter]").forEach((node) => node.classList.toggle("active", node === btn));
      renderLog();
    });
  }
  if (ui.resumeLog) {
    ui.resumeLog.addEventListener("click", () => {
      state.logAutoScrollPaused = false;
      ui.resumeLog.hidden = true;
      renderLog();
    });
  }
  ui.sellAll.addEventListener("click", sellAllFiltered);
  ui.startNewGame.addEventListener("click", startNewGame);
  ui.exportSave.addEventListener("click", exportSave);
  ui.importSave.addEventListener("click", importSave);
  ui.restoreBackup.addEventListener("click", restoreBackup);
  ui.resetSave.addEventListener("click", resetSave);
  ui.uiScale.addEventListener("change", handleSettingsChange);
  ui.customScale.addEventListener("input", handleSettingsChange);
  ui.customScale.addEventListener("change", handleSettingsChange);
  ui.toggleAnimations.addEventListener("change", handleSettingsChange);
  ui.toggleColorblind.addEventListener("change", handleSettingsChange);
  ui.lootFilterMode.addEventListener("change", handleSettingsChange);
  ui.toggleMobileLayout.addEventListener("change", handleSettingsChange);
  ui.toggleCompactNav.addEventListener("change", handleSettingsChange);
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
  ensureStateIntegrity();
  ensureToastStack();
  initPanelHeaders();
  lastSavedSnapshot = {};
  saveState();
  updateOrientation();
  setupEventListeners();
  registerServiceWorker();
  updateAll();
}

initGame();
