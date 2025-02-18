import jwt, {JwtPayload} from 'jsonwebtoken'
import e, {NextFunction, Request, Response} from "express";
import {comparePasswords, createJWT} from "./lab1.service";
import prisma from "../../../utilities/db";

export const loginController = async (req: Request, res: Response) => {
    const user = await prisma.lab1jwt.findUnique({
        where: {
            username: req.body.username
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

    await prisma.lab1jwt.update({
        where: {id: user.id},
        data: {token: token}
    });

    return res.status(200).json({
        message: "User logged in successfully",
        data: {
            token: token,
            username: user.username,
            email: user.email
        }
    });
};


export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    const bearer = req.headers.authorization;
    if (!bearer)
        {
            return res.status(401).json({message:'not authorized'});
        }

    const[ ,token]=bearer.split(' ');
    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }

    try {
        const user = jwt.decode(token) as JwtPayload;
        req.params.id = user.id;
        console.log(user.username);
        if (user.username === 'admin') {
            next();
        } else {
            return res.status(401).json({ message: 'Not authorized, not an admin' });
        }
    } catch (e) {
        console.error(e);
        return res.status(401).json({ message: 'Invalid token' });
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const user = await prisma.lab1jwt.findUnique({
        where: {
            username: req.body.username
        }
    });
    if (!user) {
        return res.status(404).send("Not a user");
    }
    await prisma.lab1jwt.delete({
        where: {
            username: req.body.username
        }
    });
    return res.status(200).send("User deleted successfully");
}