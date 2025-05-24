import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

import { MotionDiv, MotionH2 } from "../config/motion";

const Projects = () => {
	const projects = [
		{
			title: "Dev Tinder",
			description: (
				<>
					A networking platform for developers built with the{" "}
					<span className="font-bold">MERN stack</span>. Features{" "}
					<span className="font-bold">real-time Chat</span>{" "}
					messaging between your connections via{" "}
					<span className="font-bold">socket.io</span>{" "}and with modular{" "}
					<span className="font-bold">React</span> components architecture.
				</>
			),
			link: "https://devtinder.ranasauravsingh.site",
		},
		{
			title: "Job Portal",
			description: (
				<>
					A job portal web app developed with{" "}
					<span className="font-bold">React TypeScript</span> and
					<span className="font-bold"> Node.js</span>. Includes{" "}
					<span className="font-bold">
						real-time firebase FCM notifications
					</span>
					,
					<span className="font-bold">
						{" "}
						role-based access control
					</span>
					, and secure <span className="font-bold">REST APIs </span>
					for student and recruiter workflows.
				</>
			),
			link: "https://jobportal.ranasauravsingh.site",
		},
		{
			title: "Luxury by Meera",
			description: (
				<>
					A <span className="font-bold">client-based</span> real
					estate website using the MERN stack. Features{" "}
					<span className="font-bold">
						Firebase SMS OTP authentication
					</span>{" "}
					for brochure downloads, interactive{" "}
					<span className="font-bold">UI components</span>, and
					customized
					<span className="font-bold"> RESTful API</span>{" "}
					integrations.
				</>
			),
			link: "https://luxurybymeera.ranasauravsingh.site",
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
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
					{projects.map((project, index) => (
						<MotionDiv
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							className="glass p-4 sm:p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
						>
							<div>
								<h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-gray-900">
									{project.title}
								</h3>
								<p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
									{project.description}
								</p>
							</div>
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 bg-gradient-bg text-white font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg hover:scale-105 transition-transform duration-200 text-sm sm:text-base self-start"
								aria-label={`View ${project.title} live project`}
							>
								<ArrowUpRightIcon className="h-5 w-5" />
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
