"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const asyncHandler_1 = __importDefault(require("../middleware/asyncHandler"));
const userModel_1 = __importDefault(require("../models/userModel"));
const generateToken_1 = __importDefault(require("../utils/generateToken"));
// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fullName, email, password } = req.body;
    const userExist = yield userModel_1.default.findOne({ email });
    if (userExist) {
        res.status(400);
        throw new Error("User already exists!");
    }
    const user = yield userModel_1.default.create({
        fullName,
        email,
        password,
    });
    if (user) {
        (0, generateToken_1.default)(res, user._id);
        res.status(201).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            picture: user.picture,
        });
    }
    else {
        res.status(400);
        throw new Error("Server maintenance! Try again later.");
    }
}));
exports.registerUser = registerUser;
// @desc    Auth a user
// @route   POST /api/users/auth
// @access  Public
const loginUser = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield userModel_1.default.findOne({ email });
    // @ts-ignore
    if (user && (yield user.matchPassword(password))) {
        (0, generateToken_1.default)(res, user._id);
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            picture: user.picture,
        });
    }
    else {
        res.status(400);
        throw new Error("Invalid email or password!");
    }
}));
exports.loginUser = loginUser;
