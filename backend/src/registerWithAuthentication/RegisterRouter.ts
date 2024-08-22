import {Request, Response, Router} from "express";
import {completeRegistration, initiateRegistration,} from "./createNewUser";

let registerRouter = Router();


registerRouter.get("/register", (req: Request, res: Response) => {
    res.status(200).json({data: "register"})
})
registerRouter.post("/register", initiateRegistration);

registerRouter.get("/authentication", (req: Request, res: Response) => {
    res.status(200).json({data: "authentication"})
})
registerRouter.post("/authentication", completeRegistration);


export default registerRouter;
