import React from "react";
import Classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<nav className={Classes.nav}>
				<NavLink to="/profile" className={Classes.link} activeClassName={Classes.active}>Profile</NavLink>
				<NavLink to="/dialogs" className={Classes.link} activeClassName={Classes.active}>Messages</NavLink>
				<NavLink to="/users" className={Classes.link} activeClassName={Classes.active}>Users</NavLink>
				<NavLink to="/news" className={Classes.link} activeClassName={Classes.active}>News</NavLink>
				<NavLink to="/music" className={Classes.link} activeClassName={Classes.active}>Music</NavLink>
				<NavLink to="/settings" className={Classes.link} activeClassName={Classes.active}>Settings</NavLink>
			</nav>
		</div>
	);
}

export default Navbar;