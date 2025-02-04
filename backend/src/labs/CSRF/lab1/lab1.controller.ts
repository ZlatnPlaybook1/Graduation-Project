import prisma from "../../../utilities/db";
import { Request, Response } from "express";

// Fetch Account Details
export async function getAccount(req: Request, res: Response) {
  try {
    const account = await prisma.bankAccount.findFirst(); // Adjust this according to your schema
    if (!account) return res.status(404).json({ message: "Account not found" });
    res.status(200).json({
      message: "Account details retrieved successfully",
      account: account,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error retrieving account details.",
      message:
        error.message || "An error occurred while retrieving account details.",
    });
  }
}

// Update Account Password
export async function updatePassword(req: Request, res: Response) {
  const { accountPass } = req.body;

  if (!accountPass.trim())
    return res.status(400).json({ message: "Password cannot be empty" });

  try {
    const account = await prisma.bankAccount.findFirst(); // Adjust as needed
    if (!account) return res.status(404).json({ message: "Account not found" });

    await prisma.bankAccount.update({
      where: { id: account.id },
      data: { accountPass }, // Make sure 'accountPass' is valid for your schema
    });

    res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error updating password.",
      message:
        error.message || "An error occurred while updating the password.",
    });
  }
}

// Create New Account
export async function createAccount(req: Request, res: Response) {
  const { accountNo, accountPass, accountBalance, accountName } = req.body;

  if (!accountNo || !accountPass || !accountName) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newAccount = await prisma.bankAccount.create({
      data: {
        accountNo,
        accountPass,
        accountBalance: accountBalance || 0,
        accountName,
      },
    });

    res.status(201).json({
      success: true,
      message: "Account created successfully",
      account: newAccount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error creating account.",
      message: error.message || "An error occurred while creating the account.",
    });
  }
}
