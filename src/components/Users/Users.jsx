import React from "react";
import { User } from "./User/User";
import Button from "../UI/Button/Button";
import Styles from './Users.module.css'
import { Page } from "../../containers/Page/Page";

export const Users = (props) => {
	const userElements = props.users.map(user => {
		return (
			<User
				id={user.id}
				name={user.name}
				status={user.status}
				photo={user.photos.small}
				followed={user.followed}
				key={user.id}
				followUnfollow={props.followUnfollow}
				buttonDisable={props.followingInProgress.some(id => id === user.id)}
			/>
		);
	});

	const pageElements = props.pages.map(page => {
		return (
			<Page
				key={page}
				page={page}
				getUsers={props.getUsers}
				selected={ page === props.currentPage }
				count={props.count}
			/>
		)
	});

	return (
		<div className={Styles.usersContainer}>
			<div className={Styles.PagesContainer}>
				{ pageElements }
			</div>
			<div>
				{ userElements }
			</div>
			<div className={Styles.buttonContainer}>
				<Button
					caption='Show more'
					theme='info'
				/>
			</div>
		</div>
	);
}