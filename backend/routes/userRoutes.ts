import express from "express";
import {
	loginValidator,
	registerValidator,
	validate,
} from "../utils/validators";
import { loginUser, registerUser } from "../controllers/userControllers";

const router = express.Router();

router.route("/").post(validate(registerValidator), registerUser);
router.route("/auth").post(validate(loginValidator), loginUser);

export default router;
