// js/data/classes.js

const CLASSES = [
  {
    id: "bard",
    name: "Bard",
    weapons: "Any",
    shields: "Up to Medium",
    armor: "Up to Medium",
    mana: 0,
    notes: [
      "Uses performances for buffs",
      "Starts with one +2 favor token"
    ],
    restrictions: []
  },
  {
    id: "cleric",
    name: "Cleric",
    weapons: "Any",
    shields: "Up to Medium",
    armor: "Up to Medium",
    mana: 30,
    manaRegen: "1 mana per minute meditating in town",
    notes: [
      "Divine magic user",
      "Cannot select Necromancy if cross-classing Mage"
    ],
    restrictions: [
      {
        type: "forbiddenSchool",
        value: "necromancy"
      }
    ]
  },
  {
    id: "mage",
    name: "Mage",
    weapons: "Any",
    shields: "None",
    armor: "Up to Light",
    mana: 30,
    manaRegen: "1 mana per minute meditating in town",
    notes: [
      "Spell orbs bypass armor and shields",
      "Must track mana using mana bands"
    ],
    restrictions: [
      {
        type: "exclusiveWith",
        value: "cleric",
        condition: "necromancy"
      }
    ]
  },
  {
    id: "rogue",
    name: "Rogue",
    weapons: "Any",
    shields: "Up to Small",
    armor: "Up to Medium",
    mana: 0,
    notes: [
      "Specializes in traps, stealth, and mobility"
    ],
    restrictions: []
  },
  {
    id: "warrior",
    name: "Warrior",
    weapons: "Any",
    shields: "Any",
    armor: "Any",
    mana: 0,
    notes: [
      "High survivability",
      "Chooses Heroic or Terrifying Presence"
    ],
    restrictions: []
  }
];

// Make available globally
window.CLASSES = CLASSES;

