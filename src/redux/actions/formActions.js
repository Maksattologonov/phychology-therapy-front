import {
    ADD_NEW_FORM,
    ADD_NEW_FORM_SUCCESS, GET_FORM_BY_ID_SUCCESS, GET_FROM_BY_ID, LOAD_FORM_SUCCESS,
    LOAD_FORMS,
    NEW_FORM_DESCRIPTION_INPUT, NEW_FORM_IMAGE_INPUT,
    NEW_FORM_TITLE_INPUT
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