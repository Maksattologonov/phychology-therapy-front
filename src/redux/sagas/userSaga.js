import {call, takeEvery, put} from 'redux-saga/effects';
import {
    DELETE_USER_FORUM,
    GET_USER_INFO,
    LOAD_USER_FORUMS,
    UPDATE_USER_FORUM,
    USER_PROFILE_UPDATE
} from "../types/userTypes";
import userInfo from "./apiRequests/user/userInfo";
import updateUserData from "./apiRequests/user/updateUserData";

import {
    getUserInfo,
    setUserForums,
    setUserInfoEmail,
    setUserInfoFirstName,
    setUserInfoId,
    setUserInfoLastName,
    setUserInfoRole,
    loadUserForums as loadUserForumsAction
} from "../actions/userActions";
import {toast} from "react-toastify";
import loadUserForums from "./apiRequests/user/loadUserForums";
import deleteUserForum from "./apiRequests/user/deleteUserForum";
import updateUserForumFunc from "./apiRequests/user/updateUserForumFunc";

function* getUserDataWorker(action){
    let response = yield call(userInfo, action.payload);
    yield put(setUserInfoId(response.data.id));
    yield put(setUserInfoFirstName(response.data.name));
    yield put(setUserInfoLastName(response.data.last_name));
    yield put(setUserInfoEmail(response.data.email));
    if(response.data.is_student==="True"){
        yield put(setUserInfoRole(3));
    }else if(response.data.is_employee==="True"){
        yield put(setUserInfoRole(2));
    }else if(response.data.is_superuser==="True"){
        yield put(setUserInfoRole(1));
    }

}

function* updateUserDataWorker(action){
    let response = yield call(updateUserData, action.payload);
    if(response.error){
        toast.error(response.message);
    }else{
        toast.info("Данные успесшно обновлены !");
        yield put(getUserInfo(action.payload.token));
    }
}

function* loadUserForumsWorker(action){

    let response = yield call(loadUserForums, action.payload);
    if(response.error){
        toast.error(response.message);
    }else{
        yield put(setUserForums(response.data));
    }
}

function* deleteUserForumsWorker(action){
    let response = yield call(deleteUserForum, action.payload);
    if(response.error){
        toast.error(response.message);
    }else{
        toast.info('Форум успешно удален!');
        yield put(loadUserForumsAction({
            token: action.payload.token
        }));
    }
}

function* updateUserForumWorker(action){
    let response = yield call(updateUserForumFunc, action.payload);
    console.log(response);
    if(response.error){
        toast.error(response.message);
    }else{
        toast.info('Форум успешно обновлен!');
        yield put(loadUserForumsAction({token: action.payload.token}));
    }
}

function* userWatcher(){
    yield takeEvery(GET_USER_INFO, getUserDataWorker);
    yield takeEvery(USER_PROFILE_UPDATE, updateUserDataWorker);
    yield takeEvery(LOAD_USER_FORUMS, loadUserForumsWorker);
    yield takeEvery(DELETE_USER_FORUM, deleteUserForumsWorker);
    yield takeEvery(UPDATE_USER_FORUM, updateUserForumWorker)
}

export default userWatcher;