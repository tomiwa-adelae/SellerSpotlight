import mongoose from "mongoose";

export interface ISeller {
	name: string;
	rating: string | number;
	logo: string;
	review: string;
}

const sellerSchema = new mongoose.Schema(
	{
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
			default:
				"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
		},
	},
	{ timestamps: true }
);

const Seller = mongoose.model("Seller", sellerSchema);

export default Seller;
