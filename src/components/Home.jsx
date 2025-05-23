import { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";

import { MotionDiv } from "../config/motion";
import profilePic from "../assets/ProfilePic.png";
import {
	FigmaIcon,
	JavascriptIcon,
	MaterialUiIcon,
	NodejsIcon,
	ReactIcon,
	TailwindCssIcon,
	TypescriptIcon,
} from "../ui/icons/customIcons";

const techLogos = [
	{
		component: <ReactIcon key="react" width="50" height="50" />,
		alt: "React",
	},
	{
		component: <FigmaIcon key="figma" width="50" height="50" />,
		alt: "Figma",
	},
	{
		component: <TailwindCssIcon key="tailwind" width="50" height="50" />,
		alt: "Tailwind CSS",
	},
	{
		component: <MaterialUiIcon key="material-ui" width="50" height="50" />,
		alt: "Material UI",
	},
	{
		component: <JavascriptIcon key="javascript" width="50" height="50" />,
		alt: "JavaScript",
	},
	{
		component: <TypescriptIcon key="typescript" width="50" height="50" />,
		alt: "TypeScript",
	},
	{
		component: <NodejsIcon key="nodejs" width="50" height="50" />,
		alt: "Node.js",
	},
];

// Function to generate patternized animation properties
const getPatternAnimation = (index) => {
	const radius = 150 + index * 20; // Increased radius: 150-270px for larger orbits
	const duration = 15 + index * 2; // Duration: 15-29s for varied speeds
	const isFigureEight = index % 3 === 0; // Every 3rd logo gets a figure-eight pattern

	if (isFigureEight) {
		// Figure-eight (Lissajous) pattern
		return {
			x: [0, radius, 0, -radius, 0], // Cosine-based
			y: [0, radius / 2, 0, -radius / 2, 0], // Sine-based, half amplitude
			rotate: [0, 360], // Continuous rotation
			transition: {
				x: { duration, repeat: Infinity, ease: "linear" },
				y: { duration: duration / 2, repeat: Infinity, ease: "linear" },
				rotate: {
					duration: duration / 2,
					repeat: Infinity,
					ease: "linear",
				},
			},
		};
	} else {
		// Circular loop
		return {
			x: [0, radius, 0, -radius, 0], // Cosine-based
			y: [0, radius, 0, -radius, 0], // Sine-based, 90° phase shift
			rotate: [0, 360], // Continuous rotation
			transition: {
				x: { duration, repeat: Infinity, ease: "linear" },
				y: {
					duration,
					repeat: Infinity,
					ease: "linear",
					delay: 0.25 * duration,
				},
				rotate: {
					duration: duration / 2,
					repeat: Infinity,
					ease: "linear",
				},
			},
		};
	}
};

const Home = () => {
	const fullName = `Sauravsingh Rana`;
	const [displayedText, setDisplayedText] = useState("");
	const controls = techLogos?.map(() => useAnimation());

	useEffect(() => {
		// Start logo animations with staggered starts
		controls?.forEach((control, index) => {
			control?.start(getPatternAnimation(index));
		});
	}, [controls]);

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
			className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4 sm:px-6 md:px-8 pt-12 sm:pt-20 relative overflow-hidden"
		>
			{/* Logo Cloud Background */}
			<div className="absolute inset-0 pointer-events-none flex items-center justify-center">
				{techLogos?.map((logo, index) => (
					<MotionDiv
						key={logo.alt}
						className="absolute w-20 h-20 sm:w-24 sm:h-24 opacity-50"
						initial={{ x: 0, y: 0, opacity: 1 }}
						animate={controls[index]}
					>
						{logo?.component}
					</MotionDiv>
				))}
			</div>
			<MotionDiv
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className="text-center overflow-visible"
			>
				<img
					src={profilePic}
					alt="Sauravsingh Rana Profile"
					className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-6 shadow-lg block object-cover relative z-10"
				/>
				<h1 className="text-3xl sm:text-5xl font-extrabold mb-4 font-inter leading-normal sm:leading-normal isolate">
					Hi, I'm{" "}
					<span className="relative inline-block text-coral-500 bg-gradient-bg bg-clip-text text-transparent">
						{displayedText}
					</span>
				</h1>
				<p className="text-lg sm:text-xl text-gray-600 max-w-md mx-auto relative z-10">
					Turning ideas & Crafting impactful solutions into Seamless
					Digital Experiences
				</p>
			</MotionDiv>
		</section>
	);
};

export default Home;
