import {
    REG_INPUT_EMAIL,
    REG_INPUT_FIRST_NAME,
    REG_INPUT_LAST_NAME,
    REG_INPUT_NICK_NAME,
    REG_INPUT_PASSWORD
} from "../../types/authTypes";

const initial_state = {
    first_name: '',
    last_name: '',
    nick_name: '',
    email: '',
    password: ''
}


export default function registrationReducer(state = initial_state, action){

    switch (action.type){
        case REG_INPUT_FIRST_NAME:
            return {...state, first_name: action.payload};
        case REG_INPUT_LAST_NAME:
            return {...state, last_name: action.payload};
        case REG_INPUT_NICK_NAME:
            return {...state, nick_name: action.payload};
        case REG_INPUT_EMAIL:
            return {...state, email: action.payload};
        case REG_INPUT_PASSWORD:
            return {...state, password: action.payload};
        default:
            return state;
    }
}