import {call, takeEvery, put} from 'redux-saga/effects';
import {
    ADD_GALLERY_CATALOG, ADD_GALLERY_IMAGE,
    DELETE_GALLERY_CATALOG,
    GET_GALLERY_CATALOGS,
    GET_GALLERY_IMAGES,
    UPDATE_GALLERY_CATALOG
} from "../types/galleryTypes";
import {toast} from "react-toastify";
import {
    gallerySpinnerActivate,
    gallerySpinnerDeactivate, getGalleryCatalogsAction,
    setGalleryCatalogs,
    setGalleryImages
} from "../actions/galleryActions"
import getGalleryCatalogs from "./apiRequests/gallery/getGalleryCatalogs";
import getGalleryImages from "./apiRequests/gallery/getGalleryImages";
import deleteGalleryCatalog from "./apiRequests/gallery/deleteGalleryCatalog";
import CrateGalleryCategory from "./apiRequests/gallery/createGalleryCategory";
import addGalleryImage from "./apiRequests/gallery/addGalleryImage";

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
function* deleteGalleryCatalogWorker(action){
    yield put(gallerySpinnerActivate());
    let response = yield call(deleteGalleryCatalog, action.payload);
    if(response.error){
        yield put(gallerySpinnerDeactivate());
        toast.error("Не удалось удалить");
    }else{
        toast.info("Категорий успешно удален");
        yield put(gallerySpinnerDeactivate());
        yield put(getGalleryCatalogsAction());
    }
}
function* updateGalleryCatalogWorker(action){
    toast.info("Это функция еще не доступно");
    // yield put(gallerySpinnerActivate());
    // let response = yield call(updateGalleryCatalog, action.payload);
    // if(response.error){
    //     yield put(gallerySpinnerDeactivate());
    //     toast.error("Не удалось обновить");
    // }else{
    //     toast.info("Категорий успешно обновлен");
    //     yield put(gallerySpinnerDeactivate());
    //     yield put(getGalleryCatalogsAction());
    // }
}
function* createGalleryCategoryWorker(action){
    yield put(gallerySpinnerActivate());
    let response = yield call(CrateGalleryCategory, action.payload);
    if(response.error){
        yield put(gallerySpinnerDeactivate());
        toast.error("Что то пошло не так");
    }else{
        toast.info("Категория успешно создана");
        yield put(gallerySpinnerDeactivate());
        yield put(getGalleryCatalogsAction());
    }
}

function* addGalleryImageWorker(action){
    yield put(gallerySpinnerActivate());
    let response = yield call(addGalleryImage, action.payload);
    if(response.error){
        yield put(gallerySpinnerDeactivate());
        toast.error("Что то пошло не так");
    }else{
        toast.info("Картинка успешно добавлен");
        yield put(gallerySpinnerDeactivate());
        yield put(getGalleryCatalogsAction());
    }
}
export default function* galleryWatcher(){
    yield takeEvery(GET_GALLERY_CATALOGS, getGalleryCatalogsWorker);
    yield takeEvery(GET_GALLERY_IMAGES, getGalleryImagesWorker);
    yield takeEvery(DELETE_GALLERY_CATALOG, deleteGalleryCatalogWorker);
    yield takeEvery(UPDATE_GALLERY_CATALOG, updateGalleryCatalogWorker);
    yield takeEvery(ADD_GALLERY_CATALOG, createGalleryCategoryWorker);
    yield takeEvery(ADD_GALLERY_IMAGE, addGalleryImageWorker);
}