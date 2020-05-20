import { authAPI } from "../../api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_ERROR_TEXT = 'SET_ERROR_TEXT';


export const setAuthUserData = (userId, email, login, isAuth) => {
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

export const setErrorText = (errorText) => {
	return {
		type: SET_ERROR_TEXT,
		errorText
	}
}

const initialState = {
    email: null,
    login: null,
    id: null,
    isAuth: false,
	errorText: ''
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

		case SET_ERROR_TEXT:
			return {
				...state,
				errorText: action.errorText
			}

        default:
            return state
    }
}

export const getAuthUserData = () => async (dispatch) => {
	const meData = await authAPI.me();
	try {
		if (meData.data.resultCode === 0) {
			const { id, email, login } = meData.data.data;
			dispatch(setAuthUserData(id, email, login, true));
		}
	} catch (e) {
		console.error(e)
	}
}

export const login = (email, password, rememberMe) => async (dispatch) => {
	const response = await authAPI.login(email, password, rememberMe);
	try {
		if (response.data.data.resultCode === 0) {
			dispatch(getAuthUserData());
		} else {
			if (response.data.data.messages.length) {
				dispatch(setErrorText(response.data.data.messages[0]))
			}
			dispatch(stopSubmit('login'));
		}
	} catch(e) {
		console.error(e)
	}
}

export const logout = () => async (dispatch) => {
	const response = await	authAPI.logout();
	try {
		if (response.data.data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false));
		}
	} catch(e) {
		console.error(e)
	}
}