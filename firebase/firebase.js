import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

export const app = initializeApp({
  apiKey: "AIzaSyB4Cp5bqZXhS8W28o7-sFQtHH99hkhK25s",
  authDomain: "deeplight-442b8.firebaseapp.com",
  projectId: "deeplight-442b8"
});

export const auth = getAuth(app);
export const db = getFirestore(app);
