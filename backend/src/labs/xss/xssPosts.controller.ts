import prisma from "../../utilities/db";
import {Request, Response} from "express";

export async function createXssPost(req: Request, res: Response) {
    const user = await prisma.userForXSS.findUnique({
        where: {
            email: req.body.email
        },
    });
    if (!user) {
        return res.status(404).send("Not a user");
    }
    const post = await prisma.post.create({
        data: {
            content: req.body.content,
            userId: user.id
        }
    });
    return res.status(200).json({
        msg: "Post created successfully",
        data: {
            post: post
        }
    });
}