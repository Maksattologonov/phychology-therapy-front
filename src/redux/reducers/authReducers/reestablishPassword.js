import {FORGET_INPUT_EMAIL, RESET_INPUT_NEW_PASSWORD, RESET_INPUT_REPEAT_PASSWORD} from "../../types/authTypes";

const initial_state = {
    forget_pass: {
        email: ''
    },
    reset_pass: {
        new_pass: '',
        repeat_pass: ''
    }
}


export default function reestablishPasswordReducer(state = initial_state, action){

    switch (action.type){
        case RESET_INPUT_NEW_PASSWORD:
            return {...state, reset_pass: {...state.reset_pass, new_pass: action.payload}}
        case RESET_INPUT_REPEAT_PASSWORD:
            return {...state, reset_pass: {...state.reset_pass, repeat_pass: action.payload}}
        case FORGET_INPUT_EMAIL:
            return {...state, forget_pass: {email: action.payload}}
        default:
            return state;
    }
}