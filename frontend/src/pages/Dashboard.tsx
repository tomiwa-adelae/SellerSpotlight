import MainLayout from "@/components/layout/MainLayout";
import SellerLists from "@/components/SellerLists";

const Dashboard = () => {
	return (
		<MainLayout>
			<main>
				<h1 className="font-semibold text-2xl">
					Welcome, Tomiwa Adelae 👋
				</h1>
				<p className="text-sm mt-2 dark:text-gray-300">
					Start the day discovering trusted sellers with honest
					reviews.
				</p>
				<SellerLists />
			</main>
		</MainLayout>
	);
};

export default Dashboard;
