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
}

export type InitialStateType = typeof initialState

export const dialogsPageReducer = (state = initialState, action: any): InitialStateType => {
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

type SendMessageActionCreatorType = {
	type: typeof SEND_MESSAGE,
	text: string
}

type DialogType = {
	id: number,
	name: string
}

type MessageType = {
	id: number,
	message: string
}


export const sendMessage = (text: string): SendMessageActionCreatorType => ({type: SEND_MESSAGE, text})
