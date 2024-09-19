import { Request, Response, Router } from "express";
import { userInfo } from "./dashboard.controller";

let dashboardRouter = Router();

dashboardRouter.get("/user", (req: Request, res: Response) => {
  res.status(200).json({ data: "user" });
});
dashboardRouter.get("/users/:id", userInfo);
dashboardRouter.post("/user");

export default dashboardRouter;
