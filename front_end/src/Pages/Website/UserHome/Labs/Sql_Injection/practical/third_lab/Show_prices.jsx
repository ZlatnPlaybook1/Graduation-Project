// import React, { useState } from "react";
// import axios from "axios";
import "./Show_prices.css";
// import { useNavigate } from "react-router-dom";
import Header from "../../../../Header/Header";
import Footer from "../../../../Footer/Footer";
import { useState } from "react";
import axios from "axios";

export default function Show_prices() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  axios
      .post("http://127.0.0.1:8080/api/Show_Prices",)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        setLoading(false);
        if (error.response) {
          setErr(error.response.data);
          console.error(error.response.data);
        } else {
          setErr("Network Error");
          console.error(error);
        }
      });
  return (
    <>
      <Header />
      {/* Start Courses  */}
      <div className="course-Show_prices ">
        <div className="container-Show_prices ">
          <h1>Prices In Our Site</h1>
          <div className="row-practice">
            <div className="card-Show_prices ">
              <h4>Robot Home Security Buddy</h4>
              <p>$92.70</p>
            </div>
            <div className="card-Show_prices ">
              <h4>All-in-one Typewriter</h4>
              <p>$33.61</p>
            </div>
            <div className="card-Show_prices ">
              <h4>Photobomb Backdrops</h4>
              <p>$46.21</p>
            </div>
            <div className="card-Show_prices ">
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
