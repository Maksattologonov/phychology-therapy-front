import React, {useEffect, useState} from "react";
import classes from "./ConfirmEmailStyle.module.css";
import Input from "../AuthFormComponents/Input";
import Button from "../AuthFormComponents/Button";
import {useDispatch, useSelector} from "react-redux";
import {
    initialStateVerified,
    verifiedAccount,
    verifiedCodeInput
} from "../../../../redux/actions/authActions";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

function ConfirmEmailComponent(){

    const state = useSelector(state=>state.verified_state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let isReady = false;

    useEffect(()=>{
        if(state.isVerified){
            navigate("/auth/authorization");
            dispatch(initialStateVerified());
        }
    }, [state.isVerified])

    function sendHandler(e){
        e.preventDefault();
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state.email)){
            dispatch(verifiedAccount({email: state.email, code: state.code}));
        }else{
            toast.warning('Email не правильный !');
        }
    }

    function inputHandler(e){
        dispatch(verifiedCodeInput(e.target.value));
    }

    if(state.code.length!==0){
        isReady = true;
    }

    return(
        <form className={classes.form_wrapper}>
            <Input
                text={"Введте код из электронной почты !"}
                type={"text"}
                description={"Введите код"}
                inputHandler={inputHandler}
                value={state.code}
            />

            <Button
                text={"Отправить"}
                sendHandler={sendHandler}
                isReady={isReady}
            />
        </form>
    )
}

export default ConfirmEmailComponent;