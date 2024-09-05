"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const MobileNavbar_1 = require("./MobileNavbar");
const Theme_1 = require("./shared/Theme");
const react_router_dom_1 = require("react-router-dom");
const MobileProfileDropDown_1 = require("./MobileProfileDropDown");
const TopNavBar = ({ children }) => {
    return (<div className="container fixed md:relative top-0 right-0 w-full border-b-2 border-dashed border-gray-400 h-14 flex items-center justify-between dark:bg-dark bg-white" style={{ zIndex: "100" }}>
			<react_router_dom_1.Link to="/" className="flex items-center justify-start gap-2">
				<img src={"/assets/logo.svg"} alt={"SellerSpotlight Logo"} width={1000} height={1000} className="w-8 h-8 md:hidden"/>
			</react_router_dom_1.Link>
			<div className="md:flex-1 flex items-center justify-end gap-4">
				{children}
				<Theme_1.Theme />
				<div className="md:hidden">
					<MobileProfileDropDown_1.MobileProfileDropDown />
				</div>
				<MobileNavbar_1.MobileNavbar />
			</div>
		</div>);
};
exports.default = TopNavBar;
