"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const Logo = () => {
    return (<div>
			<react_router_dom_1.Link to="/" className="flex items-center justify-start gap-2">
				<img src={"/assets/logo.svg"} alt={"SellerSpotlight Logo"} width={1000} height={1000} className="w-8 h-8 md:w-10 md:h-10 object-cover"/>
				<h3 style={{ fontFamily: "Irish Grover" }} className="text-green-400 text-2xl font-bold">
					SellerSpotlight
				</h3>
			</react_router_dom_1.Link>
		</div>);
};
exports.default = Logo;
