import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0tjfiiE-I9ht_WN4_U1BRNs99sUrimkE",
  authDomain: "ocean-15de6.firebaseapp.com",
  projectId: "ocean-15de6",
  storageBucket: "ocean-15de6.appspot.com",
  messagingSenderId: "929731375786",
  appId: "1:929731375786:web:b0eced43afb80b145bd6d3",
  measurementId: "G-TDHFE8J4W6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);