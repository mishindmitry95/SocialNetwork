import { getAuthUserData } from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

export const setInitialized = () => ({type: SET_INITIALIZED});

const initialState = {
	isInitialized: false
}

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_INITIALIZED:
			return {
				...state,
				isInitialized: true
			}

		default:
			return state
	}
}

export const initialize = () => (dispatch) => {
	const promise = dispatch(getAuthUserData());

	Promise.all([promise])
		.then(() => {
			dispatch(setInitialized());
		})
		.catch(e => console.error(e));
}
