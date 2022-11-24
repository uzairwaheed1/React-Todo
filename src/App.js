import logo from "./logo.svg";
import "./App.css";
// import Todo from "./components/Todo";
// import Signup from "./components/signup";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Header from "./components/My_header";
import auth from "../src/components/config/firebase";
import { BrowserRouter, useNavigate, redirect, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Router from "./components/config/Router";
import Todo from "./components/Todo";

function App() {
  const Navigate = useNavigate();

  const getData = (data) => {
    console.log(data);

    // const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    // debugger
    // debugger
    createUserWithEmailAndPassword(auth, data.username, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const Login = ({username,password}) => {
    console.log(password)
    console.log(username)
    // console.log("chal gaya")


    const auth = getAuth();
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
       if(user){
        Navigate("/todo")
       }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  // console.log(login)
  return (
    // <Todo/>
    <>
      <Header />
      {/* <Signup getData={getData} />

        <Login/> */}
      <Router getData={getData} loginData = {Login} />
    </>
  );
}

export default App;
