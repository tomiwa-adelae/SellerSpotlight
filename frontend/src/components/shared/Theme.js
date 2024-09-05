"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Theme = Theme;
const dropdown_menu_1 = require("@/components/ui/dropdown-menu");
const constants_1 = require("@/constants");
const ThemeProvider_1 = require("@/context/ThemeProvider");
const lucide_react_1 = require("lucide-react");
const button_1 = require("../ui/button");
function Theme() {
    const { mode, setMode } = (0, ThemeProvider_1.useTheme)();
    return (<dropdown_menu_1.DropdownMenu>
			<dropdown_menu_1.DropdownMenuTrigger asChild>
				<button_1.Button variant="ghost" className="dark:hover:bg-gray-800" size={"icon"}>
					{mode === "light" ? <lucide_react_1.Sun /> : <lucide_react_1.MoonStar />}
				</button_1.Button>
			</dropdown_menu_1.DropdownMenuTrigger>
			<dropdown_menu_1.DropdownMenuContent className="w-56 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 dark:border-gray-800 dark:text-white">
				{constants_1.themes.map(({ icon, value }, index) => {
            const Icon = icon;
            return (<dropdown_menu_1.DropdownMenuItem className={`uppercase cursor-pointer ${mode === value && "bg-green-400 text-white"} font-bold text-xs`} key={index} onClick={() => {
                    setMode(value);
                    if (value !== "system") {
                        localStorage.theme = value;
                    }
                    else {
                        localStorage.removeItem("theme");
                    }
                }}>
							<Icon className="mr-2"/>
							{value}
						</dropdown_menu_1.DropdownMenuItem>);
        })}
			</dropdown_menu_1.DropdownMenuContent>
		</dropdown_menu_1.DropdownMenu>);
}
