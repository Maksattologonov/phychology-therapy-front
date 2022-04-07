import {AUTH_INPUT_EMAIL, AUTH_INPUT_PASSWORD} from "../../types/authTypes";

const initial_state = {
    email: '',
    password: ''
}


export default function authorizationReducer(state = initial_state, action){

    switch (action.type){
        case AUTH_INPUT_EMAIL:
            return {...state, email: action.payload};
        case AUTH_INPUT_PASSWORD:
            return {...state, password: action.payload};
        default:
            return state;
    }
}