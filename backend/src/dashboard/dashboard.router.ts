import {Router} from "express";
import {isAuthenticated} from "../utilities/auth";
import {deleteUser, infoToDisplayInDashboard} from "./dashboard.controller";

let dashboardRouter = Router();

dashboardRouter.get("/users/:id", isAuthenticated, infoToDisplayInDashboard)
dashboardRouter.delete("/users/:id", isAuthenticated, deleteUser)

export default dashboardRouter;