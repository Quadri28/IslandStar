import React,{useState} from "react";
import {Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import DashNav from "../Components/DashNav";
import './Dashboard.css'

const Dashboard = () => {
  const details = JSON.parse(localStorage.getItem("login-details"));
  const [showNavbar, setShowNavbar] = useState(false);
  
  return (
    <div style={{ minHeight: "100vh" }}>
      <DashNav showNavbar={showNavbar} setShowNavbar={setShowNavbar}/>
      <div className="d-flex">
        <div className={showNavbar ? 'show-sidebar': 'hide-sidebar'}>
      <Sidebar showNavbar={showNavbar}/>
      </div>
        <div
          className="w-100 justify-content-center py-4 px-3"
          style={{ backgroundColor : "#f4f5f7", height:'100vh'}}
        >
          {details?.data?.user?.id === 1 ? (
            <h3 className="text-center">Welcome Dashboard</h3>
          ) : (
            <h3 className="text-center">
              Welcome {details?.data?.user?.name}
            </h3>
          )}
          {<Outlet />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
