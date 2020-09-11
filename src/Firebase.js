import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCMvZcNYQlbr75ZYcYHwyqL2shsTgeacsE",
  authDomain: "clone-ade69.firebaseapp.com",
  databaseURL: "https://clone-ade69.firebaseio.com",
  projectId: "clone-ade69",
  storageBucket: "clone-ade69.appspot.com",
  messagingSenderId: "162924980042",
  appId: "1:162924980042:web:980a26855b6b88146c03b3",
  measurementId: "G-7KF38Q2XWQ",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
