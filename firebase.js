// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
    authDomain: "tech-blog-ab05b.firebaseapp.com",
    projectId: "tech-blog-ab05b",
    storageBucket: "tech-blog-ab05b.appspot.com",
    messagingSenderId: "512157070058",
    appId: "1:512157070058:web:80c75f2d1db28d9754dd93",
    measurementId: "G-KB974LPDPB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);