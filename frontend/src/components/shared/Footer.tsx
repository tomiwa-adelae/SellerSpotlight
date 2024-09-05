import { footerLinks } from "@/constants";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

const Footer = () => {
	return (
		<footer className="flex flex-col md:flex-row gap-6 items-start justify-between w-full py-4">
			<small className="font-semibold">
				&copy; SellerSpotlight 2024. All Rights Reserved.
			</small>
			<div className="flex items-center justify-center gap-8">
				{footerLinks.map(({ icon, label, link }, index) => {
					const Icon = icon;
					return (
						<TooltipProvider key={index}>
							<Tooltip>
								<TooltipTrigger asChild>
									<a href={link} target="_blank">
										<Icon className="w-6 h-6" />
									</a>
								</TooltipTrigger>
								<TooltipContent>
									<p>{label}</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					);
				})}
			</div>
		</footer>
	);
};

export default Footer;
