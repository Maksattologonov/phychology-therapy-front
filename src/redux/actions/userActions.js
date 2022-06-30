import {
    ADD_EMPLOYEE,
    DELETE_USER_FORUM, EMPLOYEE_LOCK, EMPLOYEE_UNLOCK, GET_EMPLOYEES,
    GET_USER_INFO, GET_USERS,
    LOAD_USER_FORUMS, SET_EMPLOYEES,
    SET_USER_FORUMS,
    SET_USER_INFO_EMAIL,
    SET_USER_INFO_FIRST_NAME,
    SET_USER_INFO_ID, SET_USER_INFO_LAST_NAME, SET_USER_INFO_ROLE, SET_USERS,
    UPDATE_USER_FORUM, USER_LOCK,
    USER_LOG_OUT,
    USER_PROCESS_SUCCESS,
    USER_PROFILE_UPDATE,
    USER_SPINNER_END,
    USER_SPINNER_START, USER_UNLOCK,
} from "../types/userTypes";

// User account
export function setUserInfoId(payload){
    return{
        type: SET_USER_INFO_ID,
        payload: payload
    }
}
export function setUserInfoFirstName(payload){
    return{
        type: SET_USER_INFO_FIRST_NAME,
        payload: payload
    }
}
export function setUserInfoLastName(payload){
    return{
        type: SET_USER_INFO_LAST_NAME,
        payload: payload
    }
}
export function setUserInfoEmail(payload){
    return{
        type: SET_USER_INFO_EMAIL,
        payload: payload
    }
}

export function setUserInfoRole(payload){
    return{
        type: SET_USER_INFO_ROLE,
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

export function userSpinnerStart(){
    return{
        type: USER_SPINNER_START
    }
}
export function userSpinnerEnd(){
    return{
        type: USER_SPINNER_END
    }
}

export function getUsersAction(payload){
    return{
        type: GET_USERS,
        payload
    }
}
export function userLockAction(payload){
    return{
        type: USER_LOCK,
        payload
    }
}
export function userUnlockAction(payload){
    return{
        type: USER_UNLOCK,
        payload
    }
}
export function setUsersAction(payload){
    return{
        type: SET_USERS,
        payload
    }
}

export function getEmployeesAction(payload){
    return{
        type: GET_EMPLOYEES,
        payload
    }
}
export function addEmployeeAction(payload){
    return{
        type: ADD_EMPLOYEE,
        payload
    }
}
export function employeeLockAction(payload){
    return{
        type: EMPLOYEE_LOCK,
        payload
    }
}
export function employeeUnlockAction(payload){
    return{
        type: EMPLOYEE_UNLOCK,
        payload
    }
}
export function setEmployeesAction(payload){
    return{
        type: SET_EMPLOYEES,
        payload
    }
}
