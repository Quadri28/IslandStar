import React from "react";
import {Link, useLocation } from "react-router-dom";
import './Sidebar.css'


const Sidebar = () => {
  const {pathname} = useLocation();

  return (
    <div
      style={{ width: "200px", height: "100vh", backgroundColor: "#fff" }}
      className="px-2 py-4 d-flex flex-column gap-3"
    >
      <Link
        to="/dashboard"
        className= {pathname === "/dashboard" ? "active-sidebar-link" : ""}
        style={{ color: "#000" }}
      >
        Dashboard
      </Link>
      <Link to="messages" style={{ color: "#000" }}
        className={pathname === "/dashboard/messages" ? "active-sidebar-link" : ""}>
        Messages
      </Link>
      <Link to="send-message" style={{ color: "#000" }}
        className={pathname === "/dashboard/send-message" ? "active-sidebar-link" : ""}>
        Message Admin
      </Link>
    </div>
  );
};

export default Sidebar;
