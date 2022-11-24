import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBrmJ2XJdYrggwzSPk6OPyKwD9GoiuQ52A",
  authDomain: "hackathon-a6459.firebaseapp.com",
  projectId: "hackathon-a6459",
  storageBucket: "hackathon-a6459.appspot.com",
  messagingSenderId: "1094550838996",
  appId: "1:1094550838996:web:6984bcdb4ac45ee729a541",
  measurementId: "G-G72YGDMR16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth}

// export const analytics = getAnalytics(app);