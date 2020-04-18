import React from "react";
import {User} from "./User/User";
import Button from "../UI/Button";
import Classes from './Users.module.css'

export const Users = (props) => {
	const userElements = props.users.map(user => {
		return (
			<User
				id={user.id}
				name={user.name}
				surname={user.surname}
				avatar={user.userAvatar}
				city={user.location.city}
				country={user.location.country}
				status={user.status}
				isFollow={user.isFollow}
				key={user.id}
				follow={props.follow}
				unfollow={props.unfollow}
			/>
		);
	})
	return (
		<div className={Classes.usersContainer}>
			<div>
				{ userElements }
			</div>
			<div className={Classes.buttonContainer}>
				<Button
					caption='Show more'
					theme='info'
				/>
			</div>
		</div>
	);
}