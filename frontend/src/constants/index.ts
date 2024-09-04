import {
	LayoutDashboard,
	MonitorCog,
	MoonStar,
	Settings,
	Star,
	Sun,
	UserRoundPen,
	Users,
} from "lucide-react";

export const navLinks = [
	{
		label: "Home",
		route: "/",
	},
	{
		label: "About us",
		route: "/about",
	},
	{
		label: "Contact us",
		route: "/contact",
	},
	{
		label: "Services",
		route: "/services",
	},
];

export const sidebarLinks = [
	{
		route: "/dashboard",
		label: "Dashboard",
		icon: LayoutDashboard,
	},
	{
		route: "/sellers",
		label: "Sellers",
		icon: Users,
	},
	{
		route: "/reviews",
		label: "Reviews",
		icon: Star,
	},
	{
		route: "/profile",
		label: "Profile",
		icon: UserRoundPen,
	},
	{
		route: "/settings",
		label: "Settings",
		icon: Settings,
	},
];

export const themes = [
	{
		value: "light",
		icon: Sun,
	},
	{
		value: "dark",
		icon: MoonStar,
	},
	{
		value: "system",
		icon: MonitorCog,
	},
];

export const BASE_URL = "http://localhost:5000";

export const githubRepo = "https://github.com/tomiwa-adelae/Seller-s-hub";
