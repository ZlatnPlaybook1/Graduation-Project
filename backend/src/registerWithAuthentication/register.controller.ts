import prisma from "../utilities/db";
import {createJWT, hashPassword} from "../utilities/auth";
import {Request, Response} from "express";
import {sendVerificationEmail, validateVerificationNumber} from "./authenticator.service";
import crypto from "crypto";

class RegistrationController {
    public email: string;
    public name: string;
    public password: string;

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
            const {email, name, password} = req.body;

            // Check if email already exists
            const existingEmail = await prisma.user.findFirst({
                where: {email}
            });

            if (existingEmail) {
                return res.status(409).json({data: "Email already exists"});
            }

            this.email = email;
            this.name = name;
            this.password = password;

            // Hash the password before storing it in the database
            const hashedPassword = await hashPassword(this.password);
            const number = crypto.randomInt(100000, 999999);
            const expiry = Date.now() + 10 * 60 * 1000; // 10 minutes from now

            // Create a user with `isVerified` as false and store the hashed password
            const tempUser = await prisma.user.create({
                data: {
                    email: this.email,
                    name: this.name,
                    password: hashedPassword, // Store the hashed password
                    isVerified: false,        // User is not verified yet
                    validationNumber: {
                        create: {
                            number: number.toString(),
                            expiration: BigInt(expiry),
                            isVerified: false,
                        }
                    }
                }
            });
            // Store the number and expiry time in the database


            // Send the verification email with the user ID
            await sendVerificationEmail(this.email, number.toString());

            return res.status(200).json({message: "Authentication email sent"});
        } catch (error) {
            console.error('Error initiating registration:', error);
            return res.status(500).json({data: "Error initiating registration"});
        }
    }

    // Step 2: Complete registration
    public async completeRegistration(req: Request, res: Response): Promise<Response> {
        const {email, number} = req.body; // Take email and auth number from the request

        try {
            // Validate the verification number using the email
            const validationResponse = await validateVerificationNumber(email, number); // Await here since it returns a promise

            if (!validationResponse.valid) {
                console.log("Validation response:", validationResponse);
                return res.status(400).json({data: validationResponse.message});
            }

            // Update the user to mark them as verified
            const user = await prisma.user.update({
                where: {email}, // Update the user by email
                data: {
                    isVerified: true, // Mark user as verified after successful validation
                }
            });

            // Generate JWT
            const token: string = createJWT(user);
            res.cookie('token', token, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000 // 24 hours
            });

            return res.status(201).json({token});
        } catch (error) {
            console.error('Error completing registration:', error);
            return res.status(500).json({data: "Error completing registration"});
        }
    }
}

export default RegistrationController;
