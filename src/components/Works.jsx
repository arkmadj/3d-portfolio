import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../contants";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>What I have done so far</p>
				<h2 className={styles.sectionHeadText}>Work Exprience</h2>
			</motion.div>
		</>
	);
};

export default SectionWrapper(Works, "");
