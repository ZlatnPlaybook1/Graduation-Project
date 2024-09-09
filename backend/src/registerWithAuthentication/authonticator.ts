import nodemailer from 'nodemailer';
import crypto from 'crypto';


const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.APP_PASSWORD,
    },
});

const authNumbers: { [key: number]: { number: number, expiry: number } } = {};

function generateAuthNumber(email: string): number {
    const number = crypto.randomInt(100000, 999999);
    const expiry = Date.now() + 10 * 60 * 1000; // 10 minutes from now
    authNumbers[email] = { number , expiry};
    return number;
}

export async function sendAuthEmail(toEmail: string): Promise<void> {
    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: toEmail,
        subject: 'Your Authentication Number',
        text: `Your authentication number is: ${generateAuthNumber(toEmail)}`,
    };
    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error(error.message);
    }
}


export function validateAuthNumber(email: string, userInput: number): { valid: boolean, message: string } {
    try {

        const storedAuth = authNumbers[email];
        if (!storedAuth) {
            return {valid: false, message: "No authentication number found for this email."};
        }
        if (Date.now() > storedAuth.expiry) {
            delete authNumbers[email];
            return {valid: false, message: "Authentication number has expired."};
        }
        if ((storedAuth.number) ===Number(userInput)) {
            delete authNumbers[email];
            return {valid: true, message: "Authentication successful."};
        }
        return {valid: false, message: "Invalid authentication number."};

    } catch (error) {
        console.error('Error invalid authentication number:', error);
        return {valid: false, message: "Error validating authentication number."};
    }
}
