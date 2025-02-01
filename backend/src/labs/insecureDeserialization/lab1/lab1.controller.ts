import { Request, Response } from "express";

export const loginController = async (req: Request, res: Response) => {
    console.log("Cookies:", req.cookies);
    console.log("Body:", req.body);

    console.log("Cookies received:", req.cookies);

    const { username, password } = req.body;

    if (username === "admin") {
        res.cookie("session", req.cookies.session, {
            httpOnly: true,
            secure: false, // Set to true if using HTTPS
            sameSite: "lax", // Corrected to lowercase
        });
        return res.json({ message: "Login successful", data: { username } });
    }

    // Handle "admin" user login
    if (username === "admin" && password === "admin") {
        const sessionCookie = req.cookies.session;

        if (!sessionCookie) {
            console.error("Session cookie is missing");
            return res.status(400).json({ error: "Session cookie is missing" });
        }

        const decodedCookie = Buffer.from(sessionCookie, "base64").toString("utf-8");
        console.log("Decoded Cookie:", decodedCookie);

        // Validate the decoded cookie structure
        if (decodedCookie.includes('s:8:"username";s:5:"admin"')) {
            return res
                .status(200)
                .json({ message: "Login successful", data: { username: "admin" } });
        }

        console.error("Decoded cookie does not match the expected structure");
        return res
            .status(400)
            .json({ error: "Invalid session cookie format or content" });
    }

    // Invalid credentials
    return res.status(401).json({ error: "Invalid username or password" });
};