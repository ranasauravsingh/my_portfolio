import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import { MotionDiv } from "../config/motion";
import srLogo from "../assets/srLogo512.png";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navItems = [
		{ name: "Home", href: "#home" },
		{ name: "About", href: "#about" },
		{ name: "Projects", href: "#projects" },
		{ name: "Technologies", href: "#technologies" },
		{ name: "Contact", href: "#contact" },
	];

	const handleScroll = (e, href) => {
		e.preventDefault();
		const targetId = href.replace("#", "");
		const element = document.getElementById(targetId);
		if (element) {
			const navbarHeight = 64;
			const elementPosition =
				element.getBoundingClientRect().top + window.scrollY;
			window.scrollTo({
				top: elementPosition - navbarHeight,
				behavior: "smooth",
			});
			setIsOpen(false);
		}
	};

	return (
		<nav className="fixed top-0 w-full glass p-4 z-20">
			<div className="container mx-auto flex justify-between items-center">
				<div
					className="flex items-center space-x-2 cursor-pointer"
					onClick={(e) => handleScroll(e, "#home")}
				>
					<img
						src={srLogo}
						alt="SR Logo"
						className="w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-lg"
					/>
				</div>
				<ul className="hidden md:flex space-x-6">
					{navItems.map((item) => (
						<li key={item.name}>
							<a
								href={item.href}
								onClick={(e) => handleScroll(e, item.href)}
								className="text-gray-900 hover:text-coral-500 transition-all duration-300 ease-in-out transform hover:scale-105"
							>
								{item.name}
							</a>
						</li>
					))}
				</ul>
				<button
					className="md:hidden text-gray-900"
					onClick={() => setIsOpen(!isOpen)}
					aria-label="Toggle menu"
				>
					{isOpen ? (
						<XMarkIcon className="h-6 w-6" />
					) : (
						<Bars3Icon className="h-6 w-6" />
					)}
				</button>
			</div>
			<MotionDiv
				className={`md:hidden bg-gray-100 glass ${
					isOpen ? "block" : "hidden"
				}`}
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
				transition={{ duration: 0.3 }}
			>
				<ul className="flex flex-col items-center py-4 space-y-4">
					{navItems.map((item) => (
						<li key={item.name}>
							<a
								href={item.href}
								onClick={(e) => handleScroll(e, item.href)}
								className="text-gray-900 text-lg hover:text-coral-500 transition-all duration-300"
							>
								{item.name}
							</a>
						</li>
					))}
				</ul>
			</MotionDiv>
		</nav>
	);
};

export default Header;
