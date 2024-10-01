import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDTRBxWi2jlrcn6JrOEKfRqatfmsTjeZs",
  authDomain: "clone-68f3e.firebaseapp.com",
  projectId: "clone-68f3e",
  storageBucket: "clone-68f3e.appspot.com",
  messagingSenderId: "746149062523",
  appId: "1:746149062523:web:7e3861bf921d429dbdbfde",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
