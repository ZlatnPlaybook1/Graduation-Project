import {Router} from "express";
import {idFunction} from "./lab2.controller";

let lab2 = Router();

lab2.post("/cookie_id", idFunction);


export default lab2;