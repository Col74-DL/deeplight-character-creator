// js/data/abilities.js

const ABILITIES = [

  /* ======================
     GENERAL / SYSTEM
  ====================== */

  {
    id: "cross_class",
    name: "Cross-Class",
    class: "general",
    xp: 20,
    prerequisites: [],
    notes: [
      "Allows selection of a secondary class",
      "Secondary class abilities cost double XP",
      "Does not grant additional mana"
    ]
  },

  /* ======================
     BARD
  ====================== */

  {
    id: "bard_blast",
    name: "Blast",
    class: "bard",
    xp: 5,
    prerequisites: [],
    type: "buff"
  },
  {
    id: "bard_toughen",
    name: "Toughen",
    class: "bard",
    xp: 10,
    prerequisites: ["bard_blast"],
    type: "buff"
  },
  {
    id: "bard_adagio",
    name: "Adagio",
    class: "bard",
    xp: 15,
    prerequisites: ["bard_toughen"],
    type: "buff"
  },
  {
    id: "bard_inspire",
    name: "Inspire",
    class: "bard",
    xp: 20,
    prerequisites: ["bard_adagio"],
    type: "buff"
  },

  /* ======================
     CLERIC
  ====================== */

  {
    id: "cleric_heal",
    name: "Heal",
    class: "cleric",
    xp: 5,
    manaCost: 3,
    prerequisites: []
  },
  {
    id: "cleric_regenerate",
    name: "Regenerate",
    class: "cleric",
    xp: 10,
    manaCost: 6,
    prerequisites: ["cleric_heal"]
  },
  {
    id: "cleric_divine_barrier",
    name: "Divine Barrier",
    class: "cleric",
    xp: 15,
    manaCost: 12,
    prerequisites: ["cleric_regenerate"]
  },
  {
    id: "cleric_resurrection",
    name: "Resurrection",
    class: "cleric",
    xp: 20,
    manaCost: 0,
    prerequisites: ["cleric_divine_barrier"]
  },

  /* ======================
     MAGE — CRYOMANCY
  ====================== */

  {
    id: "cryomancy_freeze",
    name: "Freeze",
    class: "mage",
    school: "cryomancy",
    xp: 5,
    manaCost: 3,
    prerequisites: []
  },
  {
    id: "cryomancy_ice_orb",
    name: "Ice Orb",
    class: "mage",
    school: "cryomancy",
    xp: 10,
    manaCost: 6,
    prerequisites: ["cryomancy_freeze"]
  },
  {
    id: "cryomancy_frost_blast",
    name: "Frost Blast",
    class: "mage",
    school: "cryomancy",
    xp: 15,
    manaCost: 9,
    prerequisites: ["cryomancy_ice_orb"]
  },
  {
    id: "cryomancy_blizzard",
    name: "Blizzard",
    class: "mage",
    school: "cryomancy",
    xp: 20,
    manaCost: 12,
    prerequisites: ["cryomancy_frost_blast"]
  },

  /* ======================
     MAGE — NECROMANCY
  ====================== */

  {
    id: "necromancy_blood_magic",
    name: "Blood Magic",
    class: "mage",
    school: "necromancy",
    xp: 5,
    manaCost: 0,
    prerequisites: []
  },
  {
    id: "necromancy_absorb_inflict",
    name: "Absorb / Inflict Wound",
    class: "mage",
    school: "necromancy",
    xp: 10,
    manaCost: 6,
    prerequisites: ["necromancy_blood_magic"]
  },
  {
    id: "necromancy_soul_lock",
    name: "Soul Lock",
    class: "mage",
    school: "necromancy",
    xp: 15,
    manaCost: 9,
    prerequisites: ["necromancy_absorb_inflict"]
  },
  {
    id: "necromancy_death_orb",
    name: "Death Orb",
    class: "mage",
    school: "necromancy",
    xp: 20,
    manaCost: 12,
    prerequisites: ["necromancy_soul_lock"]
  },

  /* ======================
     ROGUE
  ====================== */

  {
    id: "rogue_dirty_fighting",
    name: "Dirty Fighting",
    class: "rogue",
    xp: 3,
    prerequisites: []
  },
  {
    id: "rogue_dodge",
    name: "Dodge",
    class: "rogue",
    xp: 5,
    prerequisites: []
  },
  {
    id: "rogue_misdirection",
    name: "Misdirection",
    class: "rogue",
    xp: 10,
    prerequisites: []
  },
  {
    id: "rogue_traps",
    name: "Traps",
    class: "rogue",
    xp: 15,
    prerequisites: ["rogue_misdirection"]
  },
  {
    id: "rogue_pierce",
    name: "Pierce",
    class: "rogue",
    xp: 20,
    prerequisites: ["rogue_traps"]
  },

  /* ======================
     WARRIOR
  ====================== */

  {
    id: "warrior_toughness",
    name: "Toughness",
    class: "warrior",
    xp: 3,
    prerequisites: []
  },
  {
    id: "warrior_ultimate_toughness",
    name: "Ultimate Toughness",
    class: "warrior",
    xp: 5,
    prerequisites: ["warrior_toughness"]
  },
  {
    id: "warrior_shield_mastery",
    name: "Shield Mastery",
    class: "warrior",
    xp: 5,
    prerequisites: []
  },
  {
    id: "warrior_cleave",
    name: "Cleave",
    class: "warrior",
    xp: 10,
    prerequisites: []
  },
  {
    id: "warrior_sentinel",
    name: "Sentinel",
    class: "warrior",
    xp: 10,
    prerequisites: []
  },
  {
    id: "warrior_hold_the_line",
    name: "Hold the Line",
    class: "warrior",
    xp: 15,
    prerequisites: []
  },
  {
    id: "warrior_last_stand",
    name: "Last Stand",
    class: "warrior",
    xp: 20,
    prerequisites: []
  }

];

// Make available globally
window.ABILITIES = ABILITIES;

