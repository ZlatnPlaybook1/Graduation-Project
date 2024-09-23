import {Router} from "express";
import {logout} from "./logout.controller";
import {isAuthenticated} from "../utilities/auth";

let logoutRouter = Router();

logoutRouter.post("/login", isAuthenticated,logout);

export default logoutRouter