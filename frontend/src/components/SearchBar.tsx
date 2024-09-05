import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SearchBar = () => {
	const [keyword, setKeyword] = useState("");
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			const searchParams = new URLSearchParams(location.search);

			if (keyword) {
				// Remove the 'page' parameter before setting 'query'
				searchParams.delete("page");
				searchParams.set("query", keyword);
			} else {
				// If no keyword, remove both 'query' and 'page'
				searchParams.delete("query");
				searchParams.delete("page");
			}

			// Update the URL without unnecessary encoding
			navigate(`${location.pathname}?${searchParams.toString()}`, {
				replace: false,
			});
		}, 1500);

		return () => clearTimeout(delayDebounceFn);
	}, [keyword, location, navigate]);

	return (
		<div className="flex w-full items-center space-x-2 mb-4">
			<Input
				type="email"
				placeholder="Search sellers by name..."
				onChange={(e) => setKeyword(e.target.value)}
			/>
		</div>
	);
};

export default SearchBar;
