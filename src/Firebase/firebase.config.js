import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYy6RAI7qKZTRbQ9T-6rL0tlhF9IHUifU",
  authDomain: "news-portal-fb4b0.firebaseapp.com",
  projectId: "news-portal-fb4b0",
  storageBucket: "news-portal-fb4b0.firebasestorage.app",
  messagingSenderId: "723544631365",
  appId: "1:723544631365:web:cf7152403b01da5636db2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;