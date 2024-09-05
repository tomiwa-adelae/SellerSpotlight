import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { formUrlQuery } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";

const Pagination = ({
	page,
	pages,
}: {
	page: string | number;
	pages: number;
}) => {
	const navigate = useNavigate();
	const location = useLocation();

	const onClick = (btnType: string) => {
		const pageValue =
			btnType === "next" ? Number(page) + 1 : Number(page) - 1;

		const newUrl = formUrlQuery({
			params: location.search,
			key: "page",
			value: pageValue.toString(),
		});

		navigate(newUrl, { replace: false });
	};

	return (
		<div className="flex items-center justify-between mb-4">
			<Button
				variant={"ghost"}
				className="flex justify-center group/modal-btn px-4 py-2 rounded-md text-center relative overflow-hidden"
				disabled={Number(page) <= 1}
				onClick={() => onClick("prev")}
			>
				<span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
					Previous
				</span>
				<div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 z-20">
					<ArrowLeft />
				</div>
			</Button>
			<Button
				variant={"ghost"}
				className="flex justify-center group/modal-btn px-4 py-2 rounded-md text-center relative overflow-hidden"
				disabled={Number(page) >= pages}
				onClick={() => onClick("next")}
			>
				<span className="group-hover/modal-btn:-translate-x-40 text-center transition duration-500">
					Next
				</span>
				<div className="translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 z-20">
					<ArrowRight />
				</div>
			</Button>
		</div>
	);
};

export default Pagination;
