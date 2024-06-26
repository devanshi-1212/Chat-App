import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-6c35e.firebaseapp.com",
  projectId: "reactchat-6c35e",
  storageBucket: "reactchat-6c35e.appspot.com",
  messagingSenderId: "520294077930",
  appId: "1:520294077930:web:9632411582c8f98581ce93",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
