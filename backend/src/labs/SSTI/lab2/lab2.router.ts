import { Router } from "express";
import {lab2controller, products}  from "./lab2.controller";

const lab2SSTI = Router();

// In your routes file
lab2SSTI.get('/SSTIlab2/:payload', lab2controller);

lab2SSTI.post('/SSTIlab2/:id', products);
export default lab2SSTI;