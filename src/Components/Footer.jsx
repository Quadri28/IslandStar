import React from "react";
import "./Footer.css";
import { SlPhone } from "react-icons/sl";
import { RiLinkedinFill } from "react-icons/ri";
import { LiaFacebook } from "react-icons/lia";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from '../assets/Logo.png'

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#000", padding: "2.5rem 0 .5rem" }}>
      <div className="container d-sm-flex justify-content-between">
        <div className="d-flex text-white gap-3 align-items-center">
        <img src={Logo} alt="Logo image" className="img-fluid" style={{width:'3rem'}}/>
          <div className="row" style={{ fontFamily: "Helvetica-Bold", textTransform:'uppercase' }}>
            <a href="mailto:contact@islandstarsfc.com" style={{textDecoration:'none', color:'#fff'}}>contact@islandstarsfc.com</a>
            <a href="tel:08152254239" style={{textDecoration:'none', color:'#fff'}}>
              {" "}
              <SlPhone style={{ color: "#fff" }} /> 08152254239
            </a>
          </div>
        </div>
        <div className="d-flex gap-2 text-white fs-4 fw-bold">
          <FaInstagram /> <LiaFacebook /> <FaTiktok /> <RiLinkedinFill />
        </div>
      </div>

      <div
        className="mt-3 container row mx-auto"
        style={{ borderTop: "solid 1px #fff" }}
      >
        <div
          className="col-md-6 row gap-3"
          style={{ borderRight: "solid 1px #fff" }}
        >
          <div className="col-md-5 row mt-3 footer-links gap-3">
            <h3
              className="text-white"
              style={{ fontSize: "16px", fontFamily: "Helvetica-Bold" }}
            >
              ISLAND FOOTBALL <br /> ACADEMY
            </h3>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/find-academy">Find Your Academy</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/refer-friend">Refer A Friend</Link>
          </div>
          <div className="col-md-5 row mt-3 footer-links">
            <h3
              className="text-white"
              style={{ fontSize: "16px", fontFamily: "Helvetica-Bold" }}
            >
              DOCUMENTATION
            </h3>
            <Link to="/">Privacy Policy</Link>
            <Link to="/about">Code of conduct</Link>
            <Link to="/find-academy">Terms & Conditions</Link>
            <Link to="/contact-us">Safeguarding Policy</Link>
            <Link to="/refer-friend">Social media guidelines</Link>
          </div>
        </div>
        <div className="col-md-6 px-4">
          <h3
            style={{ fontFamily: "Helvetica-Bold" }}
            className="text-white mb-3"
          >
            SUBSCRIBE TO OUR NEWSLETTER
          </h3>
          <form>
            <div className="d-flex" style={{ position: "relative" }}>
              <input
                type="text"
                style={{
                  height: "4rem",
                  backgroundColor: "#000",
                  outline: "none",
                }}
                className="text-white px-2 w-100"
                placeholder="What is your email?"
              />
              <button
                className=" btn btn-lg"
                style={{
                  position: "absolute",
                  top: "10%",
                  right: "5%",
                  backgroundColor: "#fff",
                  borderRadius: "0",
                  textTransform:'uppercase'
                }}
              >
                {" "}
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr className="text-white mt-5"/>
      <p className="text-center text-white">© {new Date().getFullYear()} Island Stars FC </p>
    </div>
  );
};

export default Footer;
