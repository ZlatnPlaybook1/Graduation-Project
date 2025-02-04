import express from "express";
import { login } from "./lab3.controller";

const lab3CSRF = express.Router();
lab3CSRF.post("/login", login);

export default lab3CSRF;
