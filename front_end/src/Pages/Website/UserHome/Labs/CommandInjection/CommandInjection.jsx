import React from "react";
import Header from "../../Header/Header";
import background from "../../assets/img/Command Injection/What-is-a-Command-Injection.png";
import imagecourse from "../../assets/img/Command Injection/Icon_Command_Injection.png";
import Footer from "../../Footer/Footer";
import "../../Components/Topics CSS/topics.css";
import UseFaqSection from "../../Components/UseFaqSection/UseFaqSection.jsx";
import CourseLanding from "../../Components/CourseLanding/CourseLanding.jsx";
import GoTop from "../../Components/Go2Top_Btn/Go2Top_Btn";

export default function CommandInjection() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  return (
    <>
      <Header />
      {/* Start Landing */}
      <CourseLanding
        background={background}
        imagecourse={imagecourse}
        courseTitle=" Command Injection"
        courseDescription="Discover how attackers exploit Command Injection vulnerabilities to execute arbitrary system commands, gain unauthorized access, and manipulate application behavior. Learn how security professionals detect and mitigate these attacks through input validation, parameterized commands, and least privilege enforcement. Master techniques to prevent command injection by sanitizing user inputs, restricting system calls, and implementing secure coding practices to protect applications from exploitation."
        difficulty="Intermediate"
        duration="30 min"
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
                  <span>Task 1</span>Definition
                </dt>
                <dd className="fadeInUp faq-body">
                  <ul className="command-injection-list">
                    <li className="command-injection-item">
                      <span className="highlight-text">Command injection</span>{" "}
                      is a vulnerability where an attacker is able to execute
                      arbitrary commands on a host operating system via a
                      vulnerable application. This happens when user input is
                      incorrectly handled.
                    </li>
                    <li className="command-injection-item">
                      <ul className="command-injection-causes-list">
                        <p>How it work?</p>
                        <li className="command-injection-cause-item">
                          <span className="highlight-text">
                            Insecure Input Handling:
                          </span>{" "}
                          Applications that pass user-supplied input (e.g., form
                          fields, URL parameters) directly into system commands
                          (e.g., exec(), system(), popen() in code) without
                          proper validation or sanitization.
                        </li>
                        <li className="command-injection-cause-item">
                          <span className="highlight-text">
                            Command Chaining:
                          </span>{" "}
                          Attackers inject malicious commands using command
                          separators like:
                          <ul className="command-injection-separator-list">
                            <li className="separator-item">
                              ; (Unix) or & (Windows)
                            </li>
                            <li className="separator-item">
                              | (pipe), &&, ||, $(), backticks (``), or newline
                              characters
                            </li>
                          </ul>
                        </li>
                        <li className="command-injection-cause-item">
                          <span className="highlight-text">Example:</span>{" "}
                          <code>input=example.com; cat /etc/passwd</code> →
                          Executes <code>cat /etc/passwd</code> after the
                          intended command.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </dd>
                {/* Single FAQ Area */}
                <dt className="fadeInUp faq-header">
                  <span>Task 2</span>Impact
                </dt>
                <dd className="fadeInUp faq-body">
                  <ul className="injection-impact-list">
                    <li className="injection-impact-item">
                      <span className="emphasis-text">
                        Full System Compromise:
                      </span>{" "}
                      Execute commands with the same privileges as the
                      vulnerable application (e.g., delete files, install
                      malware, or pivot to other systems).
                    </li>
                    <li className="injection-impact-item">
                      <span className="emphasis-text">Data Theft:</span>{" "}
                      Exfiltrate sensitive files (e.g., /etc/passwd, database
                      credentials).
                    </li>
                    <li className="injection-impact-item">
                      <span className="emphasis-text">Persistence:</span> Create
                      backdoors, cron jobs, or reverse shells.
                    </li>
                    <li className="injection-impact-item">
                      <span className="emphasis-text">
                        Denial of Service (DoS):
                      </span>{" "}
                      Crash the system with commands like <code>rm -rf /</code>{" "}
                      or fork bombs.
                    </li>
                  </ul>
                </dd>
                {/* Single FAQ Area */}
                <dt className="fadeInUp faq-header">
                  <span>Task 2</span>Prevention
                </dt>
                <dd className="fadeInUp faq-body">
                  <ul className="prevention-list">
                    <li className="prevention-item">
                      <span className="highlight-text">
                        Avoid Direct Command Execution:
                      </span>{" "}
                      Use built-in library functions instead of OS commands
                      (e.g., subprocess in Python with shell=False).
                    </li>
                    <li className="prevention-item">
                      <span className="highlight-text">Input Validation:</span>
                      <ul className="input-validation-list">
                        <li className="input-validation-item">
                          <span className="highlight-text">Allowlists:</span>{" "}
                          Restrict input to predefined safe values (e.g., only
                          alphanumeric characters).
                        </li>
                        <li className="input-validation-item">
                          <span className="highlight-text">
                            Block Dangerous Characters:
                          </span>{" "}
                          Filter ;, &, |, $(), and other command separators.
                        </li>
                      </ul>
                    </li>
                    <li className="prevention-item">
                      <span className="highlight-text">
                        Escape/Encode Input:
                      </span>{" "}
                      Use proper escaping for shell metacharacters (e.g.,
                      shlex.quote() in Python).
                    </li>
                    <li className="prevention-item">
                      <span className="highlight-text">Least Privilege:</span>{" "}
                      Run applications with minimal OS permissions (avoid
                      root/admin access).
                    </li>
                    <li className="prevention-item">
                      <span className="highlight-text">Sandboxing:</span>{" "}
                      Isolate processes in containers or restricted environments
                      (e.g., Docker, chroot jails).
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
            <div className="go-to-section">
              <button
                onClick={() =>
                  handleGoToLab("/Command_Injection/Command_Injection_labs")
                }
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
