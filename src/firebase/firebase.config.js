// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvVBnavosIOPzi9WA_1XG0saqP3bb9_Tc",
  authDomain: "tuk-tuk-kitchen.firebaseapp.com",
  projectId: "tuk-tuk-kitchen",
  storageBucket: "tuk-tuk-kitchen.appspot.com",
  messagingSenderId: "220036517749",
  appId: "1:220036517749:web:cdffa2806c65cc6f608d3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;