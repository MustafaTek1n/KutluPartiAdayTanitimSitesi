import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase Konsolundan alacağın key'ler (Şimdilik taslak)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "kutlu-parti.firebaseapp.com",
  projectId: "kutlu-parti",
  storageBucket: "kutlu-parti.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);