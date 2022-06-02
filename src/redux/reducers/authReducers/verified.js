import {
    INITIAL_STATE_VERIFIED,
    RESET_INPUT_NEW_PASSWORD, RESET_INPUT_REPEAT_PASSWORD,
    SEND_EMAIL_SUCCESS,
    VERIFIED_ACCOUNT_SUCCESS,
    VERIFIED_CODE_INPUT,
    VERIFIED_EMAIL_INPUT
} from "../../types/authTypes";

const initial_state = {
    email: '',
    code: '',
    isVerified: false,
    reestablish:{
        isSendEmail: false,
        new_pass: '',
        repeat_pass: ''
    }
}

export default function verified(state = initial_state, action){

    switch (action.type){
        case VERIFIED_CODE_INPUT:
            return {...state, code: action.payload}
        case VERIFIED_EMAIL_INPUT:
            return {...state, email: action.payload}
        case VERIFIED_ACCOUNT_SUCCESS:
            return {...state, isVerified: true}
        case SEND_EMAIL_SUCCESS:
            return {
                ...state,
                reestablish: {...state.reestablish, isSendEmail: true}}
        case RESET_INPUT_NEW_PASSWORD:
            return {
                ...state,
                reestablish: {...state.reestablish, new_pass: action.payload}
            }
        case RESET_INPUT_REPEAT_PASSWORD:
            return {
                ...state,
                reestablish: {...state.reestablish, repeat_pass: action.payload}
            }
        case INITIAL_STATE_VERIFIED:
            return {...initial_state}
        default:
            return state;
    }
}