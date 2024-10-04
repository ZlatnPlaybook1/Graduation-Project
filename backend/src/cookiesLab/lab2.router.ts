import {Router} from "express";
import {login} from "./lab2.controller";

let lab2 = Router();

lab2.post("/cookie_login", login);


export default lab2;
