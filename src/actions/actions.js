// action types
export const ADD_POST = 'ADD_POST';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_USERS_NUMBER = 'SET_USERS_NUMBER';
export const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
export const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
export const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';


//action creators
export const addPost = text => {
	return {
		type: ADD_POST,
		text
	}
}

export const updateNewPostText = text => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		text
	}
}

export const updateNewMessageText = text => {
	return {
		type: UPDATE_NEW_MESSAGE_TEXT,
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

export const toggleFetching = (isFetching) => {
	return {
		type: TOGGLE_FETCHING,
		isFetching
	}
}

export const setUserProfile = (profile) => {
	return {
		type: SET_USER_PROFILE,
		profile
	}
}

export const setAuthUserData = (data) => {
	return {
		type: SET_AUTH_USER_DATA,
		data
	}
}

export const toggleFollowingProgress = (isFetching, userId) => {
	return {
		type: TOGGLE_FOLLOWING_PROGRESS,
		isFetching,
		userId,
	}
}