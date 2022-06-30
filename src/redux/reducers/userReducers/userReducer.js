import {
    SET_EMPLOYEES,
    SET_USER_FORUMS, SET_USERS, USER_PROCESS_SUCCESS, USER_SPINNER_END, USER_SPINNER_START,
} from "../../types/userTypes";

const initial_state = {
    users: [],
    employees: [],
    forums: {
        data: [],
        pagination: {
            page: 0,
            count: 20
        },
        success: false
    },
    spinner: false
}

export default function userReducer(state=initial_state, action){

    switch (action.type){
        case SET_USER_FORUMS:
            return {...state, forums: {...state.forums, data: action.payload, success: false}}
        case USER_PROCESS_SUCCESS:
            return {...state, forums: {...state.forums, success: true}}
        case USER_SPINNER_START:
            return {...state, spinner: true}
        case USER_SPINNER_END:
            return {...state, spinner: false}
        case SET_USERS:
            return {...state, users: action.payload}
        case SET_EMPLOYEES:
            return {...state, employees: action.payload}
        default:
            return state;
    }
}