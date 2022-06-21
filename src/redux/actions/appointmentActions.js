import {
    ADD_APPOINTMENT,
    DELETE_APPOINTMENT,
    GET_APPOINTMENTS, GET_DOCTORS,
    SET_APPOINTMENTS, SET_DOCTORS,
    UPDATE_APPOINTMENT
} from "../types/appointmentTypes";

// ---------------- for saga --------------------

export function getAppointmentsAction(){
    return{
        type: GET_APPOINTMENTS
    }
}
export function getDoctorsAction(){
    return{
        type: GET_DOCTORS
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
export function setDoctorsAction(payload){
    return{
        type: SET_DOCTORS,
        payload: payload
    }
}