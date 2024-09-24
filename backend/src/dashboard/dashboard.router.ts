import {Router} from "express";
import {isAuthenticated} from "../utilities/auth";
import {getAllUsers, deleteUser, userWithId, createNewUser, updateUser, currentUser} from "./dashboard.controller";

let dashboardRouter = Router();

dashboardRouter.get("/users", isAuthenticated, getAllUsers)
dashboardRouter.get("/user", isAuthenticated, currentUser)    // for admin to edit user

dashboardRouter.get("/user/:id", isAuthenticated, userWithId)

dashboardRouter.post("/user/add", createNewUser)
dashboardRouter.put("/user/edit/:id", updateUser)

dashboardRouter.delete("/user/:id" , deleteUser)

export default dashboardRouter;