import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXIV-Oxef7St4uJEL72n1QCfC8jXZloBE",
  authDomain: "onlinestore-f90b0.firebaseapp.com",
  projectId: "onlinestore-f90b0",
  storageBucket: "onlinestore-f90b0.appspot.com",
  messagingSenderId: "30553839160",
  appId: "1:30553839160:web:e4cf25dbffb69a6bd3b8cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
