import prisma from "../../../utilities/db";
import { Request, Response } from "express";

// Fetch Account Details by ID
export async function getAccount(req: Request, res: Response) {
  const { id } = req.query;

  if (!id) return res.status(400).json({ message: "Account ID is required" });

  try {
    const account = await prisma.bankAccount.findUnique({
      where: { id: Number(id) },
      select: {
        id: true,
        accountNo: true,
        accountName: true,
        accountBalance: true,
      },
    });

    if (!account) return res.status(404).json({ message: "Account not found" });

    res.status(200).json({
      message: "Account details retrieved successfully",
      account,
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

// Update Account Password by ID
export async function updatePassword(req: Request, res: Response) {
  const { id, newPass } = req.body; // Changed to `newPass` to match request format

  if (!id) return res.status(400).json({ message: "Account ID is required" });
  if (!newPass?.trim())
    return res.status(400).json({ message: "Password cannot be empty" });

  try {
    // Check if account exists
    const account = await prisma.bankAccount.findUnique({
      where: { id: Number(id) },
    });

    if (!account) return res.status(404).json({ message: "Account not found" });

    // Update the password for the specific ID
    await prisma.bankAccount.update({
      where: { id: Number(id) },
      data: { accountPass: newPass }, // Updated field name
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
