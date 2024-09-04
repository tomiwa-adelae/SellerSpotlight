import express from "express";
import { getSellers } from "../controllers/sellerControllers";

const router = express.Router();

router.route("/").get(getSellers);

export default router;
