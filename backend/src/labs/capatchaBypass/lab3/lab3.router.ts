import {Router} from "express";
import {verifyCaptcha}  from "./lab3.controller";

let lab3captcha = Router();

lab3captcha.post("/capatchalab3",verifyCaptcha );


export default lab3captcha