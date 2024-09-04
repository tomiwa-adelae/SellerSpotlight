import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import SearchBar from "./SearchBar";
import StarRating from "./StarRating";
import Pagination from "./Pagination";

const sellers = [
	{
		name: "John's Electronics",
		rating: 4.8,
		review: "Excellent customer service and quick delivery.",
	},
	{
		name: "Fashion Hub",
		rating: 4.2,
		review: "Great collection of trendy outfits.",
	},
	{
		name: "Gadget World",
		rating: 3.9,
		review: "Wide variety of gadgets available at decent prices.",
	},
	{
		name: "Healthy Living",
		rating: 4.5,
		review: "High-quality organic products.",
	},
	{
		name: "Book Haven",
		rating: 5,
		review: "A paradise for book lovers!",
	},
];

const SellerLists = () => {
	return (
		<div>
			<div className="my-6">
				<h3 className="font-bold text-lg mb-4">Explore sellers</h3>
				<SearchBar />
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Rating</TableHead>
							<TableHead className="text-right">Review</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{sellers.map((sellers, index) => (
							<TableRow key={index}>
								<TableCell className="font-medium">
									<div className="flex items-start md:items-center justify-start flex-col md:flex-row">
										<img
											src={"/assets/icons/word.svg"}
											alt="Word file"
											className="w-6 h-6 object-cover mr-2"
										/>
										{sellers.name}
									</div>
								</TableCell>
								<TableCell>
									<StarRating rating={sellers.rating} />
								</TableCell>
								<TableCell className="text-right">
									{sellers.review}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
			<Pagination />
		</div>
	);
};

export default SellerLists;
