import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "./BrokenAuthentication.css";
import "../../Components/Topics CSS/topics.css";
import background from "../../assets/img/Broken Authentication/broken_authentication_blogpost.png";
import imagecourse from "../../assets/img/Broken Authentication/broken-authentication.png";
import UseFaqSection from "../../Components/UseFaqSection/UseFaqSection.jsx";
import LandingLab from "../../Components/LandingLab/LandingLab.jsx";
import GoTop from "../../Components/Go2Top_Btn/Go2Top_Btn";

export default function BrokenAuthentication() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();

  return (
    <>
      <Header />
      {/* Start Landing */}
      <LandingLab
        background={background}
        imagecourse={imagecourse}
        courseTitle="Broken Authentication"
        courseDescription="This course delves into the common vulnerabilities in authentication systems that can lead to security breaches. You will learn about the flaws in authentication mechanisms, such as weak password policies, improper session management, and failure to validate user inputs, and how these weaknesses can be exploited by attackers. By the end of the course, you will understand how to strengthen authentication systems, implement secure login processes, and protect user identities against unauthorized access."
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
                  <span>Task 1</span>Description
                </dt>
                <dd className="fadeInUp faq-body">
                  <ul className="auth-issues-list">
                    <li className="auth-issue-item">
                      <span className="special-highlight">
                        Broken authentication
                      </span>{" "}
                      occurs when an application’s authentication mechanism is
                      improperly designed or implemented, allowing attackers to
                      bypass authentication or impersonate users. Common causes
                      include:
                    </li>
                    <li className="auth-issue-item">
                      <ul className="auth-causes-list">
                        <li className="auth-cause-item">
                          <span className="special-highlight">
                            Failure to enforce strong password policies.
                          </span>
                        </li>
                        <li className="auth-cause-item">
                          Session management flaws (e.g., session IDs exposed or
                          not invalidated after logout).
                        </li>
                        <li className="auth-cause-item">
                          Lack of multi-factor authentication (MFA).
                        </li>
                        <li className="auth-cause-item">
                          Insecure storage or transmission of credentials.
                        </li>
                        <li className="auth-cause-item">
                          Poor defense against automated attacks, like
                          credential stuffing or brute-force attacks.
                        </li>
                      </ul>
                    </li>
                    <li className="auth-issue-item">
                      These weaknesses can result in unauthorized access,
                      leading to account compromise, data theft, and
                      unauthorized actions.
                    </li>
                  </ul>
                </dd>
                {/* Single FAQ Area */}
                <dt className="fadeInUp faq-header">
                  <span>Task 2</span> Impact
                </dt>
                <dd className="fadeInUp faq-body">
                  <ul className="impact-list">
                    <div class="auth-consequences-title">
                      Consequences of Broken Authentication:
                    </div>
                    <li className="impact-item">
                      <span className="special-highlight">
                        Account Takeover:
                      </span>
                      <ul className="impact-detail-list">
                        <li className="impact-detail-item">
                          Attackers gain unauthorized control over user
                          accounts.
                        </li>
                        <li className="impact-detail-item">
                          Impersonation of users, leading to privacy violations.
                        </li>
                      </ul>
                    </li>
                    <li className="impact-item">
                      <span className="special-highlight">Data Breaches:</span>
                      <ul className="impact-detail-list">
                        <li className="impact-detail-item">
                          Sensitive user or organizational data can be accessed
                          or stolen.
                        </li>
                        <li className="impact-detail-item">
                          GDPR, HIPAA, or other compliance violations can occur.
                        </li>
                      </ul>
                    </li>
                    <li className="impact-item">
                      <span className="special-highlight">
                        Privilege Escalation:
                      </span>
                      <ul className="impact-detail-list">
                        <li className="impact-detail-item">
                          Attackers may exploit admin or privileged accounts,
                          enabling them to make destructive changes to systems
                          or steal critical data.
                        </li>
                      </ul>
                    </li>
                    <li className="impact-item">
                      <span className="special-highlight">
                        Business and Reputation Damage:
                      </span>
                      <ul className="impact-detail-list">
                        <li className="impact-detail-item">
                          Users lose trust in the system, leading to financial
                          and reputational losses for the business.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </dd>
                {/* Single FAQ Area */}
                <dt className="fadeInUp faq-header">
                  <span>Task 3</span> Scenarios
                </dt>
                <dd className="fadeInUp faq-body">
                  <ul className="scenario-list">
                    {/* Scenario 1 */}
                    <li className="scenario-item">
                      <span className="scenario-title">
                        Scenario 1: Weak Password Policies
                      </span>
                      <ul className="scenario-details">
                        <li className="detail">
                          An e-commerce platform allows users to create
                          passwords like "12345" or "password123."
                        </li>
                        <li className="detail">
                          An attacker uses a brute-force script to try commonly
                          used passwords and successfully logs into multiple
                          accounts.
                        </li>
                      </ul>
                      <div className="impact">
                        Impact: Unauthorized access to users’ orders, payment
                        details, and personal information.
                      </div>
                    </li>
                    {/* Scenario 2 */}
                    <li className="scenario-item">
                      <span className="scenario-title">
                        Scenario 2: Credential Stuffing
                      </span>
                      <ul className="scenario-details">
                        <li className="detail">
                          A website does not protect against repeated login
                          attempts.
                        </li>
                        <li className="detail">
                          Attackers use credentials obtained from a data breach
                          on another site, trying them on this platform.
                        </li>
                      </ul>
                      <div className="impact">
                        Impact: Attackers gain access to user accounts where
                        passwords were reused, potentially exposing sensitive
                        data.
                      </div>
                    </li>
                    {/* Additional Scenarios */}
                    <li className="scenario-item">
                      <span className="scenario-title">
                        Scenario 3: Session Hijacking
                      </span>
                      <ul className="scenario-details">
                        <li className="detail">
                          A session ID is exposed in a URL or stored in local
                          storage, which is accessible via JavaScript.
                        </li>
                        <li className="detail">
                          An attacker uses a Cross-Site Scripting (XSS)
                          vulnerability to steal the session ID and hijack the
                          user session.
                        </li>
                      </ul>
                      <div className="impact">
                        Impact: The attacker impersonates the user without
                        needing their password.
                      </div>
                    </li>
                    <li className="scenario-item">
                      <span className="scenario-title">
                        Scenario 4: Missing MFA
                      </span>
                      <ul className="scenario-details">
                        <li className="detail">
                          A high-privilege admin account is protected only by a
                          password.
                        </li>
                        <li className="detail">
                          An attacker guesses or steals the password via
                          phishing.
                        </li>
                      </ul>
                      <div className="impact">
                        Impact: The attacker gains full access to the system and
                        performs unauthorized actions.
                      </div>
                    </li>
                    <li className="scenario-item">
                      <span className="scenario-title">
                        Scenario 5: Insecure Password Recovery
                      </span>
                      <ul className="scenario-details">
                        <li className="detail">
                          A website sends password reset tokens via email but
                          does not expire them after use.
                        </li>
                        <li className="detail">
                          An attacker intercepts the token and reuses it.
                        </li>
                      </ul>
                      <div className="impact">
                        Impact: The attacker resets the user’s password and
                        takes control of the account.
                      </div>
                    </li>
                  </ul>
                </dd>
                {/* Single FAQ Area */}
                <dt className="fadeInUp faq-header">
                  <span>Task 4</span> Prevention
                </dt>
                <dd className="fadeInUp faq-body">
                  <ul className="security-list">
                    <li className="security-item">
                      <div className="intro-text">
                        To mitigate broken authentication vulnerabilities,
                        implement the following measures:
                      </div>
                      <span className="section-title">
                        Authentication Security
                      </span>
                      <div className="section-details">
                        <div className="detail-item">
                          <strong>1. Strong Password Policies:</strong>
                          <ul className="detail-list">
                            <li className="emoji">
                              🔒 Enforce password complexity with a minimum
                              length of 8-12 characters, and require uppercase,
                              lowercase, numbers, and symbols.
                            </li>
                            <li className="emoji">
                              🔑 Ban commonly used passwords by integrating
                              breached password databases (e.g., HaveIBeenPwned
                              API).
                            </li>
                            <li className="emoji">
                              🔄 Require periodic password changes.
                            </li>
                          </ul>
                        </div>
                        <div className="detail-item">
                          <strong>2. Multi-Factor Authentication (MFA):</strong>
                          <ul className="detail-list">
                            <li className="emoji">
                              📱 Use a second factor for authentication, such as
                              Time-based One-Time Passwords (TOTP) via apps like
                              Google Authenticator, push notifications, or
                              biometrics (fingerprint or facial recognition).
                            </li>
                            <li className="emoji">
                              🔐 Make MFA mandatory for admin and high-privilege
                              accounts.
                            </li>
                          </ul>
                        </div>
                        <div className="detail-item">
                          <strong>3. Secure Credential Storage:</strong>
                          <ul className="detail-list">
                            <li className="emoji">
                              💾 Hash passwords with strong algorithms like
                              bcrypt (preferred), Argon2, or PBKDF2.
                            </li>
                            <li className="emoji">
                              🔒 Salt passwords before hashing to defend against
                              rainbow table attacks.
                            </li>
                          </ul>
                        </div>
                        <div className="detail-item">
                          <strong>4. Use CAPTCHA for Bots:</strong>
                          <ul className="detail-list">
                            <li className="emoji">
                              🤖 Add CAPTCHA (e.g., reCAPTCHA) to login,
                              registration, and password reset forms to block
                              automated attacks.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="security-item">
                      <span className="section-title">Session Management</span>
                      <div className="section-details">
                        <div className="detail-item">
                          <strong>5. Secure Session Tokens:</strong>
                          <ul className="detail-list">
                            <li className="emoji">
                              🔑 Use random, cryptographically secure tokens.
                            </li>
                            <li className="emoji">
                              🍪 Store session tokens in HTTP-only, secure
                              cookies (to prevent client-side access).
                            </li>
                            <li className="emoji">
                              ⚙️ Mark cookies with the SameSite attribute to
                              prevent cross-site request forgery (CSRF).
                            </li>
                          </ul>
                        </div>
                        <div className="detail-item">
                          <strong>6. Session Timeout:</strong>
                          <ul className="detail-list">
                            <li className="emoji">
                              ⏲️ Set short inactivity timeouts for sensitive
                              operations.
                            </li>
                            <li className="emoji">
                              🔄 Force token expiration after logout or password
                              change.
                            </li>
                          </ul>
                        </div>
                        <div className="detail-item">
                          <strong>7. Prevent Session Fixation:</strong>
                          <ul className="detail-list">
                            <li className="emoji">
                              🔄 Regenerate session IDs after login or privilege
                              escalation.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="security-item">
                      <span className="section-title">
                        Defenses Against Credential Attacks
                      </span>
                      <div className="section-details">
                        <div className="detail-item">
                          <strong>8. Account Lockout Mechanisms:</strong>
                          <ul className="detail-list">
                            <li className="emoji">
                              🔒 Lock accounts temporarily after several failed
                              login attempts.
                            </li>
                            <li className="emoji">
                              ⚠️ Notify users about suspicious login attempts.
                            </li>
                          </ul>
                        </div>
                        <div className="detail-item">
                          <strong>9. Monitor and Detect:</strong>
                          <ul className="detail-list">
                            <li className="emoji">
                              🔍 Implement logging and monitoring for unusual
                              login patterns or location changes.
                            </li>
                            <li className="emoji">
                              📊 Use rate-limiting to prevent brute force
                              attacks.
                            </li>
                          </ul>
                        </div>
                        <div className="detail-item">
                          <strong>10. Use Federated Identity:</strong>
                          <ul className="detail-list">
                            <li className="emoji">
                              🔗 Use trusted third-party identity providers
                              (e.g., OAuth 2.0, OpenID Connect) to handle
                              authentication securely.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </dd>
                {/* Single FAQ Area */}
                <dt className="fadeInUp faq-header">
                  <span> Task 5</span>
                  Tools for Testing and Prevention
                </dt>
                <dd className="fadeInUp faq-body">
                  <ul className="security-list">
                    <li className="security-item">
                      <span className="section-title">
                        For Testing Authentication Flaws:
                      </span>
                      <div className="section-details">
                        <div className="detail-item">
                          <strong>• Burp Suite:</strong>
                          <ul className="detail-list">
                            <li className="emoji">
                              🛠️ To test for vulnerabilities like session
                              hijacking or weak password policies.
                            </li>
                          </ul>
                        </div>
                        <div className="detail-item">
                          <strong>• OWASP ZAP:</strong>
                          <ul className="detail-list">
                            <li className="emoji">
                              🔍 To scan for common authentication issues.
                            </li>
                          </ul>
                        </div>
                        <div className="detail-item">
                          <strong>• Hydra/Medusa:</strong>
                          <ul className="detail-list">
                            <li className="emoji">
                              🔐 For brute-force testing (only with
                              authorization!).
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="security-item">
                      <span className="section-title">
                        For Securing Authentication:
                      </span>
                      <div className="section-details">
                        <div className="detail-item">
                          <strong>• Security frameworks and libraries:</strong>
                          <ul className="detail-list">
                            <li className="emoji">
                              🔒 Spring Security (Java).
                            </li>
                            <li className="emoji">🔐 Passport.js (Node.js).</li>
                            <li className="emoji">
                              🛡️ Devise (Ruby on Rails).
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
            <div className="go-to-section">
              <button
                onClick={() =>
                  handleGoToLab("/broken-auth/Broken_Authentication_Lab")
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
