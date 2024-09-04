import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../../public/assets/animation/loading-animation.json";
import { useRef } from "react";

const Loader = () => {
	const animationRef = useRef<LottieRefCurrentProps>(null);

	return (
		<div className="my-8">
			<h3 className="text-center mb-4 text-sm">Searching...</h3>
			<Lottie lottieRef={animationRef} animationData={animationData} />
		</div>
	);
};

export default Loader;
