// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi1hxLMSapYEyWhFnsGBmjRFyI94SvbCs",
  authDomain: "kappathetapichirholambda.firebaseapp.com",
  projectId: "kappathetapichirholambda",
  storageBucket: "kappathetapichirholambda.appspot.com",
  messagingSenderId: "652946405408",
  appId: "1:652946405408:web:5f5ebf010394448f3de445",
  measurementId: "G-1ZVJHKEBTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);