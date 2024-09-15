// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7_3aXyDvl8APYN4PxFTEGrnpyNPL-GxA",
  authDomain: "portfolio-8f15c.firebaseapp.com",
  projectId: "portfolio-8f15c",
  storageBucket: "portfolio-8f15c.appspot.com",
  messagingSenderId: "815589664262",
  appId: "1:815589664262:web:777b5a0801896929c4c587",
  measurementId: "G-4QSH4E2JTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);