// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuIi1vy3wNzYZ7_jX9ZvIRR0z4j2e_JZY",
  authDomain: "netflixgpt-14434.firebaseapp.com",
  projectId: "netflixgpt-14434",
  storageBucket: "netflixgpt-14434.appspot.com",
  messagingSenderId: "584554256404",
  appId: "1:584554256404:web:1e182caf7e5aec8f8cef01",
  measurementId: "G-LDEQCG7MQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();