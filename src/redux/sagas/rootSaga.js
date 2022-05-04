import {all} from "redux-saga/effects";
import authWatcher from "./authSaga";
import userWatcher from "./userSaga"
import formWatcher from "./formSaga";

function* rootSaga(){
    yield all([
        authWatcher(),
        userWatcher(),
        formWatcher()
    ]);
}

export default rootSaga;