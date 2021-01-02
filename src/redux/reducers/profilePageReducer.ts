import {FormAction, stopSubmit} from 'redux-form';
import {PhotosType, PostType, ProfileType} from '../../types/types';
import {profileAPI} from '../../api/profile-api';
import {ApiResultCode} from '../../api/api';
import {ActionsTypes, CommonThunkType} from '../../index';

type ActionType = ActionsTypes<typeof actions>;
type ThunkType = CommonThunkType<ActionType | FormAction>;
export type InitialStateType = typeof initialState;

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
};

export const profilePageReducer = (state = initialState, action: ActionType): InitialStateType => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [...state.posts, {
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

export const actions = {
	addPost: (text: string) => ({type: ADD_POST, text} as const),
	getStatus: (status: string) => ({type: GET_STATUS, status} as const),
	setUserProfile: (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const),
	toggleFetching: (isFetching: boolean) => ({type: TOGGLE_FETCHING, isFetching} as const),
	savePhotoSuccess: (photos: PhotosType) => ({type: SAVE_PHOTO_SUCCESS, photos} as const)
};

export const getUserProfile = (id: number): ThunkType => async (dispatch) => {
	dispatch(actions.toggleFetching(true));
	try {
		const data = await profileAPI.getProfile(id);
		dispatch(actions.setUserProfile(data));
		dispatch(actions.toggleFetching(false));
	} catch (e) {
		console.error(e)
	}
};

export const getUserStatus = (id: number): ThunkType => async (dispatch) => {
	try {
		const data = await profileAPI.getStatus(id);
		dispatch(actions.getStatus(data))
	} catch (e) {
		console.error(e)
	}
};

export const updateUserStatus = (status: string): ThunkType => async (dispatch) => {
	try {
		const data = await profileAPI.updateStatus(status);
		if (data.resultCode === ApiResultCode.success) {
			dispatch(actions.getStatus(status))
		}
	} catch (e) {
		console.error(e)
	}
};

export const savePhoto = (photo: any): ThunkType => async (dispatch) => {
	try {
		const data = await profileAPI.savePhoto(photo);
		if (data.resultCode === ApiResultCode.success) {
			dispatch(actions.savePhotoSuccess(data.data.photos))
		}
	} catch (e) {
		console.error(e)
	}
};

export const saveProfile = (profileInfo: ProfileType): ThunkType => async (dispatch, getState: any) => {
	const userId = getState().auth.userId;
	try {
		const data = await profileAPI.saveProfile(profileInfo);
		if (data.resultCode === ApiResultCode.success) {
			if (userId != null) {
				dispatch(getUserProfile(userId));
			} else {
				throw new Error('userId con\'t be null');
			}
		} else {
			dispatch(stopSubmit('profileEdit', {_error: data.messages[0]}));
			return Promise.reject(data.messages[0]);
		}
	} catch (e) {
		console.error(e)
	}
};