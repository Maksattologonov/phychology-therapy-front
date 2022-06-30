import {
    INITIAL_STATE_REG,
    REG_INPUT_EMAIL,
    REG_INPUT_FIRST_NAME,
    REG_INPUT_LAST_NAME,
    REG_INPUT_PASSWORD, USER_REGISTRATION_SUCCESS
} from "../../types/authTypes";

const initial_state = {
    name: '',
    last_name: '',
    email: '',
    password: '',
    isRegistration: false,
}


export default function registrationReducer(state = initial_state, action){

    switch (action.type){
        case REG_INPUT_FIRST_NAME:
            return {...state, name: action.payload};
        case REG_INPUT_LAST_NAME:
            return {...state, last_name: action.payload};
        case REG_INPUT_EMAIL:
            return {...state, email: action.payload};
        case REG_INPUT_PASSWORD:
            return {...state, password: action.payload};
        case USER_REGISTRATION_SUCCESS:
            return {... initial_state, isRegistration: true,}
        case INITIAL_STATE_REG:
            return {...initial_state}
        default:
            return state;
    }
}