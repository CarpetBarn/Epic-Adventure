const SaveSystem = (() => {
  const KEY = 'epic-adventure-save-v1';
  const load = () => {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) { console.error(e); return null; }
  };
  const save = (state) => {
    localStorage.setItem(KEY, JSON.stringify(state));
  };
  return { load, save };
})();

const GameData = (() => {
  const rarities = [
    { name: 'Common', key: 'common', color: 'rarity-common', weight: 55 },
    { name: 'Uncommon', key: 'uncommon', color: 'rarity-uncommon', weight: 25 },
    { name: 'Rare', key: 'rare', color: 'rarity-rare', weight: 12 },
    { name: 'Epic', key: 'epic', color: 'rarity-epic', weight: 6 },
    { name: 'Legendary', key: 'legendary', color: 'rarity-legendary', weight: 2 },
  ];

  const classes = {
    Warrior: { hp: 140, atk: 12, def: 10, crit: 5, spd: 7, resource: { name: 'Rage', max: 100, regenTurn: 15, onHit: 20 } },
    Rogue: { hp: 110, atk: 14, def: 8, crit: 12, spd: 11, resource: { name: 'Energy', max: 110, regenTurn: 18, onHit: 15 } },
    Mage: { hp: 95, atk: 16, def: 6, crit: 10, spd: 8, resource: { name: 'Mana', max: 130, regenTurn: 20, onHit: 8 } },
    Cleric: { hp: 120, atk: 11, def: 12, crit: 6, spd: 7, resource: { name: 'Faith', max: 120, regenTurn: 18, onHit: 10 } },
    Ranger: { hp: 115, atk: 13, def: 9, crit: 11, spd: 10, resource: { name: 'Focus', max: 120, regenTurn: 16, onHit: 12 } },
    Paladin: { hp: 150, atk: 12, def: 13, crit: 5, spd: 7, resource: { name: 'Zeal', max: 110, regenTurn: 16, onHit: 14 } },
    Necromancer: { hp: 100, atk: 13, def: 8, crit: 9, spd: 9, resource: { name: 'Souls', max: 140, regenTurn: 12, onHit: 16 } },
  };

  const zones = Array.from({ length: 7 }).map((_, i) => ({
    id: i + 1,
    name: `Zone ${i + 1}`,
    levelReq: (i + 1) * 5,
    gateBoss: `Gate Guardian ${i + 1}`,
    rarityBonus: i * 5,
  }));

  const skills = {
    Warrior: [
      { id: 'slash', name: 'Power Slash', cost: 25, cooldown: 6, multiplier: 1.6 },
      { id: 'shout', name: 'War Shout', cost: 30, cooldown: 8, multiplier: 1.2, buff: { def: 0.1 } },
      { id: 'cleave', name: 'Cleave', cost: 40, cooldown: 10, multiplier: 2.1 },
    ],
    Rogue: [
      { id: 'stab', name: 'Quick Stab', cost: 20, cooldown: 5, multiplier: 1.4 },
      { id: 'flurry', name: 'Flurry', cost: 35, cooldown: 8, multiplier: 1.8 },
      { id: 'smoke', name: 'Smoke Bomb', cost: 30, cooldown: 9, multiplier: 1.1, buff: { evade: 0.15 } },
    ],
    Mage: [
      { id: 'bolt', name: 'Arcane Bolt', cost: 25, cooldown: 5, multiplier: 1.7 },
      { id: 'nova', name: 'Frost Nova', cost: 40, cooldown: 9, multiplier: 2.2 },
      { id: 'barrier', name: 'Barrier', cost: 35, cooldown: 10, multiplier: 1.2, buff: { shield: 0.15 } },
    ],
    Cleric: [
      { id: 'smite', name: 'Smite', cost: 22, cooldown: 6, multiplier: 1.5 },
      { id: 'bless', name: 'Blessing', cost: 30, cooldown: 8, multiplier: 1.1, buff: { heal: 0.15 } },
      { id: 'radiance', name: 'Radiance', cost: 35, cooldown: 10, multiplier: 1.8 },
    ],
    Ranger: [
      { id: 'aim', name: 'Aimed Shot', cost: 22, cooldown: 6, multiplier: 1.6 },
      { id: 'volley', name: 'Volley', cost: 32, cooldown: 8, multiplier: 1.9 },
      { id: 'trap', name: 'Snare Trap', cost: 28, cooldown: 9, multiplier: 1.3, debuff: { spd: -0.1 } },
    ],
    Paladin: [
      { id: 'strike', name: 'Holy Strike', cost: 25, cooldown: 6, multiplier: 1.6 },
      { id: 'ward', name: 'Ward', cost: 30, cooldown: 9, multiplier: 1.2, buff: { def: 0.12 } },
      { id: 'judgment', name: 'Judgment', cost: 40, cooldown: 11, multiplier: 2.3 },
    ],
    Necromancer: [
      { id: 'drain', name: 'Life Drain', cost: 24, cooldown: 6, multiplier: 1.5, buff: { heal: 0.1 } },
      { id: 'bones', name: 'Bone Spear', cost: 34, cooldown: 9, multiplier: 2.0 },
      { id: 'army', name: 'Raise Army', cost: 45, cooldown: 12, multiplier: 2.4 },
    ],
  };

  const lifeSkills = [
    { id: 'mining', name: 'Mining', cooldown: 20, xp: 15, reward: 'Ore' },
    { id: 'foraging', name: 'Foraging', cooldown: 18, xp: 12, reward: 'Herb' },
    { id: 'fishing', name: 'Fishing', cooldown: 22, xp: 14, reward: 'Fish' },
    { id: 'hunting', name: 'Hunting', cooldown: 16, xp: 13, reward: 'Hide' },
    { id: 'blacksmithing', name: 'Blacksmithing', cooldown: 26, xp: 18, reward: 'Ingot' },
    { id: 'alchemy', name: 'Alchemy', cooldown: 26, xp: 18, reward: 'Reagent' },
    { id: 'cooking', name: 'Cooking', cooldown: 20, xp: 16, reward: 'Meal' },
    { id: 'enchanting', name: 'Enchanting', cooldown: 28, xp: 20, reward: 'Charm' },
    { id: 'dragon', name: 'Dragon Handling', cooldown: 30, xp: 22, reward: 'Scale' },
  ];

  const epicActions = [
    { id: 'chop', name: 'Chop Wood', cooldown: 14, reward: 'Wood' },
    { id: 'mineOre', name: 'Mine Ore (EPIC)', cooldown: 14, reward: 'Ore Chunk' },
    { id: 'fishEpic', name: 'Fish (EPIC)', cooldown: 14, reward: 'Shiny Fish' },
    { id: 'work', name: 'Work Job', cooldown: 20, reward: 'Gold' },
  ];

  const recipes = [
    { id: 'potion', name: 'Minor Potion', requires: { Herb: 2 }, produces: { consumable: { name: 'Potion', heal: 30 } } },
    { id: 'ingot', name: 'Refine Ingot', requires: { Ore: 3 }, produces: { material: { name: 'Ingot', amount: 1 } } },
    { id: 'bow', name: 'Craft Hunter Bow', requires: { Wood: 2, Ingot: 1 }, produces: { gear: { slot: 'weapon', rarity: 'uncommon', tier: 1 } } },
    { id: 'elixir', name: 'Reagent Elixir', requires: { Reagent: 3 }, produces: { consumable: { name: 'Elixir', heal: 60 } } },
  ];

  const shop = [
    { id: 'potionPack', name: 'Potion Pack', price: 50, gives: { consumable: { name: 'Potion', heal: 30, amount: 3 } } },
    { id: 'gem', name: 'Random Gem', price: 75, gives: { gem: true } },
    { id: 'egg', name: 'Mysterious Egg', price: 120, gives: { egg: true } },
  ];

  return { rarities, classes, zones, skills, lifeSkills, epicActions, recipes, shop };
})();

const Utils = {
  uuid: (() => {
    let c = 0; return () => `id-${Date.now()}-${c++}`;
  })(),
  clamp: (v, min, max) => Math.max(min, Math.min(max, v)),
  xpForLevel(level) { return Math.floor(100 * Math.pow(1.12, level - 1)); },
  totalXpForLevel(level) { let sum = 0; for (let i = 1; i < level; i++) sum += this.xpForLevel(i); return sum; },
  formatTime(sec) { const m = Math.floor(sec / 60).toString().padStart(2,'0'); const s = Math.floor(sec % 60).toString().padStart(2,'0'); return `${m}:${s}`; },
  chance(percent) { return Math.random() * 100 < percent; },
};

const COOLDOWN_MOD = 1.2;

const initialState = () => {
  const className = 'Warrior';
  const cls = GameData.classes[className];
  return {
    player: {
      class: className,
      level: 1,
      xp: 0,
      gold: 100,
      hp: cls.hp,
      maxHp: cls.hp,
      stats: { atk: cls.atk, def: cls.def, crit: cls.crit, spd: cls.spd },
      resource: cls.resource.max,
      resourceMax: cls.resource.max,
      gateBossDefeated: {},
      skillPoints: 0,
      ascension: { level: 0, bonuses: { atk: 0, hp: 0, gold: 0 } },
      purchasedSkills: [],
    },
    settings: { uiScale: 1, animations: 'on', lootFilter: 'normal', colorblind: false },
    inventory: { gear: [], materials: {}, gems: {}, consumables: {} },
    eggs: [],
    dragons: [],
    cooldowns: { combat: {}, life: {}, epic: {}, autoBattle: 0, zoneMove: 0 },
    current: { zone: 1, enemy: null, inDungeon: false, dungeonFights: 0, lastAction: null },
    log: [],
    lifeSkills: {},
  };
};

let state = initialState();

const UI = (() => {
  const logEl = document.getElementById('gameLog');
  const tabs = document.querySelectorAll('.tab-btn');
  const overlay = document.getElementById('navOverlay');
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.getElementById('hamburger');
  const hamburgerGlobal = document.getElementById('hamburgerGlobal');
  const mobileBar = document.getElementById('mobileCombatBar');
  const mobileNav = document.getElementById('mobileNav');
  const navToggle = document.getElementById('mobileNavToggle');

  const addLog = (text) => {
    state.log.unshift({ text, time: Date.now() });
    state.log = state.log.slice(0, 60);
    logEl.innerHTML = state.log.map(l => `<div>${l.text}</div>`).join('');
  };

  const switchTab = (id) => {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === id));
    highlightMobileNav(id);
    if (window.innerWidth <= 768) closeNav();
    closeNav();
  };

  const openNav = () => { sidebar.classList.add('open'); overlay.classList.add('show'); };
  const closeNav = () => { sidebar.classList.remove('open'); overlay.classList.remove('show'); };

  const updateOrientation = () => {
    const orientation = window.innerWidth < window.innerHeight ? 'portrait' : 'landscape';
    document.body.dataset.orientation = orientation;
  };

  const buildMobileBar = () => {
    mobileBar.innerHTML = '';
    const navBtn = document.createElement('button');
    navBtn.id = 'mobileNavBtn';
    navBtn.textContent = 'Menu';
    navBtn.addEventListener('click', () => openNav());
    mobileBar.appendChild(navBtn);
    const buttons = [
      { id: 'attackBtn', label: 'Attack' },
      { id: 'skill1Btn', label: 'Skill 1' },
      { id: 'skill2Btn', label: 'Skill 2' },
      { id: 'skill3Btn', label: 'Skill 3' },
      { id: 'healBtn', label: 'Heal' },
      { id: 'potionBtn', label: 'Potion' },
      { id: 'huntBtn', label: 'Hunt' },
      { id: 'adventureBtn', label: 'Adventure' },
      { id: 'dungeonBtn', label: 'Dungeon' },
      { id: 'minibossBtn', label: 'Mini' },
      { id: 'bossBtn', label: 'Boss' },
      { id: 'autoBattleBtn', label: 'Auto' },
      { id: 'exitDungeonBtn', label: 'Exit' },
    ];
    buttons.forEach(btn => {
      const src = document.getElementById(btn.id);
      if (!src) return;
      const clone = src.cloneNode(true);
      clone.id = `${btn.id}-mobile`;
      clone.textContent = btn.label;
      clone.addEventListener('click', () => src.click());
      mobileBar.appendChild(clone);
    });
  };

  const syncMobileButtons = () => {
    mobileBar.querySelectorAll('button').forEach(btn => {
      if (btn.id === 'mobileNavBtn') return;
      const targetId = btn.id.replace('-mobile','');
      const target = document.getElementById(targetId);
      if (target) btn.disabled = target.disabled;
    });
  };

  const buildMobileNav = () => {
    mobileNav.innerHTML = '';
    const navTargets = ['combat','zones','inventory','skillTrees','lifeSkills','dragons','shop','settings'];
    navTargets.forEach(tabId => {
      const btn = document.createElement('button');
      const src = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
      btn.textContent = src ? src.textContent : tabId;
      btn.dataset.tab = tabId;
      btn.addEventListener('click', () => switchTab(tabId));
      mobileNav.appendChild(btn);
    });
    highlightMobileNav('combat');
  };

  const highlightMobileNav = (id) => {
    mobileNav.querySelectorAll('button').forEach(btn => btn.classList.toggle('active', btn.dataset.tab === id));
  };

  const applySettings = () => {
    document.documentElement.style.setProperty('--scale', state.settings.uiScale);
    document.body.classList.toggle('colorblind', state.settings.colorblind);
    document.body.classList.toggle('no-anim', state.settings.animations === 'off' || window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  };

  if (hamburger) hamburger.addEventListener('click', openNav);
  if (hamburgerGlobal) hamburgerGlobal.addEventListener('click', openNav);
  document.getElementById('forceOpenNav')?.addEventListener('click', () => {
    console.log('[NAV] Force open clicked');
    openNav();
  });
  overlay.addEventListener('click', closeNav);
  navToggle.addEventListener('click', () => {
    if (sidebar.classList.contains('open')) closeNav(); else openNav();
  });
  tabs.forEach(t => t.addEventListener('click', () => switchTab(t.dataset.tab)));
  window.addEventListener('resize', updateOrientation);
  updateOrientation();
  buildMobileBar();
  buildMobileNav();

  return { addLog, switchTab, applySettings, updateOrientation, buildMobileBar, buildMobileNav, syncMobileButtons };
})();

window.addEventListener('DOMContentLoaded', () => {
  console.log('[NAV] DOMContentLoaded');

  const btn = document.getElementById('hamburgerGlobal');
  console.log('[NAV] hamburgerGlobal exists?', !!btn);

  if (btn) {
    btn.addEventListener('click', () => {
      console.log('[NAV] hamburgerGlobal clicked');
    });
  }
});

const Player = (() => {
  const refreshStats = () => {
    const cls = GameData.classes[state.player.class];
    const levelBonus = 1 + (state.player.level - 1) * 0.02 + state.player.ascension.level * 0.01;
    const equipped = {};
    (state.inventory?.gear || []).forEach(g => {
      if (!equipped[g.slot] || g.tier > equipped[g.slot].tier) equipped[g.slot] = g;
    });
    const gearBonus = { atk:0, def:0, crit:0, hp:0 };
    Object.values(equipped).forEach(g => {
      gearBonus.atk += g.stats.atk;
      gearBonus.def += g.stats.def;
      gearBonus.crit += g.stats.crit;
      gearBonus.hp += g.stats.hp;
      (g.gems || []).forEach(gem => { if (gem.bonus.atk) gearBonus.atk += gem.bonus.atk; });
    });
    state.player.maxHp = Math.floor(cls.hp * levelBonus + state.player.ascension.bonuses.hp + gearBonus.hp);
    state.player.resourceMax = cls.resource.max;
    state.player.stats = {
      atk: Math.floor(cls.atk * levelBonus + state.player.ascension.bonuses.atk + gearBonus.atk),
      def: Math.floor(cls.def * levelBonus + gearBonus.def),
      crit: cls.crit + gearBonus.crit,
      spd: cls.spd,
    };
    if (state.player.hp > state.player.maxHp) state.player.hp = state.player.maxHp;
    if (state.player.resource > state.player.resourceMax) state.player.resource = state.player.resourceMax;
  };

  const gainXp = (amount) => {
    const beforeLevel = state.player.level;
    const xpReq = Utils.xpForLevel(state.player.level);
    state.player.xp += amount;
    while (state.player.xp >= xpReq && state.player.level < 200) {
      state.player.xp -= xpReq;
      state.player.level += 1;
      state.player.skillPoints += 1;
    }
    refreshStats();
    if (state.player.level !== beforeLevel) UI.addLog(`Level up! Now level ${state.player.level}`);
  };

  const addGold = (amount) => {
    const bonus = 1 + state.player.ascension.bonuses.gold;
    state.player.gold = Math.max(0, state.player.gold + Math.floor(amount * bonus));
  };

  const takeDamage = (amount) => {
    state.player.hp = Math.max(0, state.player.hp - amount);
    if (state.player.hp === 0) handleDeath();
  };

  const handleDeath = () => {
    UI.addLog('You were defeated! Losing gold and XP.');
    const goldLoss = Math.floor(state.player.gold * 0.25);
    state.player.gold -= goldLoss;
    const totalPrev = Utils.totalXpForLevel(state.player.level);
    const minXp = totalPrev;
    const currentTotal = totalPrev + state.player.xp;
    const loss = Math.floor((currentTotal - totalPrev) * 0.75);
    const newTotal = Math.max(minXp, currentTotal - loss);
    state.player.xp = newTotal - totalPrev;
    state.player.hp = state.player.maxHp;
    state.current.enemy = null;
    state.current.inDungeon = false;
  };

  const spendResource = (amount) => {
    if (state.player.resource < amount) return false;
    state.player.resource -= amount;
    return true;
  };

  const regenResource = (onHit = false) => {
    const cls = GameData.classes[state.player.class];
    let gain = cls.resource.regenTurn;
    if (onHit) gain += cls.resource.onHit;
    state.player.resource = Utils.clamp(state.player.resource + gain, 0, state.player.resourceMax);
  };

  return { refreshStats, gainXp, addGold, takeDamage, spendResource, regenResource };
})();

const LootSystem = (() => {
  const rarityByZone = (zoneId) => {
    return GameData.rarities.map((r, idx) => {
      let weight = r.weight;
      if (idx === 0) weight += (7 - zoneId) * 10; // commons early
      if (idx === 1) weight += (7 - zoneId) * 5;
      weight += (zoneId - 1) * idx * 3; // higher rarities scale with zone
      return { ...r, weight: Math.max(1, weight) };
    });
  };

  const pickRarity = (zoneId) => {
    const weights = rarityByZone(zoneId);
    const total = weights.reduce((a, b) => a + b.weight, 0);
    let roll = Math.random() * total;
    for (const r of weights) {
      if (roll < r.weight) return r;
      roll -= r.weight;
    }
    return weights[0];
  };

  const generateGear = (zoneId, slot) => {
    const rarity = pickRarity(zoneId);
    const tier = Math.min(5, 1 + Math.floor(zoneId / 2));
    const itemLevel = state.player.level + zoneId;
    const stats = {
      atk: Math.floor(itemLevel * (1 + Math.random() * 0.6)),
      def: Math.floor(itemLevel * (0.6 + Math.random() * 0.6)),
      crit: Math.floor(2 + Math.random() * 6),
      hp: Math.floor(itemLevel * 4),
    };
    const sockets = (rarity.key === 'epic' || rarity.key === 'legendary' || tier >= 3) ? Math.min(3, 1 + Math.floor(Math.random() * tier)) : 0;
    return {
      id: Utils.uuid(),
      name: `${rarity.name} ${slot}`,
      rarity: rarity.key,
      slot,
      tier,
      itemLevel,
      stats,
      sockets,
      gems: [],
    };
  };

  const generateGem = () => ({ id: Utils.uuid(), name: 'Gem', bonus: { atk: 3 + Math.floor(Math.random() * 5) } });

  const grantLoot = (zoneId) => {
    const loot = [];
    // Gear drop chance
    if (Utils.chance(60)) {
      const gear = generateGear(zoneId, ['weapon','armor','helmet','boots','accessory'][Math.floor(Math.random()*5)]);
      const strict = state.settings.lootFilter === 'strict';
      const low = gear.rarity === 'common' || gear.rarity === 'uncommon';
      if (!strict || !low) loot.push(gear);
    }
    if (Utils.chance(35)) loot.push({ material: 'Ore', amount: 1 + Math.floor(Math.random()*2) });
    if (Utils.chance(25)) loot.push({ material: 'Herb', amount: 1 });
    if (Utils.chance(10 + 6)) loot.push({ egg: true });
    if (Utils.chance(18)) loot.push({ gem: generateGem() });
    return loot;
  };

  return { grantLoot };
})();

const Inventory = (() => {
  const addGear = (item) => { state.inventory.gear.push(item); };
  const addMaterial = (name, amount) => { state.inventory.materials[name] = (state.inventory.materials[name] || 0) + amount; };
  const addGem = (gem) => { state.inventory.gems[gem.id] = gem; };
  const addConsumable = (cons) => { const key = cons.name; state.inventory.consumables[key] = (state.inventory.consumables[key] || 0) + (cons.amount || 1); };

  const sellItem = (id) => {
    const idx = state.inventory.gear.findIndex(g => g.id === id);
    if (idx >= 0) {
      const item = state.inventory.gear.splice(idx,1)[0];
      Player.addGold(20 + item.tier * 10);
      UI.addLog(`Sold ${item.name}`);
    }
  };

  const sellAll = (filter) => {
    let sold = 0;
    state.inventory.gear = state.inventory.gear.filter(g => {
      const matches = filter === 'All' || g.slot === filter.toLowerCase() || filter === g.rarity;
      if (matches) {
        Player.addGold(20 + g.tier * 10);
        sold += 1;
        return false;
      }
      return true;
    });
    if (sold) UI.addLog(`Sold ${sold} items.`);
  };

  const socketGem = (gearId, gemId) => {
    const gear = state.inventory.gear.find(g => g.id === gearId);
    const gem = state.inventory.gems[gemId];
    if (!gear || !gem) return UI.addLog('Invalid gear or gem.');
    gear.gems = gear.gems || [];
    if (gear.gems.length >= gear.sockets) return UI.addLog('No empty sockets.');
    gear.gems.push(gem);
    delete state.inventory.gems[gemId];
    UI.addLog('Gem socketed!');
  };

  const removeGem = (gearId) => {
    const gear = state.inventory.gear.find(g => g.id === gearId);
    if (!gear) return UI.addLog('Invalid gear.');
    if (gear.tier < 4) return UI.addLog('Remove only from tier 4+');
    gear.gems = gear.gems || [];
    const gem = gear.gems.pop();
    if (gem) { state.inventory.gems[gem.id] = gem; UI.addLog('Gem removed.'); }
  };

  return { addGear, addMaterial, addGem, addConsumable, sellItem, sellAll, socketGem, removeGem };
})();

const CombatSystem = (() => {
  const actionXp = { hunt:30, adventure:75, dungeon:130, miniboss:250, boss:300, auto:15 };

  const createEnemy = (type='hunt') => {
    const zone = state.current.zone;
    const base = 40 + zone * 10;
    const hp = base + Math.floor(Math.random()*20);
    const name = type === 'boss' ? `Boss of Zone ${zone}` : type === 'miniboss' ? `Mini Boss ${zone}` : `Enemy ${zone}-${Math.floor(Math.random()*100)}`;
    return { name, hp, maxHp: hp, atk: 10 + zone * 3, def: 5 + zone * 2, type };
  };

  const startFight = (type='hunt') => {
    state.current.enemy = createEnemy(type);
    UI.addLog(`Encountered ${state.current.enemy.name}`);
    render();
  };

  const applyPlayerDamage = (mult=1) => {
    const enemy = state.current.enemy; if (!enemy) return;
    const crit = Utils.chance(state.player.stats.crit);
    const damage = Math.max(1, Math.floor((state.player.stats.atk * mult) - enemy.def));
    enemy.hp = Math.max(0, enemy.hp - (crit ? damage*1.5 : damage));
    Player.regenResource(true);
    if (enemy.hp === 0) victory(enemy.type || 'hunt');
  };

  const enemyTurn = () => {
    const enemy = state.current.enemy; if (!enemy) return;
    const dmg = Math.max(1, enemy.atk - state.player.stats.def * 0.6);
    Player.takeDamage(dmg);
    UI.addLog(`${enemy.name} hits for ${dmg}`);
  };

  const victory = (type) => {
    UI.addLog(`Defeated ${state.current.enemy.name}`);
    state.current.enemy = null;
    const xp = actionXp[type] || 30;
    Player.gainXp(xp);
    Player.addGold(15 + state.current.zone * 2);
    const loot = LootSystem.grantLoot(state.current.zone);
    loot.forEach(item => {
      if (item.material) Inventory.addMaterial(item.material, item.amount);
      if (item.egg) addEgg();
      if (item.gem) Inventory.addGem(item.gem);
      if (item.slot || item.rarity) Inventory.addGear(item);
    });
    if (type === 'gate') state.player.gateBossDefeated[state.current.zone] = true;
    if (type !== 'auto') DragonSystem.recordBattle();
    if (state.current.inDungeon) {
      state.current.dungeonFights -= 1;
      if (state.current.dungeonFights > 0 && state.player.hp > 0) startFight('dungeon');
      else state.current.inDungeon = false;
    }
  };

  const addEgg = () => {
    const rarities = ['Common','Uncommon','Rare','Epic','Legendary'];
    const tier = 1 + Math.floor(Math.random() * 3);
    state.eggs.push({ id: Utils.uuid(), rarity: rarities[Math.floor(Math.random()*rarities.length)], tier, battles: 0, required: Math.floor(10 + Math.random()*10) * Math.pow(1.25, tier-1) });
  };

  const playerAction = (type, skill=null) => {
    const now = Date.now();
    const cd = state.cooldowns.combat[type];
    if (cd && cd > now) return;
    if (!state.current.enemy) startFight('hunt');
    if (!state.current.enemy) return;
    const enemy = state.current.enemy;

    if (type === 'attack') {
      applyPlayerDamage(1);
      state.cooldowns.combat.attack = now + Math.floor(500 * COOLDOWN_MOD);
    }
    if (type === 'skill' && skill) {
      if (!Player.spendResource(skill.cost)) return UI.addLog('Not enough resource');
      applyPlayerDamage(skill.multiplier);
      state.cooldowns.combat[skill.id] = now + Math.floor(skill.cooldown * 1000 * COOLDOWN_MOD);
    }
    if (type === 'heal') {
      state.player.hp = Utils.clamp(state.player.hp + state.player.maxHp * 0.25, 0, state.player.maxHp);
      UI.addLog('Healed up');
      state.cooldowns.combat.heal = now + Math.floor(9000 * COOLDOWN_MOD);
    }
    if (type === 'potion') {
      if ((state.inventory.consumables.Potion || 0) > 0) {
        state.inventory.consumables.Potion -= 1;
        state.player.hp = Utils.clamp(state.player.hp + 60, 0, state.player.maxHp);
        UI.addLog('Used potion');
      }
      state.cooldowns.combat.potion = now + Math.floor(12000 * COOLDOWN_MOD);
    }
    if (enemy.hp > 0 && type !== 'auto') enemyTurn();
    Player.regenResource();
    render();
  };

  const autoBattle = () => {
    const now = Date.now();
    if (state.cooldowns.autoBattle > now) return UI.addLog('Auto battle cooling down');
    state.cooldowns.autoBattle = now + Math.floor(15000 * COOLDOWN_MOD);
    let wins = 0; let dmgTaken = 0; let gold = 0;
    for (let i=0;i<5;i++) {
      const enemy = createEnemy('auto');
      const dmg = Math.max(1, enemy.atk - state.player.stats.def * 0.5);
      dmgTaken += dmg;
      wins += 1;
      gold += 8;
    }
    Player.takeDamage(dmgTaken);
    Player.addGold(gold);
    Player.gainXp(actionXp.auto);
    UI.addLog(`Auto battle summary: wins ${wins}, gold ${gold}, HP lost ${dmgTaken}`);
  };

  const startDungeon = () => {
    state.current.inDungeon = true;
    state.current.dungeonFights = 5;
    startFight('dungeon');
  };

  return { startFight, playerAction, autoBattle, startDungeon, actionXp };
})();

const FusionSystem = (() => {
  const fuse = (idA, idB) => {
    const gearA = state.inventory.gear.find(g => g.id === idA);
    const gearB = state.inventory.gear.find(g => g.id === idB);
    if (!gearA || !gearB) return UI.addLog('Invalid gear IDs');
    if (gearA.slot !== gearB.slot) return UI.addLog('Slots must match');
    if (gearA.tier !== gearB.tier) return UI.addLog('Tiers must match');
    const sameRarity = gearA.rarity === gearB.rarity;
    const tier = sameRarity ? Math.min(5, gearA.tier + 1) : gearA.tier;
    const failChance = Math.min(60, tier * 10);
    state.inventory.gear = state.inventory.gear.filter(g => g.id !== idA && g.id !== idB);
    if (Utils.chance(failChance)) {
      UI.addLog('Fusion failed! Items lost.');
      return null;
    }
    const newGear = { ...LootSystem.grantLoot(state.current.zone).find(l => l.slot), tier };
    if (!newGear) return UI.addLog('Fusion fizzled.');
    newGear.id = Utils.uuid();
    newGear.slot = gearA.slot;
    newGear.tier = tier;
    newGear.gems = newGear.gems || [];
    newGear.sockets = newGear.sockets || gearA.sockets;
    Inventory.addGear(newGear);
    UI.addLog('Fusion succeeded!');
    return newGear;
  };
  return { fuse };
})();

const LifeSkillSystem = (() => {
  const perform = (id) => {
    const skill = GameData.lifeSkills.find(l => l.id === id);
    if (!skill) return;
    const now = Date.now();
    const cd = state.cooldowns.life[id];
    if (cd && cd > now) return UI.addLog('Cooling down');
    state.cooldowns.life[id] = now + Math.floor(skill.cooldown * 1000 * COOLDOWN_MOD);
    const level = (state.lifeSkills?.[id]?.level || 1);
    const tier = Utils.clamp(Math.ceil((state.current.zone + level/10)), 1, 5);
    const tieredReward = `${skill.reward} T${tier}`;
    Inventory.addMaterial(tieredReward, 1);
    const progress = state.lifeSkills?.[id]?.xp || 0;
    const newProgress = progress + skill.xp;
    const newLevel = Math.min(200, Math.floor(newProgress / 100) + 1);
    state.lifeSkills = state.lifeSkills || {};
    state.lifeSkills[id] = { xp: newProgress, level: newLevel };
    UI.addLog(`${skill.name} gained materials and XP.`);
  };

  const performEpic = (id) => {
    const action = GameData.epicActions.find(l => l.id === id);
    if (!action) return;
    const now = Date.now();
    const cd = state.cooldowns.epic[id];
    if (cd && cd > now) return UI.addLog('EPIC cooldown active');
    state.cooldowns.epic[id] = now + Math.floor(action.cooldown * 1000 * COOLDOWN_MOD);
    if (action.reward === 'Gold') Player.addGold(30);
    else Inventory.addMaterial(action.reward, 1);
    UI.addLog(`${action.name} complete.`);
  };

  return { perform, performEpic };
})();

const CraftingSystem = (() => {
  const craft = (id) => {
    const recipe = GameData.recipes.find(r => r.id === id);
    if (!recipe) return;
    // Check materials possession
    for (const [mat, amt] of Object.entries(recipe.requires)) {
      if ((state.inventory.materials[mat] || 0) < amt) return UI.addLog('Missing materials');
    }
    for (const [mat, amt] of Object.entries(recipe.requires)) {
      state.inventory.materials[mat] -= amt;
    }
    const prod = recipe.produces;
    if (prod.material) Inventory.addMaterial(prod.material.name, prod.material.amount);
    if (prod.consumable) Inventory.addConsumable(prod.consumable);
    if (prod.gear) Inventory.addGear(LootSystem.grantLoot(state.current.zone)[0] || { ...prod.gear, id: Utils.uuid(), name: prod.gear.slot });
    UI.addLog(`Crafted ${recipe.name}`);
  };
  return { craft };
})();

const DragonSystem = (() => {
  const hatch = (eggId) => {
    const egg = state.eggs.find(e => e.id === eggId);
    if (!egg || egg.battles < egg.required) return;
    state.eggs = state.eggs.filter(e => e.id !== eggId);
    const stats = {
      atk: 5 * egg.tier,
      hp: 20 * egg.tier,
      bonus: 0.02 * egg.tier,
    };
    state.dragons.push({ id: Utils.uuid(), name: `${egg.rarity} Dragon`, tier: egg.tier, stats });
    UI.addLog('Egg hatched into a dragon!');
  };

  const breed = (ids) => {
    const picks = ids.map(id => state.dragons.find(d => d.id === id)).filter(Boolean);
    if (picks.length < 2) return UI.addLog('Need 2-3 dragons.');
    const tier = Math.min(5, Math.ceil(picks.reduce((a,b) => a+b.tier,0)/picks.length));
    state.eggs.push({ id: Utils.uuid(), rarity: 'Bred', tier, battles:0, required: Math.floor(12 * Math.pow(1.25, tier-1)) });
    UI.addLog('Dragons bred! New egg obtained.');
  };

  const recordBattle = () => {
    state.eggs.forEach(e => { e.battles += 1; });
  };

  return { hatch, breed, recordBattle };
})();

const SkillTreeSystem = (() => {
  const branches = ['Offense','Defense','Utility'];
  const skills = branches.reduce((acc, branch) => {
    acc[branch] = [
      { id: `${branch}-1`, name: `${branch} Boost I`, cost: 1, bonus: 0.04 },
      { id: `${branch}-2`, name: `${branch} Boost II`, cost: 2, bonus: 0.06 },
      { id: `${branch}-3`, name: `${branch} Boost III`, cost: 3, bonus: 0.08 },
    ];
    return acc;
  }, {});

  const purchase = (id) => {
    const branch = Object.keys(skills).find(b => skills[b].some(s => s.id === id));
    if (!branch) return;
    const skill = skills[branch].find(s => s.id === id);
    if (!skill) return;
    if (state.player.skillPoints < skill.cost) return UI.addLog('Not enough skill points');
    state.player.skillPoints -= skill.cost;
    state.player.purchasedSkills.push(id);
    skills[branch] = skills[branch].filter(s => s.id !== id);
    state.player.ascension.bonuses.atk += Math.floor(skill.bonus * 10);
    Player.refreshStats();
    UI.addLog(`Purchased ${skill.name}`);
  };

  return { branches, skills, purchase };
})();

const AscensionSystem = (() => {
  const ascend = () => {
    if (state.player.level < 20) return UI.addLog('Reach level 20 to ascend');
    if (state.player.ascension.level >= 50) return UI.addLog('Ascension capped');
    state.player.ascension.level += 1;
    state.player.ascension.bonuses.hp += 10;
    state.player.ascension.bonuses.gold += 0.01;
    state.player.level = 1;
    state.player.xp = 0;
    state.player.skillPoints += 2;
    state.player.hp = state.player.maxHp;
    state.player.resource = state.player.resourceMax;
    Player.refreshStats();
    UI.addLog('Ascended! Permanent bonuses applied.');
  };
  return { ascend };
})();

function render() {
  Player.refreshStats();
  document.getElementById('playerClass').textContent = state.player.class;
  document.getElementById('playerLevel').textContent = state.player.level;
  document.getElementById('playerGold').textContent = state.player.gold;
  document.getElementById('ascensionLevel').textContent = state.player.ascension.level;

  const hpPct = (state.player.hp/state.player.maxHp)*100;
  document.getElementById('playerHpBar').style.width = `${hpPct}%`;
  document.getElementById('playerHpText').textContent = `${state.player.hp}/${state.player.maxHp}`;

  const resPct = (state.player.resource/state.player.resourceMax)*100;
  document.getElementById('resourceBar').style.width = `${resPct}%`;
  document.getElementById('resourceText').textContent = `${state.player.resource}/${state.player.resourceMax}`;
  document.getElementById('resourceName').textContent = GameData.classes[state.player.class].resource.name;

  const xpReq = Utils.xpForLevel(state.player.level);
  document.getElementById('playerXpBar').style.width = `${Math.min(100, (state.player.xp/xpReq)*100)}%`;
  document.getElementById('playerXpText').textContent = `${state.player.xp}/${xpReq}`;
  document.getElementById('ascendBtn').disabled = state.player.level < 20;

  const enemy = state.current.enemy;
  const inCombat = !!enemy;
  document.getElementById('enemyName').textContent = enemy ? enemy.name : 'No enemy';
  document.getElementById('enemyHpText').textContent = enemy ? `${enemy.hp}/${enemy.maxHp}` : '--';
  document.getElementById('enemyHpBar').style.width = enemy ? `${(enemy.hp/enemy.maxHp)*100}%` : '0%';
  document.getElementById('exitDungeonBtn').style.display = state.current.inDungeon ? 'inline-flex' : 'none';
  const mobileExit = document.getElementById('exitDungeonBtn-mobile');
  if (mobileExit) mobileExit.style.display = state.current.inDungeon ? 'inline-flex' : 'none';

  ['attackBtn','healBtn','potionBtn','skill1Btn','skill2Btn','skill3Btn'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.disabled = !inCombat;
  });

  renderCooldowns();
  renderHotbar();
  renderZones();
  renderInventory();
  renderSkillTree();
  renderLifeSkills();
  renderCrafting();
  renderDragons();
  renderShop();
  UI.syncMobileButtons();
}

function renderCooldowns() {
  const el = document.getElementById('cooldownList');
  const now = Date.now();
  const cds = [];
  ['combat','life','epic'].forEach(group => {
    for (const [key, value] of Object.entries(state.cooldowns[group]||{})) {
      if (value > now) cds.push(`${key}: ${Utils.formatTime((value-now)/1000)}`);
    }
  });
  if (state.cooldowns.autoBattle > now) cds.push(`Auto: ${Utils.formatTime((state.cooldowns.autoBattle-now)/1000)}`);
  if (state.cooldowns.zoneMove > now) cds.push(`Zone Move: ${Utils.formatTime((state.cooldowns.zoneMove-now)/1000)}`);
  el.textContent = cds.join(' • ');
}

function renderHotbar() {
  const hotbar = document.getElementById('skillHotbar');
  hotbar.innerHTML = '';
  const now = Date.now();
  const classSkills = GameData.skills[state.player.class];
  classSkills.forEach((skill, idx) => {
    const btn = document.createElement('button');
    btn.textContent = `${skill.name} (-${skill.cost})`;
    const cdLeft = state.cooldowns.combat[skill.id] ? Math.max(0, state.cooldowns.combat[skill.id] - now) : 0;
    const insufficient = state.player.resource < skill.cost;
    btn.disabled = cdLeft > 0 || insufficient;
    btn.addEventListener('click', () => CombatSystem.playerAction('skill', skill));
    if (cdLeft > 0) {
      const overlay = document.createElement('div');
      overlay.className = 'cooldown-overlay';
      overlay.textContent = Utils.formatTime(cdLeft/1000);
      btn.appendChild(overlay);
    }
    hotbar.appendChild(btn);
    const hardBtn = document.getElementById(`skill${idx+1}Btn`);
    if (hardBtn) {
      hardBtn.textContent = skill.name;
      hardBtn.disabled = btn.disabled;
    }
  });
}

function renderZones() {
  const container = document.getElementById('zoneCards');
  container.innerHTML = '';
  GameData.zones.forEach(zone => {
    const unlocked = state.player.level >= zone.levelReq && state.player.gateBossDefeated[zone.id];
    const locked = !(state.player.level >= zone.levelReq && (state.player.gateBossDefeated[zone.id] || zone.id === 1));
    const card = document.createElement('div');
    card.className = `zone-card ${locked ? 'locked' : ''}`;
    card.innerHTML = `
      <div class="label">${zone.name}</div>
      <div>Level Req: ${zone.levelReq}</div>
      <div>Gate Boss: ${zone.gateBoss} ${state.player.gateBossDefeated[zone.id] ? '✔️' : '❌'}</div>
      <button ${locked ? 'disabled' : ''}>Set Zone</button>
      <button ${state.player.level < zone.levelReq ? 'disabled' : ''} data-gate="${zone.id}">Gate Boss</button>
    `;
    card.querySelector('button').addEventListener('click', () => setZone(zone.id));
    card.querySelector('button[data-gate]').addEventListener('click', () => startGateBoss(zone.id));
    container.appendChild(card);
  });
}

function setZone(id) {
  const now = Date.now();
  if (state.cooldowns.zoneMove > now) return UI.addLog('Zone change cooling down');
  const zone = GameData.zones.find(z => z.id === id);
  if (!zone) return;
  if (state.player.level < zone.levelReq || (!state.player.gateBossDefeated[id] && id !== 1)) return UI.addLog('Zone locked');
  state.current.zone = id;
  state.cooldowns.zoneMove = now + 20 * 60 * 1000;
  UI.addLog(`Moved to ${zone.name}`);
  render();
}

function startGateBoss(id) {
  const zone = GameData.zones.find(z => z.id === id);
  if (!zone) return;
  if (state.player.level < zone.levelReq) return UI.addLog('Level too low');
  state.current.zone = id;
  state.current.enemy = { name: zone.gateBoss, hp: 200 + id*40, maxHp: 200 + id*40, atk: 20+id*4, def: 10+id*3, type: 'gate' };
  UI.addLog(`Gate boss ${zone.gateBoss} appears!`);
  render();
}

function renderInventory() {
  const filterContainer = document.getElementById('inventoryFilters');
  const filters = ['All','Gear','Materials','Gems','Consumables'];
  if (!filterContainer.dataset.ready) {
    filters.forEach(f => {
      const btn = document.createElement('button');
      btn.textContent = f;
      btn.dataset.filter = f;
      btn.addEventListener('click', () => { filterContainer.dataset.active = f; document.querySelectorAll('#inventoryFilters button').forEach(b=>b.classList.toggle('active', b===btn)); renderInventory(); });
      filterContainer.appendChild(btn);
    });
    filterContainer.dataset.ready = true;
    filterContainer.dataset.active = 'All';
  }
  const active = filterContainer.dataset.active || 'All';
  document.querySelectorAll('#inventoryFilters button').forEach(b=>b.classList.toggle('active', b.dataset.filter===active));

  const list = document.getElementById('inventoryList');
  list.innerHTML = '';
  const items = [];
  if (active === 'All' || active === 'Gear') items.push(...state.inventory.gear.map(g => ({ type:'gear', data:g })));
  if (active === 'All' || active === 'Materials') items.push(...Object.entries(state.inventory.materials).map(([k,v]) => ({ type:'material', data:{ name:k, amount:v } })));
  if (active === 'All' || active === 'Gems') items.push(...Object.values(state.inventory.gems).map(g => ({ type:'gem', data:g })));
  if (active === 'All' || active === 'Consumables') items.push(...Object.entries(state.inventory.consumables).map(([k,v]) => ({ type:'consumable', data:{ name:k, amount:v } })));

  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'inventory-item';
    if (item.type === 'gear') {
      const g = item.data;
      div.innerHTML = `
        <div class="rarity-${g.rarity}">${g.name} [${g.slot}] (Tier ${g.tier})</div>
        <div class="tooltip">ATK ${g.stats.atk} DEF ${g.stats.def} CRIT ${g.stats.crit} HP ${g.stats.hp}</div>
        <div>Item ID: ${g.id}</div>
        <div>Sockets: ${g.sockets} Gems: ${(g.gems||[]).length}</div>
        <button data-sell="${g.id}">Sell</button>
      `;
      div.title = `${g.rarity.toUpperCase()} ${g.slot} (Tier ${g.tier})\nATK ${g.stats.atk} DEF ${g.stats.def} CRIT ${g.stats.crit} HP ${g.stats.hp}`;
    } else if (item.type === 'material') div.innerHTML = `${item.data.name}: x${item.data.amount}`;
    else if (item.type === 'gem') div.innerHTML = `Gem ${item.data.id} +ATK ${item.data.bonus.atk}`;
    else if (item.type === 'consumable') div.innerHTML = `${item.data.name}: x${item.data.amount}`;
    list.appendChild(div);
  });
  list.querySelectorAll('[data-sell]').forEach(btn => btn.addEventListener('click', () => Inventory.sellItem(btn.dataset.sell)));

  document.getElementById('sellAllBtn').onclick = () => Inventory.sellAll(active);
  document.getElementById('sellSelectedBtn').onclick = () => UI.addLog('Select an item by ID to sell via button.');

  renderFuseFilters();
}

function renderFuseFilters() {
  const container = document.getElementById('fuseFilters');
  if (!container.dataset.ready) {
    ['weapon','armor','helmet','boots','accessory'].forEach(slot => {
      const b = document.createElement('button'); b.textContent = slot; b.addEventListener('click', () => filterFuse(slot)); container.appendChild(b);
    });
    const tierSel = document.createElement('select');
    tierSel.innerHTML = '<option value="">Any Tier</option>' + Array.from({length:5}).map((_,i)=>`<option value="${i+1}">Tier ${i+1}</option>`).join('');
    const raritySel = document.createElement('select');
    raritySel.innerHTML = '<option value="">Any Rarity</option>' + GameData.rarities.map(r=>`<option value="${r.key}">${r.name}</option>`).join('');
    [tierSel, raritySel].forEach(sel => sel.addEventListener('change', () => filterFuse(undefined, tierSel.value, raritySel.value)));
    container.appendChild(tierSel);
    container.appendChild(raritySel);
    container.dataset.ready = true;
  }
}
function filterFuse(slot, tier, rarity) {
  const list = state.inventory.gear.filter(g => (!slot || g.slot === slot) && (!tier || g.tier === Number(tier)) && (!rarity || g.rarity === rarity));
  document.getElementById('fuseResult').textContent = list.map(g => `${g.id} Tier ${g.tier} ${g.rarity}`).join(', ');
}

function renderSkillTree() {
  const container = document.getElementById('skillTreeInfo');
  container.innerHTML = `<div>Skill Points: ${state.player.skillPoints}</div>`;
  SkillTreeSystem.branches.forEach(branch => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `<details open><summary>${branch}</summary><div class="skills"></div></details>`;
    const slot = wrapper.querySelector('.skills');
    const list = SkillTreeSystem.skills[branch].filter(s => !state.player.purchasedSkills.includes(s.id));
    list.forEach(skill => {
      const btn = document.createElement('button');
      btn.textContent = `${skill.name} (Cost ${skill.cost})`;
      btn.addEventListener('click', () => { SkillTreeSystem.purchase(skill.id); render(); });
      slot.appendChild(btn);
    });
    container.appendChild(wrapper);
  });
}

function renderLifeSkills() {
  const list = document.getElementById('lifeSkillList');
  list.innerHTML = '';
  GameData.lifeSkills.forEach(skill => {
    const info = state.lifeSkills?.[skill.id] || { level:1, xp:0 };
    const card = document.createElement('div');
    card.className = 'life-card';
    const cd = state.cooldowns.life[skill.id];
    const remaining = cd ? Math.max(0, cd - Date.now()) : 0;
    card.innerHTML = `
      <div>${skill.name} (Lv ${info.level})</div>
      <div>XP: ${info.xp}</div>
      <button ${remaining>0?'disabled':''}>Gather</button>
      <span>${remaining>0?Utils.formatTime(remaining/1000):''}</span>
    `;
    card.querySelector('button').addEventListener('click', () => { LifeSkillSystem.perform(skill.id); render(); });
    list.appendChild(card);
  });

  const epicList = document.getElementById('epicActionList');
  epicList.innerHTML = '';
  GameData.epicActions.forEach(action => {
    const cd = state.cooldowns.epic[action.id];
    const remaining = cd ? Math.max(0, cd - Date.now()) : 0;
    const card = document.createElement('div');
    card.className = 'life-card';
    card.innerHTML = `
      <div>${action.name}</div>
      <button ${remaining>0?'disabled':''}>Do</button>
      <span>${remaining>0?Utils.formatTime(remaining/1000):''}</span>
    `;
    card.querySelector('button').addEventListener('click', () => { LifeSkillSystem.performEpic(action.id); render(); });
    epicList.appendChild(card);
  });
}

function renderCrafting() {
  const list = document.getElementById('craftingList');
  list.innerHTML = '';
  GameData.recipes.forEach(recipe => {
    const known = Object.keys(recipe.requires).some(mat => (state.inventory.materials[mat]||0) > 0);
    if (!known) return;
    const card = document.createElement('div');
    card.className = 'life-card';
    card.innerHTML = `
      <div>${recipe.name}</div>
      <div>Requires: ${Object.entries(recipe.requires).map(([k,v])=>`${v} ${k}`).join(', ')}</div>
      <button>Craft</button>
    `;
    card.querySelector('button').addEventListener('click', () => { CraftingSystem.craft(recipe.id); render(); });
    list.appendChild(card);
  });
}

function renderDragons() {
  const eggsEl = document.getElementById('eggList');
  eggsEl.innerHTML = '<h4>Eggs</h4>';
  state.eggs.forEach(egg => {
    const ready = egg.battles >= egg.required;
    const div = document.createElement('div');
    div.className = 'life-card';
    div.innerHTML = `${egg.rarity} Egg T${egg.tier} Battles ${egg.battles}/${egg.required}
      <button ${!ready?'disabled':''}>Hatch</button>
      <button data-sell="${egg.id}">Sell Egg</button>`;
    div.querySelector('button').addEventListener('click', () => { DragonSystem.hatch(egg.id); render(); });
    div.querySelector('[data-sell]').addEventListener('click', () => { state.eggs = state.eggs.filter(e => e.id !== egg.id); UI.addLog('Egg sold.'); render(); });
    eggsEl.appendChild(div);
  });

  const dragonsEl = document.getElementById('dragonList');
  dragonsEl.innerHTML = '<h4>Dragons</h4>';
  state.dragons.forEach(d => {
    const div = document.createElement('div');
    div.className = 'life-card';
    div.innerHTML = `${d.name} T${d.tier} ATK ${d.stats.atk} HP ${d.stats.hp} Bonus ${Math.round(d.stats.bonus*100)}% (ID: ${d.id})`;
    dragonsEl.appendChild(div);
  });

  const breedBtn = document.getElementById('breedBtn');
  breedBtn.onclick = () => {
    const ids = document.getElementById('breedIds').value.split(',').map(s => s.trim()).filter(Boolean);
    DragonSystem.breed(ids);
    render();
  };
}

function renderShop() {
  const list = document.getElementById('shopList');
  list.innerHTML = '';
  GameData.shop.forEach(item => {
    const div = document.createElement('div');
    div.className = 'life-card';
    div.innerHTML = `${item.name} - ${item.price}g <button>Buy</button>`;
    div.querySelector('button').addEventListener('click', () => {
      if (state.player.gold < item.price) return UI.addLog('Need more gold');
      state.player.gold -= item.price;
      if (item.gives.consumable) Inventory.addConsumable(item.gives.consumable);
      if (item.gives.gem) Inventory.addGem({ id: Utils.uuid(), name:'Gem', bonus:{ atk:5 } });
      if (item.gives.egg) state.eggs.push({ id: Utils.uuid(), rarity:'Shop', tier:1, battles:0, required:10 });
      UI.addLog(`Bought ${item.name}`);
      render();
    });
    list.appendChild(div);
  });
}

function setupSettings() {
  document.getElementById('uiScale').value = state.settings.uiScale;
  document.getElementById('animToggle').value = state.settings.animations;
  document.getElementById('lootFilterMode').value = state.settings.lootFilter;
  document.getElementById('colorblindMode').value = state.settings.colorblind ? 'on' : 'off';
  ['uiScale','animToggle','lootFilterMode','colorblindMode'].forEach(id => {
    document.getElementById(id).addEventListener('change', () => {
      state.settings.uiScale = parseFloat(document.getElementById('uiScale').value);
      state.settings.animations = document.getElementById('animToggle').value;
      state.settings.lootFilter = document.getElementById('lootFilterMode').value;
      state.settings.colorblind = document.getElementById('colorblindMode').value === 'on';
      UI.applySettings();
      SaveSystem.save(state);
    });
  });
  UI.applySettings();
}

function bindCombatButtons() {
  document.getElementById('attackBtn').addEventListener('click', () => CombatSystem.playerAction('attack'));
  ['skill1Btn','skill2Btn','skill3Btn'].forEach((id, idx) => {
    document.getElementById(id).addEventListener('click', () => {
      const skill = GameData.skills[state.player.class][idx];
      CombatSystem.playerAction('skill', skill);
    });
  });
  document.getElementById('healBtn').addEventListener('click', () => CombatSystem.playerAction('heal'));
  document.getElementById('potionBtn').addEventListener('click', () => CombatSystem.playerAction('potion'));
  document.getElementById('huntBtn').addEventListener('click', () => { CombatSystem.startFight('hunt'); render(); });
  document.getElementById('adventureBtn').addEventListener('click', () => { CombatSystem.startFight('adventure'); render(); });
  document.getElementById('dungeonBtn').addEventListener('click', () => { CombatSystem.startDungeon(); });
  document.getElementById('minibossBtn').addEventListener('click', () => { CombatSystem.startFight('miniboss'); render(); });
  document.getElementById('bossBtn').addEventListener('click', () => { CombatSystem.startFight('boss'); render(); });
  document.getElementById('autoBattleBtn').addEventListener('click', () => CombatSystem.autoBattle());
  document.getElementById('exitDungeonBtn').addEventListener('click', () => { state.current.inDungeon = false; UI.addLog('Exited dungeon'); render(); });
}

function bindFusion() {
  document.getElementById('fuseBtn').addEventListener('click', () => {
    const a = document.getElementById('fuseIdA').value.trim();
    const b = document.getElementById('fuseIdB').value.trim();
    FusionSystem.fuse(a,b);
    render();
  });
}

function bindAscend() {
  const btn = document.getElementById('ascendBtn');
  btn.addEventListener('click', () => { AscensionSystem.ascend(); render(); });
}

function bindSockets() {
  document.getElementById('socketBtn').addEventListener('click', () => {
    const g = document.getElementById('socketGearId').value.trim();
    const gem = document.getElementById('socketGemId').value.trim();
    Inventory.socketGem(g, gem);
    render();
  });
  document.getElementById('removeGemBtn').addEventListener('click', () => {
    const g = document.getElementById('socketGearId').value.trim();
    Inventory.removeGem(g);
    render();
  });
}

function loadGame() {
  const saved = SaveSystem.load();
  const defaults = initialState();
  if (saved) {
    state = {
      ...defaults,
      ...saved,
      player: { ...defaults.player, ...saved.player },
      settings: { ...defaults.settings, ...saved.settings },
      inventory: { ...defaults.inventory, ...saved.inventory },
      cooldowns: { ...defaults.cooldowns, ...saved.cooldowns },
      current: { ...defaults.current, ...saved.current },
      lifeSkills: saved.lifeSkills || {},
      eggs: saved.eggs || [],
      dragons: saved.dragons || [],
    };
  } else state = defaults;
  Player.refreshStats();
  setupSettings();
  UI.applySettings();
  render();
}

function persistLoop() {
  SaveSystem.save(state);
  requestAnimationFrame(persistLoop);
}

function tick() {
  renderCooldowns();
  requestAnimationFrame(tick);
}

function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(()=>{});
  }
}

function init() {
  loadGame();
  bindCombatButtons();
  bindFusion();
  bindAscend();
  bindSockets();
  registerSW();
  UI.buildMobileBar();
  UI.buildMobileNav();
  UI.updateOrientation();
  render();
  persistLoop();
  tick();
}

document.addEventListener('DOMContentLoaded', init);
