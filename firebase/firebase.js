import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB7Cls-grBkkvELaZ4ywVRpXTYbJI-HsqE",
    authDomain: "todo-da5e5.firebaseapp.com",
    projectId: "todo-da5e5",
    storageBucket: "todo-da5e5.appspot.com",
    messagingSenderId: "1063495774003",
    appId: "1:1063495774003:web:156f065b0d58b53a071846"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
