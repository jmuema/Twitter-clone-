
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCHaWWxSQxeOzKvCKTdoe-dQ4iBqVAMGyI",
    authDomain: "twit-clone-b229b.firebaseapp.com",
    databaseURL: "https://twit-clone-b229b.firebaseio.com",
    projectId: "twit-clone-b229b",
    storageBucket: "twit-clone-b229b.appspot.com",
    messagingSenderId: "700988635783",
    appId: "1:700988635783:web:f0449fb772993965a81622",
    measurementId: "G-1X39HB0GKN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;