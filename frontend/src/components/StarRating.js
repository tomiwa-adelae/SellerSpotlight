"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const io5_1 = require("react-icons/io5");
const tooltip_1 = require("@/components/ui/tooltip");
const StarRating = ({ rating }) => {
    // Create an array of 5 elements to represent the stars
    const stars = Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        if (starValue <= rating) {
            return <io5_1.IoStar key={index} className="text-green-500 w-4 h-4"/>;
        }
        else if (starValue - rating < 1) {
            return (<io5_1.IoStarHalf key={index} className="text-green-500 w-4 h-4"/>);
        }
        else {
            return (<io5_1.IoStarOutline key={index} className="text-green-200 w-4 h-4"/>);
        }
    });
    return (<tooltip_1.TooltipProvider>
			<tooltip_1.Tooltip>
				<tooltip_1.TooltipTrigger asChild>
					<div className="flex items-center">{stars}</div>
				</tooltip_1.TooltipTrigger>
				<tooltip_1.TooltipContent>
					<p>{rating} out of 5</p>
				</tooltip_1.TooltipContent>
			</tooltip_1.Tooltip>
		</tooltip_1.TooltipProvider>);
};
exports.default = StarRating;
