import React from "react";
import Styles from './User.module.css'
import Button from "../../UI/Button/Button";
import { NavLink } from "react-router-dom";

export class User extends React.Component {
	constructor(props) {
		super(props);
		this.defaultUserAvatar = 'https://www.workinghprs.com/sites/all/themes/jollyany/demos/no-avatar.jpg';
	}

	render() {
		return (
			<div className={Styles.mainContainer}>
				<div className={Styles.leftContainer}>
					<NavLink to={`/profile/${this.props.id}`} >
						<img
							src={this.props.photo ? this.props.photo : this.defaultUserAvatar}
							alt='user_photo'
							className={Styles.userPhoto}
						/>
					</NavLink>
					<Button
						disabled={this.props.buttonDisable}
						caption={this.props.followed ? 'Unfollow' : 'Follow'}
						theme={this.props.followed ? 'danger' : 'success'}
						onClick={() => {
							this.props.followUnfollow(this.props.id, this.props.followed);
						}}
					/>
				</div>
				<div className={Styles.mainContent}>
					<div className={Styles.mainContentTop}>
						<div className={Styles.userFullName}>
							{ this.props.name }
						</div>
					</div>
					<div className={Styles.userStatus}>
						{ this.props.status }
					</div>
				</div>
			</div>
		);
	}
}