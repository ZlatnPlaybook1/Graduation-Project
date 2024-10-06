import {Router} from "express";
import {finduser, hiddenDataController} from "./hiddenData.controller";

let hiddenData = Router();

hiddenData.post("/Loginsqlinjection",finduser, hiddenDataController);


export default hiddenData;