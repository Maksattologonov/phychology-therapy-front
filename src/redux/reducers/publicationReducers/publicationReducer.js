import {
    PUBLICATION_SPINNER_END,
    PUBLICATION_SPINNER_START, SET_PUBLICATIONS
} from "../../types/publicationTypes";

const initial_state = {
    publications: [],
    spinner: false
};

function publicationReducer(state=initial_state, action){
    switch (action.type){
        case SET_PUBLICATIONS:
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