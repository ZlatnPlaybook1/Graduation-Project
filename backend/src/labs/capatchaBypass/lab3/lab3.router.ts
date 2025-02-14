import { Router } from "express";
import { verifyCaptcha } from "./lab3.controller";

const lab3captcha = Router();

lab3captcha.post("/capatchalab3", verifyCaptcha);

// Temporary comments store
const comments: { id: number; comment: string }[] = [];
let idCounter = 1;

lab3captcha.post("/capatchalab3comments", (req, res) => {
  const { comment } = req.body;
  if (!comment) return res.status(400).json({ message: "Comment cannot be empty" });

  const newComment = { id: idCounter++, comment };
  comments.push(newComment);
  res.json({ success: true, message: "Comment added successfully", comment: newComment });
});

lab3captcha.get("/capatchalab3comments", (req, res) => {
  res.json(comments);
});

export default lab3captcha;
