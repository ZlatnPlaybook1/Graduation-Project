import {Router} from "express";
import { isValidCoupon, setPrice, shoppingCart } from "./lab2.controller";

let lab2RaceCondition = Router();


lab2RaceCondition.get("/ShoppingCart",shoppingCart);

lab2RaceCondition.post("/ShoppingCart/price",setPrice );

lab2RaceCondition.post("/ShoppingCart",isValidCoupon );

export default lab2RaceCondition;