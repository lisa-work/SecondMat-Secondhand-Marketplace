// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "firstproject-d8cc7.firebaseapp.com",
  databaseURL: "https://firstproject-d8cc7-default-rtdb.firebaseio.com",
  projectId: "firstproject-d8cc7",
  storageBucket: "firstproject-d8cc7.firebasestorage.app",
  messagingSenderId: "413018484587",
  appId: "1:413018484587:web:2ca3d3d03dc6efbdea662e",
  measurementId: "G-JB0B3CXTW2"
};

// const appCheck = initializeAppCheck(app, {
//   provider: new ReCaptchaV3Provider('6LcDkiQrAAAAADnfTsAOWPvECE6bJWR6uuWFFuyu'),

//   // Optional argument. If true, the SDK automatically refreshes App Check
//   // tokens as needed.
//   isTokenAutoRefreshEnabled: true
// });

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);