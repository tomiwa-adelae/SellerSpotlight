"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validators_1 = require("../utils/validators");
const userControllers_1 = require("../controllers/userControllers");
const router = express_1.default.Router();
router.route("/").post((0, validators_1.validate)(validators_1.registerValidator), userControllers_1.registerUser);
router.route("/auth").post((0, validators_1.validate)(validators_1.loginValidator), userControllers_1.loginUser);
exports.default = router;
