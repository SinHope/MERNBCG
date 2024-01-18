import React from "react";
import "../styles.css";
import fbicon from "../images/fbicon.png";
import instaicon from "../images/instaicon.png";
import linkedinicon from "../images/linkedinicon.png";

const SocialMediaSection = () => (
  <section>
    <div className="custom-socialmediasection text-center">
      <div>
        <h1 className="followsocialmedia fw-bold">Follow our Socials</h1>
      </div>
      <div id="socialicons">
        <a href="https://www.facebook.com">
          <img
            src={fbicon}
            alt="Facebook Icon"
            className="custom-fbicon  p-4"
          />
        </a>
        <a href="https://www.instagram.com">
          <img
            src={instaicon}
            alt="Instagram Icon"
            className="custom-instaicon p-4"
          />
        </a>
        <a href="https://www.linkedin.com">
          <img
            src={linkedinicon}
            alt="LinkedIn Icon"
            className="custom-linkedinicon p-4"
          />
        </a>
      </div>
    </div>
  </section>
);

export default SocialMediaSection;
