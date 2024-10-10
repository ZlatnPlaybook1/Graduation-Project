// import React, { useState } from "react";
// import axios from "axios";
import "./Finish_test.css";
// import { useNavigate } from "react-router-dom";
import Header from "../../../../Header/Header";
import Footer from "../../../../../Footer/Footer";

export default function Finish_test() {
  // const [err, setErr] = useState("");
  return (
    <>
      <Header />
      {/* Start Courses  */}
      <div className="course-Finish_test ">
        <div className="container-Finish_test ">
          <h1 className="congrats">Congratulations</h1>
          <h1>Prices In Our Site Union Select Null, Null, Null</h1>
          <div className="row-practice">
            <div className="card-Finish_test ">
              <h4>Robot Home Security Buddy</h4>
              <p>$92.70</p>
            </div>
            <div className="card-Finish_test ">
              <h4>All-in-one Typewriter</h4>
              <p>$33.61</p>
            </div>
            <div className="card-Finish_test ">
              <h4>Photobomb Backdrops</h4>
              <p>$46.21</p>
            </div>
            <div className="card-Finish_test ">
              <h4>Grow Your Own Spy Kit</h4>
              <p>$19.26</p>
            </div>
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}
