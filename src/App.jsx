import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import About from './Pages/About';
import Login from './Pages/Login';
import WorkWithUs from './Pages/WorkWithUs';



function App() {

  return (
    <>
   
    <Router>
    <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about-us' element={<About/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/work-with-us' element={<WorkWithUs/>}/>
        </Routes>
    <Footer/>
    </Router>
    </>
  )
}

export default App
