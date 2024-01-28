// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "farida-testing.firebaseapp.com",
  projectId: "farida-testing",
  storageBucket: "farida-testing.appspot.com",
  messagingSenderId: "84301089480",
  appId: "1:84301089480:web:93cf0b8b4546e01c6e73fd",
  measurementId: "G-HGKN7ZB27H",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
