import Header from "../ui/Header";
import Footer from "../ui/Footer";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import Contact from "../components/Contact";
import ScrollToTop from "../ui/ScrollToTop";
import Resume from "../components/Resume";

const Portfolio = () => {
	return (
		<div className="bg-gray-100 min-h-screen">
			<Header />
			<ScrollToTop />
			<Home />
			<About />
			<Projects />
			<Technologies />
			<Resume />
			<Contact />
			<Footer />
		</div>
	);
};

export default Portfolio;
