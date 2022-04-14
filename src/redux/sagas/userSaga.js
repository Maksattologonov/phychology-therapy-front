import {call, takeEvery, put} from 'redux-saga/effects';
import {GET_USER_INFO} from "../types/userTypes";
import userInfo from "./apiRequests/user/userInfo";
import {
    userAccInputEmail,
    userAccInputFirstName,
    userAccInputLastName,
    userAccInputNickName
} from "../actions/userActions";

function* userWorker(action){
    let response = yield call(userInfo, action.payload);
    yield put(userAccInputFirstName(response.data.name));
    yield put(userAccInputLastName(response.data.last_name));
    yield put(userAccInputNickName(response.data.anonymous_name));
    yield put(userAccInputEmail(response.data.email));
}

function* userWatcher(){
    yield takeEvery(GET_USER_INFO, userWorker)
}

export default userWatcher;