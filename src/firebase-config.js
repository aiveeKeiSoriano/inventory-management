
import firebase from 'firebase/app'

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC58Wz_JcWoae7cJUgPSqRc-TOdI8NwNs4",
    authDomain: "inventory-management-acfc9.firebaseapp.com",
    projectId: "inventory-management-acfc9",
    storageBucket: "inventory-management-acfc9.appspot.com",
    messagingSenderId: "59396824809",
    appId: "1:59396824809:web:f21714f7fd4446b7db1a78"
  };


firebase.initializeApp(firebaseConfig)
const databaseRef = firebase.firestore()

export default databaseRef