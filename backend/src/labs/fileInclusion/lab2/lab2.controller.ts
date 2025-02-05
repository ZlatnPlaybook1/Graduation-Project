import { Request, Response } from "express";

export async function cityPage(req: Request, res: Response) {
    try {
        let city = req.query.city as string;

        if (!city) {
            return res.status(400).send("City parameter is required.");
        }

        // Prevent Remote File Inclusion (RFI)
        city = city.replace(/https?:\/\//g, "");

        // Prevent Directory Traversal Attacks (LFI)
        city = city.replace(/\.\.\//g, "");

        // Validate the city value against allowed filenames
        const allowedCities = ["Berlin", "Cairo", "London", "Paris", "Pyongyang", "Tokyo"];
        if (!allowedCities.includes(city)) {
            return res.status(400).send("Invalid city parameter.");
        }

        // Render the city page (relative to the `views` directory)
        res.render("index", { cityPage: city });

    } catch (error) {
        res.status(500).send(error.message || "Error rendering page.");
    }
}

