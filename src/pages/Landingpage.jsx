import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Backgroundimage from "../components/Backgroundimage";
import Navigation from "../components/Navigation";
import Slogan from "../components/Slogan";
import HorizontalRule from "../components/Horizontalrule";
import Testimonials from "../components/Testimonials";
import SocialMediaSection from "../components/Socialmediasection";
import Footer from "../components/Footer";


let LandingPage = () => (
  <div>
    <Backgroundimage />
    <Navigation />
    <Slogan />
    <HorizontalRule />
    <Testimonials />
    <HorizontalRule />
    <SocialMediaSection />
    <HorizontalRule />
    <Footer />
  </div>
);

export default LandingPage;
