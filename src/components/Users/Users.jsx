import React from "react";
import {User} from "./User/User";
import Button from "../UI/Button/Button";
import Styles from './Users.module.css'
import {Page} from "../../containers/Page/Page";

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
				follow={props.follow}
				unfollow={props.unfollow}
				followingInProgress={props.followingInProgress}
				toggleFollowingProgress={props.toggleFollowingProgress}
				buttonDisable={props.followingInProgress.some(id => id === user.id)}
			/>
		);
	});

	const pageElements = props.pages.map(page => {
		return (
			<Page
				key={page}
				page={page}
				setCurrentPage={props.setCurrentPage}
				setUsersNumber={props.setUsersNumber}
				setUsers={props.setUsers}
				getNewUsers={props.getNewUsers}
				selected={ page === props.currentPage }
				toggleFetching={props.toggleFetching}
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