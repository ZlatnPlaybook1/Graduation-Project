import {Request, Response} from "express";

export const idFunction = async (req: Request, res: Response) => {
    try {
        const id = "1";

        if (!req.body.id) {
            return res.status(400).send("Id is required");
        }
        if (req.body.id === id) {
            return res.status(200).json({id:id})
        }
    }
    catch (e) {
        console.error(e);
    }
    return res.status(401).send("Invalid id");
};
