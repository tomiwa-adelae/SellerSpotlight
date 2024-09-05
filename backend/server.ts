import dotenv from "dotenv";
dotenv.config();

import path from "path";

import express, { Express, Response, Request } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorHandler, notFound } from "./middleware/errorMiddleware";

import userRoutes from "./routes/userRoutes";
import sellerRoutes from "./routes/sellerRoutes";
import { connectDB } from "./config/db";

const app: Express = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));

app.use(cookieParser());

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/sellers", sellerRoutes);
app.get("/", (req: Request, res: Response) => {
	res.send("API is up and running...");
});

app.use(express.static(path.join(__dirname, "frontend/dist")));

app.get("*", (req, res) =>
	res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
);

// Middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log("Server is running..."));
