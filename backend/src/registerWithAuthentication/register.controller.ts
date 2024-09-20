import prisma from "../utilities/db";
import { createJWT, hashPassword } from "../utilities/auth";
import { Request, Response } from "express";
import { sendAuthEmail, validateAuthNumber } from "./authenticator.service";

class RegistrationController {
    public email: string;
    public name: string;
    public password: string;
    static initiateRegistration: any;
    static completeRegistration: any;

    constructor() {
        this.email = '';
        this.name = '';
        this.password = '';
            this.initiateRegistration = this.initiateRegistration.bind(this);
            this.completeRegistration = this.completeRegistration.bind(this);
    }

    // Step 1: Initial registration
    public async initiateRegistration(req: Request, res: Response): Promise<Response> {
        try {
            const existingEmail = await prisma.user.findFirst({
                where: { email: req.body.email }
            });

            if (existingEmail) {
                return res.status(422).json({ data: "Email already exists" });
            }

            this.email = req.body.email;
            this.name = req.body.name;
            this.password = req.body.password;

            await sendAuthEmail(this.email);

            return res.status(200).json({ message: "Authentication email sent" });
        } catch (error) {
            console.error('Error initiating registration:', error);
            return res.status(500).json({ data: "Error initiating registration" });
        }
    }

    // Step 2: Complete registration
    public async completeRegistration(req: Request, res: Response): Promise<Response> {
        const authNumber: number = req.body.number;

        try {
            const validationResponse = validateAuthNumber(this.email, authNumber);

            if (!validationResponse.valid) {
                console.log("Validation response:", validationResponse);
                return res.status(400).json({ data: validationResponse.message });
            }

            const hash: string = await hashPassword(this.password);

            const user = await prisma.user.create({
                data: {
                    name: this.name,
                    email: this.email,
                    password: hash
                }
            });

            const token: string = createJWT(user);

            return res.status(201).json({ token });
        } catch (error) {
            console.error('Error completing registration:', error);
            return res.status(500).json({ data: "Error completing registration" });
        }
    }
}

export default RegistrationController;
