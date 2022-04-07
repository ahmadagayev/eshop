import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBqbpbM72Fn-NplhX0w_dbuvl-kyLIVqlY",
  authDomain: "eshop-dbb65.firebaseapp.com",
  projectId: "eshop-dbb65",
  storageBucket: "eshop-dbb65.appspot.com",
  messagingSenderId: "420922213800",
  appId: "1:420922213800:web:e39b177ffd52d552c4499d",
  measurementId: "G-YE1RPF8X7R",
};

const app = initializeApp(firebaseConfig);

// const db = app.firestore();

const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
