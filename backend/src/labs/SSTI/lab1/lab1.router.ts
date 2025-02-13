import { Router } from "express";
import {lab1Controller}  from "./lab1.controller";

const lab1SSTI = Router();

lab1SSTI.post("/SSTIlab1", lab1Controller);

export default lab1SSTI;