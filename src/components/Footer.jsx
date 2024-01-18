import React from "react";
import "../styles.css";

const Footer = () => (
  <footer>
    <div className="d-block custom-footer-container">
      <div className="custom-footer-container d-flex justify-content-center text-black fs-6 bg-warning">
        <p className="p-4 custom-safetytips">Safety Tips</p>
        <p className="p-4 custom-faq">FAQ</p>
        <a
          href="cookiepolicy.html"
          className=" text-decoration-none p-4 custom-cookiepolicy"
        >
          <p className="custom-cookiepolicy">Cookie Policy</p>
        </a>
        <div className="d-block">
          <p className="p-4">
            © 2023 CodingWithNas Technologies, Pte Ltd, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
