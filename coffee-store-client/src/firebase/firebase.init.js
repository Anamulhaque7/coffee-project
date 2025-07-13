
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjs6NHgK4Juq7q582jU37cG9bvv5x4UwA",
    authDomain: "coffee-store-3a45c.firebaseapp.com",
    projectId: "coffee-store-3a45c",
    storageBucket: "coffee-store-3a45c.firebasestorage.app",
    messagingSenderId: "825772602808",
    appId: "1:825772602808:web:4a56d99d7144259b634b4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
