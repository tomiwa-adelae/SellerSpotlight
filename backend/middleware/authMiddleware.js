"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const asyncHandler_1 = __importDefault(require("./asyncHandler"));
const userModel_1 = __importDefault(require("../models/userModel"));
const protect = (0, asyncHandler_1.default)(async (req, res, next) => {
    let token;
    token = req.cookies.jwt;
    if (token) {
        try {
            const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            // @ts-ignore
            req.user = await userModel_1.default.findById(decoded.userId).select("-password");
            next();
        }
        catch (error) {
            res.status(401);
            throw new Error("Not authorized, token failed!");
        }
    }
    else {
        res.status(401);
        throw new Error("Not authorized, no token!");
    }
});
