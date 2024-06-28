// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXmNSSz0bbZu8zn6CJe6W7wa0GU2UYh5k" ,
  authDomain: "crufted-cloth.firebaseapp.com" ,
  projectId: "crufted-cloth" ,
  storageBucket: "crufted-cloth.appspot.com" ,
  messagingSenderId:"544108857615",
  appId:"1:544108857615:web:11165e2527475594e5d67" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;