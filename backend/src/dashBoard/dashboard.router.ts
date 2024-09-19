import {Router} from "express";
import {deleteUser, infoToDisplayInDashboard} from "./dashboard.controller";
import {isAuthenticated} from "../utilities/auth";

let dashboardRouter = Router();

dashboardRouter.get("/users/:id", isAuthenticated, infoToDisplayInDashboard)
dashboardRouter.delete("/users/:id", isAuthenticated, deleteUser )

export default dashboardRouter;