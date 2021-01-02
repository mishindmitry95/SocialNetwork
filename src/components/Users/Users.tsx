import React from 'react';
import {User} from './User/User';
import Button from '../UI/Button/Button';
import Styles from './Users.module.css'
import Paginator from '../UI/Paginator/Paginator';
import {UserType} from '../../types/types';

type UsersProps = {
	usersNumber: number,
	count: number,
	currentPage: number,
	users: Array<UserType>,
	follow: (id: number) => void,
	unfollow: (id: number) => void,
	followingInProgress: Array<number>,
	onPageChanged: (p: number) => void
}

export const Users: React.FC<UsersProps> = (props: UsersProps) => {
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
				buttonDisable={props.followingInProgress.some(id => id === user.id)}
			/>
		);
	});

	return (
		<div className={Styles.usersContainer}>
			<Paginator
				totalItemsCount={props.usersNumber}
				pageSize={props.count}
				currentPage={props.currentPage}
				onPageChanged={props.onPageChanged}
			/>
			<div>
				{userElements}
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