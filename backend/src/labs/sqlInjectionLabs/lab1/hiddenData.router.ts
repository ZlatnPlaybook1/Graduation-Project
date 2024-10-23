import {Router} from "express";
import {findUser} from "./hiddenData.controller";

let hiddenData = Router();

hiddenData.post("/Loginsqlinjection", findUser);


export default hiddenData;