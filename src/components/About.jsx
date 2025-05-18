import { MotionH2 } from "../config/motion";

const About = () => {
	return (
		<section
			id="about"
			className="pt-16 sm:pt-20 py-12 sm:py-20 bg-gray-200 px-4 sm:px-6 md:px-8"
		>
			<div className="container mx-auto">
				<MotionH2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
					className="text-2xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-coral-500"
				>
					About Me
				</MotionH2>
				<p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
					I'm a frontend enthusiast thriving with ReactJS and Node.Js
					for building web applications. I love creating
					user-friendly, scalable solutions and always eager to learn
					new technologies. Let’s create something extraordinary for
					your users.
				</p>
			</div>
		</section>
	);
};

export default About;
