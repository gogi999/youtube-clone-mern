import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOH9jtROnbPWpJ5XeiI7gF62ZtNIYknAw",
  authDomain: "video-c8482.firebaseapp.com",
  projectId: "video-c8482",
  storageBucket: "video-c8482.appspot.com",
  messagingSenderId: "434767080490",
  appId: "1:434767080490:web:508244c62654bd53406753"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
