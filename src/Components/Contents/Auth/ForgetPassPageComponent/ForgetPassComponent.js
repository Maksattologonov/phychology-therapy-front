import React from "react";
import classes from './ForgetPassStyle.module.scss';
import Input from "../AuthFormComponents/Input";
import Button from "../AuthFormComponents/Button";
import {useSelector} from "react-redux";
import {emailInputHandler} from "../AuthFormComponents/InputHandlers";
import {forgetInputEmail} from "../../../../redux/actions/authActions";


function ForgetPassComponent(){
    const state = useSelector(state=>state.reestablish_state);
    let isReady = false;

    if(state.forget_pass.email.length!==0){
        isReady = true;
    }

    function sendHandler(e){
        e.preventDefault();
        console.log("Ok");
    }

    return(
        <form className={classes.form_wrapper}>
            <Input
                text={"Email"}
                type={"email"}
                description={"Ввод"}
                inputHandler={emailInputHandler}
                value={state.forget_pass.email}
                action={forgetInputEmail}
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