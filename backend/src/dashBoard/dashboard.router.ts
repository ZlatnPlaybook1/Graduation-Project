import { Request, Response, Router } from "express";
import { userInfo } from "./dashboard.controller";

let dashboardRouter = Router();

dashboardRouter.get("/user", (req: Request, res: Response) => {
<<<<<<< HEAD
  res.status(200).json({ data: "user" });
});
dashboardRouter.get("/users/:id", userInfo);
dashboardRouter.post("/user");
=======
    res.status(200).json({data: "user"})
})
dashboardRouter.get("/users/:id", userInfo)
dashboardRouter.post("/user",)
>>>>>>> 7e7bd09b5041245db8b8f8cedb66d1b37539ec2d

export default dashboardRouter;
