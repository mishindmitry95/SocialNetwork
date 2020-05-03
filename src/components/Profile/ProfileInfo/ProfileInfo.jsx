import React from "react";
import Styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
	const defaultPhoto = 'https://www.workinghprs.com/sites/all/themes/jollyany/demos/no-avatar.jpg';

	return (
		<div className={Styles.innerContainer}>
			<div className={Styles.imageContainer}>
				<img
					src={props.photo ? props.photo : defaultPhoto}
					style={{
						width: '250px',
						height: '300px'
					}}
					alt='profile-photo'
				/>
			</div>
			<div className={Styles.contentContainer}>
				<div className={Styles.fullName}>{props.fullName}</div>
			</div>
		</div>
	);
}

export default ProfileInfo;