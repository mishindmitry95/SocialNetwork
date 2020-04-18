// action types
export const ADD_POST = "ADD_POST";
export const SEND_MESSAGE = "ADD_MESSAGE"

//action creators
export const addPost = text => {
	return {
		type: ADD_POST,
		text
	}
}

export const sendMessage = text => {
	return {
		type: SEND_MESSAGE,
		text
	}
}