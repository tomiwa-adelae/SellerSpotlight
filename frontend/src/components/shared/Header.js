"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logo_1 = __importDefault(require("./Logo"));
const Theme_1 = require("./Theme");
const Header = () => {
    return (<header className="py-4">
			<div className="container flex items-center justify-between">
				<Logo_1.default />

				<Theme_1.Theme />
			</div>
		</header>);
};
exports.default = Header;
