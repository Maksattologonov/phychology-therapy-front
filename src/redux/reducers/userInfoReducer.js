import {
    SET_USER_INFO_EMAIL,
    SET_USER_INFO_FIRST_NAME,
    SET_USER_INFO_ID, SET_USER_INFO_LAST_NAME, SET_USER_INFO_ROLE,
    USER_LOG_OUT,
} from "../types/userTypes";
import {USER_AUTHORIZATION_SUCCESS} from "../types/authTypes";

const initial_state = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    token: null,
    role: null
}

export default function userInfoReducer(state=initial_state, action){

    switch (action.type){
        case SET_USER_INFO_ID:
            return {...state, id: action.payload};
        case SET_USER_INFO_FIRST_NAME:
            return {...state, first_name: action.payload};
        case SET_USER_INFO_LAST_NAME:
            return {...state, last_name: action.payload};
        case SET_USER_INFO_EMAIL:
            return {...state, email: action.payload};
        case SET_USER_INFO_ROLE:
            return {...state, role: action.payload};
        case  USER_AUTHORIZATION_SUCCESS:
            return {...state, token: action.payload}
        case USER_LOG_OUT:
            return { ... initial_state }
        default:
            return state;
    }
}