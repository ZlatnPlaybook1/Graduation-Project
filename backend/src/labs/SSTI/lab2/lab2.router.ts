import { Router } from "express";
import {lab2controller}  from "./lab2.controller";

const lab2SSTI = Router();

// In your routes file
lab2SSTI.get('/SSTIlab2/:payload', lab2controller);
export default lab2SSTI;