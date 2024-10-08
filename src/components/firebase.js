// src/components/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyD5RuVA9_1ba7wLVEbs7KFDcc1ThdjlkBU",
  authDomain: "junction-family-hospital.firebaseapp.com",
  projectId: "junction-family-hospital",
  storageBucket: "junction-family-hospital.appspot.com",
  messagingSenderId: "852503168452",
  appId: "1:852503168452:web:995fe7c1ae3cb970d8d091",
  measurementId: "G-D0633YN1GK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics (optional)
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Export the Firestore database for use in other parts of your app
export { db };
