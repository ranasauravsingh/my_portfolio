import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import Contact from "../components/Contact";

const Portfolio = () => {
	return (
		<div>
			<Header />
			<Home />
			<About />
			<Projects />
			<Technologies />
			<Contact />
			<Footer />
		</div>
	);
};

export default Portfolio;
