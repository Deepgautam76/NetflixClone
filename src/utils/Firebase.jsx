// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8d2-yDb2i6z9kMSrles_IwtZvDqPV4nE",
  authDomain: "netflixclone-eee64.firebaseapp.com",
  projectId: "netflixclone-eee64",
  storageBucket: "netflixclone-eee64.firebasestorage.app",
  messagingSenderId: "961295268959",
  appId: "1:961295268959:web:d97001b68d1d9d4d102fea",
  measurementId: "G-G2Z79RGNYN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
