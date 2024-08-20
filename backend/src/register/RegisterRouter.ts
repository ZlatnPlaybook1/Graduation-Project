import {Router} from "express";
import { Request, Response} from "express";
import {completeRegistration, initiateRegistration,} from "./createNewUser";

let registerRouter = Router();


registerRouter.get("/register-init",(req: Request, res: Response) => {res.status(200).json({data:"register-init"})})
registerRouter.post("/register-init", initiateRegistration);

registerRouter.get("/register-complete",(req: Request, res: Response) => {res.status(200).json({data:"register-complete"})})
registerRouter.post("/register-complete", completeRegistration);
export default registerRouter;
