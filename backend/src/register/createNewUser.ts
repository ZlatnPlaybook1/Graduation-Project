import prisma from "../db";
import {createJWT, hashPassword} from "../modules/auth";
import {Request, Response} from "express";
import {sendAuthEmail,validateAuthNumber} from "./authonticator"


// Step 1: Initial registration
export const initiateRegistration = async (req: Request, res: Response) => {
  try {
    const existingEmail = await prisma.user.findFirst({
      where: { email: req.body.email }
    });

    if (existingEmail) {
      return res.status(400).json({ data: "Email already exists" });
    }

    await sendAuthEmail(req.body.email);

    return res.status(200).json({ message: "Authentication email sent" });
  } catch (error) {
    console.error('Error initiating registration:', error);
    return res.status(500).json({ data: "Error initiating registration" });
  }
};

// Step 2: Complete registration
export const completeRegistration = async (req: Request, res: Response) => {
  try {
    const { email, authNumber, name, password } = req.body;

    const validationResponse = validateAuthNumber(email, authNumber);

    if (!validationResponse.valid) {
      return res.status(400).json({ data: validationResponse.message });
    }

    const hash: string = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hash
      }
    });

    const token: string = createJWT(user);
    res.json({ token });
  } catch (error) {
    console.error('Error completing registration:', error);
    return res.status(500).json({ data: "Error completing registration" });
  }
};