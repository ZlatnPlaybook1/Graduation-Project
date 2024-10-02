import {Request, Response} from "express";

export const login = async (req: Request, res: Response) => {
    try {
        const email = "admin@gmail.com";
        const password = "123456";

        if (!req.body.email || !req.body.password) {
            return res.status(400).send("Email and password are required");
        }
        if (req.body.email === email && req.body.password === password) {
            return res.status(200).send("Login successful");
        }
    }
    catch (e) {
        console.error(e);
    }
    return res.status(401).send("Invalid email or password");
};

export const role = async (req: Request, res: Response) => {
    try {
        const role = "admin";
        const userId = "dfjdkfjodjffd";

        res.cookie("role", role,{
            httpOnly: true,
            });
        res.cookie("userId", userId,{
            httpOnly: true,
        });

        if (req.cookies.role === role) {
            return res.status(200).send("Role is correct");
        }
    }
    catch (e) {
        console.error(e);
    }
    return res.status(401).send("Invalid role");
}