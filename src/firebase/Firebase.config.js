// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAYETZzfxgVn0rZOgb1nN2hxFcPVrh9gk",
  authDomain: "react-auth-event-management.firebaseapp.com",
  projectId: "react-auth-event-management",
  storageBucket: "react-auth-event-management.appspot.com",
  messagingSenderId: "690505919276",
  appId: "1:690505919276:web:b178c3a6e858d82d559a89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
