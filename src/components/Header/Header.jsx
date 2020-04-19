import React from "react";
import Styles from './Header.module.css'

const Header = () => {
	return (
		<div className={Styles.header}>
			<div className={`${Styles.header_content} fixed-container`}>
				<img
					src="https://avatars2.githubusercontent.com/u/1478241?s=280&v=4"
					alt="VK_photo"
				/>
			</div>
		</div>
	);
}

export default Header;