import e, { Router } from "express";
import { loginController, isAdmin, deleteUser } from "./lab1.controller";

let lab1jwtRouter = Router();

lab1jwtRouter.post("/lab1jwtlogin", loginController);

lab1jwtRouter.delete("/lab1jwtdeleteuser", isAdmin, deleteUser );


export default lab1jwtRouter;
