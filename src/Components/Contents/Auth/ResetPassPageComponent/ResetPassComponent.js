import React from "react";
import classes from './ResetPassStyle.module.scss';
import Input from "../AuthFormComponents/Input";
import Button from "../AuthFormComponents/Button";
import {passwordInputHandler} from "../AuthFormComponents/InputHandlers";
import {useSelector} from "react-redux";
import {resetInputNewPassAction, resetInputRepeatPassAction} from "../../../../redux/actions/authActions";
import {toast} from "react-toastify";

function ResetPassComponent(){

    let state = useSelector(state=>state.reestablish_state);
    let isReady = false;

    function sendHandler(e){
        e.preventDefault();
        if(state.reset_pass.new_pass.length<4){
            toast.warning("Пороль слишком короткий! [4 - 12]");
        }else if(state.reset_pass.new_pass.length>12){
            toast.warning("Пороль слишком короткий! [4 - 12]");
        }else{
            if(state.reset_pass.new_pass===state.reset_pass.repeat_pass){
                console.log("Ok");
            }else{
                toast.info("Пароли несовпадают!");
            }
        }
    }

    if(state.reset_pass.new_pass.length!==0&&state.reset_pass.repeat_pass.length!==0){
        isReady = true;
    }

    return(
        <form className={classes.form_wrapper}>
            <Input
                text={"Новый пароль"}
                type={"password"}
                description={"Ввод"}
                inputHandler={passwordInputHandler}
                value={state.reset_pass.password}
                action={resetInputNewPassAction}
            />

            <Input
                text={"Подтвердить пароль"}
                type={"password"}
                description={"Ввод"}
                inputHandler={passwordInputHandler}
                value={state.reset_pass.password}
                action={resetInputRepeatPassAction}
            />

            <Button
                text={"Отправить"}
                sendHandler={sendHandler}
                isReady={isReady}
            />

        </form>
    )
}

export default ResetPassComponent;