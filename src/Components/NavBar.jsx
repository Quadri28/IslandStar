
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const details = JSON.parse(localStorage.getItem('user-details'))
    return (
     <nav style={{backgroundColor:'#0452C8'}}>
      <div className="d-flex justify-content-between align-items-center px-2 py-4 w-100 container" 
      >
        <Link to='/' style={{color:'#fff'}}>DioVaze</Link>
        <div className="d-flex gap-3">
        {
          !details? <Link to='/register' className="btn btn-primary">Register</Link>: null
        }
           <Link to='/login' className="btn btn-success">Login</Link>
        </div>
      </div>
     </nav>
      )
}
export default NavBar;