import Handlebars from 'handlebars';
import { Request, Response } from 'express';
import path from 'path';

Handlebars.registerHelper("evil", function (code: string) {
  return eval(code); // 🚨 UNSAFE! (For demonstration only)
});

export const lab2controller = (req: Request, res: Response) => {
  let userInput = req.params.payload;
  console.log("Lab Exercise - User Input:", userInput);

  // Define the secure execution directory
  const targetDir = path.resolve(
    __dirname, 
    '../../../labs/SSTI/lab2/secretFolder'
  );

  try {
    userInput = decodeURIComponent(userInput);
  } catch (err) {
    return res.send("<p>Error: Malformed input.</p>");
  }

  // Force command execution in targetDir and sanitize input
  if (userInput.includes("execSync('")) {
    const commandMatch = userInput.match(/execSync\('(.+?)'\)/);
    if (commandMatch?.[1]) {
      let cmd = commandMatch[1].trim();

      // Block directory traversal attempts
      if (cmd.includes("..") || cmd.includes("/") || cmd.includes("\\")) {
        return res.send("<p>Error: Invalid path.</p>");
      }

      // Force execution in targetDir (Windows)
      const forcedCmd = `cd /D "${targetDir}" && ${cmd}`;

      // Escape backslashes and quotes for JavaScript
      const sanitizedCmd = forcedCmd
        .replace(/\\/g, '\\\\')  // Escape backslashes
        .replace(/"/g, '\\"');   // Escape double quotes

      // Rebuild the payload
      userInput = `this.constructor.constructor("return process")().mainModule.require("child_process").execSync("${sanitizedCmd}").toString()`;
    }
  }

  try {
    const template = Handlebars.compile("<h1>Lab Result: {{evil name}}</h1>");
    const output = template({ name: userInput });
    res.send(output).json({ message: "congratulation lab2 solved" });
  } catch (err) {
    res.send(`<p>Error: ${err.message}</p>`);
  }
};