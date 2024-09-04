import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";

const SearchBar = () => {
	const [keyword, setKeyword] = useState("");
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			let newUrl = "";

			if (keyword) {
				newUrl = formUrlQuery({
					params: location.search,
					key: "query",
					value: keyword,
				});
			} else {
				newUrl = removeKeysFromQuery({
					params: location.search,
					keysToRemove: ["query"],
				});
			}

			navigate(newUrl, { replace: false });
		}, 3000);
		return () => clearTimeout(delayDebounceFn);
	}, [keyword, location, navigate]);

	return (
		<div className="flex w-full items-center space-x-2 mb-4">
			<Input
				type="email"
				placeholder="Search sellers by name..."
				onChange={(e) => setKeyword(e.target.value)}
			/>
			<Button type="submit">
				<Search className="w-4 h-4 md:mr-2" />
				<span className="hidden md:block">Search</span>
			</Button>
		</div>
	);
};

export default SearchBar;
