import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import StarRating from "./StarRating";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

const SellerLists = ({ sellers }: any) => {
	return (
		<div className="my-6">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Name</TableHead>
						<TableHead>Rating</TableHead>
						<TableHead className="text-right">Review</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{sellers?.map(
						(
							seller: {
								name: string;
								rating: number;
								review: string;
								logo: string;
							},
							index: string
						) => (
							<TableRow key={index}>
								<TableCell className="font-medium">
									<div className="flex items-start md:items-center justify-start flex-col md:flex-row">
										<img
											src={seller.logo}
											alt="Word file"
											className="w-6 h-6 object-cover mr-2"
										/>
										{seller.name}
									</div>
								</TableCell>
								<TableCell>
									<StarRating rating={seller.rating} />
								</TableCell>
								<TableCell className="text-right">
									{seller.review}
								</TableCell>
							</TableRow>
						)
					)}
				</TableBody>
			</Table>
			{sellers.length === 0 && (
				<Alert className="mt-6">
					<Info className="h-4 w-4" />
					<AlertTitle>Heads up!</AlertTitle>
					<AlertDescription>No sellers found</AlertDescription>
				</Alert>
			)}
		</div>
	);
};

export default SellerLists;
