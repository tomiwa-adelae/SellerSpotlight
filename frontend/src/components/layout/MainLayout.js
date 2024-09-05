"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MainLayout;
const react_1 = __importStar(require("react"));
const SideBar_1 = __importDefault(require("../SideBar"));
const TopNavBar_1 = __importDefault(require("../TopNavBar"));
const react_router_dom_1 = require("react-router-dom");
const AuthProvider_1 = require("@/context/AuthProvider");
const use_toast_1 = require("@/hooks/use-toast");
const Footer_1 = __importDefault(require("../shared/Footer"));
// Importing all created components
// Pass the child props
function MainLayout({ children, }) {
    const { toast } = (0, use_toast_1.useToast)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { user } = (0, AuthProvider_1.useAuth)();
    (0, react_1.useEffect)(() => {
        if (!user) {
            toast({
                title: "Please, sign into your account!",
                variant: "destructive",
            });
            navigate("/sign-in");
        }
    }, [user]);
    return (<div>
			<SideBar_1.default />
			<div className="flex-1 flex flex-col md:ml-64">
				<TopNavBar_1.default />
				<div className="container py-4 mt-14 md:mt-0">
					{children}
					<Footer_1.default />
				</div>
			</div>
		</div>);
}
