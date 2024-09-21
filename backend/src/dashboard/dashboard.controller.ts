import {Request, Response} from "express";
import prisma from "../utilities/db";
import {Role} from "@prisma/client";

// Function to get user information based on the role
export async function infoToDisplayInDashboard(req: Request, res: Response): Promise<Response> {
    try {
        const userId = req.params.id;

        // Fetch user data from the database using Prisma
        const user = await prisma.user.findUnique({
            where: {id: userId},
            select: {email: true, name: true, role: true, id: true},
        });
        if (!user) {
            return res.status(404).json({error: "User not found"});
        }

        if (user.role === 'writer') {
            return res.status(200).json({email: user.email, name: user.name, role: user.role});
        }

        if (user.role === 'admin') {
            const writers = await prisma.user.findMany({
                where: {role: 'writer'},
            });
            return res.status(200).json({writers: writers});
        }
    } catch (error) {
        console.error('Error fetching user info:', error);
        return res.status(500).json({error: "Internal server error"});
    }
}

export async function deleteUser(req: Request, res: Response): Promise<Response> {
    const {loggedInUserId} = req.params;
    const {userIdToBeDeleted} = req.body;

    try {
        const loggedInUser = await prisma.user.findUnique({
            where: {id: loggedInUserId},
        });

        const userToBeDeleted = await prisma.user.findUnique({
            where: {id: userIdToBeDeleted},
        });
        if (!userToBeDeleted || !loggedInUser) {
            return res.status(404).json({error: "User not found"});
        }

        if (loggedInUser.role === Role.admin) {
            if (userToBeDeleted.role === Role.admin && loggedInUserId !== userIdToBeDeleted) {
                return res.status(403).json({error: "Admins cannot delete other admins"});
            }
            await prisma.user.delete({
                where: {id: userIdToBeDeleted},
            });
            return res.status(200).json({message: "User deleted successfully"});
        }

        if (loggedInUser.role === Role.writer && loggedInUserId === userIdToBeDeleted) {
            await prisma.user.delete({
                where: {id: userIdToBeDeleted},
            });
            return res.status(200).json({message: "User deleted successfully"});
        }

        return res.status(403).json({error: "Forbidden"});
    } catch (error) {
        console.error('Error deleting user:', error);
        return res.status(500).json({error: "Internal server error"});
    }
}