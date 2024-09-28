// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEqyJb3K0zPr-MsFLmcLg4T4W1A3z-L0A",
  authDomain: "nutribuddy-d5816.firebaseapp.com",
  projectId: "nutribuddy-d5816",
  storageBucket: "nutribuddy-d5816.appspot.com",
  messagingSenderId: "729635431830",
  appId: "1:729635431830:web:4ddbc4ff2d1569c96729b7",
  measurementId: "G-SSE5Y5PXP2"
};

// Initialize Firebase
if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}

export { firebase };
 