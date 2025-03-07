// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa-sS55ofsmlhGnZKdXBkLpCmphxUmUI0",
  authDomain: "blogging-app-ed2f0.firebaseapp.com",
  projectId: "blogging-app-ed2f0",
  storageBucket: "blogging-app-ed2f0.firebasestorage.app",
  messagingSenderId: "660595628039",
  appId: "1:660595628039:web:4ef52fc649a669f86832a2",
  measurementId: "G-EQ49D3R71V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };