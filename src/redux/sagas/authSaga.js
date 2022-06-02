import {call, takeEvery, put} from 'redux-saga/effects';
import {
    USER_AUTHORIZATION,
    USER_FORGET_PASSWORD,
    USER_REGISTRATION,
    USER_RESET_PASSWORD,
    VERIFIED_ACCOUNT
} from "../types/authTypes";
import signIn from "./apiRequests/auth/signin";
import signUp from "./apiRequests/auth/signup";
import {toast} from "react-toastify";
import {
    authorizationSuccess,
    registrationSuccess, sendEmailSuccess,
    verifiedAccountSuccess,
    verifiedEmailInput
} from "../actions/authActions";
import sendEmail from "./apiRequests/auth/sendEmail";
import confirm from "./apiRequests/auth/confirm";
import resetPassword from "./apiRequests/auth/resetPassword";

function* signUpWorker(action){
    let response = yield call(signUp, action.payload);
    if(response.error){
        toast.warning(response.message);
    }else{
        let res = yield call(sendEmail,action.payload.email);
        if(res.error){
            toast.warning(response.message);
        }else{
            yield put(verifiedEmailInput(action.payload.email));
            yield put(registrationSuccess());
            toast.info(res.data);
        }
    }
}

function* signInWorker(action){
    let response = yield call(signIn, action.payload);
    if(response.error){
       toast.warning(response.message);
    }else{
        yield put(authorizationSuccess(response.data.access_token));
    }
}

function* confirmWorker(action){
    let response = yield call(confirm ,action.payload);
    if(response.error){
        toast.info(response.message);
    }else{
        yield put(verifiedAccountSuccess());
        toast.info(response.data);
    }
}

function* resetWorker(action){
    let response = yield call(resetPassword, action.payload);
    if(response.error){
        toast.info(response.message);
    }else{
        yield put(verifiedAccountSuccess());
        toast.info(response.data);
    }
}

function* forgetWorker(action){
    let res = yield call(sendEmail,action.payload);
    if(res.error){
        toast.warning(res.message);
    }else{
        yield put(sendEmailSuccess());
        toast.info(res.data);
    }
}

export default function* authWatcher(){
    yield takeEvery(USER_REGISTRATION, signUpWorker);
    yield takeEvery(USER_AUTHORIZATION, signInWorker);
    yield takeEvery(VERIFIED_ACCOUNT, confirmWorker);
    yield takeEvery(USER_FORGET_PASSWORD, forgetWorker);
    yield takeEvery(USER_RESET_PASSWORD, resetWorker);
}