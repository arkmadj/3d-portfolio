import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		messgae: "",
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {};

	const handleSubmit = (e) => {};

	return (
		<div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
			Contact
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
