// import { Request, Response } from "express";
// import prisma from "../../../utilities/db";
// import axios from "axios"; // For calling external product API

// // External API URL for fetching product details
// const PRODUCT_API_URL = "https://fakestoreapi.com/products";

// // Add item to cart
// export const addToCart = async (req: Request, res: Response) => {
//   const { userId, productId, quantity } = req.body;

//   try {
//     // Check if the user exists
//     const user = await prisma.user.findUnique({ where: { id: userId } });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Fetch product details from external API
//     const productResponse = await axios.get(`${PRODUCT_API_URL}/${productId}`);
//     const product = productResponse.data;

//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     // Add item to the cart
//     const cartItem = await prisma.cartItem.create({
//       data: {
//         userId,
//         productId,
//         quantity,
//       },
//     });

//     res.status(201).json(cartItem);
//   } catch (error) {
//     res.status(500).json({ message: "Error adding item to cart", error });
//   }
// };

// // Get cart details and calculate total cost
// export const getCart = async (req: Request, res: Response) => {
//   const { userId } = req.params;

//   try {
//     // Fetch user and their cart items
//     const user = await prisma.user.findUnique({
//       where: { id: parseInt(userId, 10) },
//       include: { cartItems: true },
//     });

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Fetch product details for each cart item from the external API
//     const cartItemsWithDetails = await Promise.all(
//       user.cartItems.map(async (item) => {
//         const productResponse = await axios.get(
//           `${PRODUCT_API_URL}/${item.productId}`
//         );
//         const product = productResponse.data;
//         return {
//           ...item,
//           product,
//           totalPrice: product.price * item.quantity, // Calculate total price for this item
//         };
//       })
//     );

//     // Calculate total cost of the cart
//     const totalCost = cartItemsWithDetails.reduce(
//       (sum, item) => sum + item.totalPrice,
//       0
//     );

//     res.status(200).json({
//       user: { email: user.email, name: user.name, balance: user.balance },
//       cartItems: cartItemsWithDetails,
//       totalCost,
//       canCheckout: user.balance >= totalCost, // Check if user can afford the cart
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching cart details", error });
//   }
// };

// // Checkout cart
// export const checkoutCart = async (req: Request, res: Response) => {
//   const { userId } = req.params;

//   try {
//     // Fetch user and their cart items
//     const user = await prisma.user.findUnique({
//       where: { id: parseInt(userId, 10) },
//       include: { cartItems: true },
//     });

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Fetch product details for each cart item and calculate total cost
//     const cartItemsWithDetails = await Promise.all(
//       user.cartItems.map(async (item) => {
//         const productResponse = await axios.get(
//           `${PRODUCT_API_URL}/${item.productId}`
//         );
//         const product = productResponse.data;
//         return {
//           ...item,
//           product,
//           totalPrice: product.price * item.quantity,
//         };
//       })
//     );

//     const totalCost = cartItemsWithDetails.reduce(
//       (sum, item) => sum + item.totalPrice,
//       0
//     );

//     // Check if user has enough balance
//     if (user.balance < totalCost) {
//       return res.status(400).json({ message: "Insufficient balance" });
//     }

//     // Deduct total cost from user's balance
//     await prisma.user.update({
//       where: { id: user.id },
//       data: { balance: user.balance - totalCost },
//     });

//     // Clear the cart after successful checkout
//     await prisma.cartItem.deleteMany({
//       where: { userId: user.id },
//     });

//     res.status(200).json({ message: "Checkout successful", totalCost });
//   } catch (error) {
//     res.status(500).json({ message: "Error during checkout", error });
//   }
// };
