import {
    ADD_NEW_FORM_SUCCESS,
    FORUM_COMMENTS_RESET, FORUM_SPINNER_END, FORUM_SPINNER_START, FORUMS_RESET,
    LOAD_FORM_SUCCESS,
    SET_FORUM_CATALOGS, SET_FORUM_COMMENTS,
} from "../../types/forumTypes";

const initial_state = {
    catalogs:[],
    forums: [],
    forum_comments:[],
    spinner: false
}

function forum(state= initial_state, action){

    switch (action.type){
        case LOAD_FORM_SUCCESS:
            return {...state, forums: [...action.payload]};
        case ADD_NEW_FORM_SUCCESS:
            return {...state}
        case FORUMS_RESET:
            return {...state, forums: []}
        case SET_FORUM_COMMENTS:
            return {...state, forum_comments: action.payload}
        case FORUM_COMMENTS_RESET:
            return {...state, forum_comments: []};
        case FORUM_SPINNER_START:
            return {...state, spinner: true}
        case FORUM_SPINNER_END:
            return {...state, spinner: false}
        case SET_FORUM_CATALOGS:
            return {...state, catalogs: action.payload}
        default:
            return state;
    }
}

export default forum;