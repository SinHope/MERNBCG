import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

const Slogan = () => (
  <header>
    <div className="custom-header text-center">
      <h2 className="text-black fs-1 fw-bold custom-slogan">
        Connect With Riders Around The World!
      </h2>
      <h2 className="text-black fs-1 fw-bold custom-slogan">
        Explore Uncharted Territories®
      </h2>
      <Link to="/Register">
      <button className="text-black fw-bold fs-4 btn btn-warning mt-5 custom-btn-createaccount">
        Create Account
      </button>
      </Link>
    </div>
  </header>
);

export default Slogan;
