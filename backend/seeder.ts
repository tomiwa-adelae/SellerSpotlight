import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import Seller from "./models/sellerModel";
import { connectDB } from "./config/db";
import sellers from "./data/sellers";

connectDB();

const importData = async () => {
	try {
		await Seller.deleteMany();

		const createdSellers = await Seller.insertMany(sellers);
		console.log("Data imported!");
		process.exit();
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

const destroyData = async () => {
	try {
		await Seller.deleteMany();

		console.log("Data deleted!");
		process.exit();
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

if (process.argv[2] === "-d") {
	destroyData();
} else {
	importData();
}
