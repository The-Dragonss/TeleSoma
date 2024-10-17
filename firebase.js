/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7a3zim7pBrneSqlxqHFsB61WGw6IWCpM",
  authDomain: "telosoma-47a43.firebaseapp.com",
  projectId: "telosoma-47a43",
  storageBucket: "telosoma-47a43.appspot.com",
  messagingSenderId: "579115193458",
  appId: "1:579115193458:web:c0afeed5fea81b95bd5eeb",
  measurementId: "G-47EM4N8XC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);

export { app, auth };