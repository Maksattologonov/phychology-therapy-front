import {all} from "redux-saga/effects";
import authWatcher from "./authSaga";
import userWatcher from "./userSaga"

function* rootSaga(){
    yield all([
        authWatcher(),
        userWatcher(),
    ]);
}

export default rootSaga;