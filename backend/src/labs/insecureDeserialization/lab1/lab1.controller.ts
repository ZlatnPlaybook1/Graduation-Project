import { Request, Response } from "express";

export const loginController = async (req: Request, res: Response) => {
    if (req.body.username === "test" && req.body.password === "test") {
        return res.status(200).json({
            message: "login successful",
            data: {
                username: req.body.username,
            },
        });
    } else if (req.body.username === "admin" && req.body.password === "admin" && req.cookies.session === "Tzo0OiJVc2VyIjoyOntzOjg6InVzZXJuYW1lIjtzOjQ6ImFkbWluIjtzOjg6InBhc3N3b3JkIjtzOjQ6ImFkbWluIjt9") {
        return res.status(200).json({
            message: "login successful",
            data: {
                username: req.body.username,
            },
        });
    } else {
        return res.status(401).send("Invalid name or password");
    }
};

