import { Request, Response } from "express";

declare module "express-session" {
    interface SessionData {
        sum: number;
    }
}

export const lab2controller = async (req: Request, res: Response) => {
    try {
        // Generate two random numbers between 0 and 10
        const num1 = Math.floor(Math.random() * 11);
        const num2 = Math.floor(Math.random() * 11);

        // Store the sum in the session or a temporary variable
        req.session.sum = num1 + num2;

        // Send the numbers to the client
        res.json({ num1, num2 });
    } catch (e) {
        console.error(e);
        return res.status(500).send("Internal Server Error");
    }
};

export const verifySum = async (req: Request, res: Response) => {
    try {
        const { result } = req.body;

        // Check if the result matches the sum stored in the session
        if (result == req.session.sum) {
            return res.status(200).json({ message: "Correct result" });
        } else {
            return res.status(400).json({ message: "Incorrect result" });
        }
    } catch (e) {
        console.error(e);
        return res.status(500).send("Internal Server Error");
    }
};