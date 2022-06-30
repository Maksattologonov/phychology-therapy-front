import {all} from "redux-saga/effects";
import authWatcher from "./authSaga";
import userWatcher from "./userSaga"
import formWatcher from "./formSaga";
import publicationWatcher from "./publicationSaga";
import galleryWatcher from "./gallerySaga";
import AppointmentWatcher from "./appointmentSaga";

function* rootSaga(){
    yield all([
        authWatcher(),
        userWatcher(),
        formWatcher(),
        publicationWatcher(),
        galleryWatcher(),
        AppointmentWatcher(),
    ]);
}

export default rootSaga;