"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lucide_react_1 = require("lucide-react");
const button_1 = require("./ui/button");
const utils_1 = require("@/lib/utils");
const react_router_dom_1 = require("react-router-dom");
const Pagination = ({ page, pages, }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const location = (0, react_router_dom_1.useLocation)();
    const onClick = (btnType) => {
        const pageValue = btnType === "next" ? Number(page) + 1 : Number(page) - 1;
        const newUrl = (0, utils_1.formUrlQuery)({
            params: location.search,
            key: "page",
            value: pageValue.toString(),
        });
        navigate(newUrl, { replace: false });
    };
    return (<div className="flex items-center justify-between mb-4">
			<button_1.Button variant={"ghost"} className="flex justify-center group/modal-btn px-4 py-2 rounded-md text-center relative overflow-hidden" disabled={Number(page) <= 1} onClick={() => onClick("prev")}>
				<span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
					Previous
				</span>
				<div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 z-20">
					<lucide_react_1.ArrowLeft />
				</div>
			</button_1.Button>
			<button_1.Button variant={"ghost"} className="flex justify-center group/modal-btn px-4 py-2 rounded-md text-center relative overflow-hidden" disabled={Number(page) >= pages} onClick={() => onClick("next")}>
				<span className="group-hover/modal-btn:-translate-x-40 text-center transition duration-500">
					Next
				</span>
				<div className="translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 z-20">
					<lucide_react_1.ArrowRight />
				</div>
			</button_1.Button>
		</div>);
};
exports.default = Pagination;
