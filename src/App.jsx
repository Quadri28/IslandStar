import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Messages from "./Pages/Messages";
import Register from "./Pages/Register";
import Login from './Pages/Login';
import SendMessage from './Pages/SendMessage';

function App() {

  return (
    <>
    <Router>
      <>
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/register" element={<Register />}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/dashboard" element={<Dashboard/>}>
          <Route path='send-message' element={<SendMessage/>}/>
         <Route path="messages" element={<Messages/>}/>
         </Route>
        </Routes>
      </>
    </Router>
    </>
  )
}

export default App
