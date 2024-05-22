import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './Components/Nav'
import Home from './Pages/Home';
import Footer from './Components/Footer';
import About from './Pages/About';
import Login from './Pages/Login';
import WorkWithUs from './Pages/WorkWithUs';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
   
    <Router>
    <NavBar/>
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
