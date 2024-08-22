import prisma from "../db";
import {createJWT, hashPassword} from "../modules/auth";
import {Request, Response} from "express";

export const initiateRegistration = async (req: Request, res: Response) => {
    try {
        const existingEmail = await prisma.user.findFirst({
            where: {email: req.body.email}
        });

        if (existingEmail) {
            return res.status(422).json({data: "Email already exists"});
        }
    } catch (error) {
        console.error('Error initiating registration:', error);
        return res.status(500).json({data: "Error initiating registration"});
    }
    try {
        const hash: string = await hashPassword(req.body.password);

        const user = await prisma.user.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                password: hash
            }
        });

        const token: string = createJWT(user);
        res.json({token});
    } catch (error) {
        console.error('Error completing registration:', error);
        return res.status(500).json({data: "Error completing registration"});
    }
};