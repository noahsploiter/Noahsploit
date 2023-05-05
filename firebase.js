import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

var firebaseConfig = {
   apiKey: "AIzaSyBuVTbPSxYfJjJTg--NSX_m4g82nE3wH5s",
  authDomain: "one-chat-c6664.firebaseapp.com",
  projectId: "one-chat-c6664",
  storageBucket: "one-chat-c6664.appspot.com",
  messagingSenderId: "1057966991056",
  appId: "1:1057966991056:web:8a9123d92785aff95e20d5",
  measurementId: "G-1H2H3C7N57"
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export { auth, db, storage, serverTimestamp };
