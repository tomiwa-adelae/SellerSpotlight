"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const ThemeProvider_1 = require("./context/ThemeProvider");
const Home_1 = __importDefault(require("./pages/Home"));
const SignUp_1 = __importDefault(require("./pages/SignUp"));
const SignIn_1 = __importDefault(require("./pages/SignIn"));
const Dashboard_1 = __importDefault(require("./pages/Dashboard"));
const Sellers_1 = __importDefault(require("./pages/Sellers"));
const Reviews_1 = __importDefault(require("./pages/Reviews"));
const toaster_1 = require("@/components/ui/toaster");
const AuthProvider_1 = require("./context/AuthProvider");
const NotFound_1 = __importDefault(require("./pages/NotFound"));
function App() {
    return (<AuthProvider_1.AuthProvider>
			<ThemeProvider_1.ThemeProvider>
				<react_router_dom_1.Routes>
					<react_router_dom_1.Route path="/" element={<Home_1.default />}/>
					<react_router_dom_1.Route path="/sign-up" element={<SignUp_1.default />}/>
					<react_router_dom_1.Route path="/sign-in" element={<SignIn_1.default />}/>
					<react_router_dom_1.Route path="/dashboard" element={<Dashboard_1.default />}/>
					<react_router_dom_1.Route path="/sellers" element={<Sellers_1.default />}/>
					<react_router_dom_1.Route path="/reviews" element={<Reviews_1.default />}/>
					<react_router_dom_1.Route path="*" element={<NotFound_1.default />}/>
				</react_router_dom_1.Routes>
				<toaster_1.Toaster />
			</ThemeProvider_1.ThemeProvider>
		</AuthProvider_1.AuthProvider>);
}
exports.default = App;
