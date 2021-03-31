import firebase from "firebase";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyB70Zxczc_X4El4afE-KzkwRpZrKQKOxyY",
  authDomain: "devtodo-3bec9.firebaseapp.com",
  projectId: "devtodo-3bec9",
  storageBucket: "devtodo-3bec9.appspot.com",
  messagingSenderId: "824461519691",
  appId: "1:824461519691:web:935d13f6fed87ec7f496ce",
  measurementId: "G-EWGRDE7FDH",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let db = firebase.firestore();

export default {
  firebase,
  db,
};
