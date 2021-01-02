import { UserType } from "../../types/types";
import { ActionsTypes, CommonThunkType } from "../../index";
import { Dispatch } from "redux";
import { userAPI } from "../../api/user-api";

export type InitialStateType = typeof initialState
type UsersPageActionsType = ActionsTypes<typeof actions>
type ThunkType = CommonThunkType<UsersPageActionsType>

const FOLLOW_SUCCESS = 'socialNetwork/usersPage/FOLLOW_SUCCESS';
const UNFOLLOW_SUCCESS = 'socialNetwork/usersPage/UNFOLLOW_SUCCESS';
const SET_CURRENT_PAGE = 'socialNetwork/usersPage/SET_CURRENT_PAGE';
const SET_USERS = 'socialNetwork/usersPage/SET_USERS';
const SET_USERS_NUMBER = 'socialNetwork/usersPage/SET_USERS_NUMBER';
const TOGGLE_IS_FETCHING = 'socialNetwork/usersPage/TOGGLE_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'socialNetwork/usersPage/TOGGLE_FOLLOWING_PROGRESS';

const initialState  = {
	users: [] as Array<UserType>,
	currentPage: 1,
	count: 10,
	usersNumber: 0,
	isFetching: true,
	followingInProgress: [] as Array<number>
}

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

export const actions = {
	followSuccess:(userId: number) => ({type: FOLLOW_SUCCESS, userId} as const),
	unfollowSuccess:(userId: number) => ({type: UNFOLLOW_SUCCESS, userId} as const),
	setCurrentPage:(currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const),
	setUsers:(users: Array<UserType>) => ({type: SET_USERS, users}) as const,
	setUsersNumber: (usersNumber: number) => ({type: SET_USERS_NUMBER, usersNumber} as const),
	toggleIsFetching: (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const),
	toggleFollowingProgress:(isFetching: boolean, userId: number) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId} as const),
}

export const getUsers = (page: number, count: number): ThunkType => async (dispatch: Dispatch<UsersPageActionsType>) => {
	dispatch(actions.toggleIsFetching(true));
	try {
		const data = await userAPI.getUsers(page, count);
		dispatch(actions.setUsers(data.items));
		dispatch(actions.setUsersNumber(data.totalCount));
		dispatch(actions.setCurrentPage(page));
		dispatch(actions.toggleIsFetching(false));
	} catch (e) {
		console.error(e)
	}
}

export const followUnfollow = (id: number, followed: boolean): ThunkType => async (dispatch: any) => {
	dispatch(actions.toggleFollowingProgress(true, id));
	if (followed) {
		try {
			await userAPI.userUnfollow(id);
			dispatch(actions.unfollowSuccess(id));
			dispatch(actions.toggleFollowingProgress(false, id));
		} catch (e) {
			console.error(e)
		}
	} else {
		try {
			await userAPI.userFollow(id);
			dispatch(actions.followSuccess(id));
			dispatch(actions.toggleFollowingProgress(false, id));
		} catch (e) {
			console.error(e)
		}
	}
}