import React, { useEffect } from "react";
import styles from "../Page_Styles/Lab.module.css";
import Header from "../../Header/Header";
import image from "../../assets/img/linux/linux_logo.png";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

export default function Linux_lab() {
  useEffect(() => {
    document.title = "Linux Lab";
  }, []);
  return (
    <>
      <Header />
      {/* Start Landing  */}
      <div className={styles.landing}>
        <div className={styles.container}>
          <div className={styles["course-info"]}>
            <div className={styles["course-text"]}>
              <h1>Practice</h1>
              <p className={styles.brief}>
                <i className={`fa-solid fa-bullseye`}></i> Reinforce what you're
                learning
              </p>
              <p>
                Put your knowledge into practice with gamified cyber security
                challenges.
              </p>
            </div>
            <div className={styles["course-icon"]}>
              <div className={styles.border}>
                <div className={styles.content}>
                  <i className={`fas fa-book-open`}></i>
                  <p>Practice</p>
                  <i className={`fas fa-bullseye`}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Landing  */}
      {/* Start Courses  */}
      <div className={styles.course}>
        <div className={styles.container}>
          <h2>Linux Lab</h2>
          <p className={styles["section-p"]}>Test Your Hacking skills</p>
          <div className={styles.row}>
            <Link
              to="/linux/linux_lab/patient"
              className={styles["course-card"]}
            >
              <div className={styles["course-image"]}>
                <img src={image} alt="" />
              </div>
              <div className={styles["course-text"]}>
                <h3>be Patient</h3>
                <p>Try to Capture the Flag</p>
                <ul className={styles["circled-order"]}>
                  <li>Download this file and open it on your Linux machine</li>
                  {/* <li>use waht you learn and try to find the flag</li> */}
                </ul>
              </div>
              <div className={styles.easy}>
                <i className={`fa-solid fa-signal`}></i>
                <p>Easy</p>
              </div>
            </Link>
            <Link
              to="/linux/linux_lab/power-of-command"
              className={styles["course-card"]}
            >
              <div className={styles["course-image"]}>
                <img src={image} alt="" />
              </div>
              <div className={styles["course-text"]}>
                <h3>Power Of Command</h3>
                <p>Try to Capture the Flag</p>
                <ul className={styles["circled-order"]}>
                  <li>Download this file and open it on your Linux machine</li>
                </ul>
              </div>
              <div className={styles.easy}>
                <i className={`fa-solid fa-signal`}></i>
                <p>Easy</p>
              </div>
            </Link>
            <Link
              to="/linux/linux_lab/welcome"
              className={styles["course-card"]}
            >
              <div className={styles["course-image"]}>
                <img src={image} alt="" />
              </div>
              <div className={styles["course-text"]}>
                <h3>Welcome</h3>
                <p>Try to Capture the Flag</p>
                <ul className={styles["circled-order"]}>
                  <li>Download this file and open it on your Linux machine</li>
                </ul>
              </div>
              <div className={styles.easy}>
                <i className={`fa-solid fa-signal`}></i>
                <p>Easy</p>
              </div>
            </Link>
            <Link
              to="/linux/linux_lab/test-yourself"
              className={styles["course-card"]}
            >
              <div className={styles["course-image"]}>
                <img src={image} alt="" />
              </div>
              <div className={styles["course-text"]}>
                <h3>Test YourSelf</h3>
                <p>Try to Capture the Flag</p>
                <ul className={styles["circled-order"]}>
                  <li>Download this file and open it on your Linux machine</li>
                </ul>
              </div>
              <div className={styles.easy}>
                <i className={`fa-solid fa-signal`}></i>
                <p>Easy</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}
