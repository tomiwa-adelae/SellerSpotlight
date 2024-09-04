import React from "react";
import { MobileNavbar } from "./MobileNavbar";
import { Theme } from "./shared/Theme";
import { Link } from "react-router-dom";

const TopNavBar = ({ children }: { children?: React.ReactNode }) => {
	return (
		<div
			className="container fixed md:relative top-0 right-0 w-full border-b-2 border-dashed border-gray-400 h-14 flex items-center justify-between dark:bg-dark bg-white"
			style={{ zIndex: "100" }}
		>
			<Link to="/" className="flex items-center justify-start gap-2">
				<img
					src={"/assets/logo.png"}
					alt={"SchoolHub Logo"}
					width={1000}
					height={1000}
					className="w-8 h-8 md:hidden"
				/>
			</Link>
			<div className="md:flex-1 flex items-center justify-end gap-4">
				{children}
				<Theme />
				<MobileNavbar />
			</div>
		</div>
	);
};

export default TopNavBar;
