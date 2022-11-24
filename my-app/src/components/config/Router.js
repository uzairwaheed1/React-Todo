import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Signup from "../Signup"
import Login from "../Login"
import Todo from '../Todo'

export default function Router({getData , loginData}) {
    console.log(loginData)
    console.log(getData.loginData)

  return (
    <>
    {/* <BrowserRouter> */}
    <Routes>
        <Route path='/' element= {<Signup  getData ={getData}/>}/>
        <Route path='/login' element={<Login loginData ={loginData}/>}/>
        <Route path='/todo' element={<Todo/>}/> 
    </Routes>
    {/* </BrowserRouter> */}
    </>
  )
}
