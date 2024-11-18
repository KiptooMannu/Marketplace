// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mannu-mannu-se.firebaseapp.com",
  projectId: "mannu-mannu-se",
  storageBucket: "mannu-mannu-se.appspot.com",
  messagingSenderId: "716845235232",
  appId: "1:716845235232:web:4099bd7237b49d339c9045",
  measurementId: "G-JJX8FMGGLS"
};

// Initialize Firebase only if there are no initialized apps
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // Use the existing initialized app
}



export const storage=getStorage(app);