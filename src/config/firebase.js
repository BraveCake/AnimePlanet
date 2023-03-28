// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATJ8JavAAIPgsehq5Z87MPoAweXHqWhPU",
  authDomain: "animeplanet-320f2.firebaseapp.com",
  projectId: "animeplanet-320f2",
  storageBucket: "animeplanet-320f2.appspot.com",
  messagingSenderId: "122871725136",
  appId: "1:122871725136:web:63168825d235e228526555",
  measurementId: "G-HHSDR09F5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//app.firestore().settings({timestampsInSnapshots:true});
const analytics = getAnalytics(app);
const db = getFirestore(app);
export const auth = getAuth(app);
export default db;