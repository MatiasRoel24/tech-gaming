// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCqDrtU6S4CA0yX2B-Fj7qkJ0DPYk32ONA",
  authDomain: "techgaming-9aa1b.firebaseapp.com",
  projectId: "techgaming-9aa1b",
  storageBucket: "techgaming-9aa1b.appspot.com",
  messagingSenderId: "418823130612",
  appId: "1:418823130612:web:77a5a95d9af26c91e23da1",
  measurementId: "G-4E0CZJSKZE",
};

const app = initializeApp(firebaseConfig);

  export default function getFiresotreApp(){
      return app
  }