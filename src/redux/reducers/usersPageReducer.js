import { userAPI } from "../../api/api";
import { toggleFetching } from "./profilePageReducer";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS = 'SET_USERS';
const SET_USERS_NUMBER = 'SET_USERS_NUMBER';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

export const follow = (userId) => {
	return {
		type: FOLLOW,
		userId
	}
}

export const unfollow = (userId) => {
	return {
		type: UNFOLLOW,
		userId
	}
}

export const setCurrentPage = (currentPage) => {
	return {
		type: SET_CURRENT_PAGE,
		currentPage
	}
}

export const setUsers = (users) => {
	return {
		type: SET_USERS,
		users
	}
}


export const setUsersNumber = (usersNumber) => {
	return {
		type: SET_USERS_NUMBER,
		usersNumber
	}
}

export const toggleFollowingProgress = (isFetching, userId) => {
	return {
		type: TOGGLE_FOLLOWING_PROGRESS,
		isFetching,
		userId,
	}
}

const initialState = {
	users: [],
	currentPage: 1,
	count: 5,
	usersNumber: 0,
	isFetching: true,
	followingInProgress: []
}

export const usersPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return {
							...user,
							followed: true
						}
					}
					return user;
				}),
			}

		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return {
							...user,
							followed: false
						}
					}
					return user;
				}),
			}

		case SET_USERS:
			return {
				...state,
				users: action.users
			}

		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			}

		case SET_USERS_NUMBER:
			return {
				...state,
				usersNumber: action.usersNumber
			}

		case TOGGLE_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			}

		case TOGGLE_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id !== action.userId)
			}

		default:
			return state
	}
}

export const getUsers = (page, count) => (dispatch) => {
	dispatch(toggleFetching(true));
	userAPI.getUsers(page, count)
		.then(data => {
			dispatch(setUsers(data.items));
			dispatch(setUsersNumber(data.totalCount));
			dispatch(setCurrentPage(page));
			dispatch(toggleFetching(false));
		}).catch(e => console.error(e));
}

export const followUnfollow = (id, followed) => (dispatch) => {
	dispatch(toggleFollowingProgress(true, id));
	if (followed) {
		return userAPI.userUnfollow(id)
			.then(() => {
				dispatch(unfollow(id));
				dispatch(toggleFollowingProgress(false, id));
			}).catch(e => console.error(e));
	}
	return userAPI.userFollow(id)
		.then(() => {
			dispatch(follow(id));
			dispatch(toggleFollowingProgress(false, id));
		}).catch(e => console.error(e));
}