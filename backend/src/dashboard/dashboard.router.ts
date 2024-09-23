import {Router} from "express";
import {isAuthenticated} from "../utilities/auth";
import {getAllUsers, deleteUser, userDashboard,createNewUser} from "./dashboard.controller";

let dashboardRouter = Router();

dashboardRouter.get("/users", isAuthenticated, getAllUsers)
dashboardRouter.get("/user", isAuthenticated, userDashboard)    // for admin to edit user



dashboardRouter.get("/user/:id", isAuthenticated, userDashboard)

dashboardRouter.post("/user/add", createNewUser)


dashboardRouter.delete("/user/:id" , deleteUser)

export default dashboardRouter;