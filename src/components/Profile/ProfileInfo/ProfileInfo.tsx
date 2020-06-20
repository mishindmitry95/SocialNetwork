import React, {ChangeEvent, useState} from "react";
import Styles from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import { ProfileData } from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import {ContactsType, ProfileType} from "../../../types/types";

type TProfileInfoProps = {
	aboutMe: string
	contacts: ContactsType
	fullName: string
	lookingForAJob: boolean
	lookingForAJobDescription: string
	photo: string
	userId: number
	isOwner: boolean
	updateStatus: (status: string) => void
	status: string
	savePhoto: (file: File) => void
	saveProfile: (formData: ProfileType) => Promise<any>
}

const ProfileInfo: React.FC<TProfileInfoProps> = (props) => {
	const defaultPhoto = 'https://www.workinghprs.com/sites/all/themes/jollyany/demos/no-avatar.jpg';
	const [editMode, setEditMode] = useState(false);

	const onUploadPhoto = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files.length > 0) {
			props.savePhoto(event.target.files[0])
		}
	}

	const doEditMode = () => {
		setEditMode(true);
	}

	const onSubmit = (formData: ProfileType) => {
		props.saveProfile(formData).then(
			() => {
				setEditMode(false);
			}
		)
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
				{
					editMode
						? <ProfileDataForm
							contacts={props.contacts}
							onSubmit={onSubmit}
							initialValues={{
								fullName: props.fullName,
								aboutMe: props.aboutMe,
								lookingForAJobDescription: props.lookingForAJobDescription,
								lookingForAJob: props.lookingForAJob,
								contacts: props.contacts
							}}
						/>
						: <ProfileData
							aboutMe={props.aboutMe}
							lookingForAJob={props.lookingForAJob}
							lookingForAJobDescription={props.lookingForAJobDescription}
							contacts={props.contacts}
							isOwner={props.isOwner}
							doEditMode={doEditMode}
						/>
				}
			</div>
		</div>
	);
}

export default ProfileInfo;