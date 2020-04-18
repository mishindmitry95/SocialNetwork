import React from "react";
import Classes from './User.module.css'
import {FollowUnfollow} from "../../../containers/FollowUnfollow/FollowUnfollow";

export const User = (props) => {
	return (
		<div className={Classes.mainContainer}>
			<div className={Classes.leftContainer}>
				<img
					src={props.avatar}
					alt='user_photo'
					className={Classes.userPhoto}
				/>
				<FollowUnfollow
					caption={props.isFollow ? 'Unfollow' : 'Follow'}
					theme={props.isFollow ? 'danger' : 'success'}
					onClick={props.isFollow ? props.unfollow : props.follow}
					userId={props.id}
				/>
			</div>
			<div className={Classes.mainContent}>
				<div className={Classes.mainContentTop}>
					<div className={Classes.userFullName}>
						{ `${props.name} ${props.surname}` }
					</div>
					<div className={Classes.userLocation}>
						{ `${props.country}, ${props.city}` }
					</div>
				</div>
				<div className={Classes.userStatus}>
					{ props.status }
				</div>
			</div>
		</div>
	);
}