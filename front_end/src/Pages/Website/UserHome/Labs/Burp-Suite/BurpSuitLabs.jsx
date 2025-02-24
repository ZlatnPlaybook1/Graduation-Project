import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Auth_Photo from "../../assets/img/Burp_Suit/Labs-Burp-Suit.jpg";
import { Card } from "../../Components/Card/Card";
import GoTop from "../../Components/Go2Top_Btn/Go2Top_Btn";
import LandingPractice from "../../Components/PracticeLanding/PracticeLanding";

export default function BurpSuitLabs() {
  return (
    <>
      <Header />
      {/* Start Landing */}
      <LandingPractice />
      {/* End Landing */}
      {/* Start Course */}
      <div className="course">
        <div className="container">
          <h2>Burp Suit Labs</h2>
          <p className="section-p">Test Your Hacking skills</p>
          <div className="row">
            {/* lab1 */}
            <Card
              link={"/Burp_Suit/Burp_Suit_Labs/lab1"}
              image={Auth_Photo}
              title={"Bake Your Own Cookies"}
              brief={
                "When ‘user’ isn’t enough—forge the cookie and become admin"
              }
              difficulty={"Easy"}
            />
            {/* lab2 */}
            <Card
              link={"/Burp_Suit/Burp_Suit_Labs/lab2"}
              image={Auth_Photo}
              title={"Cookie Cracking Cascade"}
              brief={
                "A lab where cookies aren’t snacks… they’re keys to admin power."
              }
              difficulty={"Easy"}
            />
            {/* lab3 */}
            <Card
              link={"/Burp_Suit/Burp_Suit_Labs/lab3"}
              image={Auth_Photo}
              title={"Cookie Cracking Cascade"}
              brief={
                "A lab where cookies aren’t snacks… they’re keys to admin power."
              }
              difficulty={"Easy"}
            />
            {/* lab4 */}
            <Card
              link={"/Burp_Suit/Burp_Suit_Labs/lab4"}
              image={Auth_Photo}
              title={"Cookie Cracking Cascade"}
              brief={
                "A lab where cookies aren’t snacks… they’re keys to admin power."
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
