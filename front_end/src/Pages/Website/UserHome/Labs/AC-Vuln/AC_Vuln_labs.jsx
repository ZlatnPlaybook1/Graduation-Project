import React from "react";
import Header from "../../Header/Header";
import labImg from "../../assets/img/ACV/lab.jpeg";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Footer/Footer";
import { Card } from "../../Components/Card/Card";
import Go2TopBtn from "../../Components/Go2Top_Btn/Go2Top_Btn";
import LandingPractice from "../../Components/PracticeLanding/PracticeLanding";
import PracticeTitle from "../../Components/PracticeTitle/PracticeTitle";
export default function AC_Vuln_labs() {
  return (
    <>
      <Banner />
      <Header />
      {/* Start Landing */}
      <LandingPractice />
      {/* End Landing */}
      {/* Start Course */}
      <div className="course">
        <div className="container">
          <PracticeTitle title={"Access control vulnerability"} />
          <div className="row">
            <Card
              link={"/AC-Vuln/AC_Vuln_labs/first_lab"}
              image={labImg}
              title={"vulnerability allowing login bypass"}
              brief={[
                "This lab has an unprotected admin panel. Solve the lab by deleting the user",
                <mark>carlos</mark>,
                ".",
              ]}
              difficulty={"Easy"}
            />
            {/* lab2 */}
            <Card
              link={"/AC-Vuln/AC_Vuln_labs/second_lab"}
              image={labImg}
              title={"Unprotected admin functionality with unpredictable URL"}
              brief={[
                `This lab has an unprotected admin panel. It's located at an
                unpredictable location, but the location is disclosed
                somewhere in the application. Solve the lab by accessing the
                admin panel, and using it to delete the user`,
                <mark>carlos</mark>,
                ".",
              ]}
              difficulty={"Easy"}
            />
            {/* Lab3 */}
            <Card
              link={"/AC-Vuln/AC_Vuln_labs/third_lab"}
              image={labImg}
              title={
                "vulnerability in WHERE clause allowing retrieval of hidden data"
              }
              brief={[
                `This lab has an admin panel at /admin, which identifies
                  administrators using a forgeable cookie. Solve the lab by
                  accessing the admin panel and using it to delete the user
                  carlos. You can log in to your own account using the following
                  credentials: `,
                <code>wiener:peter</code>,
                ".",
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
