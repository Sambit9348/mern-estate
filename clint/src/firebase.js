// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d8905.firebaseapp.com",
  projectId: "mern-estate-d8905",
  storageBucket: "mern-estate-d8905.firebasestorage.app",
  messagingSenderId: "326591161413",
  appId: "1:326591161413:web:663375c5faa2b34a0caf2c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);