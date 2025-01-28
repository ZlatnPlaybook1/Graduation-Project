import { Request, Response } from "express";
import prisma from "../../../utilities/db";


export const loginController = async (req: Request, res: Response) => {
    const user = await prisma.apiHackingLab.findUnique({
        where: {
            username: req.body.username
        },
    });
    if (!user) {
        return res.status(404).send("Not a user");
    }
    const isValid : boolean = req.body.password === user.password;


    if (!isValid) {
        return res.status(401).send("Invalid name or password");
    }

    return res.status(200).json({
        message: "success",
        data: {
            id: user.id,
        }
    });
}
