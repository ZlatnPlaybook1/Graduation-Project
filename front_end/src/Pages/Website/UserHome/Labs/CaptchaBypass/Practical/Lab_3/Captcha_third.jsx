import React, { useState, useRef } from "react";
import "../Captcha_labs.css";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

export default function CaptchaThird() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [captcha, setCaptcha] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [id, setID] = useState(1);
  const recaptchaRef = useRef(null);
  const captchaSiteKey = "6LfMedcqAAAAAB6vOEc_r1EsoNceKP0jJvqB2aWD";

  function handleCaptchaChange(token) {
    setCaptcha(token);
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
      // Verify CAPTCHA with backend
      const verifyRes = await axios.post("http://127.0.0.1:8080/api/capatchalab3", { token: captcha });

      if (!verifyRes.data.success) {
        setErr("Captcha verification failed, try again.");
        setLoading(false);
        return;
      }

      // Add comment after successful CAPTCHA verification
      const newComment = { id, comment };
      await axios.post("http://127.0.0.1:8080/api/capatchalab3comments", { comment });

      setComments((prev) => [...prev, newComment]);
      setID((prevID) => prevID + 1);
      setComment("");
      setCaptcha(null);
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error("Request error:", error);
      setErr(error.response?.data?.message || "Network Error: Could not submit the comment.");
    } finally {
      setLoading(false);
    }
  }

  async function deleteCaptcha() {
    setLoading(true);
    setErr("");

    try {
      await axios.delete("http://127.0.0.1:8080/api/capatchalab3comments");
      setComments([]);
      setComment("");
      setCaptcha(null);
      setID(1);
      recaptchaRef.current?.reset();
    } catch (error) {
      setErr(error.response?.data?.message || "Network Error");
      console.error("Error resetting captcha:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="body-captcha">
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
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={captchaSiteKey}
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
            <button onClick={deleteCaptcha} disabled={loading}>
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
