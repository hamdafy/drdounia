import firebase from 'firebase/compat/app';
import  'firebase/compat/database'
import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";


const firebaseConfig = {

    apiKey: "AIzaSyDqj5mEyow4w5I8B-rz5SlOiG-kRjvLMDg",
  
    authDomain: "patientapp-84400.firebaseapp.com",
  
    projectId: "patientapp-84400",
  
    storageBucket: "patientapp-84400.appspot.com",
  
    messagingSenderId: "954245319515",
  
    appId: "1:954245319515:web:a72812072c54986dfce87e",
    databaseURL:" https://patientapp-84400-default-rtdb.europe-west1.firebasedatabase.app"
  
  };
  
  
  
  const firebaseDB = firebase.initializeApp(firebaseConfig)
  export default firebaseDB.database().ref();

  ///
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
