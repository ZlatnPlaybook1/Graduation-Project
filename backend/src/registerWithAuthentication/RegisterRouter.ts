import {Request, Response, Router} from "express";
import {completeRegistration, initiateRegistration,} from "./createNewUser";

let registerRouter = Router();


registerRouter.get("/register", (req: Request, res: Response) => {
    res.status(200).json({data: "register"})
})
registerRouter.post("/register", initiateRegistration);

registerRouter.get("/authincate", (req: Request, res: Response) => {
    res.status(200).json({data: "authincate"})
})
registerRouter.post("/authincate", completeRegistration);


export default registerRouter;
