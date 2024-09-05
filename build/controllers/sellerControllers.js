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
exports.getSellers = void 0;
const asyncHandler_1 = __importDefault(require("../middleware/asyncHandler"));
const sellerModel_1 = __importDefault(require("../models/sellerModel"));
// @desc    Fetch all sellers
// @route   GET /api/sellers
// @access  private
const getSellers = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pageSize = 10;
    const page = Number(req.query.page) || 1;
    try {
        const keyword = req.query.keyword
            ? {
                $or: [
                    {
                        name: {
                            $regex: req.query.keyword,
                            $options: "i",
                        },
                    },
                    {
                        review: {
                            $regex: req.query.keyword,
                            $options: "i",
                        },
                    },
                ],
            }
            : {};
        const count = yield sellerModel_1.default.countDocuments(Object.assign({}, keyword));
        const sellers = yield sellerModel_1.default.find(Object.assign({}, keyword))
            .sort({
            createdAt: -1,
        })
            .limit(pageSize)
            .skip(pageSize * (page - 1));
        res.status(200).json({
            sellers,
            page,
            pages: Math.ceil(count / pageSize),
        });
    }
    catch (error) {
        throw new Error("Server maintenance! Try again later.");
    }
}));
exports.getSellers = getSellers;
