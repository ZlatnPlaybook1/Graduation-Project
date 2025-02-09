import e, { Request, Response } from "express";

export const shoppingCart = async (req: Request, res: Response) => {
    try {
        const products = [{ "name": "airphone", "price": 150 },
        { "name": "iphone", "price": 1000 },
        { "name": "powerbank", "price": 200 }];
        const couponCode = "158657";

        return res.status(200).json({ products, couponCode: couponCode });
    } catch (e) {
        console.error(e);
    }
    return res.status(500).send("Internal Server Error");
}

export const isValidCopoun = async (req: Request, res: Response) => {
    try {
        const couponCode = req.body.couponCode;
        if (couponCode == "158657") {
            return res.status(200).json({
                "message": "Valid Copoun",
                "discount": 50
            });
        };
        return res.status(400).send("Invalid Copoun");
    } catch (e) {
        console.error(e);
    }
    return res.status(500).send("Internal Server Error");
}