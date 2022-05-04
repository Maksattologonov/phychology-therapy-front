import {
    ADD_NEW_FORM_SUCCESS, GET_FORM_BY_ID_SUCCESS,
     LOAD_FORM_SUCCESS,
    NEW_FORM_DESCRIPTION_INPUT, NEW_FORM_IMAGE_INPUT,
    NEW_FORM_TITLE_INPUT
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
    }
}

function form(state= initial_state, action){

    switch (action.type){
        case LOAD_FORM_SUCCESS:
            return {
                ...state,
                forms: [...action.payload]
            };
        case NEW_FORM_TITLE_INPUT:
            return {...state, new_form_data: {...state.new_form_data, title: action.payload}};
        case NEW_FORM_DESCRIPTION_INPUT:
            return {...state, new_form_data: {...state.new_form_data, description: action.payload}};
        case NEW_FORM_IMAGE_INPUT:
            return {...state, new_form_data: {...state.new_form_data, image: action.payload}};
        case ADD_NEW_FORM_SUCCESS:
            return {...initial_state}
        case GET_FORM_BY_ID_SUCCESS:
            return {...state, forum_comments: action.payload};
        default:
            return state;
    }
}

export default form;