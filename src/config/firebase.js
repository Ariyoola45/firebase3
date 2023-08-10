// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASA45nHvQmyRfCTJ0ye_oVxVm8pscxR7I",
  authDomain: "fir-3-278a6.firebaseapp.com",
  projectId: "fir-3-278a6",
  storageBucket: "fir-3-278a6.appspot.com",
  messagingSenderId: "163023436613",
  appId: "1:163023436613:web:2b06b9bd1a08ca745b9c2c",
  measurementId: "G-Z35ZNPY43S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const Google = new GoogleAuthProvider() 
export const db =  getFirestore(app)
export const storage =  getStorage(app)

