
import {
    AUTH_INPUT_EMAIL, AUTH_INPUT_PASSWORD, FORGET_INPUT_EMAIL,
    REG_INPUT_EMAIL,
    REG_INPUT_FIRST_NAME,
    REG_INPUT_LAST_NAME, REG_INPUT_NICK_NAME,
    REG_INPUT_PASSWORD, RESET_INPUT_NEW_PASSWORD, RESET_INPUT_REPEAT_PASSWORD
} from "../types/authTypes";

// registration actions

export function regFirstNameAction(payload){
    return{
        type: REG_INPUT_FIRST_NAME,
        payload: payload
    }
}
export function regLastNameAction(payload){
    return{
        type: REG_INPUT_LAST_NAME,
        payload: payload
    }
}
export function regNickNameAction(payload){
    return{
        type: REG_INPUT_NICK_NAME,
        payload: payload
    }
}
export function regEmailAction(payload){
    return{
        type: REG_INPUT_EMAIL,
        payload: payload
    }
}
export function regPasswordAction(payload){
    return{
        type: REG_INPUT_PASSWORD,
        payload: payload
    }
}

// authorization actions

export function authInputEmail(payload){
    return{
        type: AUTH_INPUT_EMAIL,
        payload: payload
    }
}
export function authInputPassword(payload){
    return{
        type: AUTH_INPUT_PASSWORD,
        payload: payload
    }
}

// reestablished password actions

export function forgetInputEmail(payload){
    return{
        type: FORGET_INPUT_EMAIL,
        payload: payload
    }
}

export function resetInputNewPassAction(payload){
    return{
        type: RESET_INPUT_NEW_PASSWORD,
        payload: payload
    }
}
export function resetInputRepeatPassAction(payload){
    return{
        type: RESET_INPUT_REPEAT_PASSWORD,
        payload: payload
    }
}


