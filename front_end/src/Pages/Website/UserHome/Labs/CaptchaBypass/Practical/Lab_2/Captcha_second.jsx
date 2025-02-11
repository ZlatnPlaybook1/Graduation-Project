import React, { useState, useEffect } from "react";
import "../Captcha_labs.css";
import ShowHint_Btn from "../../../../ShowHint_Btn/ShowHint_Btn";
import GoBack_Btn from "../../../../GoBack_Btn/GoBack_Btn";
import axios from "axios";

export default function Captcha_second() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [captcha, setCaptcha] = useState(""); // User input
  const [captchaQuestion, setCaptchaQuestion] = useState(""); // Displayed captcha
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [id, setID] = useState(1);

  // Fetch captcha from backend
  async function fetchCaptcha() {
    try {
      const res = await axios.get("http://127.0.0.1:8080/api/capatchalab2");
      const { num1, num2 } = res.data;
      setCaptchaQuestion(`${num1} + ${num2}`);
      setCaptcha(""); // Reset input field
      setErr("");
    } catch (error) {
      setErr("Failed to load captcha.");
      console.error("Error fetching captcha:", error);
    }
  }

  useEffect(() => {
    fetchCaptcha();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErr("");

    // // Check captcha locally before sending request
    // if (parseInt(captcha) !== correctAnswer) {
    //   setErr("Wrong captcha, try again.");
    //   setLoading(false);
    //   fetchCaptcha(); // Refresh captcha
    //   return;
    // }
console.log(captcha);
console.log(comment);
    try {
      await axios.post("http://127.0.0.1:8080/api/capatchalab2", {
        result: captcha,
        comment: comment,
      });

      setComments((prevComments) => [...prevComments, { id, comment }]);
      setID((prevID) => prevID + 1);
      setComment("");
      setCaptcha("");
      fetchCaptcha(); // Get new captcha after submission
    } catch (error) {
      setErr(error.response?.data?.message || "Network Error");
      console.error("Error submitting comment:", error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteCaptcha() {
    setLoading(true);
    setErr("");

    try {
      await axios.delete("http://127.0.0.1:8080/api/capatchalab2");

      setComments([]);
      setComment("");
      setCaptcha("");
      setID(1);

      fetchCaptcha(); // Fetch a new captcha after deletion
    } catch (error) {
      setErr(error.response?.data?.message || "Network Error");
      console.error("Error resetting captcha:", error);
    } finally {
      setLoading(false);
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
              <div className="card_title">Captcha Verification</div>
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
                  <h3>Captcha: {captchaQuestion}</h3>
                  <input
                    type="number"
                    name="captcha"
                    value={captcha}
                    onChange={(e) => setCaptcha(e.target.value)}
                    required
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
