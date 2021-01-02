import {FormAction, stopSubmit} from 'redux-form';
import {authAPI} from '../../api/auth-api';
import {securityAPI} from '../../api/security-api';
import {ApiResultCode, ApiResultCodeForCaptcha} from '../../api/api';
import {ActionsTypes, CommonThunkType} from '../../index';

export type InitialStateType = typeof initialState;
type ActionType = ActionsTypes<typeof actions>;
type ThunkType = CommonThunkType<ActionType | FormAction>;

const SET_AUTH_USER_DATA = 'socialNetwork/auth/SET_AUTH_USER_DATA';
const SET_ERROR_TEXT = 'socialNetwork/auth/SET_ERROR_TEXT';
const GET_CAPTCHA_URL_SUCCESS = 'socialNetwork/auth/GET_CAPTCHA_URL_SUCCESS';

const initialState = {
	email: null as string | null,
	login: null as string | null,
	userId: null as number | null,
	isAuth: false,
	errorText: '' as string | null,
	captchaUrl: null as string | null
};

export const actions = {
	setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
		return {
			type: SET_AUTH_USER_DATA,
			payload: {
				userId,
				email,
				login,
				isAuth
			}
		}
	},
	getCaptchaUrlSuccess: (captchaUrl: string) => {
		return {
			type: GET_CAPTCHA_URL_SUCCESS,
			payload: {captchaUrl}
		}
	},

	setErrorText: (errorText: string) => {
		return {
			type: SET_ERROR_TEXT,
			payload: {errorText}
		}
	}
}

export const authReducer = (state = initialState, action: ActionType): InitialStateType => {
	switch (action.type) {
		case SET_AUTH_USER_DATA:
		case GET_CAPTCHA_URL_SUCCESS:
		case SET_ERROR_TEXT:
			return {
				...state,
				...action.payload
			}

		default:
			return state
	}
};

export const getAuthUserData = (): ThunkType => async (dispatch) => {
	try {
		const data = await authAPI.me();
		if (data.resultCode === ApiResultCode.success) {
			const {id, email, login} = data.data;
			dispatch(actions.setAuthUserData(id, email, login, true));
		}
	} catch (e) {
		console.error(e)
	}
};

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
	try {
		const data = await securityAPI.getCaptchUrl();
		dispatch(actions.getCaptchaUrlSuccess(data.url))
	} catch (e) {
		console.error(e);
	}
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
	try {
		const data = await authAPI.login(email, password, rememberMe, captcha);
		if (data.resultCode === ApiResultCode.success) {
			await dispatch(getAuthUserData());
		} else {
			if (data.resultCode === ApiResultCodeForCaptcha.captchaIsRequired) {
				await dispatch(getCaptchaUrl());
			}
			if (data.messages.length) {
				dispatch(actions.setErrorText(data.messages[0]))
			}
			dispatch(stopSubmit('login'));
		}
	} catch (e) {
		console.error(e)
	}
};

export const logout = (): ThunkType => async (dispatch) => {
	try {
		const data = await authAPI.logout();
		if (data.data.resultCode === ApiResultCode.success) {
			dispatch(actions.setAuthUserData(null, null, null, false));
		}
	} catch (e) {
		console.error(e)
	}
};