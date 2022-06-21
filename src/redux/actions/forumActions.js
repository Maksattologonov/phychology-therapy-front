import {
    ADD_NEW_FORM,
    ADD_NEW_FORM_SUCCESS,
    ADD_NEW_FORUM_COMMENT, DELETE_FORUM_COMMENT,
    FORUM_COMMENTS_RESET, FORUM_SPINNER_END, FORUM_SPINNER_START, FORUMS_RESET,
    GET_FORUM_CATALOGS, GET_FORUM_COMMENTS,
    LOAD_FORM_SUCCESS,
    LOAD_FORMS, SET_FORUM_CATALOGS, SET_FORUM_COMMENTS, UPDATE_FORUM_COMMENT,
} from "../types/forumTypes";

export function addNewForm(payload){
    return{
        type: ADD_NEW_FORM,
        payload: payload
    }
}
export function addNewFormSuccess(){
    return{
        type: ADD_NEW_FORM_SUCCESS
    }
}

export function loadFormsAction(payload){
    return{
        type: LOAD_FORMS,
        payload: payload
    }
}

export function loadForumsSuccess(payload){
    return{
        type: LOAD_FORM_SUCCESS,
        payload: payload
    }

}


export function forumCommentsReset(){
    return{
        type: FORUM_COMMENTS_RESET
    }
}
export function forumsReset(){
    return{
        type: FORUMS_RESET
    }
}
// -------- forum comments--------------------
export function getForumCommentsAction(payload){
    return{
        type: GET_FORUM_COMMENTS,
        payload: payload
    }
}
export function setForumComments(payload){
    return{
        type: SET_FORUM_COMMENTS,
        payload: payload
    }
}
export function addNewForumComment(payload){
    return{
        type: ADD_NEW_FORUM_COMMENT,
        payload: payload
    }
}
export function updateForumComment(payload){
    return{
        type: UPDATE_FORUM_COMMENT,
        payload: payload
    }
}
export function deleteForumComment(payload){
    return{
        type: DELETE_FORUM_COMMENT,
        payload: payload
    }
}

//---------- forum spinner----------------
export function forumSpinnerStart(){
    return{
        type: FORUM_SPINNER_START
    }
}
export function forumSpinnerEnd(){
    return{
        type: FORUM_SPINNER_END
    }
}

//-------------forum catalog--------------

export function getForumCatalogs(){
    return{
        type: GET_FORUM_CATALOGS
    }
}

export function setForumCatalogs(payload){
    return{
        type: SET_FORUM_CATALOGS,
        payload: payload
    }
}