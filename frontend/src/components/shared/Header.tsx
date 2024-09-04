import { navLinks } from "@/constants";
import { Link } from "react-router-dom";
import { Theme } from "./Theme";
import { MobileProfileDropDown } from "../MobileProfileDropDown";
import Logo from "./Logo";

const Header = () => {
	return (
		<header className="py-4">
			<div className="container flex items-center justify-between">
				<Logo />

				<Theme />
			</div>
		</header>
	);
};

export default Header;
