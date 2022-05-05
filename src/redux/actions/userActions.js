import {
    APPOINTMENT_INPUT_NAME,
    APPOINTMENT_INPUT_PHONE_NUMBER,
    APPOINTMENT_INPUT_PROBLEM,
    APPOINTMENT_INPUT_SESSION_TYPE, DELETE_USER_FORUM,
    GET_USER_INFO, LOAD_USER_FORUMS, SET_USER_FORUMS, SET_USER_ID, UPDATE_USER_FORUM,
    USER_ACC_INPUT_EMAIL,
    USER_ACC_INPUT_FIRST_NAME,
    USER_ACC_INPUT_LAST_NAME,
    USER_ACC_INPUT_NICK_NAME, USER_LOG_OUT, USER_PROCESS_SUCCESS, USER_PROFILE_UPDATE,
} from "../types/userTypes";

// User account
export function setUserId(payload){
    return{
        type: SET_USER_ID,
        payload: payload
    }
}
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
export function userLogOut(){
    return{
        type: USER_LOG_OUT
    }
}
export function userProfileUpdate(payload){
    return{
        type: USER_PROFILE_UPDATE,
        payload: payload
    }
}

export function loadUserForums(payload){
    return{
        type: LOAD_USER_FORUMS,
        payload: payload
    }
}
export function setUserForums(payload){
    return{
        type: SET_USER_FORUMS,
        payload: payload
    }
}
export function updateUserForum(payload){
    return{
        type: UPDATE_USER_FORUM,
        payload: payload
    }
}
export function deleteUserForum(payload){
    return{
        type: DELETE_USER_FORUM,
        payload:payload
    }
}
export function userProcessSuccess(){
    return{
        type: USER_PROCESS_SUCCESS,
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