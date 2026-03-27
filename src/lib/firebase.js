import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCuE3qItrN4UTS4KWkV_k2cF6GN8CjdnkY",
  authDomain: "projects-197e8.firebaseapp.com",
  projectId: "projects-197e8",
  storageBucket: "projects-197e8.firebasestorage.app",
  messagingSenderId: "9237160577",
  appId: "1:9237160577:web:bc23239d775fe3beda6380"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const analytics = getAnalytics(app);
