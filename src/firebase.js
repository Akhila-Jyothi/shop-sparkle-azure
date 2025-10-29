// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQdMyc4VhRpkgSuW1WwJ8XeitEEzdLFUk",
  authDomain: "web-app-4173b.firebaseapp.com",
  projectId: "web-app-4173b",
  storageBucket: "web-app-4173b.firebasestorage.app",
  messagingSenderId: "1030832090303",
  appId: "1:1030832090303:web:f3c7a76675fc87db7e6a0a",
  measurementId: "G-1W29F53TZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);