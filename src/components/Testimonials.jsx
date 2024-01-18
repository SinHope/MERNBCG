import React from "react";
import "../styles.css";
import Testimonialphoto from "../images/profile-photo.png";
import Testimonialphoto2 from "../images/vaunephan.jpg";

let Testimonials = () => (
  <main>
    <div className="custom-testimonial-container bg-black bg-gradient">
      <h1 className="text-white fs-1 custom-testimonial-heading text-center pt-5 fw-bold">
        Testimonials
      </h1>
      <div className="container">
        <div id="carouselExample" className="carousel slide">
          <div className="row carousel-inner">
            <div className="col-lg-6 col-12 custom-testimonials custom-testimonial-description-container justify-content-center carousel-item active">
              <img
                src={Testimonialphoto}
                alt="profile pic"
                className="custom-testimonial-photo p-4"
              />

              <p
                className="custom-testimonial-description text-white m-auto text-wrap fw-semibold p-2 text-center"
                style={{ width: "400px" }}
              >
                Without BikeConnectGlobal, I wouldn't have gotten the chance to
                ride in Vietnam with local riders <br />{" "}
                <span className="fw-light fs-6"> - Nasmer Fontanilla</span>
              </p>
            </div>
            <div className="col-lg-6 col-1 custom-testimonials custom-testimonial-description-container justify-content-center carousel-item active p-1">
              <img
                src={Testimonialphoto2}
                alt="profile pic"
                className="custom-testimonial-photo p-4"
              />
              <p
                className="custom-testimonial-description text-white m-auto text-wrap  fw-semibold p-2 text-center"
                style={{ width: "500px" }}
              >
                Simply to best app to meet like-minded riders <br />{" "}
                <span className="fw-light fs-6"> - Vaune Phan</span>
              </p>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon d-block"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </main>
);

export default Testimonials;
