import {call, takeEvery, put} from 'redux-saga/effects';
import {
    ADD_FORUM_CATALOG,
    ADD_NEW_FORM,
    ADD_NEW_FORUM_COMMENT, DELETE_FORUM_CATALOG, DELETE_FORUM_COMMENT, GET_FORUM_CATALOGS, GET_FORUM_COMMENTS,
    LOAD_FORMS,
    UPDATE_FORUM_COMMENT
} from "../types/forumTypes";
import loadForums from "./apiRequests/forum/loadForums";
import {
    addNewFormSuccess, forumSpinnerEnd, forumSpinnerStart, getForumCommentsAction, loadFormsAction,
    loadForumsSuccess, setForumCatalogs, setForumComments
} from "../actions/forumActions";
import {getForumCatalogs as getForumCatalogsAction } from "../actions/forumActions";
import {toast} from "react-toastify";
import addForum from "./apiRequests/forum/addForum";
import getForumComments from "./apiRequests/forum/getForumComments";
import newForumComment from "./apiRequests/forum/newForumComment";
import updateComment from "./apiRequests/forum/updateComment";
import deleteComment from "./apiRequests/forum/deleteComment";
import getForumCatalogs from "./apiRequests/forum/getForumCatalogs";
import addNewForumCatalog from "./apiRequests/forum/addNewForumCatalog";
import deleteForumCatalogFunc from "./apiRequests/forum/deleteForumCatalogFunc";

function* addNewForumWorker(action){
    let response = yield call(addForum, action.payload);
    if(response.error){
        toast.error(response.message)
    }else{
        yield put(addNewFormSuccess());
        yield put(loadFormsAction({id: action.payload.catalog_id}));
        toast.info('Форум успешно создан !');
    }
}
function* formsLoadWorker(action){
    yield put(forumSpinnerStart());
    let response = yield call(loadForums, action.payload);
    if(response.error){
        yield put(forumSpinnerEnd());
        toast.error(response.message);
    }else{
        yield put(loadForumsSuccess(response.data));
        yield put(forumSpinnerEnd());
    }
}
function* getForumCommentsWorker(action){
    yield put(forumSpinnerStart());
    let response = yield call(getForumComments, action.payload);
    if(response.error){
        toast.error(response.message);
        yield put(forumSpinnerEnd());
    }else{
        yield put(setForumComments(response.data));
        yield put(forumSpinnerEnd());
    }
}
function* addNewForumCommentWorker(action){
    let response = yield call(newForumComment, action.payload);
    if(response.error){
        toast.error(response.message);
    }else{
        toast.info('Комментарий успешно добавлен!');
        yield put(getForumCommentsAction({id: action.payload.forum_id}));
    }
}
function* updateForumCommentWorker(action){
    let response = yield call(updateComment, action.payload);
    if(response.error){
        toast.error(response.message);
    }else{
        toast.info('Комментарий успешно обновлен!');
        yield put(getForumCommentsAction({id: action.payload.forum_id}));
    }
}
function* deleteForumCommentWorker(action){
    let response = yield call(deleteComment, action.payload);
    if(response.error){
        toast.error(response.message);
    }else{
        toast.info('Комментарий успешно удален!');
        yield put(getForumCommentsAction({id: action.payload.forum_id}));
    }
}
function* getForumCatalogsWorker(){
    yield put(forumSpinnerStart());
    let response = yield call(getForumCatalogs);
    if(response.error){
        yield put(forumSpinnerEnd());
        toast.error(response.message);
    }else{
        yield put(forumSpinnerEnd());
        yield put(setForumCatalogs(response.data));
    }
}
function* addForumCatalogWorker(action){
    yield put(forumSpinnerStart());
    let response = yield call(addNewForumCatalog, action.payload);
    if(response.error){
        yield put(forumSpinnerEnd());
        toast.error(response.message);
    }else{
        toast.info("Каталог успешно добавлен");
        yield put(forumSpinnerEnd());
        yield put(getForumCatalogsAction());

    }
}
function* deleteForumCatalogWorker(action){
    yield put(forumSpinnerStart());
    let response = yield call(deleteForumCatalogFunc, action.payload);
    if(response.error){
        yield put(forumSpinnerEnd());
        toast.error(response.message);
    }else{
        toast.info("Каталог успешно удален");
        yield put(forumSpinnerEnd());
        yield put(getForumCatalogsAction());

    }
}

function* formWatcher(){
    yield takeEvery(GET_FORUM_CATALOGS, getForumCatalogsWorker);
    yield takeEvery(ADD_FORUM_CATALOG, addForumCatalogWorker);
    yield takeEvery(DELETE_FORUM_CATALOG, deleteForumCatalogWorker);
    yield takeEvery(LOAD_FORMS, formsLoadWorker);
    yield takeEvery(ADD_NEW_FORM, addNewForumWorker);
    yield takeEvery(GET_FORUM_COMMENTS, getForumCommentsWorker);
    yield takeEvery(ADD_NEW_FORUM_COMMENT,addNewForumCommentWorker);
    yield takeEvery(UPDATE_FORUM_COMMENT, updateForumCommentWorker);
    yield takeEvery(DELETE_FORUM_COMMENT, deleteForumCommentWorker)
}

export default formWatcher;