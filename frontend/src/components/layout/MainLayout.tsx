import React from "react";
import SideBar from "../SideBar";
import TopNavBar from "../TopNavBar";

// Importing all created components

// Pass the child props
export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<SideBar />
			<div className="flex-1 md:ml-60">
				<TopNavBar />
				<div className="container py-4 mt-14 md:mt-0">{children}</div>
			</div>
		</div>
	);
}
