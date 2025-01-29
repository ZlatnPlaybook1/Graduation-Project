import { exec } from "child_process";
import os from "os";

/**
 * WARNING: This code is intentionally vulnerable for educational purposes only.
 * DO NOT use this in production environments.
 */
export const commandInjectionLab1 = (req, res) => {
    const input = req.body.ip;
    
    if (!input) {
        return res.status(400).json({ error: "No input provided" });
    }

    // Use | for Windows command chaining
    const command = os.platform() === "win32" 
        ? `cmd.exe /c "ping -n 1 ${input}"` 
        : `ping -c 1 ${input}`;

    exec(command, (error, stdout, stderr) => {
        // Return any output
        const output = stdout || stderr || error?.message || '';
        res.json({ result: output });
    });
};
