import { MonitorCog, MoonStar, Sun } from "lucide-react";

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
