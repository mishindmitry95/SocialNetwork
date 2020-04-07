import React from "react";
import Classes from './Header.module.css'

const Header = () => {
	return (
		<div className={Classes.header}>
			<div className={`${Classes.header_content} fixed-container`}>
				<img
					src="https://avatars2.githubusercontent.com/u/1478241?s=280&v=4"
					alt="VK_photo"
				/>
			</div>
		</div>
	);
}

export default Header;