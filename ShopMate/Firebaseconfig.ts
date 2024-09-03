// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    databaseURL: "https://shopmate-7a2df.firebaseio.com",
    apiKey: "AIzaSyD8ZtC4RKbYi2GK6JVUekFQVrbqMFIETGk",
    authDomain: "shopmate-7a2df.firebaseapp.com",
    projectId: "shopmate-7a2df",
    storageBucket: "shopmate-7a2df.appspot.com",
    messagingSenderId: "833104935287",
    appId: "1:833104935287:web:2347da17e3cb755914c972"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);