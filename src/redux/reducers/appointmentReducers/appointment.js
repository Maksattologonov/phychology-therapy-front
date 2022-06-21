import {SET_APPOINTMENTS, SET_DOCTORS} from "../../types/appointmentTypes";

const initial_state = {
    appointments: [],
    doctors: []
}

export default function appointment(state=initial_state, action){
    switch (action.type){
        case SET_APPOINTMENTS:
            return {...state, appointments: action.payload}
        case SET_DOCTORS:
            return {...state, doctors: action.payload}
        default :
            return state;
    }
}