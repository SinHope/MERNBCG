import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import Backgroundimage from "../components/Backgroundimage";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Card from "../components/Card";
import howItWorksMap from "../components/howitworksmap";

const HowItWorks = () => (
  <div>
    <div>
      <Navigation />
      <Backgroundimage />
    </div>

    <main>
      <div>
        <div className="text-center">
          <h1 className="text-black fw-bold ms-4 mt-5 custom-howitworkstitle">
            How It Works?
          </h1>
          <p className="text-black fw-semibold ms-5 custom-howitworkstitle">
            Last Updated: September 5, 2023
          </p>
        </div>
        {howItWorksMap.map((item, index) => (
          <Card
            key={index}
            subtitle={item.subtitle}
            description={item.description}
          />
        ))}
      </div>
    </main>
    <Link to="/"></Link>
    <Footer />
  </div>
);

export default HowItWorks;
