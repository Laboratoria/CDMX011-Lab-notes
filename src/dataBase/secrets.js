import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC-aPn3rZaUbGJ6lciO5XNtox94XwdHBJU",
  authDomain: "labnotes-b1e03.firebaseapp.com",
  projectId: "labnotes-b1e03",
  storageBucket: "labnotes-b1e03.appspot.com",
  messagingSenderId: "677469983377",
  appId: "1:677469983377:web:896ff22ebd715f35046530"
};

firebase.initializeApp(firebaseConfig);

//export default firebase;
export const db = firebase.firestore();