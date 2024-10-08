import {Router} from "express";
import {createXssPost} from "./xssPosts.controller";


let xssPostsRouter = Router();

xssPostsRouter.post("/comment", createXssPost);

export default xssPostsRouter;