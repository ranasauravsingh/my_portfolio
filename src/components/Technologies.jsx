import { MotionDiv, MotionH2 } from "../config/motion";

const Technologies = () => {
	const techs = [
		"React",
		"JavaScript",
		"TypeScript",
		"Node.js",
		"HTML",
		"Figma-to-React",
		"Tailwind CSS",
		"Material UI",
		"SDLC",
	];

	return (
		<section
			id="technologies"
			className="pt-16 sm:pt-20 py-12 sm:py-20 bg-gray-200 px-4 sm:px-6 md:px-8"
		>
			<div className="max-w-2xl mx-auto">
				<MotionH2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
					className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-coral-500"
				>
					Technologies I Work With
				</MotionH2>
				<div className="flex flex-wrap justify-center gap-3 sm:gap-4">
					{techs.map((tech, index) => (
						<MotionDiv
							key={index}
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="bg-gradient-bg text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md hover:scale-110 transition-transform duration-200 text-sm sm:text-base"
						>
							{tech}
						</MotionDiv>
					))}
				</div>
			</div>
		</section>
	);
};

export default Technologies;
