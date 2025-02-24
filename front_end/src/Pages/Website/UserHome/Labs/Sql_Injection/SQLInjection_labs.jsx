import React from "react";
import Header from "../../Header/Header";
import "../Page_Styles/Lab.css";
import labImg from "../../assets/img/SQL_Injection/lab.png";
import Footer from "../../Footer/Footer";
import { Card } from "../../Components/Card/Card";
import Go2TopBtn from "../../Components/Go2Top_Btn/Go2Top_Btn";
import LandingPractice from "../../Components/PracticeLanding/PracticeLanding";
export default function SQLInjection_lab() {
  return (
    <>
      <Header />
      {/* Start Landing */}
      <LandingPractice />
      {/* End Landing */}
      {/* Start Course */}
      <div className="course">
        <div className="container">
          <h2>SQL Injection Labs</h2>
          <p className="section-p">Test Your Hacking Skills</p>
          <div className="row">
            {/* lab1 */}
            <Card
              link={"/Sql_Injection/sql_Injection_lab/login"}
              image={labImg}
              title={"vulnerability allowing login bypass"}
              brief={[
                "This lab contains a SQL injection vulnerability in the login function.",
                <br />,
                <b>To solve the lab:</b>,
                " perform a SQL injection attack that logs in to the application as the ",
                <mark>Ahmed</mark>,
                " user.",
              ]}
              difficulty={"Easy"}
            />
            {/* lab2 */}
            <Card
              link={"/Sql_Injection/sql_Injection_lab/second_lab/our_store"}
              image={labImg}
              title={
                "vulnerability in WHERE clause allowing retrieval of hidden data"
              }
              brief={[
                " This lab contains a SQL injection vulnerability in the product category filter. When the user selects a category, the application carries out a SQL query like the following:  ",
                <br />,
                <code>
                  <mark>To solve the lab:</mark>
                </code>,
                <br />,
                <b>To solve the lab:</b>,
                " perform a SQL injection attack that causes the application to display one or more unreleased products. ",
              ]}
              difficulty={"Easy"}
            />
            {/* lab3 */}
            <Card
              link={"/Sql_Injection/sql_Injection_lab/third_lab/show-prices"}
              image={labImg}
              title={
                "UNION attack, determining the number of columns returned by the query"
              }
              brief={[
                <b>To solve the lab:</b>,
                " determine the number of columns returned by the query by performing a SQL injection ",
                <mark>UNION</mark>,
                " attack that returns an additional row containing null values.",
              ]}
              difficulty={"Easy"}
            />
            {/* lab4 */}
            <Card
              link={"/Sql_Injection/sql_Injection_lab/fourth_lab/show_prices"}
              image={labImg}
              title={"UNION attack, finding a column containing text"}
              brief={[
                "The lab will provide a random value that you need to make appear within the query results.",
                <br />,
                <b>To solve the lab:</b>,
                <i>
                  perform a SQL injection UNION attack that returns an
                  additional row containing the value provided. This technique
                  helps you determine which columns are compatible with string
                  data.
                </i>,
              ]}
              difficulty={"Easy"}
            />
          </div>
        </div>
      </div>
      {/* End Course */}
      <Go2TopBtn />
      <Footer />
    </>
  );
}
