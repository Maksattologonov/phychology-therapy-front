import {
    AUTH_INPUT_EMAIL,
    AUTH_INPUT_PASSWORD,
    USER_AUTHORIZATION_SUCCESS,
} from "../../types/authTypes";
import {USER_LOG_OUT} from "../../types/userTypes";

const initial_state = {
    email: '',
    password: '',
    success: false
}


export default function authorizationReducer(state = initial_state, action){

    switch (action.type){
        case AUTH_INPUT_EMAIL:
            return {...state, email: action.payload};
        case AUTH_INPUT_PASSWORD:
            return {...state, password: action.payload};
        case  USER_AUTHORIZATION_SUCCESS:
            return {...state, success: true}
        case USER_LOG_OUT:
            return {...initial_state}
        default:
            return state;
    }
}