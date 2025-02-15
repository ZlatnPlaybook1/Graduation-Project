import express from "express";
import {
  getLabAccount,
  updateLabEmail,
  deleteAccount,
  applyExploit,
  getExploit,
  login,
} from "./lab1.controller";

const clickJackLab1 = express.Router();
// Real page endpoints
clickJackLab1.get("/clickJackLab1-account", getLabAccount);
clickJackLab1.post("/clickJackLab1-edit-info", updateLabEmail);

// Hidden destructive action (no button in the real UI)
clickJackLab1.post("/clickJackLab1-delete-account", deleteAccount);

// Exploit endpoints
clickJackLab1.post("/clickJackLab1-apply-exploit", applyExploit);
clickJackLab1.get("/clickJackLab1-apply-exploit", getExploit);

clickJackLab1.post("/clickJackLab1-login", login);
export default clickJackLab1;
