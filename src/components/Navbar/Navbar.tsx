import React from 'react';
import Styles from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

type TNavbarProps = {}

const Navbar: React.FC<TNavbarProps> = () => {
	return (
		<div>
			<nav className={Styles.nav}>
				<NavLink to="/profile" className={Styles.link} activeClassName={Styles.active}>Profile</NavLink>
				<NavLink to="/dialogs" className={Styles.link} activeClassName={Styles.active}>Messages</NavLink>
				<NavLink to="/users" className={Styles.link} activeClassName={Styles.active}>Users</NavLink>
				<NavLink to="/news" className={Styles.link} activeClassName={Styles.active}>News</NavLink>
				<NavLink to="/music" className={Styles.link} activeClassName={Styles.active}>Music</NavLink>
				<NavLink to="/settings" className={Styles.link} activeClassName={Styles.active}>Settings</NavLink>
			</nav>
		</div>
	);
};

export default Navbar;