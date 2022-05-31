import {call, takeEvery, put} from 'redux-saga/effects';
import {LOAD_PUBLICATIONS} from "../types/publicationTypes";
import {loadPublicationsSuccess, publicationSpinnerEnd, publicationSpinnerStart} from "../actions/publicationAction";
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

function* publicationsLoadWorker(action){
    yield put(publicationSpinnerStart())
    let res = yield call(loadPublicationsHandler,action.payload);
    if(res.error){
        toast.warning(res.message);
        yield put(publicationSpinnerEnd())
    }else{
        yield put(loadPublicationsSuccess(res.data));
        yield put(publicationSpinnerEnd())
    }
}

export default function* publicationWatcher(){
    yield takeEvery(LOAD_PUBLICATIONS, publicationsLoadWorker);
}