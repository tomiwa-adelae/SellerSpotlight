import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler";
import User from "../models/userModel";
import { NextFunction, Request, Response } from "express";

const protect = asyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		let token;

		token = req.cookies.jwt;

		if (token) {
			try {
				const decoded = jwt.verify(token, process.env.JWT_SECRET!);

				// @ts-ignore
				req.user = await User.findById(decoded.userId).select(
					"-password"
				);

				next();
			} catch (error) {
				res.status(401);
				throw new Error("Not authorized, token failed!");
			}
		} else {
			res.status(401);
			throw new Error("Not authorized, no token!");
		}
	}
);
