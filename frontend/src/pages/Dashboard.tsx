import MainLayout from "@/components/layout/MainLayout";
import Loader from "@/components/Loader";
import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";
import SellerLists from "@/components/SellerLists";
import { BASE_URL } from "@/constants";
import { useAuth } from "@/context/AuthProvider";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface Seller {
	id: string;
	name: string;
	rating: string;
	review: string;
}

const Dashboard: React.FC = () => {
	const { toast } = useToast();

	const [loading, setLoading] = useState<boolean>(false);
	const [sellers, setSellers] = useState<Seller[]>([]);
	const [page, setPage] = useState<number>(1);
	const [pages, setPages] = useState<number>(1);

	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const keyword = searchParams.get("query") || "";
	const currentPage = parseInt(searchParams.get("page") || "1", 10);

	const { user } = useAuth();

	useEffect(() => {
		const fetchSellers = async () => {
			setLoading(true);
			try {
				// Construct the API URL with keyword and page parameters
				const url = `${BASE_URL}/api/sellers?keyword=${keyword}&page=${currentPage}`;
				const res = await axios.get(url);
				setSellers(res.data.sellers);
				setPage(res.data.page);
				setPages(res.data.pages);
			} catch (error: any) {
				toast({
					title:
						error?.response?.data?.message ||
						"Something went wrong!",
					variant: "destructive",
				});
			} finally {
				setLoading(false);
			}
		};

		fetchSellers();
	}, [keyword, currentPage]);

	return (
		<MainLayout>
			<main>
				<h1 className="font-semibold text-2xl">
					Welcome, {user?.fullName} 👋
				</h1>
				<p className="text-sm mt-2 dark:text-gray-300">
					Start the day discovering trusted sellers with honest
					reviews.
				</p>
				<h3 className="font-bold text-lg my-4">Explore sellers</h3>

				<SearchBar />

				{loading ? (
					<Loader />
				) : (
					<>
						<SellerLists sellers={sellers} />
						<Pagination page={page} pages={pages} />
					</>
				)}
			</main>
		</MainLayout>
	);
};

export default Dashboard;
