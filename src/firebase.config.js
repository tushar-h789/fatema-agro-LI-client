// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChg6xHoMjkMaFrjjNNolNBYLvPV1mhKts",
  authDomain: "fatema-agro.firebaseapp.com",
  projectId: "fatema-agro",
  storageBucket: "fatema-agro.appspot.com",
  messagingSenderId: "672745819368",
  appId: "1:672745819368:web:d27706e17cb513785f8d5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app