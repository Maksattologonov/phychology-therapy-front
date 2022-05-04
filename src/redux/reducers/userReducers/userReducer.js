import {
    SET_USER_FORUMS,
    USER_ACC_INPUT_EMAIL,
    USER_ACC_INPUT_FIRST_NAME,
    USER_ACC_INPUT_LAST_NAME,
    USER_ACC_INPUT_NICK_NAME, USER_LOG_OUT, USER_PROCESS_SUCCESS,
} from "../../types/userTypes";

const initial_state = {
    first_name: '',
    last_name: '',
    nick_name: '',
    email: '',
    avatar: '',
    forums: {
        data: [],
        pagination: {
            page: 0,
            count: 20
        },
        success: false
    }
}

export default function userReducer(state=initial_state, action){

    switch (action.type){
        case USER_ACC_INPUT_FIRST_NAME:
            return {...state, first_name: action.payload};
        case USER_ACC_INPUT_LAST_NAME:
            return {...state, last_name: action.payload};
        case USER_ACC_INPUT_NICK_NAME:
            return {...state, nick_name: action.payload};
        case USER_ACC_INPUT_EMAIL:
            return {...state, email: action.payload};
        case SET_USER_FORUMS:
            return {...state, forums: {...state.forums, data: action.payload, success: false}}
        case USER_PROCESS_SUCCESS:
            return {...state, forums: {...state.forums, success: true}}
        case USER_LOG_OUT:
            return { ... initial_state }
        default:
            return state;
    }
}