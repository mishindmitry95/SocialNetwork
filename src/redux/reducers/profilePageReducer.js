import {profileAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD_POST';
const GET_STATUS = 'GET_STATUS';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const UPLOAD_NEW_PHOTO = 'UPLOAD_NEW_PHOTO';

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

export const uploadNewPhoto = (photos) => {
	return {
		type: UPLOAD_NEW_PHOTO,
		photos
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

		case UPLOAD_NEW_PHOTO:
			return {
				...state,
				profile: {...state.profile, photos: action.photos}
			}

		default:
			return state
	}
}


export const getUserProfile = (id) => async (dispatch) => {
	dispatch(toggleFetching(true));
	const response = await profileAPI.getProfile(id);
	try {
		dispatch(setUserProfile(response.data));
		dispatch(toggleFetching(false));
	} catch (e) {
		console.error(e)
	}
}

export const getUserStatus = (id) => async (dispatch) => {
	const response = await profileAPI.getStatus(id);
	try {
		dispatch(getStatus(response.data))
	} catch (e) {
		console.error(e)
	}
}

export const updateUserStatus = (status) => async (dispatch) => {
	const response = await profileAPI.updateStatus(status);
	try {
		if (response.data.resultCode === 0) {
			dispatch(getStatus(status))
		}
	} catch (e) {
		console.error(e)
	}
}

export const savePhoto = (photos) => async(dispatch) => {
	const response = await profileAPI.uploadNewPhoto(photos);
	try {
		if (response.data.resultCode === 0) {
			dispatch(uploadNewPhoto(response.data.data.photos))
		}
	} catch (e) {
		console.error(e)
	}
}

export const saveProfile = (profileInfo) => async(dispatch, getState) => {
	const id = getState().auth.userId;
	const response = await profileAPI.saveProfile(profileInfo);
	try {
		if (response.data.resultCode === 0) {
			dispatch(getUserProfile(id));
		} else {
			dispatch(stopSubmit("profileEdit", {_error: response.data.messages[0]}));
			return Promise.reject(response.data.messages[0]);
		}
	} catch (e) {
		console.error(e)
	}
}