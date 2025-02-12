import React from "react";
import pg from "../assets/img/bg-img/header-bg1.png";
import image2 from "../assets/img/core-img/banner1.png";
import "./landing.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      {/* Start Landing Page */}
      <div className="landing section">
        <img src={pg} className="background-image" alt="Background" />
        <div className="container">
          <div className="row">
            <div className="text">
              <h3 className="text-header">Elevate Your Cybersecurity Skills</h3>
              <div className="cd-intro v2 text-left">
                <h1
                  className="cd-headline clip is-full-width thin"
                  style={{ lineHeight: "1.7" }}
                >
                  <span className="w-text bold">
                    Comprehensive Cybersecurity Training for All Levels
                  </span>
                  <span
                    className="cd-words-wrapper wrapper"
                    style={{
                      width: "250px",
                      display: "inline",
                    }}
                  >
                    {/* <b
                   className="gradient-text cyan bolder is-hidden"
                   style={{
                     width: "250px",
                     display: "block",
                   }}
                 >
                   Hands-On Practical Labs
                 </b>
                 <b
                   className="gradient-text cyan bolder is-visible"
                   style={{
                     width: "250px",
                     display: "block",
                   }}
                 >
                   Real-World Cybersecurity Scenarios
                 </b>
                 { <b
                   className="gradient-text cyan bolder is-hidden"
                   style={{
                     width: "250px",
                     display: "block",
                   }}
                 >
                   Expert Guidance
                 </b> } */}
                  </span>
                </h1>
              </div>
              <p>
                Join our academy to gain practical skills and knowledge to
                protect against cyber threats and secure your future in the
                digital world.
              </p>
              <div className="learn-more">
                <Link to="#" className="learn-btn">
                  Discover Our Cybersecurity Courses
                </Link>
                <Link to="#" className="play">
                  <i className="fas fa-play play-btn"></i> Watch Demo
                </Link>
              </div>
            </div>
            <div className="image">
              <img src={image2} className="banner" alt="Banner" />
            </div>
          </div>
        </div>
      </div>
      {/* End Landing Page */}
    </>
  );
}
