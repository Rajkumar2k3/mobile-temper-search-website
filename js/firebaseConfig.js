// /js/firebaseConfig.js
// Import and configure Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyA5VajyHBI5RVo81JT-6FJy26-SMPYe7Hw",
  authDomain: "mobile-temper-search-website.firebaseapp.com",
  projectId: "mobile-temper-search-website",
  storageBucket: "mobile-temper-search-website.appspot.com",
  messagingSenderId: "1019091652555",
  appId: "1:1019091652555:web:d0ef595c5aea6911fbf04e",
  measurementId: "G-362DYDS650"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
