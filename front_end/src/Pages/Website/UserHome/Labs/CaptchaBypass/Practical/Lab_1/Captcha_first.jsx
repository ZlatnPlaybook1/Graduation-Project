import React, { useState } from "react";
import { useRef } from "react";
import $ from "jquery";
import "./Captcha_first.css";
import ShowHint_Btn from "../../../../ShowHint_Btn/ShowHint_Btn";
import GoBack_Btn from "../../../../GoBack_Btn/GoBack_Btn";
import axios from "axios";

export default function Captcha_first() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [captcha, setCaptcha] = useState("");
  const faqSectionRef = useRef(null);
  const [form, setForm] = useState({
    comment: "",
    captcha: "",
  });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [id, setID] = useState(3);
  const [right, setRight] = useState("");
  function handleChange(e) {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErr("");
    const form = { comment, captcha };
    console.log(form);
    const newComment = {
      id: id, // Unique ID for each comment
      comment: comment, // Default comment
      captcha: captcha, // Store raw HTML content
    };
    setID((id) => id + 1);
    setComments((prevComments) => [...prevComments, newComment]);
    try {
      const res = await axios.post(
        "http://127.0.0.1:8080/api/Captcha_first",
        form
      );
      console.log(form);
      const newComment = {
        id: Date.now(), // Unique ID for each comment
        comment: comment, // Default comment
        captcha: captcha, // Store raw HTML content
      };
      setComments((prevComments) => [...prevComments, newComment]);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response) {
        if (error.response.status === 401) {
          setErr("Wrong captcha");
        } else {
          setErr(error.response.data);
        }
        setErr(error.response.data.message);
      } else {
        setErr("Network Error");
        console.error(error);
      }
    }
  }

  return (
    <>
      <div className="body">
        <GoBack_Btn />
        <ShowHint_Btn
          hintText={
            '<p>click inspect  and try to beautify and Deobfuscate  script use this : </p> <a href="https://filipemgs.github.io/poisonjs/">De-obfuscate</a> <a href="https://beautifier.io/">beautifier.io</a>'
          }
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
                    ></textarea>
                  </div>
                  <img src="" alt="" />
                  <div className="form-group-captcha">
                    <label htmlFor="comment">Enter Your Captcha</label>
                    <input
                      name="captcha"
                      value={captcha}
                      onChange={(e) => setCaptcha(e.target.value)}
                      className="input"
                    ></input>
                  </div>
                  <div className="form-group-captcha">
                    <button type="submit">Send</button>
                    {err && <span className="error">{err}</span>}
                  </div>
                </form>
              </div>
            </div>
            <div className="comment-section">
              <div className="comment-card">
                <div className="comment-header">#1</div>
                <p className="comment-text">comment 1</p>
              </div>
              <div className="comment-card">
                <div className="comment-header">#2</div>
                <p className="comment-text">comment 2</p>
              </div>
              {comments?.map((comment) => (
                <div key={comment.id} className="comment-card">
                  <div className="comment-header">
                    <p className="name">#{comment.id}</p>
                  </div>
                  <p className="comment-text">{comment.comment}</p>
                </div>
              ))}
              {/* {form?.map((item) => (
                    <div key={item.id} className="comment-card">
                      <div className="comment-header">{comment.id}</div>
                      <p className="comment-text">{item.comment}</p>
                    </div> // Adjust according to your data structure
                  ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
