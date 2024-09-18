import {Request, Response} from "express";
import prisma from "../db";

export async function userInfo(req: Request, res: Response): Promise<Response> {
    try {
        const userId = req.params.id;

        // Fetch user data from the database using Prisma
        const user = await prisma.user.findUnique({
            where: {id: userId},
            select: {email: true, name: true, role: true , id: true},
        });

        if (!user) {
            return res.status(404).json({error: "User not found"});
        }
        if (user.role === 'writer') {
            return res.status(200).json({email: user.email, name: user.name, role: user.role});
        }
        if (user.role === 'admin') {
            const writers = await prisma.user.findMany({
                where: {
                    role: 'writer',
                },
            });
            return res.status(200).json({writers: writers});
        }
    } catch (error) {
        console.error('Error fetching user info:', error);
        return res.status(500).json({error: "Internal server error"});
    }
}
