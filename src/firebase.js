import firebase from "firebase/app"; 
import "firebase/auth";
// import "firebase/compat/firestore";


export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBhxQT-qyEEzFmvGjESndOLZey3F5ik20s",
    authDomain: "rt-chitchat-353bf.firebaseapp.com",
    projectId: "rt-chitchat-353bf",
    storageBucket: "rt-chitchat-353bf.appspot.com",
    messagingSenderId: "346271949685",
    appId: "1:346271949685:web:f4c75f4ac4eb09138fe93c",
    measurementId: "G-NC60ZZZSD5"
  }).auth();

