import {Router} from "express";
import {createXssPost, deletePosts} from "./xssPosts.controller";


let xssPostsRouter = Router();

xssPostsRouter.post("/comment", createXssPost);
xssPostsRouter.delete("/comment", deletePosts);

export default xssPostsRouter;