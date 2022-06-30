import {call, takeEvery, put} from 'redux-saga/effects';
import {ADD_PUBLICATION, DELETE_PUBLICATION, LOAD_PUBLICATIONS, UPDATE_PUBLICATION} from "../types/publicationTypes";
import {
    loadPublications,
    publicationSpinnerEnd,
    publicationSpinnerStart,
    setPublications
} from "../actions/publicationAction";
import appAxios from "../../config/appAxios";
import {toast} from "react-toastify";

async function loadPublicationsHandler(data){
    let headers = {
        'accept': 'application/json'
    }
    let axios = appAxios(headers);
    let url =  `/article/get`;

    let response = await axios.get(url)
        .then(res=>{
            return {
                error: false,
                data: res.data
            };
        })
        .catch(reject=>{
            return {
                error: true,
                data: reject.detail
            };
        })
    return response;
}
async function deletePublicationHandler(data){
    let headers = {
        'accept': 'application/json',
        'Authorization': `Bearer ${data.token}`
    }
    let axios = appAxios(headers);
    let url =  `/article/delete?pk=${data.id}`;

    let response = await axios.delete(url)
        .then(res=>{
            return {
                error: false,
                data: res.data
            };
        })
        .catch(reject=>{
            return {
                error: true,
                message: reject
            };
        })
    return response;
}
async function updatePublicationHandler(payload){
    let headers = {
        'accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${payload.token}`
    }
    let data = new FormData();
    data.append('image', payload.data.image);
    let axios = appAxios(headers);
    let url = `/article/update?id=${payload.data.id}&title=${payload.data.title}&description=${payload.data.description}`;

    let response = await axios.patch(url)
        .then(res=>{
            return {
                error: false,
                data: res.data
            };
        })
        .catch(reject=>{
            return {
                error: true,
                message: reject.detail
            };
        })
    return response;
}
async function addPublicationHandler(payload){
    let headers = {
        'accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${payload.token}`
    }
    let data = new FormData();
    data.append('image', payload.data.image);
    let axios = appAxios(headers);
    let url = `/article/create?title=${payload.data.title}&description=${payload.data.description}`;

    let response = await axios.post(url)
        .then(res=>{
            return {
                error: false,
                data: res.data
            };
        })
        .catch(reject=>{
            return {
                error: true,
                message: reject.detail
            };
        })
    return response;
}
//------------------------------------Workers--------------------

function* publicationsLoadWorker(action){
    yield put(publicationSpinnerStart())
    let res = yield call(loadPublicationsHandler,action.payload);
    if(res.error){
        toast.warning(res.message);
        yield put(publicationSpinnerEnd())
    }else{
        yield put(setPublications(res.data));
        yield put(publicationSpinnerEnd())
    }
}
function* publicationDeleteWorker(action){
    let res = yield call(deletePublicationHandler,action.payload);
    if(res.error){
        toast.warning("Не удалось удалить статью");
        yield put(publicationSpinnerEnd())
    }else{
        yield put(loadPublications());
        yield put(publicationSpinnerEnd())
        toast.info('Успешно удалено');
    }
}
function* publicationUpdateWorker(action){
    let res = yield call(updatePublicationHandler,action.payload);
    if(res.error){
        toast.warning("Что то пошло не так");
        yield put(publicationSpinnerEnd())
    }else{
        yield put(loadPublications());
        yield put(publicationSpinnerEnd())
        toast.info('Обновление прошло успешно');
    }
}
function* publicationAddWorker(action){
    let res = yield call(addPublicationHandler,action.payload);
    if(res.error){
        toast.warning("Что то пошло не так");
        yield put(publicationSpinnerEnd())
    }else{
        yield put(loadPublications());
        yield put(publicationSpinnerEnd())
        toast.info('Добавление прошло успешно');
    }
}

export default function* publicationWatcher(){
    yield takeEvery(LOAD_PUBLICATIONS, publicationsLoadWorker);
    yield takeEvery(DELETE_PUBLICATION, publicationDeleteWorker);
    yield takeEvery(UPDATE_PUBLICATION, publicationUpdateWorker);
    yield takeEvery(ADD_PUBLICATION, publicationAddWorker);
}