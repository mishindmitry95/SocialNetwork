import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESS = 'socialNetwork/app/INITIALIZED_SUCCESS';

export type initializedSuccessActionType = {
	type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = ():initializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

export type InitialStateType = {
	isInitialized: boolean
}

const initialState: InitialStateType = {
	isInitialized: false
}

export const appReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				isInitialized: true
			}

		default:
			return state
	}
}

export const initialize = () => (dispatch: any) => {
	const promise = dispatch(getAuthUserData());

	Promise.all([promise])
		.then(() => {
			dispatch(initializedSuccess());
		})
		.catch(e => console.error(e));
}
