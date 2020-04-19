// action types
export const ADD_POST = 'ADD_POST';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_USERS_NUMBER = 'SET_USERS_NUMBER';

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

export const setUsers = (users) => {
	return {
		type: SET_USERS,
		users
	}
}

export const setCurrentPage = (currentPage) => {
	return {
		type: SET_CURRENT_PAGE,
		currentPage
	}
}

export const setUsersNumber = (usersNumber) => {
	return {
		type: SET_USERS_NUMBER,
		usersNumber
	}
}