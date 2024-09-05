"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const table_1 = require("@/components/ui/table");
const StarRating_1 = __importDefault(require("./StarRating"));
const alert_1 = require("@/components/ui/alert");
const lucide_react_1 = require("lucide-react");
const SellerLists = ({ sellers }) => {
    return (<div className="my-6">
			<table_1.Table>
				<table_1.TableHeader>
					<table_1.TableRow>
						<table_1.TableHead>Name</table_1.TableHead>
						<table_1.TableHead>Rating</table_1.TableHead>
						<table_1.TableHead className="text-right">Review</table_1.TableHead>
					</table_1.TableRow>
				</table_1.TableHeader>
				<table_1.TableBody>
					{sellers?.map((seller, index) => (<table_1.TableRow key={index}>
								<table_1.TableCell className="font-medium">
									<div className="flex items-start md:items-center justify-start flex-col md:flex-row">
										<img src={seller.logo} alt="Word file" className="w-6 h-6 object-cover mr-2"/>
										{seller.name}
									</div>
								</table_1.TableCell>
								<table_1.TableCell>
									<StarRating_1.default rating={seller.rating}/>
								</table_1.TableCell>
								<table_1.TableCell className="text-right">
									{seller.review}
								</table_1.TableCell>
							</table_1.TableRow>))}
				</table_1.TableBody>
			</table_1.Table>
			{sellers.length === 0 && (<alert_1.Alert className="mt-6">
					<lucide_react_1.Info className="h-4 w-4"/>
					<alert_1.AlertTitle>Heads up!</alert_1.AlertTitle>
					<alert_1.AlertDescription>No sellers found</alert_1.AlertDescription>
				</alert_1.Alert>)}
		</div>);
};
exports.default = SellerLists;
