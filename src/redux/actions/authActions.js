
import {
    AUTH_INPUT_EMAIL,
    AUTH_INPUT_PASSWORD, INITIAL_STATE_REG, INITIAL_STATE_VERIFIED,
    REG_INPUT_EMAIL,
    REG_INPUT_FIRST_NAME,
    REG_INPUT_LAST_NAME,
    REG_INPUT_NICK_NAME,
    REG_INPUT_PASSWORD,
    RESET_INPUT_NEW_PASSWORD,
    RESET_INPUT_REPEAT_PASSWORD, SEND_EMAIL_SUCCESS,
    USER_AUTHORIZATION,
    USER_AUTHORIZATION_SUCCESS,
    USER_FORGET_PASSWORD,
    USER_REGISTRATION,
    USER_REGISTRATION_SUCCESS,
    USER_RESET_PASSWORD,
    VERIFIED_ACCOUNT, VERIFIED_ACCOUNT_SUCCESS,
    VERIFIED_CODE_INPUT,
    VERIFIED_EMAIL_INPUT
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
export function initialStateReg(){
    return{
        type: INITIAL_STATE_REG
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


// for saga

export function registrationUser(payload){
    return{
        type: USER_REGISTRATION,
        payload: payload
    }
}
export function registrationSuccess(){
    return{
        type: USER_REGISTRATION_SUCCESS,
    }
}
export function authorizationUser(payload){
    return{
        type: USER_AUTHORIZATION,
        payload: payload
    }
}
export function authorizationSuccess(payload){
    return{
        type: USER_AUTHORIZATION_SUCCESS,
        payload: payload
    }
}

export function userForgetPassword(payload){
    return{
        type: USER_FORGET_PASSWORD,
        payload: payload
    }
}
export function userResetPassword(payload){
    return{
        type: USER_RESET_PASSWORD,
        payload: payload
    }
}
export function sendEmailSuccess(){
    return{
        type: SEND_EMAIL_SUCCESS
    }
}


// verified account
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

export function verifiedCodeInput(payload){
    return{
        type: VERIFIED_CODE_INPUT,
        payload: payload
    }
}
export function verifiedEmailInput(payload){
    return{
        type: VERIFIED_EMAIL_INPUT,
        payload: payload
    }
}
export function verifiedAccount(payload){
    return{
        type: VERIFIED_ACCOUNT,
        payload: payload
    }
}
export function verifiedAccountSuccess(){
    return{
        type: VERIFIED_ACCOUNT_SUCCESS,
    }
}

export function initialStateVerified(){
    return{
        type: INITIAL_STATE_VERIFIED
    }
}