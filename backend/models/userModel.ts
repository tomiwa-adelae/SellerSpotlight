import mongoose from "mongoose";
import bcrypt from "bcryptjs";

interface UserDocument extends mongoose.Document {
	isModified: (path?: string) => boolean;
	password: string;
}

export interface IUser {
	fullName: string;
	email: string;
	password: string;
	picture: string;
	_id: mongoose.Types.ObjectId;
}

const userSchema = new mongoose.Schema(
	{
		fullName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		picture: {
			type: String,
			required: true,
			default:
				"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
		},
	},
	{ timestamps: true }
);

userSchema.methods.matchPassword = async function (enteredPassword: string) {
	return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (this: UserDocument, next) {
	if (!this.isModified("password")) {
		next();
	}

	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
