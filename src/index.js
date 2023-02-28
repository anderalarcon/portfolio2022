import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAkX93CuSpJFfDITGTDeMCuvTL0uImcT4",
  authDomain: "portafolio-ander.firebaseapp.com",
  projectId: "portafolio-ander",
  storageBucket: "portafolio-ander.appspot.com",
  messagingSenderId: "141882239061",
  appId: "1:141882239061:web:0239528a1ac28c6ab00cdc",
  measurementId: "G-9WBQE36D4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
