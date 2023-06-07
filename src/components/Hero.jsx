// import React from "react";
// import { motion } from "framer-motion";

import { styles } from "../styles";

// import { styles } from "../styles";
import { ComputerCanvas } from "./canvas";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
			>
				<div className="flex flex-col items-center justify-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#915eff]" />
					<div className="w-1 h-40 sm:h-80 violet-gradient" />
				</div>
				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						{/* eslint-disable-next-line react/no-unescaped-entities */}
						Hi, I'm <span className="text-[#915eff] ">Zultan</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100`}>
						I am a skilled software developer with 5+ years of experience in
						software design, development, integration, and test-driven
						development.
					</p>
				</div>
			</div>
			<ComputerCanvas />
		</section>
	);
};

export default Hero;
