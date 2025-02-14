import { Router } from "express";
import { submitComment, getComments } from "./lab3.controller";

const lab3captcha = Router();

lab3captcha.post("/capatchalab3comments", submitComment);
lab3captcha.get("/capatchalab3comments", getComments);

export default lab3captcha;
