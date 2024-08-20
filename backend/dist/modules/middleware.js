import { validationResult } from "express-validator";
export const handleUserInput = (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        res.status(400);
        res.json({ errors: errors.array() });
    }
    else {
        next();
    }
};
//# sourceMappingURL=middleware.js.map