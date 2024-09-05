import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<div>
			<Link to="/" className="flex items-center justify-start gap-2">
				<img
					src={"/assets/logo.svg"}
					alt={"SellerSpotlight Logo"}
					width={1000}
					height={1000}
					className="w-8 h-8 md:w-10 md:h-10 object-cover"
				/>
				<h3
					style={{ fontFamily: "Irish Grover" }}
					className="text-green-400 text-2xl font-bold"
				>
					SellerSpotlight
				</h3>
			</Link>
		</div>
	);
};

export default Logo;
