import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const SearchBar = () => {
	return (
		<div className="flex w-full items-center space-x-2 mb-4">
			<Input type="email" placeholder="Search sellers by name..." />
			<Button type="submit">
				<Search className="w-4 h-4 md:mr-2" />
				<span className="hidden md:block">Search</span>
			</Button>
		</div>
	);
};

export default SearchBar;
