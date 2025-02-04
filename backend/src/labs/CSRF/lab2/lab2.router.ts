import express from "express";
import { login } from "./lab2.controller";

const lab2CSRF = express.Router();
lab2CSRF.post("/login", login);

export default lab2CSRF;
