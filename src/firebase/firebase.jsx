// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// If you are using analytics, import it:
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9Esp41A5NUva3YVrPc0ehTi_NDFA8QaI",
    authDomain: "clothing-website-5cb14.firebaseapp.com",
    projectId: "clothing-website-5cb14",
    storageBucket: "clothing-website-5cb14.firebasestorage.app",
    messagingSenderId: "332024581099",
    appId: "1:332024581099:web:3a1ceec07683df5675e7ae",
    measurementId: "G-5FLCJFRWPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Uncomment if you're using analytics
// const analytics = getAnalytics(app);

// Exporting Firebase features
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
