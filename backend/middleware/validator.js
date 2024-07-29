import { check, validationResult } from "express-validator";

// validation chains for "name", "email", "password" fields
const userValidator = [
    check("name").trim().not().isEmpty().withMessage("Name is missing!"),
    check("email").normalizeEmail().isEmail().withMessage("Email is invalid!"),
    check("password")
        .trim()
        .not()
        .isEmpty()
        .withMessage("Password is missing!")
        .isLength({ min: 8, max: 20})
        .withMessage("Password must be 8 to 20 characters long!"),
];

// extracts validation errors from a req making them available in a res obj
const validate = (req, res, next) => {
    const error = validationResult(req).array();
    if (error.length) {
        return res.json({ error: error[0].msg }); // show 1 error at a time
    }
    next();
};

export { userValidator, validate };