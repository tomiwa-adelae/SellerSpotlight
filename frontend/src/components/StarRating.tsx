import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

const StarRating = ({ rating }: { rating: number }) => {
	// Create an array of 5 elements to represent the stars
	const stars = Array.from({ length: 5 }, (_, index) => {
		const starValue = index + 1;
		if (starValue <= rating) {
			return <IoStar key={index} className="text-green-500 w-4 h-4" />;
		} else if (starValue - rating < 1) {
			return (
				<IoStarHalf key={index} className="text-green-500 w-4 h-4" />
			);
		} else {
			return (
				<IoStarOutline key={index} className="text-green-200 w-4 h-4" />
			);
		}
	});

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<div className="flex items-center">{stars}</div>
				</TooltipTrigger>
				<TooltipContent>
					<p>{rating} out of 5</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};

export default StarRating;
