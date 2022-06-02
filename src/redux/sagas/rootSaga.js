import {all} from "redux-saga/effects";
import authWatcher from "./authSaga";
import userWatcher from "./userSaga"
import formWatcher from "./formSaga";
import publicationWatcher from "./publicationSaga";

function* rootSaga(){
    yield all([
        authWatcher(),
        userWatcher(),
        formWatcher(),
        publicationWatcher(),
    ]);
}

export default rootSaga;