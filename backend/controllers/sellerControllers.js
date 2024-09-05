"use strict";
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
const getSellers = (0, asyncHandler_1.default)(async (req, res) => {
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
        const count = await sellerModel_1.default.countDocuments({ ...keyword });
        const sellers = await sellerModel_1.default.find({ ...keyword })
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
});
exports.getSellers = getSellers;
