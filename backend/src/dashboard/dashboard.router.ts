import {Router} from "express";
import {isAuthenticated} from "../utilities/auth";
import {getAllUsers, deleteUser, getUserById, createNewUser, updateUser, getUserByToken} from "./dashboard.controller";

let dashboardRouter = Router();

dashboardRouter.get("/users", isAuthenticated, getAllUsers)

dashboardRouter.post("/user/add", createNewUser)

dashboardRouter.delete("/user/:id" , deleteUser)


dashboardRouter.get("/user", isAuthenticated, getUserByToken)    // for admin to edit user

dashboardRouter.get("/user/:id", isAuthenticated, getUserById)

dashboardRouter.put("/user/edit/:id",updateUser )
dashboardRouter.get("/currentUser/:id", getUserById)


export default dashboardRouter;