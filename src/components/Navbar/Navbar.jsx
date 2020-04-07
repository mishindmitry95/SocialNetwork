import React from "react";
import Classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
	return (
		<nav className={Classes.nav}>
			<ul className={Classes.list}>
				<li className={Classes.item}><NavLink to="/profile" className={Classes.link}>Profile</NavLink></li>
				<li className={Classes.item}><NavLink to="/messages" className={Classes.link}>Messages</NavLink></li>
				<li className={Classes.item}><NavLink to="/news" className={Classes.link}>News</NavLink></li>
				<li className={Classes.item}><NavLink to="/music" className={Classes.link}>Music</NavLink></li>
				<li className={Classes.item}><NavLink to="/settings" className={Classes.link}>Settings</NavLink></li>
			</ul>
		</nav>
	);
}

export default Navbar;