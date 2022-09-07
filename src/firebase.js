// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbBw4oXQfFfAtki2W_AZrnFIloBjdr7Mo",
    authDomain: "rockets-f0c2f.firebaseapp.com",
    projectId: "rockets-f0c2f",
    storageBucket: "rockets-f0c2f.appspot.com",
    messagingSenderId: "790801899543",
    appId: "1:790801899543:web:409401abfec451382d7c52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
