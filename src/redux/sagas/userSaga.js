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
    getUserInfo, setUserForums, setUserId,
    userAccInputEmail,
    userAccInputFirstName,
    userAccInputLastName,
    userAccInputNickName, userProcessSuccess
} from "../actions/userActions";
import {toast} from "react-toastify";
import loadUserForums from "./apiRequests/user/loadUserForums";
import deleteUserForum from "./apiRequests/user/deleteUserForum";
import updateUserForumFunc from "./apiRequests/user/updateUserForumFunc";

function* getUserDataWorker(action){
    let response = yield call(userInfo, action.payload);
    yield put(setUserId(response.data.id));
    yield put(userAccInputFirstName(response.data.name));
    yield put(userAccInputLastName(response.data.last_name));
    yield put(userAccInputNickName(response.data.anonymous_name));
    yield put(userAccInputEmail(response.data.email));
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
        yield put(userProcessSuccess());
    }
}

function* updateUserForumWorker(action){
    let response = yield call(updateUserForumFunc, action.payload);
    if(response.error){
        toast.error(response.message);
    }else{
        toast.info('Форум успешно обновлен!');
        yield put(userProcessSuccess());
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