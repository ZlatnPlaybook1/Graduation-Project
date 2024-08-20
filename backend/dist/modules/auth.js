import jwt from 'jsonwebtoken';
import bycrpt from 'bcrypt';
export const hashPassword = (password) => {
    return bycrpt.hash(password, 5);
}; // this are an async function by default
export const comparePasswords = (password, hash) => {
    return bycrpt.compare(password, hash);
}; //this also
export const createJWT = (user) => {
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET);
};
export const protect = (req, res, next) => {
    const bearer = req.headers.authorization; //authorization not authontication
    if (!bearer) {
        res.status(401);
        res.json({ message: 'not authorized' });
        return;
    }
    const [, token] = bearer.split(' ');
    if (!token) {
        res.status(401);
        res.json({ message: 'not valid' });
        return;
    }
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.params.userId = user.id;
        next();
    }
    catch (e) {
        console.error(e);
        res.status(401);
        res.json({ message: 'not valid' });
        return;
    }
};
//# sourceMappingURL=auth.js.map