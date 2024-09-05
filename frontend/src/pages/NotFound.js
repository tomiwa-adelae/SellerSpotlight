"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const button_1 = require("@/components/ui/button");
const react_router_dom_1 = require("react-router-dom");
const NotFound = () => {
    return (<div className="flex items-center flex-col justify-center h-screen">
			<h1 className="text-green-400 text-2xl md:text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "Irish Grover" }}>
				404 - Page not found
			</h1>
			<button_1.Button asChild>
				<react_router_dom_1.Link to="/">Go back home</react_router_dom_1.Link>
			</button_1.Button>
		</div>);
};
exports.default = NotFound;
