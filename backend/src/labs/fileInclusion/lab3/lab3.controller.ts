import { Request, Response } from "express";
import path from "path";
import fs from "fs";

export async function cityPage(req: Request, res: Response) {
    try {
        let city = req.query.city as string;

        if (!city) {
            return res.status(400).send("City parameter is required.");
        }

        // Sanitize the input by removing any unwanted characters
        city = city.replace(/[^a-zA-Z0-9_-]/g, "");

        // Construct the file path relative to the `views` directory
        const filePath = path.join(__dirname, "../../../../views", `${city}.ejs`);

        // Check if the file exists
        if (!fs.existsSync(filePath)) {
            return res.status(400).send("ERROR: File not found!");
        }

        // Render the city page
        res.render(city);
    } catch (error) {
        res.status(500).send(error.message || "Error rendering page.");
    }
}
