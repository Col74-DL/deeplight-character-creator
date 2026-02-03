// js/data/races.js

const RACES = [
  {
    id: "human",
    name: "Human",
    description: "Versatile and resilient. Humans are culturally diverse and adaptable.",
    cosmeticRequirements: [],
    notes: []
  },
  {
    id: "beastfolk",
    name: "Beastfolk",
    description: "Humanoids with animal traits such as ears, tails, or feathers.",
    cosmeticRequirements: [
      "Animal ears, tail, mask, or equivalent costuming"
    ],
    notes: [
      "Clan-based society",
      "Strong connection to nature"
    ]
  },
  {
    id: "celestial",
    name: "Celestial",
    description: "Divine beings focused on righteousness and cosmic balance.",
    cosmeticRequirements: [
      "Brightly colored contacts or mystical appearance features"
    ],
    notes: [
      "Strong moral code",
      "Often opposed to dark magic"
    ]
  },
  {
    id: "dwarf",
    name: "Dwarf",
    description: "Master craftsmen and miners with strong clan loyalties.",
    cosmeticRequirements: [
      "Beard strongly encouraged"
    ],
    notes: [
      "Clan-based society",
      "Renowned metalworkers"
    ]
  },
  {
    id: "elf",
    name: "Elf",
    description: "Nature-aligned and magically gifted with a strict honor code.",
    cosmeticRequirements: [
      "Pointed ear prosthetics"
    ],
    notes: [
      "Highly educated society",
      "Strong magical tradition"
    ]
  },
  {
    id: "fae",
    name: "Fae",
    description: "Magical beings tied to nature and the spirit world.",
    cosmeticRequirements: [
      "Pointed ears, wings, or fairy prosthetics"
    ],
    notes: [
      "Artistic culture",
      "Capricious and unpredictable"
    ]
  },
  {
    id: "gnome",
    name: "Gnome",
    description: "Inventors and engineers specializing in clockwork and steam.",
    cosmeticRequirements: [
      "Steampunk or mechanical aesthetic encouraged"
    ],
    notes: [
      "Guild-based society",
      "Innovative but risky inventions"
    ]
  },
  {
    id: "orc",
    name: "Orc",
    description: "Fierce warriors with a strong emphasis on honor and strength.",
    cosmeticRequirements: [
      "Mask or prosthetics to alter appearance"
    ],
    notes: [
      "Hierarchical tribal structure",
      "Strong family bonds"
    ]
  }
];

// Make available globally
window.RACES = RACES;
