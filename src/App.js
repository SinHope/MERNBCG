import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Preloader from "./components/Preloader.jsx";
import LandingPage from "./pages/Landingpage.jsx";
import HowItWorks from "./pages/Howitworks.jsx";
import AboutUs from "./pages/Aboutus.jsx";
import Support from "./pages/Support.jsx";
import LoginPage from "./pages/Login.jsx";
import RegisterPage from "./pages/Register.jsx";
import HomePage from "./pages/Homepage.jsx";
import ProfilePage from "./pages/Profilepage.jsx";
import NewsFeed from "./pages/Newsfeed.jsx";
import AdminPage from "./pages/Adminpage.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // For my preloading screen //
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/HowItWorks" element={<HowItWorks />} />
              <Route path="/Support" element={<Support />} />
              <Route path="/Login" element={<LoginPage />} />
              <Route path="/Register" element={<RegisterPage />} />
              <Route path="/Homepage" element={<HomePage />} />
              <Route path="/ProfilePage" element={<ProfilePage />} />
              <Route path="/Newsfeed" element={<NewsFeed />} />
              <Route path="/AdminPage" element={<AdminPage />} />
            </Routes>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
