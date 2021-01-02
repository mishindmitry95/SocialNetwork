import {AppStateType} from '../../index';

export const getProfile = (state: AppStateType) => state.profilePage.profile;
export const getIsFetching = (state: AppStateType) => state.profilePage.isFetching;
export const getStatusSelector = (state: AppStateType) => state.profilePage.status;
export const getAuthorizedUserId = (state: AppStateType) => state.auth.userId;