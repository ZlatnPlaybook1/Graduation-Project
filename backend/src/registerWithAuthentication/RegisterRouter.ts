import {Request, Response, Router} from "express";
import RegistrationController from "./registercontroller";

let registerRouter = Router();

let registrationController = new RegistrationController();

registerRouter.get("/register", (req: Request, res: Response) => {
    res.status(200).json({data: "register"})
})
registerRouter.post("/register", registrationController.initiateRegistration);

registerRouter.get("/authincate", (req: Request, res: Response) => {
    res.status(200).json({data: "authincate"})
})
registerRouter.post("/authincate", registrationController.completeRegistration);


export default registerRouter;
