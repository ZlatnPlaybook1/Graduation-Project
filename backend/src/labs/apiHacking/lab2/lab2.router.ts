import {Router} from "express";
import {loginController} from "./lab2.controller";

let lab2apiHacking = Router();

lab2apiHacking.post("/ApiHackinglab2", loginController);


export default lab2apiHacking;