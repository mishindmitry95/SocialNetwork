import { userAPI } from "../../api/api";
import { UserType } from "../../types/types";
import { ThunkAction } from "redux-thunk";
import {AppStateType} from "../../index";
import {Dispatch} from "redux";

const FOLLOW_SUCCESS = 'socialNetwork/usersPage/FOLLOW_SUCCESS';
const UNFOLLOW_SUCCESS = 'socialNetwork/usersPage/UNFOLLOW_SUCCESS';
const SET_CURRENT_PAGE = 'socialNetwork/usersPage/SET_CURRENT_PAGE';
const SET_USERS = 'socialNetwork/usersPage/SET_USERS';
const SET_USERS_NUMBER = 'socialNetwork/usersPage/SET_USERS_NUMBER';
const TOGGLE_IS_FETCHING = 'socialNetwork/usersPage/TOGGLE_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'socialNetwork/usersPage/TOGGLE_FOLLOWING_PROGRESS';

const initialState = {
	users: [] as Array<UserType>,
	currentPage: 1,
	count: 10,
	usersNumber: 0,
	isFetching: true,
	followingInProgress: [] as Array<number>
}

type InitialStateType = typeof initialState

export const usersPageReducer = (state = initialState, action: UsersPageActionsType): InitialStateType => {
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

		case TOGGLE_IS_FETCHING:
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

type UsersPageActionsType = followActionType | unfollowActionType | setCurrentPageActionType |
	setUsersActionType | setUsersNumberActionType | toggleFollowingProgressActionType | toggleIsFetchingActionType

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

type toggleIsFetchingActionType = {
	type: typeof TOGGLE_IS_FETCHING,
	isFetching: boolean
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
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching: boolean, userId: number): toggleFollowingProgressActionType => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, UsersPageActionsType>


export const getUsers = (page: number, count: number): ThunkType => async (dispatch: Dispatch<UsersPageActionsType>) => {
	dispatch(toggleIsFetching(true));
	try {
		const response = await userAPI.getUsers(page, count);
		dispatch(setUsers(response.data.items));
		dispatch(setUsersNumber(response.data.totalCount));
		dispatch(setCurrentPage(page));
		dispatch(toggleIsFetching(false));
	} catch (e) {
		console.error(e)
	}
}

export const followUnfollow = (id: number, followed: boolean): ThunkType => async (dispatch: any) => {
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