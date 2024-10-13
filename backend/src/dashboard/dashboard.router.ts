import {Router} from "express";
import {isAuthenticated} from "../utilities/auth";
import {
    createNewUser,
    deleteUser,
    getAllUsers,
    getUserById,
    getUserByToken,
    personalInfo,
    resetPassword,
    updateUser
} from "./dashboard.controller";

let dashboardRouter = Router();

//admin
dashboardRouter.get("/users", isAuthenticated, getAllUsers)

dashboardRouter.get("/user/:id", isAuthenticated, getUserById)

dashboardRouter.post("/user/add", isAuthenticated, createNewUser)

dashboardRouter.get("/currentUser/:id", getUserById)

dashboardRouter.put("/user/edit/:id", updateUser)

dashboardRouter.delete("/user/:id", deleteUser)

//user
dashboardRouter.get("/user", isAuthenticated, getUserByToken)

dashboardRouter.post("/dataUser", isAuthenticated, personalInfo)

dashboardRouter.post("/reset-password",isAuthenticated,resetPassword)

export default dashboardRouter;