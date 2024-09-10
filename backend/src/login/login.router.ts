import {Request, Response, Router} from "express";
import {login} from "./login";

let loginRouter = Router();

loginRouter.get("/login", (req: Request, res: Response) => {
    res.status(200).json({data: "login"})
})
loginRouter.post("/login", login);
export default loginRouter;