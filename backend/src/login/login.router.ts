import {Request, Response, Router} from "express";
import {loginController} from "./login.controller";
import {isAuthenticated} from "../utilities/auth";


let loginRouter = Router();

loginRouter.get("/login", (req: Request, res: Response) => {
    res.status(200).json({data: "login"})
})
loginRouter.post("/login",isAuthenticated, loginController);
export default loginRouter;