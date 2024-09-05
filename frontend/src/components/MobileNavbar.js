"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileNavbar = MobileNavbar;
const button_1 = require("@/components/ui/button");
const sheet_1 = require("@/components/ui/sheet");
const constants_1 = require("@/constants");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
function MobileNavbar() {
    const location = (0, react_router_dom_1.useLocation)();
    return (<sheet_1.Sheet>
			<sheet_1.SheetTrigger asChild className="md:hidden">
				<button_1.Button variant="ghost" size="icon">
					<lucide_react_1.Menu />
				</button_1.Button>
			</sheet_1.SheetTrigger>
			<sheet_1.SheetContent side={"left"} className="flex items-center justify-center flex-col" style={{ zIndex: "20000" }}>
				<sheet_1.SheetHeader className="w-full">
					<sheet_1.SheetClose asChild>
						<react_router_dom_1.Link to="/" className="flex items-center justify-start gap-2">
							<img src={"/assets/logo.png"} alt={"SchoolHub Logo"} width={1000} height={1000} className="w-8 h-8 md:w-10 md:h-10 object-cover"/>
							<h3 style={{ fontFamily: "Irish Grover" }} className="text-purple-400 text-2xl font-bold">
								SellerSpotlight
							</h3>
						</react_router_dom_1.Link>
					</sheet_1.SheetClose>
				</sheet_1.SheetHeader>
				<nav className="flex-1 mt-4 w-full flex items-start justify-start gap-2 flex-col pt-4">
					{constants_1.sidebarLinks.map(({ label, icon, route }, index) => {
            const Icon = icon;
            const isActive = location.pathname === route ||
                location.pathname.startsWith(`${route}/`);
            return (<sheet_1.SheetClose asChild key={index}>
								<react_router_dom_1.Link to={route} className={`flex items-center justify-start w-full rounded-md p-3 text-xs font-bold transition  ${isActive
                    ? "bg-green-400 text-white"
                    : "bg-transparent"} hover:bg-green-200 dark:hover:bg-green-300`}>
									<Icon className="w-4 h-4 mr-2"/>
									{label}
								</react_router_dom_1.Link>
							</sheet_1.SheetClose>);
        })}
				</nav>
			</sheet_1.SheetContent>
		</sheet_1.Sheet>);
}
