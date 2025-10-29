import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCQdMyc4VhRpkgSuW1WwJ8XeitEEzdLFUk",
  authDomain: "web-app-4173b.firebaseapp.com",
  projectId: "web-app-4173b",
  storageBucket: "web-app-4173b.firebasestorage.app",
  messagingSenderId: "1030832090303",
  appId: "1:1030832090303:web:f3c7a76675fc87db7e6a0a",
  measurementId: "G-1W29F53TZG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
