// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmlcozstDLADYcmapquPXXln-wLQzx1vY",
  authDomain: "moviegpt-569ea.firebaseapp.com",
  projectId: "moviegpt-569ea",
  storageBucket: "moviegpt-569ea.appspot.com",
  messagingSenderId: "978478314555",
  appId: "1:978478314555:web:07739f35af77b26f6d581e",
  measurementId: "G-5FFPFKB7NB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
