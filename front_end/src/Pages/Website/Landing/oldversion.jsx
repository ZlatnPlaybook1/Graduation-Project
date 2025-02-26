import React from "react";
import { Link } from "react-router-dom";
import pg from "../assets/img/bg-img/header-bg1.png";
import image2 from "../assets/img/core-img/banner1.png";
import "./landing.css";

export default function Landing() {
  return (
    <div className="landing section position-relative">
      {/* Background image */}
      <img src={pg} className="landing__bg-img" alt="Background" />

      <div className="container py-5">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-lg-6 col-12 text-white mb-4 mb-lg-0 landing-text">
            <h3 className="landing-text__header mb-3">
              Elevate Your Cybersecurity Skills
            </h3>

            <h1 className="landing-text__headline">
              <span className="fw-bold d-block">
                Comprehensive Cybersecurity Training for All Levels
              </span>
            </h1>

            <p className="mt-3">
              Join our academy to gain practical skills and knowledge to protect
              against cyber threats and secure your future in the digital world.
            </p>

            <div className="mt-4">
              <Link to="#" className="btn btn-dark rounded-pill me-3 mb-2">
                Discover Our Cybersecurity Courses
              </Link>
              <Link to="#" className="text-white fw-bold mb-2 d-inline-block">
                <i className="fas fa-play me-2"></i>Watch Demo
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-lg-6 col-12 text-center landing-image">
            <img src={image2} className="landing-image__banner" alt="Banner" />
          </div>
        </div>
      </div>
    </div>
  );
}
