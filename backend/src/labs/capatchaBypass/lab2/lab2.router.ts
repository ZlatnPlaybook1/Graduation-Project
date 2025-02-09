import {Router} from "express";
import { lab2controller, verifySum } from "./lab2.controller";

let lab2captcha = Router();

lab2captcha.get("/capatchalab2",lab2controller );

lab2captcha.post("/capatchalab2", verifySum);


export default lab2captcha;