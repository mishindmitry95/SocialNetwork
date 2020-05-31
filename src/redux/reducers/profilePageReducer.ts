import { profileAPI } from "../../api/api";
import { stopSubmit } from "redux-form";
import { PhotosType, PostType, ProfileType } from "../../types/types";

const ADD_POST = 'socialNetwork/profilePage/ADD_POST';
const GET_STATUS = 'socialNetwork/profilePage/GET_STATUS';
const SET_USER_PROFILE = 'socialNetwork/profilePage/SET_USER_PROFILE';
const TOGGLE_FETCHING = 'socialNetwork/profilePage/TOGGLE_FETCHING';
const SAVE_PHOTO_SUCCESS = 'socialNetwork/profilePage/SAVE_PHOTO_SUCCESS';

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
	] as Array<PostType>,
	profile: null as ProfileType | null,
	isFetching: true,
	status: ''
}

export type InitialStateType = typeof initialState

export const profilePageReducer = (state = initialState, action: any): InitialStateType => {
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

		case SAVE_PHOTO_SUCCESS:
			return {
				...state,
				profile: {...state.profile, photos: action.photos} as ProfileType
			}

		default:
			return state
	}
}
type addPostActionType = {
	type: typeof ADD_POST,
	text: string
}

type getStatusActionType = {
	type: typeof GET_STATUS,
	status: string
}

type setUserProfileActionType = {
	type: typeof SET_USER_PROFILE,
	profile: ProfileType
}

type toggleFetchingActionType = {
	type: typeof TOGGLE_FETCHING,
	isFetching: boolean
}

type savePhotoSuccessActionType = {
	type: typeof SAVE_PHOTO_SUCCESS,
	photos: PhotosType
}

export const addPost = (text: string): addPostActionType => ({type: ADD_POST, text})
export const getStatus = (status: string): getStatusActionType => ({type: GET_STATUS, status})
export const setUserProfile = (profile: ProfileType): setUserProfileActionType => ({type: SET_USER_PROFILE, profile})
export const toggleFetching = (isFetching: boolean): toggleFetchingActionType => ({type: TOGGLE_FETCHING, isFetching})
export const savePhotoSuccess = (photos: PhotosType): savePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (id: number) => async (dispatch: any) => {
	dispatch(toggleFetching(true));
	try {
		const response = await profileAPI.getProfile(id);
		dispatch(setUserProfile(response.data));
		dispatch(toggleFetching(false));
	} catch (e) {
		console.error(e)
	}
}

export const getUserStatus = (id: number) => async (dispatch: any) => {
	try {
		const response = await profileAPI.getStatus(id);
		dispatch(getStatus(response.data))
	} catch (e) {
		console.error(e)
	}
}

export const updateUserStatus = (status: string) => async (dispatch: any) => {
	try {
		const response = await profileAPI.updateStatus(status);
		if (response.data.resultCode === 0) {
			dispatch(getStatus(status))
		}
	} catch (e) {
		console.error(e)
	}
}

export const savePhoto = (photo: any) => async(dispatch: any) => {
	try {
		const response = await profileAPI.savePhoto(photo);
		if (response.data.resultCode === 0) {
			dispatch(savePhotoSuccess(response.data.data.photos))
		}
	} catch (e) {
		console.error(e)
	}
}

export const saveProfile = (profileInfo: ProfileType) => async(dispatch: any, getState: any) => {
	const id = getState().auth.userId;
	try {
		const response = await profileAPI.saveProfile(profileInfo);
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