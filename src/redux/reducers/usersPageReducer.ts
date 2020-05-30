import { userAPI } from "../../api/api";
import { toggleFetching } from "./profilePageReducer";
import { UserType } from "../../types/types";

const FOLLOW_SUCCESS = 'socialNetwork/usersPage/FOLLOW_SUCCESS';
const UNFOLLOW_SUCCESS = 'socialNetwork/usersPage/UNFOLLOW_SUCCESS';
const SET_CURRENT_PAGE = 'socialNetwork/usersPage/SET_CURRENT_PAGE';
const SET_USERS = 'socialNetwork/usersPage/SET_USERS';
const SET_USERS_NUMBER = 'socialNetwork/usersPage/SET_USERS_NUMBER';
const TOGGLE_FETCHING = 'socialNetwork/usersPage/TOGGLE_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'socialNetwork/usersPage/TOGGLE_FOLLOWING_PROGRESS';

const initialState = {
	users: [] as Array<UserType>,
	currentPage: 1,
	count: 10,
	usersNumber: 0,
	isFetching: true,
	followingInProgress: [] as Array<Number>
}

type InitialStateType = typeof initialState

export const usersPageReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case FOLLOW_SUCCESS:
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

		case UNFOLLOW_SUCCESS:
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

type followActionType = {
	type: typeof FOLLOW_SUCCESS,
	userId: number
}

type unfollowActionType = {
	type: typeof UNFOLLOW_SUCCESS,
	userId: number
}

type setCurrentPageActionType = {
	type: typeof SET_CURRENT_PAGE,
	currentPage: number
}

type setUsersActionType = {
	type: typeof SET_USERS,
	users: Array<UserType>
}

type setUsersNumberActionType = {
	type: typeof SET_USERS_NUMBER,
	usersNumber: number
}

type toggleFollowingProgressActionType = {
	type: typeof TOGGLE_FOLLOWING_PROGRESS,
	isFetching: boolean,
	userId: number
}

export const followSuccess = (userId: number): followActionType => ({type: FOLLOW_SUCCESS, userId});
export const unfollowSuccess = (userId: number): unfollowActionType => ({type: UNFOLLOW_SUCCESS, userId});
export const setCurrentPage = (currentPage: number): setCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsers = (users: Array<UserType>): setUsersActionType => ({type: SET_USERS, users});
export const setUsersNumber = (usersNumber: number): setUsersNumberActionType => ({type: SET_USERS_NUMBER, usersNumber});
export const toggleFollowingProgress = (isFetching: boolean, userId: number): toggleFollowingProgressActionType => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsers = (page: number, count: number) => async (dispatch: any) => {
	dispatch(toggleFetching(true));
	try {
		const response = await userAPI.getUsers(page, count);
		dispatch(setUsers(response.data.items));
		dispatch(setUsersNumber(response.data.totalCount));
		dispatch(setCurrentPage(page));
		dispatch(toggleFetching(false));
	} catch (e) {
		console.error(e)
	}
}

export const followUnfollow = (id: number, followed: boolean) => async (dispatch: any) => {
	dispatch(toggleFollowingProgress(true, id));
	if (followed) {
		try {
			await userAPI.userUnfollow(id);
			dispatch(unfollowSuccess(id));
			dispatch(toggleFollowingProgress(false, id));
		} catch (e) {
			console.error(e)
		}
	} else {
		try {
			await userAPI.userFollow(id);
			dispatch(followSuccess(id));
			dispatch(toggleFollowingProgress(false, id));
		} catch (e) {
			console.error(e)
		}
	}
}