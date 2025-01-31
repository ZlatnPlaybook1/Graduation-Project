import React from "react";
import "../Lab1/InsecureDeserializationLab1.css";
import GoBack from "../../../../GoBack_Btn/GoBack_Btn";
import ShowHint from "../../../../ShowHint_Btn/ShowHint_Btn";

export default function InsecureDeserializationLab3() {
  const hintMessage = `<p>Add Something</p>`;

  return (
    <>
      <GoBack />
      <ShowHint hintText={hintMessage} />
      <div className="InsecureDeserializationLab-container">
        <div className="InsecureDeserializationLab-form-wrapper">
          <h2 className="InsecureDeserializationLab-title">Welcome Back</h2>
          <p className="InsecureDeserializationLab-subtitle">
            Please enter your credentials to login
          </p>
          <form className="InsecureDeserializationLab-form">
            <div className="InsecureDeserializationLab-input-group">
              <label>Username</label>
              <input type="text" placeholder="Enter your username" />
            </div>
            <div className="InsecureDeserializationLab-input-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            <button className="InsecureDeserializationLab-button">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
