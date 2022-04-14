import React, {useEffect, useState} from "react";
import classes from "./ConfirmEmailStyle.module.css";
import Input from "../AuthFormComponents/Input";
import Button from "../AuthFormComponents/Button";
import {useDispatch, useSelector} from "react-redux";
import {initialStateVerified, verifiedAccount, verifiedCodeInput} from "../../../../redux/actions/authActions";
import {useNavigate} from "react-router-dom";

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
        dispatch(verifiedAccount({email: state.email, code: state.code}));
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