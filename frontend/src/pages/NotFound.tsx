import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="flex items-center flex-col justify-center h-screen">
			<h1
				className="text-green-400 text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
				style={{ fontFamily: "Irish Grover" }}
			>
				404 - Page not found
			</h1>
			<Button asChild>
				<Link to="/">Go back home</Link>
			</Button>
		</div>
	);
};

export default NotFound;
