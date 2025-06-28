// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIsCAUW5oJVMLWKizkg1L62tunZINhYVI",
  authDomain: "dineeasy-c08bc.firebaseapp.com",
  projectId: "dineeasy-c08bc",
  storageBucket: "dineeasy-c08bc.firebasestorage.app",
  messagingSenderId: "300409411689",
  appId: "1:300409411689:web:77da12e3562299a08baaf8",
  measurementId: "G-YLM2XZQ5MV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);