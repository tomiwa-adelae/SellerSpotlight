import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<Header />
			<div className="container">
				<div className="min-h-[80vh] flex flex-col items-start text-left justify-center gap-6 w-full md:w-5/6 mx-auto">
					<h1
						className="text-4xl md:text-5xl lg:text-6xl"
						style={{ fontFamily: "Irish Grover" }}
					>
						Shining a Light on{" "}
						<span className="bg-gradient-to-r from-green-700 to-orange-600 bg-clip-text text-transparent">
							Trusted Sellers
						</span>
					</h1>
					<p className="text-sm md:text-base w-full md:w-5/6">
						At SellerSpotlight, we illuminate the path to smarter
						shopping, discover trusted sellers, read honest reviews,
						and make informed choices with ease. SellerSpotlight is
						your go-to platform for transparency and trust in every
						transaction.
					</p>
					<Button asChild>
						<Link to="/sign-up">Get started</Link>
					</Button>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
