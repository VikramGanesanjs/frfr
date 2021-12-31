import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAtseOPtQd7zwADzDS2q0rLbu9zFtp64bo",
    authDomain: "remindr-app-aa98f.firebaseapp.com",
    projectId: "remindr-app-aa98f",
    storageBucket: "remindr-app-aa98f.appspot.com",
    messagingSenderId: "412615210255",
    appId: "1:412615210255:web:c2177bc8618501f3087a7a",
    measurementId: "G-W44FBM9574"
  };

const Firebase = firebase.initializeApp(firebaseConfig);

const auth = getAuth(Firebase);

const db = getFirestore(Firebase);

const provider = new GoogleAuthProvider();



export {Firebase, auth, db, provider};