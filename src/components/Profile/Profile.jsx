import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "../../containers/MyPostsContainer/MyPostsContainer";
import Preloader from "../UI/Preloader/Preloader";

const Profile = (props) => {
	if (!props.profile) return <Preloader />;
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
			/>
			<MyPostsContainer />
		</div>
	);
}

export default Profile;