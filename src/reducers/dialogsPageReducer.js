import {SEND_MESSAGE, UPDATE_NEW_MESSAGE_TEXT} from '../actions/actions';

const initialState = {
	dialogs: [],
	messages: [
		{id: 1, message: 'hello'},
		{id: 2, message: 'how are u?'},
		{id: 3, message: 'fine, u?'},
		{id: 4, message: 'too'},
		{id: 5, message: 'good'},
	],
	newMessageText: ''
}

export const dialogsPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			return {
				...state,
				messages: [...state.messages, {
					id: state.messages[state.messages.length - 1].id++,
					message: action.text,
				}]
			}

		case UPDATE_NEW_MESSAGE_TEXT:
			return {
				...state,
				newMessageText: action.text
			}

		default:
			return state
	}
}