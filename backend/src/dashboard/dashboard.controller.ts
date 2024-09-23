import {Request, Response} from "express";
import prisma from "../utilities/db";
import {hashPassword} from "../utilities/auth";

export async function userDashboard(req: Request, res: Response): Promise<Response> {
    const {userId} = req.params;
    const user = await prisma.user.findUnique({
        where: {id: userId},
        select: {email: true, name: true, role: true, id: true},
    });
    if (!user) {
        return res.status(404).json({error: "User not found"});
    }
    return res.status(200).json({email: user.email, name: user.name, role: user.role});
}


export async function getAllUsers(req: Request, res: Response): Promise<Response> {
    const writers = await prisma.user.findMany({
        where: {role: 'writer'},
    });
    return res.status(200).json({
        data: writers
    });
}


export async function createNewUser (req: Request, res: Response): Promise<Response> {
    const {email, name, role} = req.body;
    const hashedPassword = await hashPassword(req.body.password);
    try {
        const user = await prisma.user.create({
            data: {
                email,
                password : hashedPassword,
                name,
                role,
            }
        });
        return res.status(201).json({
            msg: "User created successfully",
            data: user
        });
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({error: " server error"});
    }
}

export async function deleteUser(req: Request, res: Response): Promise<Response> {
    const {id}  = req.params;

    try {
        const user = await prisma.user.findUnique({
            where: {id} ,
        });

        if (!user) {
            return res.status(404).json({error: "User not found"});
        }
         await prisma.validationNumber.deleteMany({
            where: { userId: id },
        });

        await prisma.user.delete({
            where: {id},
        });
        return res.status(200).json({
            message: "User deleted successfully",
            data : null
        });

    } catch (error) {
        console.error('Error deleting user:', error);
        return res.status(500).json({error: " server error"});
    }
}