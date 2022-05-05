import {
    ADD_NEW_FORM,
    ADD_NEW_FORM_SUCCESS,
    ADD_NEW_FORUM_COMMENT, DELETE_FORUM_COMMENT, FORUM_COMMENT_OP_SUCCESS,
    FORUM_COMMENTS_RESET,
    GET_FORM_BY_ID_SUCCESS,
    GET_FROM_BY_ID,
    LOAD_FORM_SUCCESS,
    LOAD_FORMS,
    NEW_FORM_DESCRIPTION_INPUT,
    NEW_FORM_IMAGE_INPUT,
    NEW_FORM_TITLE_INPUT, UPDATE_FORUM_COMMENT,
} from "../types/formTypes";

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

export function loadFormsSuccess(payload){
    return{
        type: LOAD_FORM_SUCCESS,
        payload: payload
    }

}

export function newFormTitleInput(payload){
    return{
        type: NEW_FORM_TITLE_INPUT,
        payload: payload
    }
}
export function newFormDescriptionInput(payload){
    return{
        type: NEW_FORM_DESCRIPTION_INPUT,
        payload: payload
    }
}
export function newFormImageInput(payload){
    return{
        type: NEW_FORM_IMAGE_INPUT,
        payload: payload
    }
}

export function getFormById(payload){
    return{
        type: GET_FROM_BY_ID,
        payload: payload
    }
}
export function getFormByIdSuccess(payload){
    return{
        type: GET_FORM_BY_ID_SUCCESS,
        payload: payload
    }
}
export function forumCommentsReset(){
    return{
        type: FORUM_COMMENTS_RESET
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
export function forumCommentOpSuccess(){
    return{
        type: FORUM_COMMENT_OP_SUCCESS
    }
}
