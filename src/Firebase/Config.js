import { initializeApp } from "firebase/app";
import {getAuth} from"firebase/auth";
import { getFirestore } from "firebase/firestore" 

const firebaseConfig = {
  apiKey: "AIzaSyCO9Y2MP2VPXxVWtNLV9v_q-s5HMUWireM",
  authDomain: "e-commerce-63d9f.firebaseapp.com",
  projectId: "e-commerce-63d9f",
  storageBucket: "e-commerce-63d9f.appspot.com",
  messagingSenderId: "213537909934",
  appId: "1:213537909934:web:97de89bcd9b6b4180cd13f"
};


const app = initializeApp(firebaseConfig);
 export const auth=getAuth(app);
 export const db=getFirestore(app);