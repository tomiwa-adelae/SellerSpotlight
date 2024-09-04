import { Request, Response } from "express";
import asyncHandler from "../middleware/asyncHandler";
import Seller from "../models/sellerModel";

// @desc    Fetch all sellers
// @route   GET /api/sellers
// @access  private
const getSellers = asyncHandler(async (req: Request, res: Response) => {
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

		const count = await Seller.countDocuments({ ...keyword });

		const sellers = await Seller.find({ ...keyword })
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
	} catch (error) {
		throw new Error("Server maintenance! Try again later.");
	}
});

export { getSellers };
