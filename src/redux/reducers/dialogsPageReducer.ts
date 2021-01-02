import {ActionsTypes} from '../../index';
import {DialogType, MessageType} from '../../types/types';

export type InitialStateType = typeof initialState;
type ActionType = ActionsTypes<typeof actions>;

const SEND_MESSAGE = 'socialNetwork/dialogsPage/SEND_MESSAGE';

const initialState = {
	dialogs: [] as Array<DialogType>,
	messages: [
		{id: 1, message: 'hello'},
		{id: 2, message: 'how are u?'},
		{id: 3, message: 'fine, u?'},
		{id: 4, message: 'too'},
		{id: 5, message: 'good'},
	] as Array<MessageType>,
};

export const dialogsPageReducer = (state = initialState, action: ActionType): InitialStateType => {
	switch (action.type) {
		case SEND_MESSAGE:
			return {
				...state,
				messages: [...state.messages, {
					id: state.messages[state.messages.length - 1].id++,
					message: action.text,
				}]
			}

		default:
			return state
	}
};

export const actions = {
	sendMessage: (text: string) => ({type: SEND_MESSAGE, text})
};