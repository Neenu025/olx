import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {getStorage} from 'firebase/storage'
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore'
import 'firebase/storage'
// import 'firebase/compat/firestore';


  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA09Bf7Nesx4QrlzZ9T6xwj-6uHzFTDeWs",
    authDomain: "olx-clone-5d0e4.firebaseapp.com",
    projectId: "olx-clone-5d0e4",
    storageBucket: "olx-clone-5d0e4.appspot.com",
    messagingSenderId: "1074136104939",
    appId: "1:1074136104939:web:2af6f96743e81eebd063ae",
    measurementId: "G-D6RKVFP7JC"
  };

  const firebaseapp= initializeApp(firebaseConfig);
  export const auth=getAuth(firebaseapp)
  export const db=getFirestore(firebaseapp)
  export const storage=getStorage(firebaseapp)

  export default firebaseapp;