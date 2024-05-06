// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMfk9pxmzj7TmtIiE8a5AuMlczXCBtMaM",
    authDomain: "it-sysarch32-store-mendoza.firebaseapp.com",
    projectId: "it-sysarch32-store-mendoza",
    storageBucket: "it-sysarch32-store-mendoza.appspot.com",
    messagingSenderId: "239853650594",
    appId: "1:239853650594:web:00b440b42723fd9ae60dfb",
    measurementId: "G-GFLPQ0683J"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }