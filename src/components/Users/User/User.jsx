import React from "react";
import Styles from './User.module.css'
import Button from "../../UI/Button/Button";

export class User extends React.Component {
	constructor(props) {
		super(props);
		this.defaultUserAvatar = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fuser-avatar-flat-icons%2F512%2FUser_Avatar-04-512.png&f=1&nofb=1';
	}
	onFollowUnfollowHandler = (id) => {
		if (this.props.followed) return this.props.unfollow(id);
		return this.props.follow(id)
	}

	render() {
		const { props } = this;

		return (
			<div className={Styles.mainContainer}>
				<div className={Styles.leftContainer}>
					<img
						src={props.photo ? props.photo : this.defaultUserAvatar}
						alt='user_photo'
						className={Styles.userPhoto}
					/>
					<Button
						caption={props.followed ? 'Unfollow' : 'Follow'}
						theme={props.followed ? 'danger' : 'success'}
						onClick={() => {
							this.onFollowUnfollowHandler(props.id)
						}}
					/>
				</div>
				<div className={Styles.mainContent}>
					<div className={Styles.mainContentTop}>
						<div className={Styles.userFullName}>
							{ props.name }
						</div>
					</div>
					<div className={Styles.userStatus}>
						{ props.status }
					</div>
				</div>
			</div>
		);
	}
}