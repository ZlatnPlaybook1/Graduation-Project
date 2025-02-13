import { Request, Response } from 'express';

export async function cityPage(req: Request, res: Response) {
    try {
        let city = req.query.city as string;
        const allowedPages = ["Berlin", "Cairo", "London", "Paris", "Pyongyang", "Tokyo"];

        if (!allowedPages.includes(city)) {
            return res.status(404).send("Page not found");
        }

        res.render(`directory/${city}`, { city }); // Dynamically load city file
    } catch (error) {
        res.status(500).send(error.message || "Error rendering page.");
    }
}
