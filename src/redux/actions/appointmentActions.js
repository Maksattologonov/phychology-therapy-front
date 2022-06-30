import {
    ADD_APPOINTMENT, APPOINTMENT_SPINNER_END, APPOINTMENT_SPINNER_START,
    DELETE_APPOINTMENT,
    GET_APPOINTMENTS,
    SET_APPOINTMENTS,
    UPDATE_APPOINTMENT
} from "../types/appointmentTypes";

// ---------------- for saga --------------------

export function getAppointmentsAction(payload){
    return{
        type: GET_APPOINTMENTS,
        payload: payload
    }
}
export function addAppointmentAction(payload){
    return{
        type: ADD_APPOINTMENT,
        payload: payload
    }
}
export function deleteAppointmentAction(payload){
    return{
        type: DELETE_APPOINTMENT,
        payload: payload
    }
}

export function updateAppointmentAction(payload){
    return{
        type: UPDATE_APPOINTMENT,
        payload: payload
    }
}

// ---------------- for redux --------------------

export function setAppointmentsAction(payload){
    return{
        type: SET_APPOINTMENTS,
        payload: payload
    }
}
export function appointmentSpinnerStart(){
    return{
        type: APPOINTMENT_SPINNER_START,
    }
}
export function appointmentSpinnerEnd(){
    return{
        type: APPOINTMENT_SPINNER_END
    }
}
