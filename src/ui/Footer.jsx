const Footer = () => {
    const currentYear = new Date().getFullYear();
	return (
		<footer className="bg-gray-200 py-4 sm:py-6">
			<div className="container mx-auto text-center">
				<p className="text-sm sm:text-base text-gray-600">
					Crafted with Code & Soul by <span className="inline-block text-coral-900 bg-gradient-bg bg-clip-text text-transparent">ranasauravsingh</span> &copy; {currentYear}.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
