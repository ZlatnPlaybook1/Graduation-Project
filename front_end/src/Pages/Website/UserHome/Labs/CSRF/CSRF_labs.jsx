import React from "react";
import Header from "../../Header/Header";
import labImg from "../../assets/img/CSRF/lab1.jpeg";
import Footer from "../../Footer/Footer";
import { Card } from "../../Components/Card/Card";
import Go2TopBtn from "../../Components/Go2Top_Btn/Go2Top_Btn";
import LandingPractice from "../../Components/PracticeLanding/PracticeLanding";
import PracticeTitle from "../../Components/PracticeTitle/PracticeTitle";
import ThemeSwitcher from "../../Components/ThemeSwitcher/ThemeSwitcher";
export default function CSRF_labs() {
  const Labs = [
    {
      title: "CSRF vulnerability with no defenses",
      brief: [
        "Discover how attackers can exploit CSRF vulnerabilities to perform unauthorized actions. In this lab, you will:",
        <br />,
        "- Learn how attackers can exploit CSRF vulnerabilities to change user email addresses.",
        "- Practice logging in as an admin and performing malicious actions, like deleting user accounts.",
      ],
      difficulty: "Easy",
    },
    {
      title: "CSRF Exploiting SQL Injection via WHERE Clause",
      brief: [
        "Learn how attackers can exploit poorly implemented SQL queries through CSRF attacks. This lab covers:",
        <br />,
        "- Crafting input to manipulate SQL queries and retrieve hidden data.",
        <br />,
        "- Understanding how CSRF tokens help secure sensitive actions.",
        <br />,
        "- Implementing input validation and protection mechanisms to prevent unauthorized data access.",
      ],
      difficulty: "Easy",
    },
    {
      title: "Preventing CSRF Attacks on Sensitive Actions",
      brief: [
        "Investigate how CSRF attacks can target authenticated users to perform malicious actions. In this lab, you will:",
        <br />,
        "- Analyze the injection of malicious forms that exploit CSRF vulnerabilities.",
        <br />,
        "- Implementing input validation and protection mechanisms to prevent unauthorized data access.",
        <br />,
        "- Apply the SameSite cookie attribute for additional protection against cross-site request forgery.",
      ],
      difficulty: "Easy",
    },
    {
      title: "MCQ Quiz",
      brief: [
        " This quiz will test your knowledge of CSRF attacks and how to prevent them. You will be asked to answer multiple-choice questions on:",
        <br />,
        " - The impact of CSRF attacks on web applications.",
        <br />,
        " - Techniques to prevent CSRF attacks.",
        <br />,
        " - The importance of CSRF tokens in securing web applications.",
      ],
      difficulty: "Easy",
    },
  ]
  return (
    <>
      <Header />
      <LandingPractice />
      <ThemeSwitcher />
      <div className="course">
        <div className="container">
          <PracticeTitle title={"Cross-Site Request Forgery (CSRF)"} />
          <div className="row">
            {Labs.map((lab, index) => (
              <Card
                key={index}
                title={lab.title}
                brief={lab.brief}
                difficulty={lab.difficulty}
                img={labImg}
                link={`/CSRF/${index + 1}`}
              />
            ))}
            
          </div>
        </div>
      </div>
      <Go2TopBtn />
      <Footer />
    </>
  );
}
