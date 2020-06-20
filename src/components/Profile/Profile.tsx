import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "../../containers/MyPostsContainer/MyPostsContainer";
import Preloader from "../UI/Preloader/Preloader";
import {ProfileType} from "../../types/types";

type TProfileProps = {
	profile: ProfileType | null
	isOwner: boolean
	updateStatus: (status: string) => void
	status: string
	savePhoto: (file: File) => void
	saveProfile: (formData: ProfileType) => Promise<any>
}

const Profile: React.FC<TProfileProps> = (props) => {
	if (!props.profile) return <Preloader />
	return (
		<div>
			<ProfileInfo
				aboutMe={props.profile.aboutMe}
				contacts={props.profile.contacts}
				fullName={props.profile.fullName}
				lookingForAJob={props.profile.lookingForAJob}
				lookingForAJobDescription={props.profile.lookingForAJobDescription}
				photo={props.profile.photos.large}
				userId={props.profile.userId}
				isOwner={props.isOwner}
				updateStatus={props.updateStatus}
				status={props.status}
				savePhoto={props.savePhoto}
				saveProfile={props.saveProfile}
			/>
			<MyPostsContainer />
		</div>
	);
}

export default Profile;