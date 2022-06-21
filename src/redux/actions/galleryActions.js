
import {
    ADD_GALLERY_CATALOG,
    DELETE_GALLERY_CATALOG, GALLERY_SPINNER_ACTIVATE, GALLERY_SPINNER_DEACTIVATE,
    GET_GALLERY_CATALOGS, GET_GALLERY_IMAGES, RESET_GALLERY_IMAGES, SET_GALLERY_CATALOGS, SET_GALLERY_IMAGES,
    UPDATE_GALLERY_CATALOG
} from "../types/galleryTypes";
import {getImageUrl} from "../../config/fileConfig";

//-------------------for saga----------------------------

export function getGalleryCatalogs(){
    return {
        type: GET_GALLERY_CATALOGS
    }
}
export function addGalleryCatalog(payload){
    return {
        type: ADD_GALLERY_CATALOG,
        payload:payload
    }
}
export function deleteGalleryCatalog(payload){
    return {
        type: DELETE_GALLERY_CATALOG,
        payload:payload
    }
}
export function updateGalleryCatalog(payload){
    return {
        type: UPDATE_GALLERY_CATALOG,
        payload:payload
    }
}
export function getGalleryImagesAction(payload){
    return {
        type: GET_GALLERY_IMAGES,
        payload: payload
    }
}

//-------------------for redux----------------------------

export  function setGalleryCatalogs(payload){
    return {
        type: SET_GALLERY_CATALOGS,
        payload: payload
    }
}
export function setGalleryImages(payload){
    let images = [];
    images = payload.map((item)=>{
        return{
            id: item.id,
            url: getImageUrl(item.images)
        }
    })
    return {
        type: SET_GALLERY_IMAGES,
        payload: images
    }
}
export function resetGalleryImages(){
    return{
        type: RESET_GALLERY_IMAGES
    }
}

export function gallerySpinnerActivate(){
    return{
        type: GALLERY_SPINNER_ACTIVATE
    }
}
export function gallerySpinnerDeactivate(){
    return{
        type: GALLERY_SPINNER_DEACTIVATE
    }
}