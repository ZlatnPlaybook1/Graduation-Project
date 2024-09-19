import {Request, Response} from "express";
import prisma from "../utilities/db";

// Function to get user information based on the role
export async function infoToDisplayInDashboard(req: Request, res: Response): Promise<Response> {
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

export async function deleteUser(req: Request, res: Response): Promise<Response> {
    try {
        const userId = req.params.id;
        const user = await prisma.user.findUnique({
            where: {id: userId},
        });

        if (!user) {
            return res.status(404).json({error: "User not found"});
        }

        const userIdWantedToBeDeleted = req.body.id
        const userWantedToBeDeleted = await prisma.user.findUnique({
            where: {id: userIdWantedToBeDeleted},
        });

        if (!userWantedToBeDeleted) {
            return res.status(404).json({error: "Requesting user not found"});
        }

        if (userWantedToBeDeleted.role === 'admin' || (userWantedToBeDeleted.role === 'writer' && userIdWantedToBeDeleted === userId)) {
            await prisma.user.delete({
                where: {id: userId},
            });
            return res.status(200).json({message: "User deleted successfully"});
        } else {
            return res.status(403).json({error: "Forbidden"});
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        return res.status(500).json({error: "Internal server error"});
    }
}