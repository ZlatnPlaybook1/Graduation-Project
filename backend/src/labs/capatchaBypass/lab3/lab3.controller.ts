import { Request, Response } from "express";
import axios from "axios";
import { URLSearchParams } from "url";
import * as dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.CAPTCHA_SECRET_KEY || "6LfMedcqAAAAABH8Dukegd_iwTIZ9Y43qL9jNKBA";

interface ReCaptchaResponse {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  'error-codes'?: string[];
}

export const verifyCaptcha = async (req: Request, res: Response) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ success: false, message: "No CAPTCHA token provided" });
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
      return res.json({ success: true, message: "CAPTCHA verified!" });
    } else {
      return res.status(400).json({ success: false, message: "Invalid CAPTCHA", errors: response.data['error-codes'] });
    }
  } catch (error) {
    console.error("Error verifying CAPTCHA:", error);
    return res.status(500).json({ success: false, message: "Server error during CAPTCHA verification" });
  }
};
