// import React, { useState } from "react";
// import axios from "axios";
import "./Our_Store.css";
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
import { Link } from "react-router-dom";

export default function Our_Store() {
  // const [err, setErr] = useState("");
  return (
    <>
    <Header />
    {/* Start Courses  */}
    <div className="course-Our_Store ">
      <div className="container-Our_Store ">
      <h2>Click The Link To Go To T-Shirts In Our Store</h2>
          <div className="row-practice">
              <Link to="/Sql_Injection/sql_Injection_lab/second_lab/in_store" className="store-link">T-Shirts</Link>
          </div>
      </div>
  </div>
    {/* End Course Content  */}
    <Footer />
  </>
  );
}
