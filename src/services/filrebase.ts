// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1wypX2WZ3xeX1HJlUzj4tQryxeHtgKa0",
  authDomain: "coffee-shop-70db6.firebaseapp.com",
  projectId: "coffee-shop-70db6",
  storageBucket: "coffee-shop-70db6.appspot.com",
  messagingSenderId: "948161705958",
  appId: "1:948161705958:web:557b057c0511d78bbc0827"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db};
