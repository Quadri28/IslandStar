import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from '../assets/Logo.png'


const NavBar = () => {
      const [showNavbar, setShowNavbar] = useState(false);
      const [active, setActive] = useState("");
    
      const {pathname} = useLocation()
    
      const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
      };
    
      return (
        <nav className="nav">
          <div className="container">
            <Link to="/" className="logo" style={{fontFamily:'Helvetica-Bold'}}>
                <img src={Logo} alt="Logo image" className="img-fluid" style={{width:'3rem'}}/>
            </Link>
            <div className="menu-icon" onClick={handleShowNavbar}>
              {!showNavbar ? <FaBars /> : <FaTimes />}
            </div>
            <div className={`nav-elements  ${showNavbar && "active"}`}>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    onClick={() => setActive("home")}
                    className={
                      pathname === "home" ? `active ${"nav-links"}` : "nav-links"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about-us"
                    onClick={() => setActive("about")}
                    className={
                      pathname === "about" ? `active ${"nav-links"}` : "nav-links"
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/academy"
                    onClick={() => setActive("contact")}
                    className={
                      pathname === "contact" ? `active ${"nav-links"}` : "nav-links"
                    }
                  >
                    Academy
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/refer-friend"
                    onClick={() => setActive("agent")}
                    className={
                      pathname === "agent" ? `active ${"nav-links"}` : "nav-links"
                    }
                  >
                    Refer a friend
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/work-with-us"
                    onClick={() => setActive("agent")}
                    className={
                      pathname === "agent" ? `active ${"nav-links"}` : "nav-links"
                    }
                  >
                    Work with us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/news"
                    onClick={() => setActive("agent")}
                    className={
                      pathname === "agent" ? `active ${"nav-links"}` : "nav-links"
                    }
                  >
                    News
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    onClick={() => setActive("agent")}
                    className={
                      pathname === "agent" ? `active ${"nav-links"}` : "nav-links"
                    }
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    };
    

export default NavBar
