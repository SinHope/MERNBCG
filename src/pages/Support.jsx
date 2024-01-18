import React from "react";
import "../styles.css";
import "../textshadowonly.css";
import Backgroundimage from "../components/Backgroundimage";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

let Support = () => (

  

    <div>
      <Navigation />
      <Backgroundimage />
      
        <div>
          <h1 className="fw-bold ms-4 mt-5 fs-1 custom-text-shadow-only">Contact Us</h1>
        </div>
        <div>
          <form className="fw-bold fs-3 w-50 ms-4" method="post" action="mailto:nasmerfontanilla@gmail.com">
            <div className="mb-3">
              <label htmlFor="name" className="form-label custom-text-shadow-only">Name</label>
              <input type="text" className="form-control bg-dark text-white" id="name" aria-describedby="nameHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label custom-text-shadow-only">Email Address</label>
              <input type="email" className="form-control bg-dark text-white" id="email" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3 form-check">
              <label htmlFor="message" className="form-label custom-text-shadow-only">Message</label>
              <textarea className="form-control bg-dark text-white" id="message" rows="4"></textarea>
            </div>
            <button type="submit" className="btn btn-warning">Submit</button>
          </form>
        </div>
      
      <Footer />
    </div>
  );

export default Support;