import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const CSRFLab2 = async (req: Request, res: Response) => {
  const { username, currentPass } = req.body; // input from frontend
  let validPass = ""; // To hold the valid password fetched from DB

  try {
    // Use findUnique to fetch a specific user based on the username
    const user = await prisma.cSRFLab2.findUnique({
      where: { authority: username },
    });

    if (user) {
      // If the user exists, use the corresponding password as validPass
      validPass = user.password; // Store the actual password as validPass

      // Check if the provided password matches the valid password
      if (currentPass === validPass) {
        // Send back the valid password to the client (for educational purposes)
        res.status(200).json({
          success: true,
          message: "User found and password verified",
          validPassword: validPass, // Send the actual password to the client
        });
      } else {
        res.status(401).json({
          success: false,
          message: "Invalid password",
        });
      }
    } else {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
  } catch (error) {
    console.error("Error:", error); // Log the error for debugging
    res.status(500).json({ success: false, message: "Server error" });
  }
};
