import { authAPI } from "../api/api";
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

export const getAuthUserData = () => (dispatch) => {
	authAPI.me()
		.then(data => {
			if (data.resultCode !== 0) return null;
			const { id, email, login } = data.data;
			dispatch(setAuthUserData(id, email, login, true));
		})
		.catch(e => console.error(e));
}

export const login = (email, password, rememberMe) => dispatch => {
	authAPI.login(email, password, rememberMe)
		.then(data => {
			if (data.data.resultCode === 0) {
				dispatch(getAuthUserData());
			} else {
				if (data.data.messages.length) {
					dispatch(setErrorText(data.data.messages[0]))
				}
				dispatch(stopSubmit('login'));
			}
		})
		.catch(e => console.error(e));
}

export const logout = () => dispatch => {
	authAPI.logout()
		.then(data => {
			if (data.data.resultCode !== 0) return null;
			dispatch(setAuthUserData(null, null, null, false));
		})
		.catch(e => console.error(e));
}