import {
    AUTH_INPUT_EMAIL,
    AUTH_INPUT_PASSWORD,
    USER_AUTHORIZATION_SUCCESS,
} from "../../types/authTypes";

const initial_state = {
    email: '',
    password: '',
    token: '',
    authentication: false,
}


export default function authorizationReducer(state = initial_state, action){

    switch (action.type){
        case AUTH_INPUT_EMAIL:
            return {...state, email: action.payload};
        case AUTH_INPUT_PASSWORD:
            return {...state, password: action.payload};
        case  USER_AUTHORIZATION_SUCCESS:
            return {
                ...state,
                authentication: true,
                token: action.payload,
                email: '',
                password: ''
            }
        default:
            return state;
    }
}