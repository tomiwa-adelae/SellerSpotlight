import { Request, Response } from "express";

import asyncHandler from "../middleware/asyncHandler";
import User, { IUser } from "../models/userModel";
import generateToken from "../utils/generateToken";

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req: Request, res: Response) => {
	const { fullName, email, password } = req.body;

	const userExist = await User.findOne({ email });

	if (userExist) {
		res.status(400);
		throw new Error("User already exists!");
	}

	const user: IUser = await User.create({
		fullName,
		email,
		password,
	});

	if (user) {
		generateToken(res, user._id);
		res.status(201).json({
			_id: user._id,
			fullName: user.fullName,
			email: user.email,
			picture: user.picture,
		});
	} else {
		res.status(400);
		throw new Error("Server maintenance! Try again later.");
	}
});

// @desc    Auth a user
// @route   POST /api/users/auth
// @access  Public
const loginUser = asyncHandler(async (req: Request, res: Response) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	// @ts-ignore
	if (user && (await user.matchPassword(password))) {
		generateToken(res, user._id);

		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			email: user.email,
			picture: user.picture,
		});
	} else {
		res.status(400);
		throw new Error("Invalid email or password!");
	}
});

export { registerUser, loginUser };
