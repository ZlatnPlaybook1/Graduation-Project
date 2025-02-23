import { Request, Response } from "express";
import prisma from "../../../utilities/db";

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

export const setPrice = async (req: Request, res: Response) => {
    try {
        const priceBeforeDiscount = req.body.totalPrice;
        await prisma.lab2RaceConditionPrice.create({
            data: {
                price: priceBeforeDiscount
            }
        });
        return res.status(200).json({ message: "Price has been set" });
    } catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
}


export const isValidCoupon = async (req: Request, res: Response) => {
    try {
        const { couponCode } = req.body;
        // Start a transaction to ensure atomicity
        const result = await prisma.$transaction(async (tx) => {
            // Check if the coupon is valid
            const storedCoupon = await tx.lab2RaceCondition.findFirst({
                where: {
                    coupon: couponCode,
                }
            });

            if (!storedCoupon) {
                return { success: false, message: "Coupon does not exist" };
            }

            if (!storedCoupon.isValid) {
                return { success: false, message: "Coupon is invalid." };
            }

            // Fetch the latest price
            const priceBeforeDiscount = await tx.lab2RaceConditionPrice.findFirst({
                orderBy: { id: "desc" }
            });

            if (!priceBeforeDiscount) {
                return { success: false, message: "No price record found" };
            }

            // Calculate the new price after discount
            const priceAfterDiscount = priceBeforeDiscount.price - (storedCoupon.discount || 50);

            // Update the price atomically
            await tx.lab2RaceConditionPrice.update({
                where: { id: priceBeforeDiscount.id },
                data: { price: priceAfterDiscount }
            });

            // Mark the coupon as used
            if (!storedCoupon.usedAt) {
                await tx.lab2RaceCondition.update({
                    where: { id: storedCoupon.id },
                    data: { usedAt: new Date(), isValid: true }
                });

                // After 1 seconds, disable the coupon
                setTimeout(async () => {
                    await prisma.lab2RaceCondition.update({
                        where: { id: storedCoupon.id },
                        data: { isValid: false }
                    }).catch(() => {}); // Ignore errors if the coupon doesn't exist
                }, 1000);
            }

            return { success: true, priceAfterDiscount };
        });

        // If the coupon was invalid, return a friendly message instead of 400
        if (!result.success) {
            return res.status(200).json({ message: result.message });
        }

        // Send the updated price
        return res.status(200).json({
            message: "Coupon applied successfully",
            totalPrice: result.priceAfterDiscount
        });

    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
