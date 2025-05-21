import { useState } from "react";
import { PhoneIcon } from "@heroicons/react/24/outline";

import { MotionH2 } from "../config/motion";
import { SendEmailJS } from "../config/emailjs";
import { GithubIcon, LinkedInIcon } from "../ui/icons/customIcons";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [errors, setErrors] = useState({});
	const [showToast, setShowToast] = useState(false);
	const [isEmailSent, setIsEmailSent] = useState(false);

	const validateForm = () => {
		const newErrors = {};
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!formData.name.trim()) {
			newErrors.name = "Name is required";
		}
		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!emailRegex.test(formData.email)) {
			newErrors.email = "Please enter a valid email address";
		}
		if (!formData.message.trim()) {
			newErrors.message = "Message is required";
		}

		return newErrors;
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		setErrors({ ...errors, [e.target.name]: "" });
	};

	const handleSubmit = (e) => {
		setIsEmailSent(true);
		e.preventDefault();

		const validationErrors = validateForm();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		SendEmailJS({
			title: `Portfolio Inquiry`,
			from_name: formData.name,
			from_email: formData.email,
			from_message: formData.message,
		})
			.then((res) => {
				setShowToast(true);
				setFormData({ name: "", email: "", message: "" });
				setTimeout(() => {
					setShowToast(false);
				}, 3000);
			})
			.catch((error) => {
				console.error("Failed to send email:", error);
				alert("Failed to send details. Please try again.");
			})
			.finally(() => {
				setIsEmailSent(false);
			});
	};

	return (
		<section
			id="contact"
			className="pt-16 sm:pt-20 py-12 sm:py-20 bg-gray-100 px-4 sm:px-6 md:px-8"
		>
			<div className="container mx-auto">
				<MotionH2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
					className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-coral-500"
				>
					Contact Me
				</MotionH2>
				<div className="max-w-md mx-auto text-center">
					<div className="mb-6">
						<div className="space-y-4">
							<div>
								<input
									type="text"
									name="name"
									value={formData?.name}
									onChange={handleChange}
									placeholder="Your Name"
									className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500 text-gray-900"
									required
								/>
								{errors?.name && (
									<p className="text-sm text-red-500 mt-1">
										{errors?.name}
									</p>
								)}
							</div>
							<div>
								<input
									type="email"
									name="email"
									value={formData?.email}
									onChange={handleChange}
									placeholder="Your Email"
									className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500 text-gray-900"
									required
								/>
								{errors?.email && (
									<p className="text-sm text-red-500 mt-1">
										{errors?.email}
									</p>
								)}
							</div>
							<div>
								<textarea
									name="message"
									value={formData?.message}
									onChange={handleChange}
									placeholder="Your Message"
									rows="4"
									className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500 text-gray-900 resize-none"
								/>
								{errors?.message && (
									<p className="text-sm text-red-500 mt-1">
										{errors?.message}
									</p>
								)}
							</div>
							<button
								disabled={isEmailSent}
								onClick={handleSubmit}
								className="w-full cursor-pointer bg-gradient-bg text-white py-3 rounded-lg hover:bg-coral-600 transition-colors duration-300"
							>
								Submit
							</button>
						</div>
					</div>
					{showToast && (
						<div className="fixed top-23 right-4 bg-gradient-bg text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in z-50 backdrop-blur-md bg-opacity-90 border border-white border-opacity-20">
							Details shared successfully!
						</div>
					)}
					<p className="text-base sm:text-lg text-gray-600 mb-4">
						Or reach out directly at:
					</p>
					<p className="text-coral-500 text-base sm:text-lg mb-4">
						<a
							href="mailto:ranasauravsingh.dev@gmail.com"
							className="hover:text-sky-500 transition-colors"
						>
							ranasauravsingh.dev
						</a>
					</p>
					<div className="flex justify-center space-x-6 text-coral-500 text-base sm:text-lg">
						<a
							href="tel:+9429014277"
							className="hover:text-sky-500 transition-colors"
							aria-label="Phone number"
							target="_blank"
						>
							<PhoneIcon className="h-6 w-6" />
						</a>
						<a
							href="https://github.com/ranasauravsingh"
							className="hover:text-sky-500 transition-colors"
							aria-label="GitHub profile"
							target="_blank"
						>
							<GithubIcon />
						</a>
						<a
							href="https://www.linkedin.com/in/ranasauravsingh/"
							className="hover:text-sky-500 transition-colors"
							aria-label="LinkedIn profile"
							target="_blank"
						>
							<LinkedInIcon />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
