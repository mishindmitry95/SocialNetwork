import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'
import { profilePageReducer } from "./profilePageReducer";
import { dialogsPageReducer } from "./dialogsPageReducer";
import { usersPageReducer } from "./usersPageReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
	profilePage: profilePageReducer,
	dialogsPage: dialogsPageReducer,
	usersPage: usersPageReducer,
	auth: authReducer,
	form: formReducer
})