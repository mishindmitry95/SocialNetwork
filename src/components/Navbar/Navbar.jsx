import React from "react";
import Classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
	return (
		<div className={Classes.nav}>
			<ul className={Classes.list}>
				<li className={Classes.item}><NavLink to="/profile" className={Classes.link} activeClassName={Classes.active}>Profile</NavLink></li>
				<li className={Classes.item}><NavLink to="/messages" className={Classes.link} activeClassName={Classes.active}>Messages</NavLink></li>
				<li className={Classes.item}><NavLink to="/news" className={Classes.link} activeClassName={Classes.active}>News</NavLink></li>
				<li className={Classes.item}><NavLink to="/music" className={Classes.link} activeClassName={Classes.active}>Music</NavLink></li>
				<li className={Classes.item}><NavLink to="/settings" className={Classes.link} activeClassName={Classes.active}>Settings</NavLink></li>
			</ul>
		</div>
	);
}

export default Navbar;