import {Router} from "express";
import {hiddenDataController} from "./hiddenData.controller";

let hiddenData = Router();

hiddenData.post("/Loginsqlinjection", hiddenDataController);


export default hiddenData;
