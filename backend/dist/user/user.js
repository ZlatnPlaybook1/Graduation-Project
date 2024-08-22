import prisma from "../db";
import { comparePasswords, createJWT, hashPassword } from "../modules/auth";
export const createNewUser = async (req, res) => {
    console.log('createNewUser');
    const hash = await hashPassword(req.body.password);
    const user = await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            password: hash
        },
    });
    const token = createJWT(user);
    res.json({ token });
};
export const signin = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            email: req.body.email
        },
    });
    const isValid = await comparePasswords(req.body.password, user.password);
    if (!isValid) {
        return res.status(401).send("Invalid name or password");
    }
    const token = createJWT(user);
    return res.status(200).json({ token });
};
//# sourceMappingURL=registerWithoutAuthentication.js.map