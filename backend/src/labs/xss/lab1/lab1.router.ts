import {Router} from "express";
import {upload,saveFile} from "./lab1.controller";
import {isAuthenticated} from "../../../utilities/auth";


let lab1xss=Router();

lab1xss.post("/unrestrictedFileUploadLab1",isAuthenticated,upload.single("input_file"),saveFile);

export default lab1xss;
