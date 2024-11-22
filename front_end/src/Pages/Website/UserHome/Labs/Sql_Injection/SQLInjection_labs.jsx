import React from "react";
import Header from "../../Header/Header";
import "./SQLInjection_lab.css";
import labImg from "../../assets/img/SQL_Injection/lab.png";

import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
export default function SQLInjection_lab() {
  return (
    <>
      <Header />
      {/* Start Landing */}
      <div className="landing-sql-injection">
        <div className="container-sql-injection">
          <div className="course-info-sql-injection">
            <div className="course-text-sql-injection">
              <h1>Practice</h1>
              <p className="brief-sql-injection">
                <i className="fa-solid fa-bullseye lab-sql-injection"></i>
                Reinforce what you're learning
              </p>
              <p>
                Put your knowledge into practice with gamified cyber security
                challenges.
              </p>
            </div>
            <div className="course-icon-sql-injection">
              <div className="border-sql-injection">
                <div className="content-sql-injection">
                  <i className="fas fa-book-open lab-sql-injection"></i>
                  <p>Practice</p>
                  <i className="fas fa-bullseye lab-sql-injection"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Landing */}

      {/* Start Course */}
      <div className="course-sql-injection">
        <div className="container-sql-injection">
          <h2>SQL Injection Labs</h2>
          <p className="section-p-sql-injection">Test Your Hacking Skills</p>
          <div className="row-sql-injection">
            {/* lab1 */}
            <Link
              to="/Sql_Injection/sql_Injection_lab/login"
              className="course-card-sql-injection"
            >
              <div className="course-image-sql-injection">
                <img src={labImg} alt="" />
              </div>
              <div className="course-text-sql-injection">
                <h3>vulnerability allowing login bypass</h3>
                <p>
                  This lab contains a SQL injection vulnerability in the login
                  function.
                  <br /> <b>To solve the lab:</b> perform a SQL injection attack
                  that logs in to the application as the <mark>Ahmed</mark>{" "}
                  user.
                </p>
              </div>
              <div className="easy-sql-injection">
                <i className="fa-solid fa-signal lab-sql-injection"></i>
                <p>Easy</p>
              </div>
            </Link>
            {/* lab2 */}
            <Link
              to="/Sql_Injection/sql_Injection_lab/second_lab/our_store"
              className="course-card-sql-injection"
            >
              <div className="course-image-sql-injection">
                <img src={labImg} alt="" />
              </div>
              <div className="course-text-sql-injection">
                <h3>
                  vulnerability in WHERE clause allowing retrieval of hidden
                  data
                </h3>
                <p>
                  This lab contains a SQL injection vulnerability in the product
                  category filter. When the user selects a category, the
                  application carries out a SQL query like the following: <br />
                  <code>
                    <mark>
                      SELECT * FROM products WHERE category = 'T-Shirts' AND
                      released = 1
                    </mark>
                  </code>
                  <br />
                  <b>To solve the lab:</b> perform a SQL injection attack that
                  causes the application to display one or more unreleased
                  products.
                </p>
              </div>
              <div className="easy-sql-injection">
                <i className="fa-solid fa-signal lab-sql-injection"></i>
                <p>Easy</p>
              </div>
            </Link>
            {/* lab3 */}
            <Link
              to="/Sql_Injection/sql_Injection_lab/third_lab/prices-exp"
              className="course-card-sql-injection"
            >
              <div className="course-image-sql-injection">
                <img src={labImg} alt="" />
              </div>
              <div className="course-text-sql-injection">
                <h3>
                  UNION attack, determining the number of columns returned by
                  the query
                </h3>
                <p>
                  <b>To solve the lab:</b> determine the number of columns
                  returned by the query by performing a SQL injection{" "}
                  <mark>UNION</mark> attack that returns an additional row
                  containing null values.
                </p>
              </div>
              <div className="easy-sql-injection">
                <i className="fa-solid fa-signal lab-sql-injection"></i>
                <p>Medium</p>
              </div>
            </Link>
            {/* lab4 */}
            <Link
              to="/Sql_Injection/sql_Injection_lab/fourth_lab"
              className="course-card-sql-injection"
            >
              <div className="course-image-sql-injection">
                <img src={labImg} alt="" />
              </div>
              <div className="course-text-sql-injection">
                <h3>UNION attack, finding a column containing text</h3>
                <p>
                  The lab will provide a random value that you need to make
                  appear within the query results.
                  <br /> <b>To solve the lab: </b>
                  <i>
                    perform a SQL injection UNION attack that returns an
                    additional row containing the value provided. This technique
                    helps you determine which columns are compatible with string
                    data.
                  </i>
                </p>
              </div>
              <div className="easy-sql-injection">
                <i className="fa-solid fa-signal lab-sql-injection"></i>
                <p>Medium</p>
              </div>
            </Link>
            {/* lab5 */}
            <Link
              to="/Sql_Injection/sql_Injection_lab/fifth_lab"
              className="course-card-sql-injection"
            >
              <div className="course-image-sql-injection">
                <img src={labImg} alt="" />
              </div>
              <div className="course-text-sql-injection">
                <h3>UNION attack, retrieving data from other tables</h3>
                <p>
                  The database contains a different table called{" "}
                  <mark>users</mark> with columns called <mark>username</mark>{" "}
                  and <mark>password</mark>. <br /> <b>To solve the lab:</b>{" "}
                  perform a SQL injection <mark>UNION</mark> attack that
                  retrieves all usernames and passwords, and use the information
                  to log in as the <mark>administrator</mark> user.
                </p>
                {/* <ul className="circled-order-sql-injection">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul> */}
              </div>
              <div className="easy-sql-injection">
                <i className="fa-solid fa-signal lab-sql-injection"></i>
                <p>Hard</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* End Course */}
      <Footer />
    </>
  );
}
