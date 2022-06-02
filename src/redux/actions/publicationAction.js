import {
    LOAD_PUBLICATIONS,
    LOAD_PUBLICATIONS_SUCCESS,
    PUBLICATION_SPINNER_END,
    PUBLICATION_SPINNER_START
} from "../types/publicationTypes";

export function loadPublications(){
    return{
        type: LOAD_PUBLICATIONS
    }
}
export function loadPublicationsSuccess(payload){
    return{
        type: LOAD_PUBLICATIONS_SUCCESS,
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