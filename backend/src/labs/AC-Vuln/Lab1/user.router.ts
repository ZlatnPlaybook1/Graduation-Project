import express from "express";
import { getUsers, deleteUser } from "./user.controller";

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.delete("/:id", deleteUser);

export default userRouter;
