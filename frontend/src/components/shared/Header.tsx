import { navLinks } from "@/constants";
import { Link } from "react-router-dom";
import { Theme } from "./Theme";

const Header = () => {
	return (
		<header className="py-4">
			<div className="container flex items-center justify-between">
				<Link to="/">
					<h3
						style={{ fontFamily: "Irish Grover" }}
						className="text-purple-400 text-3xl font-bold"
					>
						SellerSpotlight
					</h3>
				</Link>
				<nav className="flex-1 flex items-center justify-center gap-8 text-xs md:text-sm font-semibold">
					{navLinks.map(({ label, route }, index) => (
						<Link key={index} to={route}>
							{label}
						</Link>
					))}
				</nav>
				<Theme />
			</div>
		</header>
	);
};

export default Header;
