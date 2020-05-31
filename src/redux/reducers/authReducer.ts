import { authAPI, securityAPI } from "../../api/api";
import { stopSubmit } from "redux-form";

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
}

export type InitialStateType = typeof initialState;

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataActionType => {
	return {
		type: SET_AUTH_USER_DATA,
		payload: {
			userId,
			email,
			login,
			isAuth
		}
	}
}

export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessActionType => {
	return {
		type: GET_CAPTCHA_URL_SUCCESS,
		payload: { captchaUrl }
	}
}

export const setErrorText = (errorText: string) => {
	return {
		type: SET_ERROR_TEXT,
		payload: { errorText }
	}
}

export const authReducer = (state = initialState, action: any): InitialStateType => {
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
}

export const getAuthUserData = () => async (dispatch: any) => {
	try {
		const response = await authAPI.me();
		if (response.data.resultCode === 0) {
			const { id, email, login } = response.data.data;
			dispatch(setAuthUserData(id, email, login, true));
		}
	} catch (e) {
		console.error(e)
	}
}

export const getCaptchaUrl = () => async (dispatch: any) => {
	try {
		const response = await securityAPI.getCaptchUrl();
		dispatch(getCaptchaUrlSuccess(response.data.url))
	} catch (e) {
		console.error(e);
	}
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
	try {
		const response = await authAPI.login(email, password, rememberMe, captcha);
		if (response.data.resultCode === 0) {
			dispatch(getAuthUserData());
		} else {
			if (response.data.resultCode === 10) {
				dispatch(getCaptchaUrl());
			}
			if (response.data.messages.length) {
				dispatch(setErrorText(response.data.messages[0]))
			}
			dispatch(stopSubmit('login'));
		}
	} catch(e) {
		console.error(e)
	}
}

export const logout = () => async (dispatch: any) => {
	try {
		const response = await	authAPI.logout();
		if (response.data.data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false));
		}
	} catch(e) {
		console.error(e)
	}
}

type setAuthUserDataPayloadType = {
	userId: number | null,
	email: string | null,
	login: string | null,
	isAuth: boolean
}

type setAuthUserDataActionType = {
	type: typeof SET_AUTH_USER_DATA,
	payload: setAuthUserDataPayloadType
}

type getCaptchaUrlSuccessActionType = {
	type: typeof GET_CAPTCHA_URL_SUCCESS,
	payload: { captchaUrl: string }
}