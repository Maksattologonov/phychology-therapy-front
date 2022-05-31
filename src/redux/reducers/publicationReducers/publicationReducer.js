import {
    LOAD_PUBLICATIONS_SUCCESS,
    PUBLICATION_SPINNER_END,
    PUBLICATION_SPINNER_START
} from "../../types/publicationTypes";

const initial_state = {
    publications: [],
    spinner: false
};

function publicationReducer(state=initial_state, action){
    switch (action.type){
        case LOAD_PUBLICATIONS_SUCCESS:
            return {...state, publications: action.payload}
        case PUBLICATION_SPINNER_START:
            return {...state, spinner: true}
        case PUBLICATION_SPINNER_END:
            return {...state, spinner: false}
        default:
            return {...state}
    }
}

export default publicationReducer;