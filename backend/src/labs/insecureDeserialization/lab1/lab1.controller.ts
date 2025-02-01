import { Request, Response } from "express";
import { Buffer } from "buffer";

export const loginController = async (req: Request, res: Response) => {
    console.log("Cookies:", req.cookies);
    console.log("Body:", req.body);

    const { username, password } = req.body;

    // Handle "test" user login
    if (username === "test" && password === "test") {
        const sessionData = `s:8:"username";s:4:"test"`;
        const encodedSession = Buffer.from(sessionData).toString("base64");

        res.cookie("session", encodedSession, {
            httpOnly: true,
            secure: false, // Set to true if using HTTPS
            sameSite: "lax",
        });

        return res.status(200).json({ message: "Login successful", data: { username } });
    }

    // Handle "admin" user login
    if (username === "admin" && password === "admin") {
        const sessionData = `s:8:"username";s:5:"admin"`;
        const encodedSession = Buffer.from(sessionData).toString("base64");

        res.cookie("session", encodedSession, {
            httpOnly: true,
            secure: false, // Set to true if using HTTPS
            sameSite: "lax",
        });

        return res.status(200).json({ message: "Login successful", data: { username } });
    }

    // Invalid credentials
    return res.status(401).json({ error: "Invalid username or password" });
};