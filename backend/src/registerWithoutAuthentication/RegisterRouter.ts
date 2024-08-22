import {Request, Response, Router} from "express";
import {initiateRegistration,} from "./createNewUser";

let registerRouter = Router();
registerRouter.get("/register", (req: Request, res: Response) => {
    res.status(200).json({data: "register"})
})
registerRouter.post("/register", initiateRegistration,);

export default registerRouter;
