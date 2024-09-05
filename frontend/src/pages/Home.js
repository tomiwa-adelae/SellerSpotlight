"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Footer_1 = __importDefault(require("@/components/shared/Footer"));
const Header_1 = __importDefault(require("@/components/shared/Header"));
const button_1 = require("@/components/ui/button");
const react_router_dom_1 = require("react-router-dom");
const Home = () => {
    return (<div>
			<Header_1.default />
			<div className="container">
				<div className="min-h-[80vh] flex flex-col items-start text-left justify-center gap-6 w-full md:w-5/6 mx-auto">
					<h1 className="text-4xl md:text-5xl lg:text-6xl" style={{ fontFamily: "Irish Grover" }}>
						Shining a Light on{" "}
						<span className="bg-gradient-to-r from-green-700 to-orange-600 bg-clip-text text-transparent">
							Trusted Sellers
						</span>
					</h1>
					<p className="text-sm md:text-base w-full md:w-5/6">
						At SellerSpotlight, we illuminate the path to smarter
						shopping, discover trusted sellers, read honest reviews,
						and make informed choices with ease. SellerSpotlight is
						your go-to platform for transparency and trust in every
						transaction.
					</p>
					<button_1.Button asChild>
						<react_router_dom_1.Link to="/sign-up">Get started</react_router_dom_1.Link>
					</button_1.Button>
				</div>
				<Footer_1.default />
			</div>
		</div>);
};
exports.default = Home;
