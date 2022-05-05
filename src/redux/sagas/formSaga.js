import {call, takeEvery, put} from 'redux-saga/effects';
import {
    ADD_NEW_FORM,
    ADD_NEW_FORUM_COMMENT, DELETE_FORUM_COMMENT,
    GET_FROM_BY_ID,
    LOAD_FORMS,
    UPDATE_FORUM_COMMENT
} from "../types/formTypes";
import loadForms from "./apiRequests/form/loadForms";
import {
    addNewFormSuccess, forumCommentOpSuccess,
    getFormByIdSuccess,
    loadFormsSuccess,
} from "../actions/formActions";
import {toast} from "react-toastify";
import addForm from "./apiRequests/form/addForm";
import getForumComments from "./apiRequests/form/getForumComments";
import newForumComment from "./apiRequests/form/newForumComment";
import updateComment from "./apiRequests/form/updateComment";
import deleteComment from "./apiRequests/form/deleteComment";

function* formAddWorker(action){
    let response = yield call(addForm, action.payload);
    if(response.error){
        toast.error(response.message)
    }else{
        yield put(addNewFormSuccess());
        toast.info('Форум успешно создан !');
    }
}
function* formsLoadWorker(action){
    let response = yield call(loadForms, action.payload);
    if(response.error){
        toast.error(response.message);
    }else{
        yield put(loadFormsSuccess(response.data));
    }
}
function* getForumByIdWorker(action){
    let response = yield call(getForumComments, action.payload);
    if(response.error){
        toast.error(response.message);
    }else{
        yield put(getFormByIdSuccess(response.data));
    }
}
function* addNewForumCommentWorker(action){
    let response = yield call(newForumComment, action.payload);
    if(response.error){
        toast.error(response.message);
    }else{
        toast.info('Комментарий успешно добавлен!');
        yield put(forumCommentOpSuccess());
    }
}
function* updateForumCommentWorker(action){
    let response = yield call(updateComment, action.payload);
    if(response.error){
        toast.error(response.message);
    }else{
        toast.info('Комментарий успешно обновлен!');
        yield put(forumCommentOpSuccess());
    }
}
function* deleteForumCommentWorker(action){
    let response = yield call(deleteComment, action.payload);
    if(response.error){
        toast.error(response.message);
    }else{
        toast.info('Комментарий успешно удален!');
        yield put(forumCommentOpSuccess());
    }
}

function* formWatcher(){
    yield takeEvery(LOAD_FORMS, formsLoadWorker);
    yield takeEvery(ADD_NEW_FORM, formAddWorker);
    yield takeEvery(GET_FROM_BY_ID, getForumByIdWorker);
    yield takeEvery(ADD_NEW_FORUM_COMMENT,addNewForumCommentWorker);
    yield takeEvery(UPDATE_FORUM_COMMENT, updateForumCommentWorker);
    yield takeEvery(DELETE_FORUM_COMMENT, deleteForumCommentWorker)
}

export default formWatcher;