import {call, takeEvery, put} from 'redux-saga/effects';
import {
    ADD_EMPLOYEE,
    DELETE_USER_FORUM, GET_EMPLOYEES,
    GET_USER_INFO, GET_USERS,
    LOAD_USER_FORUMS,
    UPDATE_USER_FORUM, USER_LOCK,
    USER_PROFILE_UPDATE, USER_UNLOCK
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
    loadUserForums as loadUserForumsAction,
    setUsersAction,
    userSpinnerEnd,
    userSpinnerStart,
    setEmployeesAction,
    getEmployeesAction
} from "../actions/userActions";
import {toast} from "react-toastify";
import loadUserForums from "./apiRequests/user/loadUserForums";
import deleteUserForum from "./apiRequests/user/deleteUserForum";
import updateUserForumFunc from "./apiRequests/user/updateUserForumFunc";
import getUsers from "./apiRequests/user/getUsers";
import getEmployees from "./apiRequests/user/getEmployees";
import addEmployee from "./apiRequests/user/addEmplayee";

function* getUserDataWorker(action){
    let response = yield call(userInfo, action.payload);
    yield put(setUserInfoId(response.data.id));
    yield put(setUserInfoFirstName(response.data.name));
    yield put(setUserInfoLastName(response.data.last_name));
    yield put(setUserInfoEmail(response.data.email));
    if(response.data.is_employee){
        yield put(setUserInfoRole(2));
    }else if(response.data.is_student){
        yield put(setUserInfoRole(3));
    }else if(response.data.is_superuser){
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

function* getUsersWorker(action){
    yield put(userSpinnerStart());
    let response = yield call(getUsers, action.payload);
    if(response.error){
        toast.error(response.message);
        yield put(userSpinnerEnd());
    }else{
        yield put(setUsersAction(response.data));
        yield put(userSpinnerEnd());
    }
}
function* userLockWorker(action){
    let response = yield call(updateUserForumFunc, action.payload);
    console.log(response);
    if(response.error){
        toast.error(response.message);
    }else{
        toast.info('Форум успешно обновлен!');
        yield put(loadUserForumsAction({token: action.payload.token}));
    }
}
function* userUnlockWorker(action){
    let response = yield call(updateUserForumFunc, action.payload);
    console.log(response);
    if(response.error){
        toast.error(response.message);
    }else{
        toast.info('Форум успешно обновлен!');
        yield put(loadUserForumsAction({token: action.payload.token}));
    }
}

function* getEmployeesWorker(action){
    yield put(userSpinnerStart());
    let response = yield call(getEmployees, action.payload);
    if(response.error){
        toast.error(response.message);
        yield put(userSpinnerEnd());
    }else{
        yield put(setEmployeesAction(response.data));
        yield put(userSpinnerEnd());
    }
}
function* addEmployeeWorker(action){
    yield put(userSpinnerStart());
    let response = yield call(addEmployee, action.payload);
    if(response.error){
        toast.error(response.message);
        yield put(userSpinnerEnd());
    }else{
        toast.info("Сотрудник успешно добавлен");
        yield put(getEmployeesAction({token: action.payload.token}));
        yield put(userSpinnerEnd());
    }
}

function* userWatcher(){
    yield takeEvery(GET_USER_INFO, getUserDataWorker);
    yield takeEvery(USER_PROFILE_UPDATE, updateUserDataWorker);
    yield takeEvery(LOAD_USER_FORUMS, loadUserForumsWorker);
    yield takeEvery(DELETE_USER_FORUM, deleteUserForumsWorker);
    yield takeEvery(UPDATE_USER_FORUM, updateUserForumWorker);
    yield takeEvery(GET_USERS, getUsersWorker);
    yield takeEvery(USER_LOCK, userLockWorker);
    yield takeEvery(USER_UNLOCK, userUnlockWorker);
    yield takeEvery(GET_EMPLOYEES, getEmployeesWorker);
    yield takeEvery(ADD_EMPLOYEE, addEmployeeWorker);
}

export default userWatcher;