import Footer from "../../../../Footer/Footer";
import Header from "../../../../Header/Header";
import styles from "./Patient.module.css";
import React from "react";

export default function Patient() {
  const fileUrl =
    "./lap_linux/be_patient_or_skillful/be_patient_or_skillful.txt";
  const fileName = "be_patient_or_skillful.txt";

  const download = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "be_patient_or_skillful.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
                <p>{fileName}</p>
                <button onClick={download} className={styles.downloadButton}>
                  <i className="fas fa-download"></i> Download File
                </button>
              </div>
              <div className={styles["question-div"]}>
                <p className={styles.question}>
                  If we wanted to output the text "TryHackMe", what would our
                  command be?
                </p>
                <form>
                  <input
                    type="text"
                    name="answer"
                    placeholder="Answer Format: **********"
                  />
                  <button>
                    <i className="fa-regular fa-paper-plane"></i>Submit
                  </button>
                </form>
                <p className={styles.question}>
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
