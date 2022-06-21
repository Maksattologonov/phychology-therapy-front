import {toast} from "react-toastify";

export function nameInputHandler(e, dispatch, act, type){
    if(type==='fn'){
        dispatch(act(e.target.value));
    }else if(type==='ln'){
        dispatch(act(e.target.value));
    }
}

export function emailInputHandler(e, dispatch, act){
    dispatch(act(e.target.value));
}

export function passwordInputHandler(e, dispatch, act){
    dispatch(act(e.target.value));
}
