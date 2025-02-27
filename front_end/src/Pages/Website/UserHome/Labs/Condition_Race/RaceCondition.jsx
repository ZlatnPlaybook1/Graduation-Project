import React from "react";
import Header from "../../Header/Header";
import background from "../../assets/img/Condition_Race/Race Condition back.jpg";
import courseImage from "../../assets/img/Condition_Race/race condition icon.jpg";
import Footer from "../../Footer/Footer";
import "../../Components/Topics CSS/topics.css";
import UseFaqSection from "../../Components/UseFaqSection/UseFaqSection.jsx";
import CourseLanding from "../../Components/CourseLanding/CourseLanding.jsx";
import GoTop from "../../Components/Go2Top_Btn/Go2Top_Btn";

export default function RaceCondition() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  return (
    <>
      <Header />
      {/* Start Landing */}
      <CourseLanding
        background={background}
        courseImage={courseImage}
        courseTitle="Race Condition"
        courseDescription="In this course, you’ll learn about race condition vulnerabilities, which occur when the behavior of a system depends on the sequence or timing of events, allowing attackers to manipulate execution order for malicious purposes. The course covers causes, exploitation techniques, impacts, and best practices for mitigation."
        difficulty="Intermediate"
        duration="45 min"
        onSaveRoom={() => console.log("Room Saved!")}
        onLike={() => console.log("Liked!")}
        onDislike={() => console.log("Disliked!")}
      />
      {/* End Landing */}
      <div className="Content">
        <div className="secure-container" ref={faqSectionRef}>
          <div className="content-row">
            <div className="content-section">
              <dl className="topics-text">
                {/* Single FAQ Area */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 1</span>Definition and Causes
                </dt>
                <dd className="fadeInUp faq-body" id="border-left">
                  <h2>Race Condition:</h2>
                  <p>
                    A race condition happens when multiple threads or
                  </p>
                  <p> 
                  processes access shared resources (e.g., files, memory) simultaneously without proper synchronization,
                  </p>
                  <p>
                  leading to unpredictable behavior.
                  </p> 
                  
                </dd>
                
                {/* Single FAQ Area */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 2</span>Common Scenarios
                </dt>
                <dd className="fadeInUp faq-body" id="border-left">
                  <h2>File Operations:</h2>
                  <p>When multiple processes try to read/write/delete the same file simultaneously.</p>
                  <h2>Database Transactions:</h2>
                  <p>When multiple queries or transactions access the same data without proper locking mechanisms.</p>
                  <h2>Authentication and Authorization:</h2>
                  <p>When checks and actions are not atomic, allowing attackers to bypass security mechanisms.</p>
                  <h2>Time-of-Check to Time-of-Use (TOCTOU):</h2>
                  <p>A specific race condition where a resource changes state between validation and execution.</p>
                </dd>
                
                {/* Single FAQ Area */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 3</span>Exploitation Techniques
                </dt>
                <dd className="fadeInUp faq-body" id="border-left">
                  <h2>Repeatedly Triggering Actions:</h2>
                  <p>Sending multiple requests in quick succession to manipulate execution timing.</p>
                  <h2>Interleaving Operations:</h2>
                  <p>Forcing the system to execute actions in an unintended order.</p>
                  <h2>Bypassing Security Checks:</h2>
                  <p>Exploiting the gap between validation and execution to perform unauthorized actions.</p>
                </dd>
                
                {/* Single FAQ Area */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 4</span>Impact of Race Conditions
                </dt>
                <dd className="fadeInUp faq-body" id="border-left">
                  <h2>Privilege Escalation:</h2>
                  <p>Gaining unauthorized access to higher privileges.</p>
                  <h2>Data Corruption:</h2>
                  <p>Modifying or deleting critical data.</p>
                  <h2>Denial of Service (DoS):</h2>
                  <p>Causing the system to crash or become unresponsive.</p>
                  <h2>Financial Loss:</h2>
                  <p>Exploiting race conditions in financial transactions (e.g., double-spending).</p>
                </dd>
                
                {/* Single FAQ Area */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 5</span>Detection and Prevention
                </dt>
                <dd className="fadeInUp faq-body" id="border-left">
                  <h2>Detection:</h2>
                  <p>Code review, testing, and monitoring for concurrent access issues.</p>
                  <h2>Prevention:</h2>
                  <p>Using synchronization mechanisms, atomic operations, and thread-safe design to prevent race conditions.</p>
                </dd>
                
                {/* Single FAQ Area */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 6</span>Real-World Examples
                </dt>
                <dd className="fadeInUp faq-body" id="border-left">
                  <h2>File-Based Race Conditions:</h2>
                  <p>Exploiting TOCTOU vulnerabilities to replace files after they are checked but before use.</p>
                  <h2>Web Applications:</h2>
                  <p>Triggering multiple requests to change account details simultaneously, leading to security flaws.</p>
                  <h2>Financial Systems:</h2>
                  <p>Exploiting race conditions in payment processing to double-spend or manipulate balances.</p>
                </dd>
              </dl>
            </div>
            <div className="go-to-section">
              <button
                onClick={() => handleGoToLab("/Race_Condition/Race_Condition_Labs")}
                className="go-to"
              >
                Go To Labs
              </button>
            </div>
          </div>
        </div>
      </div>
      <GoTop />
      <Footer />
    </>
  );
}
