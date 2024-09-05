"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const sellerSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        required: true,
        default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
}, { timestamps: true });
const Seller = mongoose_1.default.model("Seller", sellerSchema);
exports.default = Seller;
