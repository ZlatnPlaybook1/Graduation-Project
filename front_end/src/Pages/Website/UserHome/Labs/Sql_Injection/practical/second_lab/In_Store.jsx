// import React, { useState } from "react";
// import axios from "axios";
import "./In_Store.css";
// import { useNavigate } from "react-router-dom";
import Header from "../../../../Header/Header";
import image_1 from "../../../../assets/img/SQL_2nd_Lab/image_1.png";
import image_2 from "../../../../assets/img/SQL_2nd_Lab/image_2.png";
import image_3 from "../../../../assets/img/SQL_2nd_Lab/image_3.png";
import image_4 from "../../../../assets/img/SQL_2nd_Lab/image_4.png";
import Footer from "../../../../Footer/Footer";

export default function In_Store() {
  // const [err, setErr] = useState("");
  return (
    <>
    <Header />
    {/* Start Courses  */}
    <div className="course-In_Store ">
      <div className="container-In_Store ">
        <h1>Featured Products</h1>
          <div className="row-practice">
              <div className="card-In_Store ">
                <div className="functions">
                <i className="fa-solid fa-cart-plus"></i>
                <i className="fa-regular fa-heart"></i>
                </div>
                  <img src={image_1} alt=""/>
                  <div className="card-text-In_Store ">
                        <h4>T-Shirt</h4>
                        <p className="price">$29.9</p>
                  </div>
              </div>
              <div className="card-In_Store ">
                <div className="functions">
                <i className="fa-solid fa-cart-plus"></i>
                <i className="fa-regular fa-heart"></i>
                </div>
                  <img src={image_2} alt=""/>
                  <div className="card-text-In_Store ">
                        <h4>T-Shirt</h4>
                        <p className="price">$29.9</p>
                  </div>
              </div>
              <div className="card-In_Store ">
                <div className="functions">
                <i className="fa-solid fa-cart-plus"></i>
                <i className="fa-regular fa-heart"></i>
                </div>
                  <img src={image_3} alt=""/>
                  <div className="card-text-In_Store ">
                        <h4>T-Shirt</h4>
                        <p className="price">$29.9</p>
                  </div>
              </div>
              <div className="card-In_Store ">
                <div className="functions">
                <i className="fa-solid fa-cart-plus"></i>
                <i className="fa-regular fa-heart"></i>
                </div>
                  <img src={image_4} alt=""/>
                  <div className="card-text-In_Store ">
                        <h4>T-Shirt</h4>
                        <p className="price">$29.9</p>
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
