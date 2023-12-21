// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEsIAIkitq1fB9mwr22JTMmvrdFy4aoHA",
  authDomain: "login-with-facebook-b1256.firebaseapp.com",
  projectId: "login-with-facebook-b1256",
  storageBucket: "login-with-facebook-b1256.appspot.com",
  messagingSenderId: "598924495623",
  appId: "1:598924495623:web:84789bd1bc2d2766c193a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)