"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("@/constants");
const tooltip_1 = require("@/components/ui/tooltip");
const Footer = () => {
    return (<footer className="flex items-start justify-between w-full py-4">
			<small className="font-semibold">
				&copy; SellerSpotlight 2024. All Rights Reserved.
			</small>
			<div className="flex items-center justify-center gap-8">
				{constants_1.footerLinks.map(({ icon, label, link }, index) => {
            const Icon = icon;
            return (<tooltip_1.TooltipProvider key={index}>
							<tooltip_1.Tooltip>
								<tooltip_1.TooltipTrigger asChild>
									<a href={link} target="_blank">
										<Icon className="w-6 h-6"/>
									</a>
								</tooltip_1.TooltipTrigger>
								<tooltip_1.TooltipContent>
									<p>{label}</p>
								</tooltip_1.TooltipContent>
							</tooltip_1.Tooltip>
						</tooltip_1.TooltipProvider>);
        })}
			</div>
		</footer>);
};
exports.default = Footer;
