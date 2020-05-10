import {
	ADD_POST,
	GET_STATUS,
	SET_USER_PROFILE,
	TOGGLE_FETCHING
} from '../actions/actions';

const initialState = {
	posts: [
		{
			id: 1,
			avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fuser-avatar-flat-icons%2F512%2FUser_Avatar-04-512.png&f=1&nofb=1',
			text: 'It was a good journey!',
			likes: 12
		},
		{
			id: 2,
			avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fuser-avatar-flat-icons%2F512%2FUser_Avatar-21-512.png&f=1&nofb=1',
			text: 'Today is a good day',
			likes: 5
		}
	],
	profile: null,
	isFetching: true,
	status: ''
}

export const profilePageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [...state.posts,{
					id: state.posts[state.posts.length - 1].id++,
					avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fuser-avatar-flat-icons%2F512%2FUser_Avatar-04-512.png&f=1&nofb=1',
					text: action.text,
					likes: 0
				}]
			}

		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			}

		case TOGGLE_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			}

		case GET_STATUS:
			return {
				...state,
				status: action.status
			}

		default:
			return state
	}
}