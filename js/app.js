// js/app.js

const STARTING_XP = 15;

let state = {
  xpRemaining: STARTING_XP,
  race: null,
  class: null,
  abilities: []
};

/* ======================
   INITIALIZE
====================== */

document.addEventListener("DOMContentLoaded", () => {
  populateRaces();
  populateClasses();
  updateXP();
  renderAbilities();

  document.getElementById("raceSelect").addEventListener("change", onRaceChange);
  document.getElementById("classSelect").addEventListener("change", onClassChange);
  document.getElementById("exportBtn").addEventListener("click", exportCharacter);
});

/* ======================
   POPULATORS
====================== */

function populateRaces() {
  const select = document.getElementById("raceSelect");
  RACES.forEach(r => {
    const opt = document.createElement("option");
    opt.value = r.id;
    opt.textContent = r.name;
    select.appendChild(opt);
  });
}

function populateClasses() {
  const select = document.getElementById("classSelect");
  CLASSES.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c.id;
    opt.textContent = c.name;
    select.appendChild(opt);
  });
}

/* ======================
   HANDLERS
====================== */

function onRaceChange(e) {
  state.race = e.target.value;
  const race = RACES.find(r => r.id === state.race);
  document.getElementById("raceInfo").textContent =
    race ? race.description : "";
}

function onClassChange(e) {
  state.class = e.target.value;
  state.abilities = [];
  state.xpRemaining = STARTING_XP;
  updateXP();
  renderAbilities();

  const cls = CLASSES.find(c => c.id === state.class);
  document.getElementById("classInfo").innerHTML = cls
    ? `
      Weapons: ${cls.weapons}<br>
      Armor: ${cls.armor}<br>
      Shields: ${cls.shields}<br>
      Mana: ${cls.mana}
    `
    : "";
}

/* ======================
   ABILITIES
====================== */

function renderAbilities() {
  const container = document.getElementById("abilitiesContainer");
  container.innerHTML = "";

  if (!state.class) return;

  const available = ABILITIES.filter(a =>
    a.class === state.class || a.class === "general"
  );

  available.forEach(ability => {
    const div = document.createElement("div");
    div.className = "ability";

    const owned = state.abilities.includes(ability.id);
    const prereqsMet = ability.prerequisites.every(p =>
      state.abilities.includes(p)
    );

    const canBuy =
      !owned &&
      prereqsMet &&
      state.xpRemaining >= ability.xp &&
      !violatesRules(ability);

    if (!canBuy && !owned) div.classList.add("disabled");

    div.innerHTML = `
      <strong>${ability.name}</strong><br>
      XP Cost: ${ability.xp}${ability.manaCost ? " | Mana: " + ability.manaCost : ""}
    `;

    const btn = document.createElement("button");
    btn.textContent = owned ? "Purchased" : "Purchase";
    btn.disabled = !canBuy;
    btn.onclick = () => purchaseAbility(ability);

    div.appendChild(btn);
    container.appendChild(div);
  });
}

function purchaseAbility(ability) {
  state.abilities.push(ability.id);
  state.xpRemaining -= ability.xp;
  updateXP();
  renderAbilities();
}

/* ======================
   RULE CHECKS
====================== */

function violatesRules(ability) {
  const errors = [];

  // Cleric + Necromancy conflict
  if (
    state.class === "cleric" &&
    ability.school === "necromancy"
  ) {
    errors.push("Clerics cannot learn Necromancy.");
  }

  document.getElementById("errors").innerHTML = errors.join("<br>");
  return errors.length > 0;
}

/* ======================
   UI HELPERS
====================== */

function updateXP() {
  document.getElementById("xpRemaining").textContent = state.xpRemaining;
}

/* ======================
   EXPORT
====================== */

function exportCharacter() {
  const data = {
    race: state.race,
    class: state.class,
    abilities: state.abilities,
    xpRemaining: state.xpRemaining
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json"
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "character.json";
  a.click();
}
