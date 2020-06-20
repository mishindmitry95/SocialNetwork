import React from "react";
import Styles from './Header.module.css'
import { NavLink } from "react-router-dom";
import Button from "../UI/Button/Button";
import Spacer from "../UI/Spacer/Spacer";

type THeaderProps = {
	login: string | null
	isAuth: boolean
	logout: () => void
}

const Header: React.FC<THeaderProps> = (props) => {
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
							?
							<div>
								{ props.login }
								<Spacer width='5'/>
								<Button
									caption='Logout'
									onClick={props.logout}
									theme='danger'
								/>
							</div>
							: <NavLink to='/login' className={Styles.link}>Log in</NavLink>
					}
				</div>
			</div>
		</div>
	);
}

export default Header;