import {
    APPOINTMENT_INPUT_NAME,
    APPOINTMENT_INPUT_PHONE_NUMBER,
    APPOINTMENT_INPUT_PROBLEM,
    APPOINTMENT_INPUT_SESSION_TYPE,
    GET_USER_INFO,
    USER_ACC_INPUT_EMAIL,
    USER_ACC_INPUT_FIRST_NAME,
    USER_ACC_INPUT_LAST_NAME,
    USER_ACC_INPUT_NICK_NAME,
} from "../types/userTypes";

// User account
export function userAccInputFirstName(payload){
    return{
        type: USER_ACC_INPUT_FIRST_NAME,
        payload: payload
    }
}
export function userAccInputLastName(payload){
    return{
        type: USER_ACC_INPUT_LAST_NAME,
        payload: payload
    }
}
export function userAccInputNickName(payload){
    return{
        type: USER_ACC_INPUT_NICK_NAME,
        payload: payload
    }
}
export function userAccInputEmail(payload){
    return{
        type: USER_ACC_INPUT_EMAIL,
        payload: payload
    }
}

export function getUserInfo(payload){
    return{
        type: GET_USER_INFO,
        payload: payload
    }
}

// User appointment
export function appointmentInputName(payload){
    return{
        type: APPOINTMENT_INPUT_NAME,
        payload: payload
    }
}
export function appointmentInputSessionType(payload){
    return{
        type: APPOINTMENT_INPUT_SESSION_TYPE,
        payload: payload
    }
}
export function appointmentInputPhoneNumber(payload){
    return{
        type: APPOINTMENT_INPUT_PHONE_NUMBER,
        payload: payload
    }
}
export function appointmentInputProblem(payload){
    return{
        type: APPOINTMENT_INPUT_PROBLEM,
        payload: payload
    }
}