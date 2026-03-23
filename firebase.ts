import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Default config for now
const firebaseConfig = {
  apiKey: "AIzaSyDummyKey",
  authDomain: "pdf-maker-dummy.firebaseapp.com",
  projectId: "pdf-maker-dummy",
  storageBucket: "pdf-maker-dummy.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef"
};

// Import the Firebase configuration if it exists
import appletConfig from './firebase-applet-config.json';

const app = initializeApp(appletConfig || firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
