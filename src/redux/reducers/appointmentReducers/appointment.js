import {APPOINTMENT_SPINNER_END, APPOINTMENT_SPINNER_START, SET_APPOINTMENTS} from "../../types/appointmentTypes";

const initial_state = {
    appointments: [],
    spinner: false
}

export default function appointment(state=initial_state, action){
    switch (action.type){
        case SET_APPOINTMENTS:
            return {...state, appointments: action.payload}
        case APPOINTMENT_SPINNER_START:
            return {...state, spinner: true}
        case APPOINTMENT_SPINNER_END:
            return {...state, spinner: false}
        default :
            return state;
    }
}