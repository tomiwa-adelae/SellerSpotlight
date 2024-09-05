"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("@/constants");
const react_router_dom_1 = require("react-router-dom");
const ProfileDropDown_1 = require("./ProfileDropDown");
const Logo_1 = __importDefault(require("./shared/Logo"));
const SideBar = () => {
    const location = (0, react_router_dom_1.useLocation)();
    return (<aside className="fixed h-screen hidden md:flex items-start justify-center flex-col top-0 left-0 w-64 px-4 py-4 border-r-2 border-dashed border-gray-400">
			<Logo_1.default />
			<nav className="flex-1 mt-8 w-full flex items-start justify-start gap-2 flex-col pt-4">
				{constants_1.sidebarLinks.map(({ label, icon, route }, index) => {
            const Icon = icon;
            const isActive = location.pathname === route ||
                location.pathname.startsWith(`${route}/`);
            return (<react_router_dom_1.Link to={route} key={index} className={`flex items-center justify-start w-full rounded-md p-3 text-xs font-bold transition  ${isActive
                    ? "bg-green-400 text-white"
                    : "bg-transparent"} hover:bg-green-200 dark:hover:bg-green-300`}>
							<Icon className="w-4 h-4 mr-2"/>
							{label}
						</react_router_dom_1.Link>);
        })}
			</nav>

			<ProfileDropDown_1.ProfileDropDown />
		</aside>);
};
exports.default = SideBar;
