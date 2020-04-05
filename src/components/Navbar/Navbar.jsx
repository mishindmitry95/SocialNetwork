import React from "react";
import Classes from './Navbar.module.css'

const Navbar = () => {
	return (
		<nav className={Classes.nav}>
			<ul className={Classes.list}>
				<li className={Classes.item}><a className={Classes.link}>Profile</a></li>
				<li className={Classes.item}><a className={Classes.link}>Messages</a></li>
				<li className={Classes.item}><a className={Classes.link}>News</a></li>
				<li className={Classes.item}><a className={Classes.link}>Music</a></li>
				<li className={Classes.item}><a className={Classes.link}>Settings</a></li>
			</ul>
		</nav>
	);
}

export default Navbar;