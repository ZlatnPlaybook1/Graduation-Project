import prisma from "../../../utilities/db";
import { Request, Response } from "express";

// Get Lab Account Details
export async function getLabAccount(req: Request, res: Response) {
  try {
    const account = await prisma.clickJackLab1.findFirst({
      orderBy: { id: "asc" },
    });
    if (!account)
      return res.status(404).json({ message: "Lab account not found" });

    res.status(200).json({ account });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving lab account details." });
  }
}

// Update Lab Account Email by ID and Return Updated Account
export async function updateLabEmail(req: Request, res: Response) {
  const { id, newEmail } = req.body;

  if (!id) return res.status(400).json({ message: "Account ID is required" });
  if (!newEmail?.trim())
    return res.status(400).json({ message: "Email cannot be empty" });

  try {
    // Check if account exists
    const account = await prisma.clickJackLab1.findUnique({
      where: { id: Number(id) },
    });
    if (!account)
      return res.status(404).json({ message: "Lab account not found" });

    // Update email
    await prisma.clickJackLab1.update({
      where: { id: Number(id) },
      data: { email: newEmail },
    });

    // Fetch updated account details
    const updatedAccount = await prisma.clickJackLab1.findUnique({
      where: { id: Number(id) },
    });

    res.status(200).json({
      message: "Email updated successfully",
      account: updatedAccount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating email." });
  }
}

// Apply Exploit Injection (Lab Simulation)
// This endpoint accepts HTML/CSS from the request and returns it embedded in a page
export async function applyExploit(req: Request, res: Response) {
  const { exploitCode } = req.body;

  if (!exploitCode?.trim())
    return res.status(400).json({ message: "Exploit code cannot be empty" });

  try {
    res.status(200).send(`
      <h1>Exploit Applied</h1>
      ${exploitCode}
      <hr/>
      <a href="/lab1/account">Back to Lab Account</a>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error applying exploit." });
  }
}
