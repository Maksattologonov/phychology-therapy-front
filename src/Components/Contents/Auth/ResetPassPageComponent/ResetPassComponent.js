import React, {useEffect} from "react";
import classes from './ResetPassStyle.module.scss';
import Input from "../AuthFormComponents/Input";
import Button from "../AuthFormComponents/Button";
import {passwordInputHandler} from "../AuthFormComponents/InputHandlers";
import {useDispatch, useSelector} from "react-redux";
import {
    initialStateVerified,
    resetInputNewPassAction,
    resetInputRepeatPassAction, userResetPassword,
    verifiedCodeInput
} from "../../../../redux/actions/authActions";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

function ResetPassComponent(){

    let state = useSelector(state=>state.verified_state);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let isReady = false;

    useEffect(()=>{
        if(!state.reestablish.isSendEmail){
            navigate("/auth/forget-pass");
        }else if(state.isVerified){
            navigate("/auth/authorization");
            dispatch(initialStateVerified());
        }
    }, [state.reestablish.isSendEmail, state.isVerified])

    function sendHandler(e){
        e.preventDefault();
        if(state.reestablish.new_pass.length<=8){
            toast.info("Пороль слишком короткий! Больше восьми");
        }else{
            if(state.reestablish.new_pass===state.reestablish.repeat_pass){
                dispatch(userResetPassword({
                    email: state.email,
                    code: state.code,
                    new_password: state.reestablish.new_pass,
                    confirm_password: state.reestablish.repeat_pass
                }));
            }else{
                toast.info("Пароли несовпадают!");
            }
        }
    }

    if(state.reestablish.new_pass.length!==0&&state.reestablish.repeat_pass.length!==0){
        isReady = true;
    }

    return(
        <form className={classes.form_wrapper}>

            <Input
                text={"Введте код из электронной почты !"}
                type={"text"}
                description={"Введите код"}
                inputHandler={passwordInputHandler}
                value={state.code}
                action={verifiedCodeInput}
            />

            <Input
                text={"Новый пароль"}
                type={"password"}
                description={"Ввод"}
                inputHandler={passwordInputHandler}
                value={state.reestablish.new_pass}
                action={resetInputNewPassAction}
            />

            <Input
                text={"Подтвердить пароль"}
                type={"password"}
                description={"Ввод"}
                inputHandler={passwordInputHandler}
                value={state.reestablish.repeat_pass}
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