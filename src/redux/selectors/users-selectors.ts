import { AppStateType } from "../../index";

export const getFollowingInProgress = (state: AppStateType) => state.usersPage.followingInProgress;
export const getUsersSelector = (state: AppStateType) => state.usersPage.users;
export const getCount = (state: AppStateType) => state.usersPage.count;
export const getCurrentPage = (state: AppStateType) => state.usersPage.currentPage;
export const getUsersNumber = (state: AppStateType) => state.usersPage.usersNumber;
export const getIsFetching = (state: AppStateType) => state.usersPage.isFetching;