import {Router} from "express";
import { isValidCoupon, resetLab, setPrice, shoppingCart } from "./lab2.controller";

let lab2RaceCondition = Router();


lab2RaceCondition.get("/ShoppingCart",shoppingCart);

lab2RaceCondition.post("/ShoppingCart/price",setPrice );

lab2RaceCondition.post("/ShoppingCart",isValidCoupon );

lab2RaceCondition.delete("/Resetlab2RaceCondition",resetLab );

export default lab2RaceCondition;