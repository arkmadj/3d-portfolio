import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../contants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.5)}
				className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
			>
				<div
					options={{ max: 45, scale: 1, speed: 450 }}
					className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
				>
					<img src={icon} alt={title} className="object-contain w-16 h-16" />
					<h3 className="text-white text-[20px] font-bold text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview</h2>
			</motion.div>
			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				As a software engineer with over 5 years of experience, I have a proven
				track record of designing, developing, and deploying innovative
				solutions. I specialize in full-stack development, with a particular
				focus on Javascript and its associated frameworks. I have experience
				working on a wide range of projects, from small web apps to large-scale
				enterprise systems. My skills include proficiency in programming
				languages such as Python, JavaScript, Java, Go, and C++, as well as
				experience with HTML, CSS, and various frameworks and tools such as
				ReactJS, NodeJS, ExpressJS, Flask, Django, AWS, Azure, GCP, Git, Agile,
				Scrum.
			</motion.p>
			<div className="flex flex-wrap gap-10 mt-20">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
