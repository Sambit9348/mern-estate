// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d2964.firebaseapp.com",
  projectId: "mern-estate-d2964",
  storageBucket: "mern-estate-d2964.firebasestorage.app",
  messagingSenderId: "199684502846",
  appId: "1:199684502846:web:17e527d923cf337d7ee86f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);