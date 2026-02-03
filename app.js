console.log("App JS loaded, Firebase auth:", auth);
import { auth, db } from "./firebase/firebase.js";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import {
  collection,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const loginBox = document.getElementById("loginBox");
const appDiv = document.getElementById("app");
const authStatus = document.getElementById("authStatus");
const charactersDiv = document.getElementById("characters");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

document.getElementById("loginBtn").onclick = async () => {
  await signInWithEmailAndPassword(
    auth,
    emailInput.value,
    passwordInput.value
  );
};

document.getElementById("registerBtn").onclick = async () => {
  await createUserWithEmailAndPassword(
    auth,
    emailInput.value,
    passwordInput.value
  );
};

document.getElementById("logoutBtn").onclick = () => {
  signOut(auth);
};

onAuthStateChanged(auth, async user => {
  if (!user) {
    loginBox.style.display = "block";
    appDiv.style.display = "none";
    return;
  }

  loginBox.style.display = "none";
  appDiv.style.display = "block";
  authStatus.innerText = `Logged in as ${user.email}`;

  const q = query(
    collection(db, "characters"),
    where("ownerId", "==", user.uid)
  );

  const snap = await getDocs(q);

  if (snap.empty) {
    charactersDiv.innerText = "No characters yet.";
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
