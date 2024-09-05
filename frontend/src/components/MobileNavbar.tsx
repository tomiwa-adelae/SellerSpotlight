import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function MobileNavbar() {
	const location = useLocation();

	return (
		<Sheet>
			<SheetTrigger asChild className="md:hidden">
				<Button variant="ghost" size="icon">
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent
				side={"left"}
				className="flex items-center justify-center flex-col"
				style={{ zIndex: "20000" }}
			>
				<SheetHeader className="w-full">
					<SheetClose asChild>
						<Link
							to="/"
							className="flex items-center justify-start gap-2"
						>
							<img
								src={"/assets/logo.png"}
								alt={"SchoolHub Logo"}
								width={1000}
								height={1000}
								className="w-8 h-8 md:w-10 md:h-10 object-cover"
							/>
							<h3
								style={{ fontFamily: "Irish Grover" }}
								className="text-purple-400 text-2xl font-bold"
							>
								SellerSpotlight
							</h3>
						</Link>
					</SheetClose>
				</SheetHeader>
				<nav className="flex-1 mt-4 w-full flex items-start justify-start gap-2 flex-col pt-4">
					{sidebarLinks.map(({ label, icon, route }, index) => {
						const Icon = icon;

						const isActive =
							location.pathname === route ||
							location.pathname.startsWith(`${route}/`);

						return (
							<SheetClose asChild key={index}>
								<Link
									to={route}
									className={`flex items-center justify-start w-full rounded-md p-3 text-xs font-bold transition  ${
										isActive
											? "bg-green-400 text-white"
											: "bg-transparent"
									} hover:bg-green-200 dark:hover:bg-green-300`}
								>
									<Icon className="w-4 h-4 mr-2" />
									{label}
								</Link>
							</SheetClose>
						);
					})}
				</nav>
			</SheetContent>
		</Sheet>
	);
}
