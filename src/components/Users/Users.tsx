import React, { useEffect } from 'react';
import {User} from './User/User';
import Button from '../UI/Button/Button';
import Styles from './Users.module.css'
import Paginator from '../UI/Paginator/Paginator';
import {UserType} from '../../types/types';
import { UsersSearchForm } from './UserSearchForm/UserSearchForm';
import { FilterType, getUsers } from '../../redux/reducers/usersPageReducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../index';
import {
	getCount,
	getCurrentPage, getFollowingInProgress,
	getUsersFilter,
	getUsersNumber,
	getUsersSelector
} from '../../redux/selectors/users-selectors';

export const Users: React.FC<UsersProps> = () => {
	const count = useSelector<AppStateType>(getCount);
	const filter = useSelector<AppStateType>(getUsersFilter);
	const currentPage = useSelector<AppStateType>(getCurrentPage);
	const usersNumber = useSelector<AppStateType>(getUsersNumber);
	const users = useSelector<AppStateType>(getUsersSelector);
	const followingInProgress = useSelector<AppStateType>(getFollowingInProgress);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers(currentPage, count, filter));
	}, []);

	const onPageChanged = (pageNumber: number) => {
		dispatch(getUsers(pageNumber, count, filter));
	};

	const onFilterChanged = (filter: FilterType) => {
		dispatch(getUsersFilter(filter));
	};

	const follow = (userId: number) => {
		dispatch(follow(userId));
	};

	const unfollow = (userId: number) => {
		dispatch(unfollow(userId));
	};

	const userElements = users.map(user => {
		return (
			<User
				id={user.id}
				name={user.name}
				status={user.status}
				photo={user.photos.small}
				followed={user.followed}
				key={user.id}
				follow={follow}
				unfollow={unfollow}
				buttonDisable={followingInProgress.some(id => id === user.id)}
			/>
		);
	});

	return (
		<div className={Styles.usersContainer}>
			<Paginator
				totalItemsCount={usersNumber}
				pageSize={count}
				currentPage={currentPage}
				onPageChanged={onPageChanged}
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
			<UsersSearchForm
				onChanged={ onFilterChanged }
			/>
		</div>
	);
}