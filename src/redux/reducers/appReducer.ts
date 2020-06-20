import { getAuthUserData } from "./authReducer";
import {ActionsTypes} from "../../index";

export type InitialStateType = typeof initialState
type ActionType = ActionsTypes<typeof actions>

const INITIALIZED_SUCCESS = 'socialNetwork/app/INITIALIZED_SUCCESS';

const initialState = {
	isInitialized: false
}

export const actions = {
	initializedSuccess: () => ({type: INITIALIZED_SUCCESS})
}

export const appReducer = (state = initialState, action: ActionType ): InitialStateType => {
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
			dispatch(actions.initializedSuccess());
		})
		.catch(e => console.error(e));
}