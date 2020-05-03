import React from "react";
import Styles from './User.module.css'
import Button from "../../UI/Button/Button";
import {NavLink} from "react-router-dom";

export class User extends React.Component {
	constructor(props) {
		super(props);
		this.defaultUserAvatar = 'https://www.workinghprs.com/sites/all/themes/jollyany/demos/no-avatar.jpg';
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
					<NavLink to={`/profile/${props.id}`} >
						<img
							src={props.photo ? props.photo : this.defaultUserAvatar}
							alt='user_photo'
							className={Styles.userPhoto}
						/>
					</NavLink>
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