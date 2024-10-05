import {Request, Response} from "express";
import prisma from "../utilities/db";

export const hiddenDataController = async (req: Request, res: Response) => {
    const user = await prisma.userForsqlInjection.findUnique({
        where: {
            username: req.body.username
        },
    });
    if (!user) {
        return res.status(404).send("Not a user");
    }
    if (req.body.password === user.password) {
        return res.status(200).json({
            msg: "User logged in successfully",
        });
    } else {
        return res.status(401).send("Invalid email or password");
    }
}

export const finduser = async (req: Request, res: Response) => {
    const user = await prisma.userForsqlInjection.findUnique({
        where: {
            username: req.body.username,
            password: req.body.password
        },
    });
    if (!user) {
        return res.status(404).send("Not a user");
    }
    return res.status(200).json({
        msg: "User found",
        user
    });
}