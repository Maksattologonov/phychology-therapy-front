import {
    ADD_NEW_FORM_SUCCESS,
    FORUM_COMMENT_OP_SUCCESS,
    FORUM_COMMENTS_RESET, FORUM_SPINNER_END, FORUM_SPINNER_START,
    GET_FORM_BY_ID_SUCCESS,
    LOAD_FORM_SUCCESS,
    NEW_FORM_DESCRIPTION_INPUT,
    NEW_FORM_IMAGE_INPUT,
    NEW_FORM_TITLE_INPUT,
} from "../../types/formTypes";

const initial_state = {
    forms: [],
    pagination: {
        isPagination: true,
        page: 0,
        count: 10
    },
    forum_comments:[],
    new_form_data: {
        title: '',
        description: '',
        image: ''
    },
    operation_success: false,
    spinner: false
}

function forum(state= initial_state, action){

    switch (action.type){
        case LOAD_FORM_SUCCESS:
            return {...state, forms: [...action.payload], operation_success: false};
        case NEW_FORM_TITLE_INPUT:
            return {...state, new_form_data: {...state.new_form_data, title: action.payload}};
        case NEW_FORM_DESCRIPTION_INPUT:
            return {...state, new_form_data: {...state.new_form_data, description: action.payload}};
        case NEW_FORM_IMAGE_INPUT:
            return {...state, new_form_data: {...state.new_form_data, image: action.payload}};
        case ADD_NEW_FORM_SUCCESS:
            return {...state, new_form_data:{...initial_state.new_form_data}, operation_success: true}
        case GET_FORM_BY_ID_SUCCESS:
            return {...state, forum_comments: action.payload, operation_success: false};
        case FORUM_COMMENTS_RESET:
            return {...state, forum_comments: []};
        case FORUM_COMMENT_OP_SUCCESS:
            return {...state, operation_success: true}
        case FORUM_SPINNER_START:
            return {...state, spinner: true}
        case FORUM_SPINNER_END:
            return {...state, spinner: false}
        default:
            return state;
    }
}

export default forum;