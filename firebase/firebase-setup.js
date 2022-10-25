// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {  getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDM4duh7k7tJ3gXvSn-jR2B3wFqAKXVQUA",
    authDomain: "assignment2-97bf0.firebaseapp.com",
    projectId: "assignment2-97bf0",
    storageBucket: "assignment2-97bf0.appspot.com",
    messagingSenderId: "732626343353",
    appId: "1:732626343353:web:091df1cc0f16a3093b9268",

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
console.log(app)
export const firestore = getFirestore(app);

//collection->document->data
//collections can't be nested
//document can't put into document
//data is store as key:values
//alternating pattern of collections and documents
//documents are ligtht weighted
