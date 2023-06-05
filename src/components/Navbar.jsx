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
				<ul className="flex-row hidden gap-10 list-none sm:flex">
					{navLinks.map((link) => (
						<li
							key={link.id}
							className={`${
								active === link.title ? "text-white" : "text-secondary"
							} hover:text-white text-[18px] font-medium cursor-pointer`}
							onClick={() => setActive(link.title)}
						>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
