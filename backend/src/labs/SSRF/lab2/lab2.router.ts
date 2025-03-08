import { Router } from "express";
import { checkStock , deleteUser, resetLab1} from "./lab2.controller";

const lab2SSRF = Router();

lab2SSRF.post("/127.0.0.1/checkStock",checkStock );

lab2SSRF.delete("/127.0.0.1/deleteUser/:username",deleteUser );

lab2SSRF.post("/127.0.0.1/resetLab1",resetLab1 );

export default lab2SSRF;