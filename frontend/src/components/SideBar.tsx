import { sidebarLinks } from "@/constants";
import { Link, useLocation } from "react-router-dom";
import { ProfileDropDown } from "./ProfileDropDown";
import Logo from "./shared/Logo";

const SideBar = () => {
	const location = useLocation();

	return (
		<aside className="fixed h-screen hidden md:flex items-start justify-center flex-col top-0 left-0 w-64 px-4 py-4 border-r-2 border-dashed border-gray-400">
			<Logo />
			<nav className="flex-1 mt-8 w-full flex items-start justify-start gap-2 flex-col pt-4">
				{sidebarLinks.map(({ label, icon, route }, index) => {
					const Icon = icon;

					const isActive =
						location.pathname === route ||
						location.pathname.startsWith(`${route}/`);

					return (
						<Link
							to={route}
							key={index}
							className={`flex items-center justify-start w-full rounded-md p-3 text-xs font-bold transition  ${
								isActive
									? "bg-green-400 text-white"
									: "bg-transparent"
							} hover:bg-green-200 dark:hover:bg-green-300`}
						>
							<Icon className="w-4 h-4 mr-2" />
							{label}
						</Link>
					);
				})}
			</nav>

			<ProfileDropDown />
		</aside>
	);
};

export default SideBar;
