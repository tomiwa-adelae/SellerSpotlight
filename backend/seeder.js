"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sellerModel_1 = __importDefault(require("./models/sellerModel"));
const db_1 = require("./config/db");
const sellers_1 = __importDefault(require("./data/sellers"));
(0, db_1.connectDB)();
const importData = async () => {
    try {
        await sellerModel_1.default.deleteMany();
        const createdSellers = await sellerModel_1.default.insertMany(sellers_1.default);
        console.log("Data imported!");
        process.exit();
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
};
const destroyData = async () => {
    try {
        await sellerModel_1.default.deleteMany();
        console.log("Data deleted!");
        process.exit();
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
};
if (process.argv[2] === "-d") {
    destroyData();
}
else {
    importData();
}
