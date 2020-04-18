import { combineReducers } from 'redux'
import { profilePage } from "./profilePage";
import { dialogsPage } from "./dialogsPage";

export const rootReducer = combineReducers({
	profilePage,
	dialogsPage
})