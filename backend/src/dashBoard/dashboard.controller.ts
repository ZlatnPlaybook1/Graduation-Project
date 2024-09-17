import {Request, Response} from "express";
import prisma from "../db";

export async function userInfo(req: Request, res: Response): Promise<Response> {
    try {
        const userId = req.params.id;

        // Fetch user data from the database using Prisma
        const user = await prisma.user.findUnique({
            where: {id: userId},
            select: {email: true, name: true, role: true}
        });

        if (!user) {
            return res.status(404).json({error: "User not found"});
        }

        // Return the user email and name
        return res.status(200).json({email: user.email, name: user.name, role: user.role});
    } catch (error) {
        console.error('Error fetching user info:', error);
        return res.status(500).json({error: "Internal server error"});
    }
}
