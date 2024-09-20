import prisma from "../utilities/db";
import {comparePasswords, createJWT} from "../utilities/auth";
import {Request, Response} from "express";

export const loginController = async (req :Request, res : Response): Promise<any> => {
    const user = await prisma.user.findUnique({
        where: {
            email: req.body.email
        },
    });

    if (!user) {
        return res.status(404).send("Not a user");
    }

    const isValid: boolean = await comparePasswords(req.body.password, user.password);

    if (!isValid) {
        return res.status(401).send("Invalid name or password");
    }

    const token: string = createJWT(user);
    return res.status(200).json({token: token, name: user.name, email: user.email,role: user.role});
};
