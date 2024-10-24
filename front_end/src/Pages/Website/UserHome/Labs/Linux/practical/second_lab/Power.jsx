import Footer from "../../../../Footer/Footer";
import Header from "../../../../Header/Header";
import styles from "./Power.module.css";
import React, { useEffect } from "react";

export default function Power() {
  const fileUrl = "/power_of_comand.rar";
  const fileName = "power_of_comand.rar";
  useEffect(() => {
    document.title = "Power of Command";
  }, []);

  return (
    <>
      <Header />
      <div className={styles.course}>
        {/* <div className={`${styles.message} ${styles.success}`}>
          Right Answers
        </div>
        <div className={`${styles.message} ${styles.fail}`}>Wrong Answers</div> */}
        <div className={styles.container}>
          <div className={styles.container}>
            <div className={styles["faq-section"]}>
            <div className={styles.caution}>
                <p>Download This file and open it in your linux machine Linux</p>
              <i className="fa-solid fa-triangle-exclamation"></i>
              </div>
              <div className={styles.fileViewer}>
                <a href={fileUrl} download={fileName}>
                  {/* <button onClick={download} className={styles.downloadButton}> */}
                  <button className={styles.downloadButton}>
                    <i className="fas fa-download"></i>
                    {fileName}
                  </button>
                </a>
              </div>
              <div className={styles["question-div"]}>
              <h1 className={styles.question}>
                check your answer here  :
                </h1>
                <form>
                  <input
                    type="text"
                    name="answer"
                    placeholder="Flag Format: flag{**********}" 
                  />
                  <button>
                    <i className="fa-regular fa-paper-plane"></i>Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
