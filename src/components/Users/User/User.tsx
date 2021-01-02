import React from "react";
import Styles from './User.module.css'
import Button from "../../UI/Button/Button";
import { NavLink } from "react-router-dom";

type TUser = {
	id: number,
	name: string,
	status: string,
	photo: string | null,
	followed: boolean,
	key: number,
	follow: (id: number) => void,
	unfollow: (id: number) => void,
	buttonDisable: boolean
};

export class User extends React.Component<TUser> {
	defaultUserAvatar: string;
	constructor(props: TUser) {
		super(props);

		this.defaultUserAvatar = 'https://www.workinghprs.com/sites/all/themes/jollyany/demos/no-avatar.jpg';
	};

	private onFollowUnfollow = (): void => {
		const { props } = this;

		props.followed ? props.unfollow(props.id) : props.follow(props.id)
	};

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
						disabled={props.buttonDisable}
						caption={props.followed ? 'Unfollow' : 'Follow'}
						theme={props.followed ? 'danger' : 'success'}
						onClick={this.onFollowUnfollow}
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