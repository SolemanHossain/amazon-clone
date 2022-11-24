// For Firebase JS SDK v7.20.0 and later, measurementId is option
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0_3c2vklCupnDHbtKrnLJc-L6TGa-25I",
  authDomain: "challenge-41fbc.firebaseapp.com",
  projectId: "challenge-41fbc",
  storageBucket: "challenge-41fbc.appspot.com",
  messagingSenderId: "500124654637",
  appId: "1:500124654637:web:f87991378514cc48812ca4",
  measurementId: "G-E2VHQC8VMQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
