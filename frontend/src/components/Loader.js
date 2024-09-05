"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lottie_react_1 = __importDefault(require("lottie-react"));
const loading_animation_json_1 = __importDefault(require("../../public/assets/animation/loading-animation.json"));
const dark_loading_animation_json_1 = __importDefault(require("../../public/assets/animation/dark-loading-animation.json"));
const react_1 = require("react");
const Loader = () => {
    const animationRef = (0, react_1.useRef)(null);
    return (<div className="my-8">
			<h3 className="text-center mb-4 text-sm">Searching...</h3>
			<div className="dark:hidden">
				<lottie_react_1.default lottieRef={animationRef} animationData={loading_animation_json_1.default} className="h-40"/>
			</div>
			<div className="hidden dark:block">
				<lottie_react_1.default lottieRef={animationRef} animationData={dark_loading_animation_json_1.default} className="h-[300px]"/>
			</div>
		</div>);
};
exports.default = Loader;
