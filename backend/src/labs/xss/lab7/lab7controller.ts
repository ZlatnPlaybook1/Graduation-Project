import {Request,Response} from "express";

export async function displayCountries(req: Request, res: Response) {
    const countries = ["Egypt", "USA", "France"];
    return res.status(200).json({
        msg: "Countries fetched successfully",
        data: {
            countries: countries
        }
    });
}