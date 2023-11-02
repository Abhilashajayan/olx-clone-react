import { initializeApp  } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyD8P0Bj-pJD6R_OXMNutb9UGulg2aSQR3M",
  authDomain: "olx-clone-e1df6.firebaseapp.com",
  projectId: "olx-clone-e1df6",
  storageBucket: "olx-clone-e1df6.appspot.com",
  messagingSenderId: "270108661899",
  appId: "1:270108661899:web:05941defbaae8eccd59c8e",
  measurementId: "G-D8785SKTKN"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export const db = getFirestore(app)
export const storage = getStorage(app);