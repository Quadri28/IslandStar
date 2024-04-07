import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const DashNav = ({ showNavbar, setShowNavbar }) => {
  const details = JSON.parse(localStorage.getItem("user-details"));
  const navigate = useNavigate();
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav style={{ backgroundColor: "#fff" }}>
      <div className="d-flex justify-content-between align-items-center px-2 py-4 w-100">
        <Link to="/" style={{ color: "#0452C8", fontWeight:'700', fontSize:'25px' }}>
          DioVaze
        </Link>
        <div className="d-flex gap-3">           
              <button style={{ cursor: "pointer" }} className="btn btn-danger"   onClick={()=>{
                    navigate("/")
                    localStorage.removeItem('user-details')
                    } } >
                Logout
              </button>
          <div
            className="menu-icon d-sm-none"
            onClick={handleShowNavbar}
            style={{color:'#0452c8', cursor:'pointer'}}
          >
            {!showNavbar ? <FaBars /> : <FaTimes />}
          </div>
        </div>
      </div>
      <ToastContainer/>
    </nav>
  );
};

export default DashNav;
