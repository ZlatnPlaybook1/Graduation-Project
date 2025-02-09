import { Request, Response } from "express";
import axios from "axios";
import { URLSearchParams } from "url";
import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const SECRET_KEY = process.env.CAPTCHA_SECRET_KEY;

interface ReCaptchaResponse {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  'error-codes'?: string[];
}

export const verifyCaptcha = async (req: Request, res: Response) => {
  const { token } = req.body;
  if (!token) {
    return res.status(400).json({ success: false, message: "No token provided" });
  }

  try {
    const response = await axios.post<ReCaptchaResponse>(
      `https://www.google.com/recaptcha/api/siteverify`,
      new URLSearchParams({
        secret: SECRET_KEY,
        response: token,
      })
    );

    if (response.data.success) {
      return res.json({ success: true, message: "reCAPTCHA verified!" });
    } else {
      return res.json({ success: false, message: "reCAPTCHA failed" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};