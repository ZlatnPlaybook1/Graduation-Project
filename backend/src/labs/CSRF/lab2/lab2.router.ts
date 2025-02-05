import express from "express";
import { CSRFLab2 } from "./lab2.controller";

const lab2CSRF = express.Router();
lab2CSRF.post("/CSRFLab2", CSRFLab2);

export default lab2CSRF;
