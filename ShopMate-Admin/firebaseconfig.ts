import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, } from "firebase/firestore";

const firebaseConfig = {
  databaseURL: "https://shopmate-7a2df.firebaseio.com",
  apiKey: "AIzaSyD8ZtC4RKbYi2GK6JVUekFQVrbqMFIETGk",
  authDomain: "shopmate-7a2df.firebaseapp.com",
  projectId: "shopmate-7a2df",
  storageBucket: "shopmate-7a2df.appspot.com",
  messagingSenderId: "833104935287",
  appId: "1:833104935287:web:2347da17e3cb755914c972",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUth = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
