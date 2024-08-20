import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import crypto from 'crypto';


dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const authNumbers: {[key: string]: {number: string, expiry: number}} = {};

let authNumber = function generateAuthNumber(email: string): string {
  const number = crypto.randomInt(100000, 999999).toString();
  const expiry = Date.now() + 10 * 60 * 1000; // 10 minutes from now
  authNumbers[email] = {number, expiry};
  return number;
}
export async function sendAuthEmail(toEmail: string): Promise<void> {
    let mailOptions = {
  from: 'cyberacademy6@gmail.com',
  to: toEmail,
  subject: 'Your Authentication Number',
  text: `Your authentication number is: ${authNumber}`,
};
  try {
  let info = await transporter.sendMail(mailOptions);
  console.log('Email sent:', info.response);
} catch (error) {
  console.error('Error sending email:', error);
  // Handle the error appropriately, maybe retry or notify an admin
}
}


export function validateAuthNumber(email: string, userInput: string): {valid: boolean, message: string} {
  const storedAuth = authNumbers[email];
  if (!storedAuth) {
    return {valid: false, message: "No authentication number found for this email."};
  }
  if (Date.now() > storedAuth.expiry) {
    delete authNumbers[email];
    return {valid: false, message: "Authentication number has expired."};
  }
  if (storedAuth.number === userInput) {
    delete authNumbers[email];
    return {valid: true, message: "Authentication successful."};
  }
  return {valid: false, message: "Invalid authentication number."};
}


// const authNumbers={};
// function generateAuthNumber() {
//     return Math.floor(100000 + Math.random() * 900000).toString();
// }
//
// export async function sendAuthEmail(toEmail) {
//     const authNumber = generateAuthNumber();
//     authNumbers[toEmail] = authNumber;
//
//     let transporter = nodemailer.createTransport({
//         service: 'Gmail',
//         auth: {
//             user: 'momenmostafa135@gmail.com',
//             pass: 'momen2154',
//         },
//     });
//
//     let mailOptions = {
//         from: 'momenmostafa135@gmail.com',
//         to: toEmail,
//         subject: 'Your Authentication Number',
//         text: `Your authentication number is: ${authNumber}`,
//     };
//
//     try {
//         let info = await transporter.sendMail(mailOptions);
//         console.log('Email sent: ' + info.response);
//     } catch (error) {
//         console.error('Error sending email: ' + error);
//     }
// }
// export function validateAuthNumber(email, userInput) {
//     const storedAuthNumber = authNumbers[email];
//
//     if (!storedAuthNumber) {
//         return { valid: false, message: "No authentication number found for this email." };
//     }
//
//     if (storedAuthNumber === userInput) {
//         delete authNumbers[email];
//         return { valid: true, message: "Authentication successful." };
//     } else {
//         return { valid: false, message: "Invalid authentication number." };
//     }
// }