import { Response, Request } from "express";
import prisma from "../../../utilities/db";

export async function getAccounts(req: Request, res: Response) {
  try {
    const accounts = await prisma.cSRFLab3.findMany({
      orderBy: {
        id: "asc", // Ensures the accounts are ordered by ID in ascending order
      },
      take: 2, // Limits the result to the first two accounts
    });

    return res.status(200).json({
      message: "Accounts retrieved successfully",
      money: accounts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message || "Error retrieving accounts.");
  }
}

export async function getAccount(req: Request, res: Response) {
  try {
    const account = await prisma.cSRFLab3.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!account) {
      return res.status(404).json({
        message: "Account not found",
      });
    }

    return res.status(200).json({
      message: "Account retrieved successfully",
      account: account,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message || "Error retrieving account.");
  }
}

export async function transfer(req: Request, res: Response) {
  try {
    const senderId = Number(req.body.userId); // Sender's ID from the request body
    const transferAmount = Number(req.body.transferAmount); // Transfer amount from the request body

    const accounts = await prisma.cSRFLab3.findMany({
      orderBy: {
        id: "asc", // Ordering by ID ascending
      },
      take: 2, // Selecting the first two accounts
    });

    if (accounts.length < 2) {
      return res.status(400).json({
        message: "Insufficient number of accounts for transfer.",
      });
    }

    const senderAccount = accounts[0]; // First account (sender)
    const receiverAccount = accounts[1]; // Second account (receiver)

    if (!senderAccount || !receiverAccount) {
      return res.status(404).json({
        message: "Account not found",
      });
    }

    if (senderId === receiverAccount.id) {
      return res.status(400).json({
        message: "Invalid operation: Cannot transfer to self.",
      });
    }

    if (senderAccount.balance < transferAmount) {
      return res.status(400).json({
        message: "Insufficient balance",
      });
    }

    // Performing the transfer using a transaction to update both accounts
    await prisma.$transaction([
      prisma.cSRFLab3.update({
        where: { id: senderAccount.id },
        data: { balance: senderAccount.balance - transferAmount },
      }),
      prisma.cSRFLab3.update({
        where: { id: receiverAccount.id },
        data: { balance: receiverAccount.balance + transferAmount },
      }),
    ]);

    return res.status(200).json({
      message: "Transfer successful",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message || "Error transferring funds.");
  }
}
