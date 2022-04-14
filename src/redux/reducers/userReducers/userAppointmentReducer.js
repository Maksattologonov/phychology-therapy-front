import {
    APPOINTMENT_INPUT_NAME, APPOINTMENT_INPUT_PHONE_NUMBER,
    APPOINTMENT_INPUT_PROBLEM,
    APPOINTMENT_INPUT_SESSION_TYPE
} from "../../types/userTypes";

const initial_state = {
    name: '',
    offline: false,
    phone_number: '',
    problem: ''
}

export default function userAppointmentReducer(state=initial_state, action){

    switch (action.type){
        case APPOINTMENT_INPUT_NAME:
            return {...state, name: action.payload};
        case APPOINTMENT_INPUT_SESSION_TYPE:
            return {...state, offline: action.payload};
        case APPOINTMENT_INPUT_PHONE_NUMBER:
            return {...state, phone_number: action.payload};
        case APPOINTMENT_INPUT_PROBLEM:
            return {...state, problem: action.payload};
        default:
            return state;
    }
}