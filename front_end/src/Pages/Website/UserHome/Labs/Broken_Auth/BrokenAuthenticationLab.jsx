import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Auth_Photo from "../../assets/img/Broken Authentication/Auth_Icon.png";
import { Card } from "../../Components/Card/Card";
import GoTop from "../../Components/Go2Top_Btn/Go2Top_Btn";
import LandingPractice from "../../Components/PracticeLanding/PracticeLanding";
export default function BrokenAuthenticationLab() {
  return (
    <>
      <Header />
      {/* Start Landing */}
      <LandingPractice />
      {/* End Landing */}
      <div className="course">
        <div className="container">
          <h2>Broken Authentication Labs</h2>
          <p className="section-p">Test Your Hacking skills</p>
          <div className="row">
            {/* lab1 */}
            <Card
              link={"/broken-auth/Broken_Authentication_Lab/lab1"}
              image={Auth_Photo}
              title={"Brute Force 1"}
              brief={"Find the password of the admin"}
              difficulty={"Easy"}
            />
            {/* lab2 */}
            <Card
              link={"/broken-auth/Broken_Authentication_Lab/lab2"}
              image={Auth_Photo}
              title={"Brute Force 2"}
              brief={
                "Developers forgot to add exit function when redirecting. Good luck!"
              }
              difficulty={"Easy"}
            />
            {/* lab3 */}
            <Card
              link={"/broken-auth/Broken_Authentication_Lab/lab3"}
              image={Auth_Photo}
              title={"No Redirect"}
              brief={
                "Developers forgot to add exit function when redirecting. Good luck!"
              }
              difficulty={"Easy"}
            />
          </div>
        </div>
      </div>
      <GoTop />
      <Footer />
    </>
  );
}
