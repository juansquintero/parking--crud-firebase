import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBe7dno4vXKAOYxpEpsVeGYDIofK5GpTLM",
  authDomain: "parkingproyect-bf01f.firebaseapp.com",
  projectId: "parkingproyect-bf01f",
  storageBucket: "parkingproyect-bf01f.appspot.com",
  messagingSenderId: "902204375572",
  appId: "1:902204375572:web:6b805d1bbc8dc3e7db5d01"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
