import React from "react";
import Classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
	return (
		<div>
			<div className={Classes.content}>
				<div>ava + desc</div>
			</div>
			<MyPosts />
		</div>
	);
}

export default Profile;