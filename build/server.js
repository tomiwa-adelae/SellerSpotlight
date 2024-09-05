"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const errorMiddleware_1 = require("./middleware/errorMiddleware");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const sellerRoutes_1 = __importDefault(require("./routes/sellerRoutes"));
const db_1 = require("./config/db");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
(0, db_1.connectDB)();
app.use(express_1.default.json({ limit: "50mb" }));
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({ credentials: true, origin: process.env.CLIENT_URL }));
app.use((0, cookie_parser_1.default)());
// API Routes
app.use("/api/users", userRoutes_1.default);
app.use("/api/sellers", sellerRoutes_1.default);
if (process.env.NODE_ENV === "production") {
    // Serve the static files from frontend/dist
    app.use(express_1.default.static(path_1.default.join(__dirname, "../frontend/dist")));
    // Serve index.html for all remaining routes to handle SPA
    app.get("*", (req, res) => res.sendFile(path_1.default.resolve(__dirname, "../frontend/dist", "index.html")));
    console.log(path_1.default.join(__dirname, "../frontend/dist"));
}
else {
    app.get("/", (req, res) => {
        res.send("API is up and running...");
    });
}
// Middleware
app.use(errorMiddleware_1.notFound);
app.use(errorMiddleware_1.errorHandler);
app.listen(PORT, () => console.log("Server is running..."));
