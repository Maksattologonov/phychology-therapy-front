import {call, takeEvery, put} from 'redux-saga/effects';
import {ADD_APPOINTMENT, GET_APPOINTMENTS, GET_DOCTORS} from "../types/appointmentTypes";
import {toast} from "react-toastify";
import getAppointments from "./apiRequests/appointment/getAppointments";
import {setAppointmentsAction, setDoctorsAction} from "../actions/appointmentActions";
import getDoctors from "./apiRequests/appointment/getDoctors";
import addAppointments from "./apiRequests/appointment/addAppointment";

function* AddAppointmentWorker(action){
    console.log(action.payload);
    // let response = yield call(addAppointments());
    // if(response.error){
    //     toast.error(response.message);
    // }else{
    //     yield put(setAppointmentsAction(response.data));
    // }
}
function* getAppointmentWorker(){
    let response = yield call(getAppointments);
    if(response.error){
        toast.error(response.message);
    }else{
        yield put(setAppointmentsAction(response.data));
    }
}
function* getDoctorsWorker(){
    let response = yield call(getDoctors);
    if(response.error){
        toast.error(response.message);
    }else{
        yield put(setDoctorsAction(response.data));
    }
}

export default function* AppointmentWatcher(){
    yield takeEvery(GET_APPOINTMENTS,getAppointmentWorker);
    yield  takeEvery(GET_DOCTORS, getDoctorsWorker);
    yield takeEvery(ADD_APPOINTMENT, AddAppointmentWorker);
}