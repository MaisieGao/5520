// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyCNCA9OuYQ7Asr7NGJU8cppY6x6fpfupAo",

  authDomain: "project-7513030937156699122.firebaseapp.com",

  projectId: "project-7513030937156699122",

  storageBucket: "project-7513030937156699122.appspot.com",

  messagingSenderId: "944718223500",

  appId: "1:944718223500:web:7fd61f17cc3957ba8143a9"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
