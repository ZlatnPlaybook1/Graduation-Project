import React, { useState, useEffect } from "react";
import "../Captcha_labs.css";
import ShowHint_Btn from "../../../../ShowHint_Btn/ShowHint_Btn";
import GoBack_Btn from "../../../../GoBack_Btn/GoBack_Btn";
import axios from "axios";

export default function Captcha_third() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [captcha, setCaptcha] = useState(""); // User input for captcha token
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [id, setID] = useState(1);

  // Fetch CAPTCHA when component mounts
  useEffect(() => {
    setErr(""); // Clear any previous errors
  }, []);

  // Handle the CAPTCHA token change
  function handleCaptchaChange(response) {
    setCaptcha("6LeS-dEqAAAAAI-4UrXcNhSjt83EC5relJgDjp5L"); // Set the token from the reCAPTCHA
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErr("");

    if (!captcha) {
      setErr("Please complete the CAPTCHA.");
      setLoading(false);
      return;
    }

    try {
      // Send the CAPTCHA token to the backend for validation
      const verifyRes = await axios.post(
        "http://127.0.0.1:8080/api/verify-captcha", // The backend URL for verifying captcha
        {
          captchaResponse: captcha, // The CAPTCHA response token
        }
      );

      if (!verifyRes.data.success) {
        setErr("Captcha verification failed, try again.");
        setLoading(false);
        return;
      }

      // Add comment after CAPTCHA is verified
      const newComment = { id, comment };
      await axios.post("http://127.0.0.1:8080/api/capatchalab3comments", {
        comment,
      });

      setComments((prevComments) => [...prevComments, newComment]);
      setID((prevID) => prevID + 1);

      // Reset fields after successful comment submission
      setComment("");
      setCaptcha(""); // Reset captcha token

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
                  <div
                    className="g-recaptcha"
                    data-sitekey="6LeS-dEqAAAAAPpBMi_ZYtf2dHEF5m0GqtzRYzR1" // Replace with your actual Site Key
                    data-callback={handleCaptchaChange}
                  ></div>
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
