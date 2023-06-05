import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../contants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
	const [active, setActive] = useState("");

	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
		>
			<div className="flex items-center justify-between w-full mx-auto max-w-7xl">
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<img src={logo} alt="logo" className="object-contain w-9 h-9" />
					<p className="text-white text-[18px] font-bold cursor-pointer">
						Zultan | <span className="hidden sm:block">Software Engineer</span>
					</p>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
