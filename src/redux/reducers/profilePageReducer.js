import {profileAPI} from "../../api/api";

const ADD_POST = 'ADD_POST';
const GET_STATUS = 'GET_STATUS';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';

export const addPost = text => {
	return {
		type: ADD_POST,
		text
	}
}

export const getStatus = (status) => {
	return {
		type: GET_STATUS,
		status
	}
}

export const setUserProfile = (profile) => {
	return {
		type: SET_USER_PROFILE,
		profile
	}
}

export const toggleFetching = (isFetching) => {
	return {
		type: TOGGLE_FETCHING,
		isFetching
	}
}


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


export const getUserProfile = (id) => (dispatch) => {
	dispatch(toggleFetching(true));
	profileAPI.getProfile(id)
		.then(data => {
			dispatch(setUserProfile(data));
			dispatch(toggleFetching(false));
		})
		.catch(e => console.error(e));
}

export const getUserStatus = (id) => (dispatch) => {
	profileAPI.getStatus(id)
		.then(data => {
			dispatch(getStatus(data))
		})
		.catch(e => console.error(e));
}

export const updateUserStatus = (status) => (dispatch) => {
	profileAPI.updateStatus(status)
		.then(data => {
			if (data.resultCode === 0) {
				dispatch(getStatus(status))
			}
		})
		.catch(e => console.error(e));
}