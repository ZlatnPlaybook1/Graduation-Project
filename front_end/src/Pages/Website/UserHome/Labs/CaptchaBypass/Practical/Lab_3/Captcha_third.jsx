import React, { useState, useEffect, useRef } from "react";
import "../Captcha_labs.css";
import ReCAPTCHA from "react-google-recaptcha";
import ShowHint_Btn from "../../../../ShowHint_Btn/ShowHint_Btn";
import GoBack_Btn from "../../../../GoBack_Btn/GoBack_Btn";
import axios from "axios";

export default function Captcha_third() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [captcha, setCaptcha] = useState(null); // User input for captcha token
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [id, setID] = useState(1);

  const recaptchaRef = useRef(null);

  // Load reCAPTCHA script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  // Handle the CAPTCHA token change
  function handleCaptchaChange(response) {
    setCaptcha(response);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErr("");
    console.log(captcha);
    if (!captcha) {
      setErr("Please complete the CAPTCHA.");
      setLoading(false);
      return;
    }

    try {
      // Verify CAPTCHA with backend
      const verifyRes = await axios.post(
        "http://127.0.0.1:8080/api/capatchalab3",
        {
          captchaResponse: captcha,
        }
      );

      if (!verifyRes.data.success) {
        setErr("Captcha verification failed, try again.");
        setLoading(false);
        return;
      }

      // Add comment after CAPTCHA verification
      const newComment = { id, comment };
      await axios.post("http://127.0.0.1:8080/api/capatchalab3comments", {
        comment,
      });

      setComments((prev) => [...prev, newComment]);
      setID((prevID) => prevID + 1);

      // Reset form
      setComment("");
      setCaptcha("");

      if (recaptchaRef.current) {
        window.grecaptcha.reset(); // Reset reCAPTCHA
      }

      setLoading(false);
    } catch (error) {
      setErr("Network Error: Could not submit the comment.");
      setLoading(false);
      console.error(error);
    }
  }

  return (
    <div className="body">
      <GoBack_Btn />
      <ShowHint_Btn
        hintText={`<p>Click inspect and try to beautify and deobfuscate script using:</p>
          <a href="https://filipemgs.github.io/poisonjs/">De-obfuscate</a>
          <a href="https://beautifier.io/">Beautifier.io</a>`}
      />
      <div className="captcha_first">
        <div className="container-captcha">
          <div className="card-captcha">
            <div className="card_content">
              <form onSubmit={handleSubmit}>
                <div className="form-group-captcha">
                  <label htmlFor="comment">Enter Your Comment</label>
                  <textarea
                    name="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="input"
                    required
                  ></textarea>
                </div>
                <div className="form-group-captcha text-center my-3 text-white">
                  <h3>Captcha Verification</h3>
                  {/* <div
                    className="g-recaptcha"
                    data-sitekey="6LeS-dEqAAAAAPpBMi_ZYtf2dHEF5m0GqtzRYzR1"
                    data-callback={handleCaptchaChange}
                    ref={recaptchaRef}
                    name="captcha"
                    value={captcha}
                  ></div> */}
                  <ReCAPTCHA
                    sitekey="6LeS-dEqAAAAAPpBMi_ZYtf2dHEF5m0GqtzRYzR1"
                    onChange={handleCaptchaChange}
                  />
                </div>
                <div className="form-group-captcha">
                  <button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send"}
                  </button>
                  {err && <span className="error">{err}</span>}
                </div>
              </form>
            </div>
          </div>

          <div className="reset mb-5">
            <button onClick={() => setCaptcha("")} disabled={loading}>
              {loading ? "Resetting..." : "Reset"}
            </button>
          </div>

          <div className="comment-section">
            {comments.map((cmt) => (
              <div key={cmt.id} className="comment-card">
                <div className="comment-header">
                  <p className="name">#{cmt.id}</p>
                </div>
                <p className="comment-text">{cmt.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
