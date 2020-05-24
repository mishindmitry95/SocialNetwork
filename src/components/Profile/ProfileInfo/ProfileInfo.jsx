import React from "react";
import Styles from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
	const defaultPhoto = 'https://www.workinghprs.com/sites/all/themes/jollyany/demos/no-avatar.jpg';

	const onUploadPhoto = (event) => {
		if (event.target.files.length > 0) {
			props.savePhoto(event.target.files[0])
		}
	}

	return (
		<div className={Styles.innerContainer}>
			<div className={Styles.imageContainer}>
				<img
					src={props.photo ? props.photo : defaultPhoto}
					style={{
						width: '250px',
						height: '300px'
					}}
					alt='profile_photo'
				/>
				{
					props.isOwner && <div>
						<label htmlFor="file">Upload photo</label>
						<input
							type="file"
							id="file"
							name="file"
							multiple
							onChange={onUploadPhoto}
						/>
					</div>
				}
			</div>
			<div className={Styles.contentContainer}>
				<div className={Styles.fullName}>{props.fullName}</div>
				<ProfileStatus
					updateStatus={props.updateStatus}
					status={props.status}
				/>
			</div>
		</div>
	);
}

export default ProfileInfo;