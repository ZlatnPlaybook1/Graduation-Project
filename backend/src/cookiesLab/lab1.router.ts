import {Router} from "express";
import {login} from "./lab1.controller";

let cookiesRouter = Router();

cookiesRouter.post("/cookie_login", login);


export default cookiesRouter;