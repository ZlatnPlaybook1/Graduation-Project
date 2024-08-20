import jwt, {JwtPayload} from 'jsonwebtoken'
import bycrpt from 'bcrypt'
import {NextFunction, Request, Response} from "express";
import {User} from "@prisma/client";

export const hashPassword = async (password: string) => {
    return bycrpt.hash(password, 5);
}

export const comparePasswords = async (password: string, hash: string) => {
    return bycrpt.compare(password, hash)
}

export const createJWT = (user: User) => {
    return jwt.sign({id: user.id}, process.env.JWT_SECRET);
}

export const protect = (req: Request, res: Response, next: NextFunction) => {
    const bearer = req.headers.authorization;   //authorization not authentication
    if (!bearer) {
        res.status(401);
        res.json({message: 'not authorized'});
        return;
    }

    const [, token] = bearer.split(' ');
    if (!token) {
        res.status(401);
        res.json({message: 'not valid'});
        return;
    }
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
        req.params.id = user.id;
        next();
    } catch (e) {
        console.error(e);
        res.status(401);
        res.json({message: 'not valid'});
        return;
    }
}