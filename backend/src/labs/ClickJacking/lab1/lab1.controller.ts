import prisma from "../../../utilities/db";
import { Request, Response } from "express";

// GET /clickJackLab1-account
export async function getLabAccount(req: Request, res: Response) {
  try {
    // For simplicity, fetch the first account
    const account = await prisma.clickJackLab1.findFirst({
      orderBy: { id: "asc" },
    });
    if (!account) {
      return res.status(404).json({ message: "Lab account not found" });
    }
    res.status(200).json({ account });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving lab account details." });
  }
}

// POST /clickJackLab1-edit-info
export async function updateLabEmail(req: Request, res: Response) {
  const { email, id } = req.body;
  const accountId = id || 1;

  if (!email?.trim()) {
    return res.status(400).json({ message: "Email cannot be empty" });
  }

  try {
    const account = await prisma.clickJackLab1.findUnique({
      where: { id: Number(accountId) },
    });
    if (!account) {
      return res.status(404).json({ message: "Lab account not found" });
    }

    await prisma.clickJackLab1.update({
      where: { id: Number(accountId) },
      data: { email },
    });

    const updatedAccount = await prisma.clickJackLab1.findUnique({
      where: { id: Number(accountId) },
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

// POST /clickJackLab1-delete-account
// This endpoint exists but is NOT shown on the real page (simulates a dangerous action).
export async function deleteAccount(req: Request, res: Response) {
  try {
    const { id, csrf } = req.body;
    // Dummy CSRF check
    if (csrf !== "dummy-csrf-token") {
      return res.status(403).json({ message: "Invalid CSRF token" });
    }

    const account = await prisma.clickJackLab1.findUnique({
      where: { id: Number(id) },
    });
    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }

    // Delete the account from DB (or simulate)
    await prisma.clickJackLab1.delete({
      where: { id: Number(id) },
    });

    res.status(200).json({ message: "Account deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting account." });
  }
}

// POST /clickJackLab1-apply-exploit
// Returns a page embedding any HTML the attacker provided.
export async function applyExploit(req: Request, res: Response) {
  const { exploitCode } = req.body;
  if (!exploitCode?.trim()) {
    return res.status(400).json({ message: "Exploit code cannot be empty" });
  }
  try {
    res.status(200).send(`
      <html>
        <head>
          <title>Exploit Applied</title>
          <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        </head>
        <body>
          <h1>Exploit Applied</h1>
          ${exploitCode}
          <hr/>
          <a href="/lab1/account">Back to Lab Account</a>
          <script>
            Swal.fire({
              icon: 'success',
              title: 'Exploit Executed!',
              text: 'Your exploit code has been applied.'
            });
          </script>
        </body>
      </html>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error applying exploit." });
  }
}

// (Optional) GET /clickJackLab1-apply-exploit
// If you want an iframe-based GET demonstration
export async function getExploit(req: Request, res: Response) {
  try {
    res.status(200).send(`
      <html>
        <head>
          <title>Exploit Applied (GET)</title>
          <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        </head>
        <body>
          <h1>Exploit Applied (GET)</h1>
          <script>
            Swal.fire({
              icon: 'success',
              title: 'Exploit Triggered!',
              text: 'Your clickjacking demonstration via GET has succeeded.'
            });
          </script>
        </body>
      </html>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error applying exploit.");
  }
}

// POST /clickJackLab1-login
// Simulates a login endpoint
export async function login(req: Request, res: Response) {
  try {
    const { username, password } = req.body;
    // Check the DB for an account matching the submitted credentials
    const account = await prisma.clickJackLab1.findFirst({
      where: {
        username: username,
        password: password,
      },
    });

    if (account) {
      return res.status(200).json({ message: "Login successful", account });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error logging in." });
  }
}
