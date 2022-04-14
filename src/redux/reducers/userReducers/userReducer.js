import {
    USER_ACC_INPUT_EMAIL,
    USER_ACC_INPUT_FIRST_NAME,
    USER_ACC_INPUT_LAST_NAME,
    USER_ACC_INPUT_NICK_NAME,
} from "../../types/userTypes";

const initial_state = {
    first_name: '',
    last_name: '',
    nick_name: '',
    email: '',
    avatar: '',
}

export default function userReducer(state=initial_state, action){

    switch (action.type){
        case USER_ACC_INPUT_FIRST_NAME:
            return {...state, first_name: action.payload};
        case USER_ACC_INPUT_LAST_NAME:
            return {...state, last_name: action.payload};
        case USER_ACC_INPUT_NICK_NAME:
            return {...state, nick_name: action.payload};
        case USER_ACC_INPUT_EMAIL:
            return {...state, email: action.payload};
        default:
            return state;
    }
}