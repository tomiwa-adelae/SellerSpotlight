"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerValidator = exports.loginValidator = exports.validate = void 0;
const express_validator_1 = require("express-validator");
const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                break;
            }
        }
        const errors = (0, express_validator_1.validationResult)(req);
        if (errors.isEmpty()) {
            return next();
        }
        return res.status(422).json({ errors: errors.array() });
    };
};
exports.validate = validate;
exports.loginValidator = [
    (0, express_validator_1.body)("email").trim().isEmail().withMessage("Email address is required!"),
    (0, express_validator_1.body)("password").notEmpty().withMessage("Password is required!"),
];
exports.registerValidator = [
    (0, express_validator_1.body)("fullName").notEmpty().withMessage("Your full name is required!"),
    (0, express_validator_1.body)("email").trim().isEmail().withMessage("Email address is required!"),
    (0, express_validator_1.body)("password").notEmpty().withMessage("Password is required!"),
    (0, express_validator_1.body)("password")
        .trim()
        .isLength({ min: 6 })
        .withMessage("Password should contain at least 6 characters!"),
];
