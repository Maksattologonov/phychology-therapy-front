import {call, takeEvery, put} from 'redux-saga/effects';
import {ADD_APPOINTMENT, DELETE_APPOINTMENT, GET_APPOINTMENTS, UPDATE_APPOINTMENT} from "../types/appointmentTypes";
import {toast} from "react-toastify";
import getAppointments from "./apiRequests/appointment/getAppointments";
import {
    appointmentSpinnerEnd,
    appointmentSpinnerStart,
    getAppointmentsAction,
    setAppointmentsAction
} from "../actions/appointmentActions";
import addAppointments from "./apiRequests/appointment/addAppointment";
import deleteAppointments from "./apiRequests/appointment/deleteAppointment";
import updateAppointments from "./apiRequests/appointment/updateAppointment";

function* addAppointmentWorker(action){
    let response = yield call(addAppointments, action.payload);
    if(response.error){
        toast.error(response.message);
    }else{
        toast.info("Ждите подтверждение от специалиста на email почту");
        yield put(getAppointmentsAction({token:action.payload.token}));
    }
}
function* getAppointmentWorker(action){
    yield put(appointmentSpinnerStart());
    let response = yield call(getAppointments, action.payload);
    if(response.error){
        toast.error("Что то пошло не так");
        yield put(setAppointmentsAction([]));
        yield put(appointmentSpinnerEnd());
    }else{
        yield put(setAppointmentsAction(response.data));
        yield put(appointmentSpinnerEnd());
    }
}
function* deleteAppointmentWorker(action){
    let response = yield call(deleteAppointments, action.payload);
    if(response.error){
        toast.error(response.message);
        yield put(appointmentSpinnerEnd());
    }else{
        yield put(getAppointmentsAction({id:action.payload.employee_id}));
        toast.info("Запись успешно отменен");
    }
}
function* updateAppointmentWorker(action){
    let response = yield call(updateAppointments, action.payload);
    if(response.error){
        toast.error(response.message);
        yield put(appointmentSpinnerEnd());
    }else{
        yield put(getAppointmentsAction({id:action.payload.employee_id}));
        toast.info("Статус записи успешно обновлен");
    }
}
export default function* AppointmentWatcher(){
    yield takeEvery(GET_APPOINTMENTS,getAppointmentWorker);
    yield takeEvery(ADD_APPOINTMENT, addAppointmentWorker);
    yield takeEvery(UPDATE_APPOINTMENT, updateAppointmentWorker);
    yield takeEvery(DELETE_APPOINTMENT, deleteAppointmentWorker);
}