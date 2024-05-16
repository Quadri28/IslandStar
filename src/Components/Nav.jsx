import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Nav.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Logo.png";

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [active, setActive] = useState("");

  const { pathname } = useLocation();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="nav">
      <div className="container">
        <Link to="/" className="logo" style={{ fontFamily: "Helvetica-Bold" }}>
          <img
            src={Logo}
            alt="Logo image"
            style={{ width: "3rem", }}
          />
        </Link>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {!showNavbar ? <FaBars /> : <FaTimes />}
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <div className="dropdown">
                <button
                  className="btn text-white dropdown-toggle text-uppercase"
                  type="button"
                >
                  Who We Are
                </button>
                <ul className="dropdown-content">
                 <li>  <NavLink to='/about-us'>About Us</NavLink> </li>
                 <li>  <NavLink to='/'>Our Mission</NavLink> </li>
                 <li>  <NavLink to='/'>Our Vision</NavLink> </li>
                 <li>  <NavLink to='/'>Our Value</NavLink> </li>
                 <li>  <NavLink to='/'>Leadership Team</NavLink> </li>
                 <li>  <NavLink to='/'>Our Coaches</NavLink> </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <button
                  className="btn text-white dropdown-toggle text-uppercase"
                  type="button"
                >
                  Our Sports
                </button>
                <ul className="dropdown-content">
                 <li>  <NavLink to='/'>Football</NavLink> </li>
                 <li>  <NavLink to='/'>Basketball</NavLink> </li>
                 <li>  <NavLink to='/'>Table Tennis</NavLink> </li>
                
                </ul>
              </div>
            </li>
            <li>
            <NavLink to='/foundations' className='nav-links'>Our Foundation</NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="nav-links"
              >
            Services
              </NavLink>
            </li>
            <li>
              <NavLink to='/leagues' className='nav-links'>Our Leagues</NavLink>
            </li>
            <li>
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle text-uppercase text-white"
                  type="button"
                >
                  Our Events
                </button>
                <ul className="dropdown-content">
                 <li>  <NavLink to='/'>Ask Our Experts</NavLink> </li>
                 <li>  <NavLink to='/'>Events</NavLink> </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink className='btn btn-success' style={{color:'#fff'}} to='/'>Our Store</NavLink>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
