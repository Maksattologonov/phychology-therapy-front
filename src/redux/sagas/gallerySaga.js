import {call, takeEvery, put} from 'redux-saga/effects';
import {GET_GALLERY_CATALOGS, GET_GALLERY_IMAGES} from "../types/galleryTypes";
import {toast} from "react-toastify";
import {
    gallerySpinnerActivate,
    gallerySpinnerDeactivate,
    setGalleryCatalogs,
    setGalleryImages
} from "../actions/galleryActions"
import getGalleryCatalogs from "./apiRequests/gallery/getGalleryCatalogs";
import getGalleryImages from "./apiRequests/gallery/getGalleryImages";

function* getGalleryCatalogsWorker(){
    yield put(gallerySpinnerActivate());
    let response = yield call(getGalleryCatalogs);
    if(response.error){
        yield put(gallerySpinnerDeactivate());
        toast.error(response.message);
    }else{
        yield put(gallerySpinnerDeactivate());
        yield put(setGalleryCatalogs(response.data));
    }
}
function* getGalleryImagesWorker(action){
    yield put(gallerySpinnerActivate());
    let response = yield call(getGalleryImages, action.payload);
    if(response.error){
        yield put(gallerySpinnerDeactivate());
        toast.error(response.message);
    }else{
        yield put(gallerySpinnerDeactivate());
        yield put(setGalleryImages(response.data));
    }
}

export default function* galleryWatcher(){
    yield takeEvery(GET_GALLERY_CATALOGS, getGalleryCatalogsWorker)
    yield takeEvery(GET_GALLERY_IMAGES, getGalleryImagesWorker)
}