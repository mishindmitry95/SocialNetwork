import React from "react";
import Styles from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return (
		<div className={Styles.header}>
			<div className={`${Styles.header_content} fixed-container`}>
				<img
					src='https://avatars2.githubusercontent.com/u/1478241?s=280&v=4'
					alt='VK_photo'
				/>
				<div className={Styles.authContainer}>
					{
						props.isAuth
							? props.login
							: <NavLink to='/login' className={Styles.link}>Log in</NavLink>
					}
				</div>
			</div>
		</div>
	);
}

export default Header;