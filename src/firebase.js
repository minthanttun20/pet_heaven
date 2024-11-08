import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLebtfkTKvnLvP-_Qq7xlmZQ36C3jLl9U",
  authDomain: "petheaven-3e814.firebaseapp.com",
  projectId: "petheaven-3e814",
  storageBucket: "petheaven-3e814.firebasestorage.app",
  messagingSenderId: "1018474974346",
  appId: "1:1018474974346:web:830b768f589a3ba1d0f173"
};
  
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;