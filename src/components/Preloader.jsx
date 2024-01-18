import React from "react";
import "../Preloader.css";
import preloadicon from "../images/icon.png";

let Preloader = () => (
  <div className="preloader">
    <img src={preloadicon} alt="Preloading" />
  </div>
);

export default Preloader;
