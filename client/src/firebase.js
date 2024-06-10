// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRE_API_KEY,
  authDomain: "mern-blog-1bdf8.firebaseapp.com",
  projectId: "mern-blog-1bdf8",
  storageBucket: "mern-blog-1bdf8.appspot.com",
  messagingSenderId: "1088599906599",
  appId: "1:1088599906599:web:537d73e7421fdee5cd3102"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);