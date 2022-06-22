import {
    LOAD_PUBLICATIONS,
    SET_PUBLICATIONS,
    PUBLICATION_SPINNER_END,
    PUBLICATION_SPINNER_START, DELETE_PUBLICATION, UPDATE_PUBLICATION
} from "../types/publicationTypes";

export function loadPublications(){
    return{
        type: LOAD_PUBLICATIONS
    }
}
export function deletePublication(payload){
    return{
        type: DELETE_PUBLICATION,
        payload: payload
    }
}
export function updatePublication(payload){
    return{
        type: UPDATE_PUBLICATION,
        payload: payload
    }
}

export function setPublications(payload){
    return{
        type: SET_PUBLICATIONS,
        payload: payload
    }
}

export function publicationSpinnerStart(){
    return{
        type: PUBLICATION_SPINNER_START
    }
}
export function publicationSpinnerEnd(){
    return{
        type: PUBLICATION_SPINNER_END
    }
}