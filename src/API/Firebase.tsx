import {  initializeApp  } from "firebase/app";
import {  getAnalytics  } from "firebase/analytics";
import {  getDatabase  } from "firebase/database";



const sdk = {
  apiKey: "AIzaSyD9vI0Fv-f6QoQxkaYwKHk9ph5YNWgNaCM",
  authDomain: "idonow-53294.firebaseapp.com",
  projectId: "idonow-53294",
  storageBucket: "idonow-53294.firebasestorage.app",
  messagingSenderId: "526965620555",
  appId: "1:526965620555:web:c7148e3b44bea5138af2ce",
  measurementId: "G-GTNZTBJRF6"
}



const Firebase = () => {
  initializeApp(sdk)
  getAnalytics(initializeApp(sdk))
  getDatabase(initializeApp(sdk))
}

export default Firebase;
