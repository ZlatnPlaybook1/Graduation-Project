import {Router} from "express";
import {isAuthenticated} from "../utilities/auth";
import {adminDashboard, deleteUser, userDashboard} from "./dashboard.controller";

let dashboardRouter = Router();

dashboardRouter.get("/users", isAuthenticated, adminDashboard)
dashboardRouter.get("/user", isAuthenticated, userDashboard)    // for admin to edit user



dashboardRouter.get("/user/:id", isAuthenticated, userDashboard)


dashboardRouter.delete("/users/:id", isAuthenticated, deleteUser)

export default dashboardRouter;