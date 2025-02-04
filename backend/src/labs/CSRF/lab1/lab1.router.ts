import express from "express";
import { getAccount, updatePassword, createAccount } from "./lab1.controller";

const lab1CSRF = express.Router();

lab1CSRF.get("/account", getAccount);
lab1CSRF.post("/update-password", updatePassword);
lab1CSRF.post("/create-account", createAccount);

export default lab1CSRF;
