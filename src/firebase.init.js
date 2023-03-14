// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwtmXOOtft2vjRB5CSaGla5FNqG0N4OR8",
  authDomain: "jsf-090323.firebaseapp.com",
  projectId: "jsf-090323",
  storageBucket: "jsf-090323.appspot.com",
  messagingSenderId: "551411008120",
  appId: "1:551411008120:web:79f2c092aeead7af5ea38d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
