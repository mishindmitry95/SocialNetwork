// action types
export const ADD_POST = "ADD_POST";
export const SEND_MESSAGE = "SEND_MESSAGE"
export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"

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

export const follow = (userId) => {
	return {
		type: FOLLOW,
		userId
	}
}

export const unfollow = (userId) => {
	return {
		type: UNFOLLOW,
		userId
	}
}