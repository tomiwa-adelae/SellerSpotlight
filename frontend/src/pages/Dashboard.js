"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MainLayout_1 = __importDefault(require("@/components/layout/MainLayout"));
const Loader_1 = __importDefault(require("@/components/Loader"));
const Pagination_1 = __importDefault(require("@/components/Pagination"));
const SearchBar_1 = __importDefault(require("@/components/SearchBar"));
const SellerLists_1 = __importDefault(require("@/components/SellerLists"));
const constants_1 = require("@/constants");
const AuthProvider_1 = require("@/context/AuthProvider");
const use_toast_1 = require("@/hooks/use-toast");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Dashboard = () => {
    const { toast } = (0, use_toast_1.useToast)();
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [sellers, setSellers] = (0, react_1.useState)([]);
    const [page, setPage] = (0, react_1.useState)(1);
    const [pages, setPages] = (0, react_1.useState)(1);
    const location = (0, react_router_dom_1.useLocation)();
    const searchParams = new URLSearchParams(location.search);
    const keyword = searchParams.get("query") || "";
    const currentPage = parseInt(searchParams.get("page") || "1", 10);
    const { user } = (0, AuthProvider_1.useAuth)();
    (0, react_1.useEffect)(() => {
        const fetchSellers = async () => {
            setLoading(true);
            try {
                // Construct the API URL with keyword and page parameters
                const url = `${constants_1.BASE_URL}/api/sellers?keyword=${keyword}&page=${currentPage}`;
                const res = await axios_1.default.get(url);
                setSellers(res.data.sellers);
                setPage(res.data.page);
                setPages(res.data.pages);
            }
            catch (error) {
                toast({
                    title: error?.response?.data?.message ||
                        "Something went wrong!",
                    variant: "destructive",
                });
            }
            finally {
                setLoading(false);
            }
        };
        fetchSellers();
    }, [keyword, currentPage]);
    return (<MainLayout_1.default>
			<main>
				<h1 className="font-semibold text-2xl">
					Welcome, {user?.fullName} 👋
				</h1>
				<p className="text-sm mt-2 dark:text-gray-300">
					Start the day discovering trusted sellers with honest
					reviews.
				</p>
				<h3 className="font-bold text-lg my-4">Explore sellers</h3>

				<SearchBar_1.default />

				{loading ? (<Loader_1.default />) : (<>
						<SellerLists_1.default sellers={sellers}/>
						<Pagination_1.default page={page} pages={pages}/>
					</>)}
			</main>
		</MainLayout_1.default>);
};
exports.default = Dashboard;
