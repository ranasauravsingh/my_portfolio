import { DocumentTextIcon } from "@heroicons/react/24/outline";

import { MotionDiv, MotionH2 } from "../config/motion";

const Resume = () => {
	const YOUR_FILE_ID = import.meta.env.VITE_RESUME_DOWNLOAD_ID || "";

	return (
		<section
			id="resume"
			className="pt-16 sm:pt-20 py-12 sm:py-20 bg-gray-200 px-4 sm:px-6 md:px-8"
		>
			<div className="max-w-2xl mx-auto text-center">
				<MotionH2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
					className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 text-coral-500"
				>
					Ready to Collaborate?
				</MotionH2>
				<MotionDiv
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="text-lg text-gray-600 mb-6"
				>
					Download my resume to explore my skills and experience in
					detail.
				</MotionDiv>
				<MotionDiv
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<a
						href={`https://drive.google.com/uc?export=download&id=${YOUR_FILE_ID}`}
						download
						className="inline-flex items-center gap-2 bg-gradient-bg text-white font-semibold px-6 py-3 rounded-full 
                       shadow-md hover:scale-110 transition-transform duration-200 text-sm sm:text-base"
						aria-label="Download my resume"
					>
						<DocumentTextIcon className="h-6 w-6" />
						Download CV
					</a>
				</MotionDiv>
			</div>
		</section>
	);
};

export default Resume;
