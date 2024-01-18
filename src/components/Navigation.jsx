/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles.css";
import bcgicon from "../images/icon.png";
import { Link } from "react-router-dom";

let Navigation = () => (
  <nav className="navbar navbar-expand-lg bg-transparent">
    <div className="container-fluid">
      <Link
        to="/"
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
            <Link
              to="/HowItWorks"
              className="nav-link active custom-howitworks"
            >
              How It Works?
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link custom-aboutus">
              About Us
            </Link>
          </li>
          {/* This nav dropdown will be added once content is available. For now, leave it as it is. */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle custom-events"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Events
            </a>
            <ul className="dropdown-menu bg-transparent">
              <li>
                <a className="dropdown-item custom-events" href="#">
                  Past Events
                </a>
              </li>
              <li>
                <a className="dropdown-item custom-events" href="#">
                  Current Events
                </a>
              </li>
              <li>
                <a className="dropdown-item custom-events" href="#">
                  Future Events
                </a>
              </li>
            </ul>
          </li>
          {/* Promotions tab will be added once content is available. FOr now, leave it as it is. */}
          <li className="nav-item">
            <a className="nav-link custom-promotions">Promotions</a>
          </li>
          <li className="nav-item">
            <Link to="/support" className="nav-link custom-support">
              Support
            </Link>
          </li>
        </ul>
        {/* Google Translator Cloud for the page is a paid service, so will only add once nearer towards the end of the project(REAL). */}
        <ul>
          <li className="nav-item">
            <a className="nav-link custom-language" aria-disabled="true">
              <i className="bi bi-translate"></i> Language
            </a>
          </li>
        </ul>
        <Link to="/Login ">
          <button className="btn btn-outline-warning">Login</button>
        </Link>
        
      </div>
    </div>
  </nav>
);

export default Navigation;
