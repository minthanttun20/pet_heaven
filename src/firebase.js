import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWzwiO6m0JHXGVOVS6VjH1_fCJXGKtlD0",
  authDomain: "petheaven-6e162.firebaseapp.com",
  projectId: "petheaven-6e162",
  storageBucket: "petheaven-6e162.firebasestorage.app",
  messagingSenderId: "652840690849",
  appId: "1:652840690849:web:c5e44e432143a67140fce0"
};
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;