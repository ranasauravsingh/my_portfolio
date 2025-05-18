import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

import { MotionButton } from "../config/motion";

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	// Show button when scrolling down
	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		const element = document.getElementById("home");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<MotionButton
			onClick={scrollToTop}
			className={`fixed cursor-pointer bottom-4 right-4 sm:bottom-6 sm:right-6 bg-gradient-bg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}
			initial={{ scale: 0 }}
			animate={{ scale: isVisible ? 1 : 0 }}
			transition={{ duration: 0.3 }}
			aria-label="Scroll to top"
		>
			<ArrowUpIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
		</MotionButton>
	);
};

export default ScrollToTop;
