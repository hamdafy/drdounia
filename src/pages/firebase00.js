
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCwKg7rW4uHiqQImL23LWXK6FU8NiDBZlA",

  authDomain: "isamilapp.firebaseapp.com",

  projectId: "isamilapp",

  storageBucket: "isamilapp.appspot.com",

  messagingSenderId: "949997516546",

  appId: "1:949997516546:web:d78822723dc0b3e9e1f41b",

  measurementId: "G-48FTG7L76C"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;