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

const comments: { id: number; comment: string }[] = [];
let idCounter = 1;

export const submitComment = async (req: Request, res: Response) => {
  const { comment, token } = req.body;

  if (!comment) {
    return res.status(400).json({ success: false, message: "Comment cannot be empty" });
  }

  // ⚡ Bypass CAPTCHA verification for backend flexibility
  if (!token) {
    console.log("Bypassing CAPTCHA verification...");
    const newComment = { id: idCounter++, comment };
    comments.push(newComment);
    return res.json({ success: true, message: "Comment added successfully", comment: newComment });
  }

  try {
    // Verify CAPTCHA with Google
    const response = await axios.post<ReCaptchaResponse>(
      `https://www.google.com/recaptcha/api/siteverify`,
      new URLSearchParams({
        secret: SECRET_KEY,
        response: token,
      })
    );

    if (!response.data.success) {
      return res.status(400).json({ success: false, message: "Invalid CAPTCHA", errors: response.data['error-codes'] });
    }

    // CAPTCHA is valid, store the comment
    const newComment = { id: idCounter++, comment };
    comments.push(newComment);
    return res.json({ success: true, message: "Comment added successfully", comment: newComment });

  } catch (error) {
    console.error("Error verifying CAPTCHA:", error);
    return res.status(500).json({ success: false, message: "Server error during CAPTCHA verification" });
  }
};

export const getComments = (req: Request, res: Response) => {
  res.json(comments);
};
