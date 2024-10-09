// import React, { useState } from "react";
// import axios from "axios";
import "./Show_prices.css";
// import { useNavigate } from "react-router-dom";
import Header from "../../../../Header/Header";
import Footer from "../../../../../Footer/Footer";

export default function Show_prices() {
  // const [err, setErr] = useState("");
  return (
    <>
      <Header />
      {/* Start Courses  */}
      <div className="course-Show_prices ">
        <div className="container-Show_prices ">
          <h1>Prices In Our Site</h1>
          <div className="row-practice">
            <div className="card-Show_prices ">
              <div className="card-text-Show_prices ">
                <h4>Robot Home Security Buddy</h4>
                <p>$92.70</p>
              </div>
            </div>
            <div className="card-Show_prices ">
              <div className="card-text-Show_prices ">
                <h4>All-in-one Typewriter</h4>
                <p>$33.61</p>
              </div>
            </div>
            <div className="card-Show_prices ">
              <div className="card-text-Show_prices ">
                <h4>Photobomb Backdrops</h4>
                <p>$46.21</p>
              </div>
            </div>
            <div className="card-Show_prices ">
              <div className="card-text-Show_prices ">
                <h4>Grow Your Own Spy Kit</h4>
                <p>$19.26</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}
