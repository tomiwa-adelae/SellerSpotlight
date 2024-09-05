"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const importData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sellerModel_1.default.deleteMany();
        const createdSellers = yield sellerModel_1.default.insertMany(sellers_1.default);
        console.log("Data imported!");
        process.exit();
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
});
const destroyData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sellerModel_1.default.deleteMany();
        console.log("Data deleted!");
        process.exit();
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
});
if (process.argv[2] === "-d") {
    destroyData();
}
else {
    importData();
}
