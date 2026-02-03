import { auth, db } from "./firebase/firebase.js";
import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import {
  collection,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const authStatus = document.getElementById("authStatus");
const charactersDiv = document.getElementById("characters");

onAuthStateChanged(auth, async user => {
  if (!user) {
    authStatus.innerHTML = "Not logged in.";
    charactersDiv.innerHTML = "Please log in.";
    return;
  }

  authStatus.innerHTML = `Logged in as ${user.email}`;

  const q = query(
    collection(db, "characters"),
    where("ownerId", "==", user.uid)
  );

  const snap = await getDocs(q);

  if (snap.empty) {
    charactersDiv.innerHTML = "No characters yet.";
    return;
  }

  charactersDiv.innerHTML = snap.docs.map(doc => {
    const c = doc.data();
    return `
      <div style="border:1px solid #ccc; padding:8px; margin-bottom:8px;">
        <strong>${c.name || "Unnamed Character"}</strong><br />
        Status: ${c.locked ? "Locked" : "Unlocked"}
      </div>
    `;
  }).join("");
});
