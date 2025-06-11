// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "cheforumreal.firebaseapp.com",
  projectId: "cheforumreal",
  storageBucket: "cheforumreal.appspot.com",
  messagingSenderId: "441077080510",
  appId: "1:441077080510:web:6df2e74dfdb214e17bd9ef",
  measurementId: "G-HCCPEMB9D7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
