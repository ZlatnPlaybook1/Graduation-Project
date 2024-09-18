import {Request, Response, Router} from "express";
import {userInfo} from "./dashboard.controller";

let dashboardRouter = Router();

dashboardRouter.get("/users/:id", userInfo)

export default dashboardRouter;

