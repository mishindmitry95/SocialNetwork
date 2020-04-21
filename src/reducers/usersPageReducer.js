import {FOLLOW, SET_CURRENT_PAGE, SET_USERS, SET_USERS_NUMBER, TOGGLE_FETCHING, UNFOLLOW} from '../actions/actions';

const initialState = {
	users: [],
	currentPage: 1,
	count: 5,
	usersNumber: 0,
	isFetching: true
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
				})
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
				})
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

		default:
			return state
	}
}