import { Request, Response } from 'express';

export async function cityPage(req: Request, res: Response) {
    try {
        let city = req.query.city as string;

        // Prevent directory traversal attacks
        const allowedPages = ["Berlin", "Cairo", "London", "Paris", "Pyongyang", "Tokyo"];

        if (!allowedPages.includes(city)) {
            city = null;
        }

        res.render("index", { cityPage: city });
    }
    catch (error) {
        res.status(500).send(error.message || "Error rendering page.");
    }
}
