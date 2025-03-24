// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4adp9XF5T-yhfzOwhzIGyYjmAOQXb-QU",
  authDomain: "householdtypescript-2e90a.firebaseapp.com",
  projectId: "householdtypescript-2e90a",
  storageBucket: "householdtypescript-2e90a.firebasestorage.app",
  messagingSenderId: "131582061542",
  appId: "1:131582061542:web:3be8853bfc9ee3a7094427"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };