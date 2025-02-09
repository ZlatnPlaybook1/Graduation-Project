import { Request, Response } from "express";
import prisma from "../../../utilities/db";

export const register = async (req: Request, res: Response) => {
    try {

        const user = await prisma.lab1RaceCondition.findUnique({
            where: {
                email: req.body.email
            },
        });
        if (user) {
            return res.status(400).send("User already exists");
        }
        const newUser = await prisma.lab1RaceCondition.create({
            data: {
                email: req.body.email,
                name: req.body.name,
                surname: req.body.surname,
                tel : req.body.tel,
            }
        });
        return res.status(201).json({
            msg: "User created successfully",
        });
    } catch (e) {
        console.error(e);
    }
    return res.status(500).send("Internal Server Error");
}

export const viewRegister = async (req: Request, res: Response) => {
    try {
        const users = await prisma.lab1RaceCondition.findMany();
        return res.status(200).json(users);
    } catch (e) {
        console.error(e);
    }
    return res.status(500).send("Internal Server Error");
}

export const deleteRegister = async (req: Request, res: Response) => {
    try {
        const user = await prisma.lab1RaceCondition.findUnique({
            where: {
                id: req.params.id
            },
        });
        if (!user) {
            return res.status(400).send("User not found");
        }
        await prisma.lab1RaceCondition.delete({
            where: {
                id: req.params.id
            }
        });
        return res.status(200).send("User deleted successfully");
    } catch (e) {
        console.error(e);
    }
    return res.status(500).send("Internal Server Error");
}