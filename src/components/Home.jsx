import { useEffect, useState } from "react";

import { MotionDiv } from "../config/motion";
import profilePic from "../assets/ProfilePic.png";

const Home = () => {
	const fullName = `Sauravsingh Rana`;
	const [displayedText, setDisplayedText] = useState("");

	useEffect(() => {
		let currentIndex = 0;
		const typingInterval = setInterval(() => {
			if (currentIndex < fullName.length) {
				setDisplayedText(fullName.slice(0, currentIndex + 1));
				currentIndex++;
			} else {
				clearInterval(typingInterval);
			}
		}, 100);

		return () => clearInterval(typingInterval);
	}, []);

	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4 sm:px-6 md:px-8 pt-16 sm:pt-20"
		>
			<MotionDiv
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className="text-center overflow-visible"
			>
				<img
					src={profilePic}
					alt="Sauravsingh Rana Profile"
					className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-6 shadow-lg block object-cover"
				/>
				<h1 className="text-3xl sm:text-5xl font-extrabold mb-4 font-inter leading-normal sm:leading-normal isolate">
					Hi, I'm{" "}
					<span className="relative inline-block text-coral-500 bg-gradient-bg bg-clip-text text-transparent">
						{displayedText}
					</span>
				</h1>
				<p className="text-lg sm:text-xl text-gray-600 max-w-md mx-auto">
					Turning ideas & Crafting impactful solutions into Seamless Digital Experiences
				</p>
			</MotionDiv>
		</section>
	);
};

export default Home;
