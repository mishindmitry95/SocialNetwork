import React from "react";
import {User} from "./User/User";
import Button from "../UI/Button/Button";
import Styles from './Users.module.css'
import {Page} from "../../containers/Page/Page";
import Preloader from "../UI/Preloader/Preloader";

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
			/>
		);
	});

	const pageElements = props.pages.map(page => {
		return (
			<Page
				key={page}
				page={page}
				setCurrentPage={props.setCurrentPage}
				getNewUsers={props.getNewUsers}
				selected={ page === props.currentPage }
				toggleFetching={props.toggleFetching}
			/>
		)
	});

	return (
		<div className={Styles.usersContainer}>
			<div className={Styles.PagesContainer}>
				{ props.isFetching ? null : pageElements }
			</div>
			<div>
				{ props.isFetching ? <Preloader /> :  userElements }
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