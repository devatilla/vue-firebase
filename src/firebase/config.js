import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBo1SZrFKLPL1JK5qSdQv1Gqh78bFrwrF4",
  authDomain: "sosyal-app-e413b.firebaseapp.com",
  projectId: "sosyal-app-e413b",
  storageBucket: "sosyal-app-e413b.appspot.com",
  messagingSenderId: "230064292421",
  appId: "1:230064292421:web:fb69f06034e484253a192c",
  measurementId: "G-HSBJ0HKBG9",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
