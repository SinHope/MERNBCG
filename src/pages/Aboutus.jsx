import React from "react";
import Backgroundimage from "../components/Backgroundimage";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const AboutUs = () => (
  <div>
    <Navigation />
    <Backgroundimage />

    <main>
      <div>
        <div>
          <h1 className="text-black fw-bold ms-4 mt-5 customs-aboutus-title">
            About Us
          </h1>
        </div>
        <div className="customs-aboutus word-wrap text-white bg-black bg-gradient w-50 fw-light">
          <div className="p-3">
            Welcome to BikeConnectGlobal, where the open road meets uncharted
            territories, and strangers become riding companions.
          </div>
          <div className="p-3">
            At BikeConnectGlobal, we're more than just a social media app; we're
            a community of passionate motorcycle enthusiasts brought together by
            our love for adventure on two wheels. Whether you're a seasoned
            rider or a novice, our platform is designed to connect you with
            like-minded individuals who share your passion for exploration and
            the thrill of the open road.
          </div>
          <div className="p-3">
            Our mission is to create a space where you can share your motorcycle
            adventures, discover hidden gems in uncharted territories, and forge
            meaningful connections with fellow riders, even if they were once
            strangers. We believe that every ride has a story to tell, and we
            provide you with the tools to capture and share those unforgettable
            moments with the world.
          </div>
          <div className="p-3">Here at BikeConnectGlobal, you can:</div>
          <div className="p-5">
            🏍 Explore Uncharted Territories: Discover new roads, scenic routes,
            and breathtaking landscapes. Share your favorite routes and hidden
            gems with our community, inspiring others to embark on their own
            adventures.
          </div>
          <div className="p-5">
            🤝 Meet Strangers, Make Friends: Connect with riders from all walks
            of life. Turn strangers into riding companions, forming bonds that
            transcend the asphalt. Who knows, your next lifelong friend might be
            just a message away.
          </div>
          <div className="p-5">
            📸 Share Your Journey: Document your rides with stunning photos and
            captivating stories. Show off your bike, share maintenance tips, and
            inspire others to hit the road.
          </div>
          <div className="p-5">
            🌟 Join a Thriving Community: Engage with a diverse and welcoming
            community of motorcycle enthusiasts who share your passion. Swap
            stories, offer advice, and find support from fellow riders who
            understand the unique thrill of life on two wheels.
          </div>
          <div className="p-5">
            So, whether you're planning your next epic journey, seeking advice
            on motorcycle maintenance, or simply looking to connect with fellow
            riders, TwoWheelTraverse is your home on the internet for all things
            motorcycle-related. Join us today, and together, let's rev up our
            engines, explore the unknown, and turn strangers into friends, one
            ride at a time. Welcome to the BikeConnectGlobal family. 🏍✨
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
);

export default AboutUs;
