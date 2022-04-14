import React, {useEffect} from "react";
import classes from './ForgetPassStyle.module.scss';
import Input from "../AuthFormComponents/Input";
import Button from "../AuthFormComponents/Button";
import {useDispatch, useSelector} from "react-redux";
import {emailInputHandler} from "../AuthFormComponents/InputHandlers";
import {userForgetPassword, verifiedEmailInput} from "../../../../redux/actions/authActions";
import {useNavigate} from "react-router-dom";


function ForgetPassComponent(){
    const state = useSelector(state=>state.verified_state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let isReady = false;

    useEffect(()=>{
        if(state.reestablish.isSendEmail){
            navigate('/auth/reset-pass');
        }
    }, [state.reestablish.isSendEmail])

    if(state.email.length!==0){
        isReady = true;
    }

    function sendHandler(e){
        e.preventDefault();
        dispatch(userForgetPassword(state.email));
    }

    return(
        <form className={classes.form_wrapper}>
            <Input
                text={"Email"}
                type={"email"}
                description={"Ввод"}
                inputHandler={emailInputHandler}
                value={state.email}
                action={verifiedEmailInput}
            />

            <Button
                text={"Отправить"}
                sendHandler={sendHandler}
                isReady={isReady}
            />

        </form>
    )
}

export default ForgetPassComponent;