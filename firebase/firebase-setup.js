// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {apiKey,authDomain,projectId,storageBucket,messagingSenderId,appId} from "@env"

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
