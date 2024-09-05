"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.footerLinks = exports.githubRepo = exports.BASE_URL = exports.themes = exports.sidebarLinks = exports.navLinks = void 0;
const lucide_react_1 = require("lucide-react");
exports.navLinks = [
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
exports.sidebarLinks = [
    {
        route: "/dashboard",
        label: "Dashboard",
        icon: lucide_react_1.LayoutDashboard,
    },
    {
        route: "/sellers",
        label: "Sellers",
        icon: lucide_react_1.Users,
    },
    {
        route: "/reviews",
        label: "Reviews",
        icon: lucide_react_1.Star,
    },
    {
        route: "/profile",
        label: "Profile",
        icon: lucide_react_1.UserRoundPen,
    },
    {
        route: "/settings",
        label: "Settings",
        icon: lucide_react_1.Settings,
    },
];
exports.themes = [
    {
        value: "light",
        icon: lucide_react_1.Sun,
    },
    {
        value: "dark",
        icon: lucide_react_1.MoonStar,
    },
    {
        value: "system",
        icon: lucide_react_1.MonitorCog,
    },
];
exports.BASE_URL = "http://localhost:5000";
exports.githubRepo = "https://github.com/tomiwa-adelae/Seller-s-hub";
exports.footerLinks = [
    {
        icon: lucide_react_1.Github,
        label: "Github",
        link: "https://github.com/tomiwa-adelae",
    },
    {
        icon: lucide_react_1.Instagram,
        label: "Instagram",
        link: "https://www.instagram.com/tomiwaadelae/",
    },
    {
        icon: lucide_react_1.Twitter,
        label: "Twitter / X",
        link: "https://x.com/tomiwaadelae",
    },
];
