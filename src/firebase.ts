// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI5gbkBcRBDSxxl-tKzfJzLL24RqUmcYk",
  authDomain: "thanhdeptrai-shop.firebaseapp.com",
  projectId: "thanhdeptrai-shop",
  storageBucket: "thanhdeptrai-shop.appspot.com",
  messagingSenderId: "596017744061",
  appId: "1:596017744061:web:3340f7f1facad48ec28fd4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
