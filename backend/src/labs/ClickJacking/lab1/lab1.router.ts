import express from "express";
import { getLabAccount, updateLabEmail, applyExploit } from "./lab1.controller";

const clickJackLab1 = express.Router();

// Route for retrieving lab account details
clickJackLab1.get("/clickJackLab1-account", getLabAccount);

// Route for updating lab account email
clickJackLab1.post("/clickJackLab1-edit-info", updateLabEmail);

// Route for applying an exploit (HTML/CSS injection for the lab)
clickJackLab1.post("/clickJackLab1-apply-exploit", applyExploit);

export default clickJackLab1;
