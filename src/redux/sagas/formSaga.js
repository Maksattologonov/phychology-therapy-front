import {call, takeEvery, put} from 'redux-saga/effects';
import {ADD_NEW_FORM, GET_FROM_BY_ID, LOAD_FORMS} from "../types/formTypes";
import loadForms from "./apiRequests/form/loadForms";
import {addNewFormSuccess, getFormByIdSuccess, loadFormsSuccess} from "../actions/formActions";
import {toast} from "react-toastify";
import addForm from "./apiRequests/form/addForm";
import getForumComments from "./apiRequests/form/getForumComments";

function* commentDeleteWorker(){

}
function* commentUpdateWorker(){
}
function* commentAddWorker(){

}
function* formDeleteWorker(){
}
function* formUpdateWorker(){
}
function* formAddWorker(action){
    let response = yield call(addForm, action.payload);
    if(response.error){
        toast.error(response.message)
    }else{
        yield put(addNewFormSuccess());
        toast.info('Форум успешно создан !');
    }
}
function* formsLoadWorker(action){
    let response = yield call(loadForms, action.payload);
    if(response.error){
        toast.error(response.message);
    }else{
        yield put(loadFormsSuccess(response.data));
    }
}

function* getForumByIdWorker(action){
    let response = yield call(getForumComments, action.payload);
    if(response.error){
        toast.error(response.message);
    }else{
        yield put(getFormByIdSuccess(response.data));
    }
}

function* formWatcher(){
    yield takeEvery(LOAD_FORMS, formsLoadWorker);
    yield takeEvery(ADD_NEW_FORM, formAddWorker)
    yield takeEvery(GET_FROM_BY_ID, getForumByIdWorker)
}

export default formWatcher;