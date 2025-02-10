import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const MyForm = () => {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please verify reCAPTCHA");
      return;
    }

    const response = await fetch("http://localhost:5000/verify-captcha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: captchaValue }),
    });

    const data = await response.json();
    if (data.success) {
      alert("Captcha verified, form submitted!");
    } else {
      alert("Captcha verification failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Your name" required />
      <ReCAPTCHA
        sitekey="6LeS-dEqAAAAAPpBMi_ZYtf2dHEF5m0GqtzRYzR1"
        onChange={handleCaptchaChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
