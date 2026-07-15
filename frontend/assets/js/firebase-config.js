// Firebase SDK v9+ modular approach
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtQjM0eixdAxQ4Ro2v3NYvgYXliZk-Bmk",
  authDomain: "fractionorsprain.firebaseapp.com",
  projectId: "fractionorsprain",
  storageBucket: "fractionorsprain.firebasestorage.app",
  messagingSenderId: "463496609871",
  appId: "1:463496609871:web:a365d974b288e45599ea3a",
  measurementId: "G-HE4F4364DH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Export for use in other files
export { auth, db, analytics, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, doc, setDoc, getDoc };
