import {
    SET_USER_FORUMS, USER_PROCESS_SUCCESS,
} from "../../types/userTypes";

const initial_state = {
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
        default:
            return state;
    }
}