"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const input_1 = require("./ui/input");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const SearchBar = () => {
    const [keyword, setKeyword] = (0, react_1.useState)("");
    const navigate = (0, react_router_dom_1.useNavigate)();
    const location = (0, react_router_dom_1.useLocation)();
    (0, react_1.useEffect)(() => {
        const delayDebounceFn = setTimeout(() => {
            const searchParams = new URLSearchParams(location.search);
            if (keyword) {
                // Remove the 'page' parameter before setting 'query'
                searchParams.delete("page");
                searchParams.set("query", keyword);
            }
            else {
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
    return (<div className="flex w-full items-center space-x-2 mb-4">
			<input_1.Input type="email" placeholder="Search sellers by name..." onChange={(e) => setKeyword(e.target.value)}/>
		</div>);
};
exports.default = SearchBar;
