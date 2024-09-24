import { Request, Response } from 'express';


export const logout = (req: Request ,res: Response) => {
    res.clearCookie('CuberWeb', {
        httpOnly: true,
        sameSite: 'strict',
    });

    return res.status(200).json({ msg: "Logout successful" });
};
