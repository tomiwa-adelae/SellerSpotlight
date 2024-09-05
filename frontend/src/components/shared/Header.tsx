import Logo from "./Logo";
import { Theme } from "./Theme";

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
