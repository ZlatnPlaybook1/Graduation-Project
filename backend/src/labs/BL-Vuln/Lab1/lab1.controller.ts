// import { Request, Response } from "express";
// import prisma from "../../../utilities/db";
// export const addToCart = async (req: Request, res: Response) => {
//   const { name, price } = req.body;

//   try {
//     const item = await prisma.cartItem.create({
//       data: {
//         name,
//         price,
//       },
//     });

//     res.status(200).json({ message: "Item added to cart!", item });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to add item to cart." });
//   }
// };
