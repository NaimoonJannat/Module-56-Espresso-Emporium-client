// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD6CNbhWFbGLWGi6deT1Gv68F2tpDIlP4",
  authDomain: "coffee-shop-4c45d.firebaseapp.com",
  projectId: "coffee-shop-4c45d",
  storageBucket: "coffee-shop-4c45d.appspot.com",
  messagingSenderId: "877028424453",
  appId: "1:877028424453:web:6d71cbfb29187ec410556c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;