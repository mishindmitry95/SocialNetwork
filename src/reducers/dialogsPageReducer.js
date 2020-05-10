import { SEND_MESSAGE } from '../actions/actions';

const initialState = {
	dialogs: [],
	messages: [
		{id: 1, message: 'hello'},
		{id: 2, message: 'how are u?'},
		{id: 3, message: 'fine, u?'},
		{id: 4, message: 'too'},
		{id: 5, message: 'good'},
	],
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

		default:
			return state
	}
}