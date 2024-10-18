import { Request, Response } from "express";
import prisma from "../../utilities/db";

export const findUser = async (req: Request, res: Response) => {
    const username = req.body.username;
    const password = req.body.password;

const user: any = await prisma.$executeRawUnsafe(`
    SELECT * 
    FROM "userForSQLInjection" 
    WHERE username = '${username}' AND password = '${password}';
`);

    if (user === 0) {
        return res.status(404).send("Not a user");
    }

    return res.status(200).json({
        msg: "User found",
        user: user
    });
}