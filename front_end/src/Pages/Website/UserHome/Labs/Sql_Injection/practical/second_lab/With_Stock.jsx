// import React, { useState } from "react";
// import axios from "axios";
import "./With_Stock.css";
// import { useNavigate } from "react-router-dom";
import Header from "../../../../Header/Header";
import image_1 from "../../../../assets/img/SQL_2nd_Lab/image_1.png";
import image_2 from "../../../../assets/img/SQL_2nd_Lab/image_2.png";
import image_3 from "../../../../assets/img/SQL_2nd_Lab/image_3.png";
import image_4 from "../../../../assets/img/SQL_2nd_Lab/image_4.png";
import image_5 from "../../../../assets/img/SQL_2nd_Lab/image_5.png";
import image_6 from "../../../../assets/img/SQL_2nd_Lab/image_6.png";
import image_7 from "../../../../assets/img/SQL_2nd_Lab/image_7.png";
import image_8 from "../../../../assets/img/SQL_2nd_Lab/image_8.png";
import Footer from "../../../../../Footer/Footer";

export default function With_Stock() {
  // const [err, setErr] = useState("");
  return (
    <>
      <Header />
      {/* Start Courses  */}
      <div className="course-With_Stock ">
        <div className="container-With_Stock ">
            <h1 className="congrats">Congratulations</h1>
          <h1>T-Shirts In Our Store or 1=1</h1>
          <div className="row-practice">
            <div className="card-With_Stock ">
              <img src={image_1} alt="" />
              <div className="card-text-With_Stock ">
                <h4>T-Shirt</h4>
                <p>High Quality T-Shirt</p>
              </div>
            </div>
            <div className="card-With_Stock ">
              <img src={image_2} alt="" />
              <div className="card-text-With_Stock ">
                <h4>T-Shirt</h4>
                <p>High Quality T-Shirt</p>
              </div>
            </div>
            <div className="card-With_Stock ">
              <img src={image_3} alt="" />
              <div className="card-text-With_Stock ">
                <h4>T-Shirt</h4>
                <p>High Quality T-Shirt</p>
              </div>
            </div>
            <div className="card-With_Stock ">
              <img src={image_4} alt="" />
              <div className="card-text-With_Stock ">
                <h4>T-Shirt</h4>
                <p>High Quality T-Shirt</p>
              </div>
            </div>
            <div className="card-With_Stock ">
              <img src={image_5} alt="" />
              <div className="card-text-With_Stock ">
                <h4>T-Shirt</h4>
                <p>High Quality T-Shirt</p>
              </div>
            </div>
            <div className="card-With_Stock ">
              <img src={image_6} alt="" />
              <div className="card-text-With_Stock ">
                <h4>T-Shirt</h4>
                <p>High Quality T-Shirt</p>
              </div>
            </div>
            <div className="card-With_Stock ">
              <img src={image_7} alt="" />
              <div className="card-text-With_Stock ">
                <h4>T-Shirt</h4>
                <p>High Quality T-Shirt</p>
              </div>
            </div>
            <div className="card-With_Stock ">
              <img src={image_8} alt="" />
              <div className="card-text-With_Stock ">
                <h4>T-Shirt</h4>
                <p>High Quality T-Shirt</p>
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
