import { FOLLOW, UNFOLLOW } from '../actions/actions';

const initialState = {
	users: [
		{
			id: 1,
			name: 'John',
			surname: 'Dow',
			userAvatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fuser-avatar-flat-icons%2F512%2FUser_Avatar-04-512.png&f=1&nofb=1',
			isFollow: true,
			status: 'Life is a good thing',
			location: {country: 'Russia', city: 'Moscow'},
		}
	]
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
							isFollow: true
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
						return {...user, isFollow: false}
					}
					return user;
				})
			}

		default:
			return state
	}
}