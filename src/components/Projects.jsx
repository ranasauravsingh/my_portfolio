import { MotionDiv, MotionH2 } from "../config/motion";

const Projects = () => {
	const projects = [
		{
			title: "Project One",
			description: "A React-based web app for task management.",
			link: "#",
		},
		{
			title: "Project Two",
			description: "A Node.js API for e-commerce.",
			link: "#",
		},
	];

	return (
		<section
			id="projects"
			className="pt-16 sm:pt-20 py-12 sm:py-20 bg-gray-100 px-4 sm:px-6 md:px-8"
		>
			<div className="container mx-auto">
				<MotionH2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
					className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-coral-500"
				>
					My Projects
				</MotionH2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
					{projects.map((project, index) => (
						<MotionDiv
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							className="glass p-4 sm:p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
						>
							<h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-gray-900">
								{project.title}
							</h3>
							<p className="text-base sm:text-gray-600 mb-3 sm:mb-4">
								{project.description}
							</p>
							<a
								href={project.link}
								className="inline-block bg-gradient-bg text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:scale-105 transition-transform duration-200 text-sm sm:text-base"
							>
								View Project
							</a>
						</MotionDiv>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
