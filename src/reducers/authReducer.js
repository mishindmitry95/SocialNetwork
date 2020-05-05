import {SET_USER_DATA} from '../actions/actions';

const initialState = {
    email: null,
    login: null,
    id: null,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state
    }
}