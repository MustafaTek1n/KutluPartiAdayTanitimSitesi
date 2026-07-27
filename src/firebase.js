import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase proje konfigürasyonu (kutlupartiadaytanitimsitesi)
const firebaseConfig = {
  apiKey: "AIzaSyCVP_EHinLXCW9F4dB9rBtrPSr1y0yIFU0",
  authDomain: "kutlupartiadaytanitimsitesi.firebaseapp.com",
  projectId: "kutlupartiadaytanitimsitesi",
  storageBucket: "kutlupartiadaytanitimsitesi.firebasestorage.app",
  messagingSenderId: "943627107367",
  appId: "1:943627107367:web:d01003aacef26f27b96202"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);