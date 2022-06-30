import {
    GALLERY_SPINNER_ACTIVATE,
    GALLERY_SPINNER_DEACTIVATE, RESET_GALLERY_IMAGES,
    SET_GALLERY_CATALOGS,
    SET_GALLERY_IMAGES
} from "../../types/galleryTypes";

const initial_state = {
    catalogs: [],
    images: [],
    spinner: false
}

export default function gallery(state=initial_state, action){
    switch (action.type){
        case SET_GALLERY_CATALOGS:
            return {...state, catalogs: action.payload}
        case SET_GALLERY_IMAGES:
            return {...state, images: action.payload}
        case RESET_GALLERY_IMAGES:
            return {...state, images: []}
        case GALLERY_SPINNER_ACTIVATE:
            return {...state, spinner: true}
        case GALLERY_SPINNER_DEACTIVATE:
            return {...state, spinner: false}
        default:
            return state;
    }
}