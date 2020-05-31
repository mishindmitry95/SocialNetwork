import { AppStateType } from "../../index";

export const getLogin = (state: AppStateType) => state.auth.login;
export const getIsAuth = (state: AppStateType) => state.auth.isAuth;