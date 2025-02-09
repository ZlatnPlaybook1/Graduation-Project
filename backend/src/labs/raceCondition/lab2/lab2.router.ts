import {Router} from "express";
import { isValidCopoun, shoppingCart } from "./lab2.controller";

let lab2RaceCondition = Router();


lab2RaceCondition.get("/ShoppingCart",shoppingCart);

lab2RaceCondition.post("/ShoppingCart",isValidCopoun );

export default lab2RaceCondition;