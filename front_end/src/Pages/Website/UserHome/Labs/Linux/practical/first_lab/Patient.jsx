import Footer from "../../../../Footer/Footer";
import Header from "../../../../Header/Header";
import styles from "./Patient.module.css";
import React, { useEffect } from "react";

export default function Patient() {
  const fileUrl = "/be_patient_or_skillful.rar";
  const fileName = "be_patient_or_skillful.rar";
  useEffect(() => {
    document.title = "Be Patient or Skillful";
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
                {/* <p className={styles.question}>
                  What is the username of who you're logged in as on your
                  deployed Linux machine?
                </p>
                <form action="">
                  <input
                    type="text"
                    name="answer"
                    placeholder="Answer Format: **********"
                  />
                  <button>
                    <i className="fa-regular fa-paper-plane"></i>Submit
                  </button>
                </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
