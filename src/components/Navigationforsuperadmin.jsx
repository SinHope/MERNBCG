/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles.css";
import bcgicon from "../images/icon.png";
import { Link, useNavigate } from "react-router-dom";

let NavigationForSuperAdmin = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token or user data from storage
    localStorage.removeItem("token");

    // Runs this alert code once the handleLogout function is called
    alert("You have sucessfully log out!");

    // Redirect to login or home page
    navigate("/");


};


return (
  <nav className="navbar navbar-expand-lg bg-transparent">
    <div className="container-fluid">
      <Link
        to="/Profilepage"
        className="navbar-brand text-black fw-bold fs-4 custom-brandname"
      >
        BikeConnectGlobal
        <img
          src={bcgicon}
          alt="BikeConnectGlobal Icon"
          className="custom-bcgicon"
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">         
          <a className="nav-link custom-promotions text-white">Manage User Accounts</a>           
          </li>
          <li className="nav-item">
          <a className="nav-link custom-promotions text-white">Manage Admin Accounts</a>             
          </li>
          {/* This nav dropdown will be added once content is available. For now, leave it as it is. */}
          
          {/* Promotions tab will be added once content is available. FOr now, leave it as it is. */}
          <li className="nav-item">
            <a className="nav-link custom-promotions text-white">Customer Support</a>
          </li>
          <li className="nav-item">
          <a className="nav-link custom-promotions text-white">Content Moderation</a>
          </li>
          <li className="nav-item">
          <a className="nav-link custom-promotions text-white">Marketing</a>
          </li>
          <li className="nav-item">
          <a className="nav-link custom-promotions text-white">Audit</a>
          </li>
          <li className="nav-item">
          <a className="nav-link custom-promotions text-white">Analytics</a>
          </li>
        </ul>
        
        
          <button className="btn btn-outline-success" onClick={handleLogout}>Logout</button>
          {/* call the Logout function in my javascript code in the top of this file */}
        
      </div>
    </div>
  </nav>
  );
};
export default NavigationForSuperAdmin;
