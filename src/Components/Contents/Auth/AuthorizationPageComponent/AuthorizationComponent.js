import React from "react";
import classes from './AuthorizationStyle.module.scss';
import Input from "../AuthFormComponents/Input";
import Button from "../AuthFormComponents/Button";
import {NavLink} from "react-router-dom";
import {emailInputHandler, passwordInputHandler} from "../AuthFormComponents/InputHandlers";
import {useSelector} from "react-redux";
import {authInputEmail, authInputPassword} from "../../../../redux/actions/authActions";

function AuthorizationComponent(){

    let state = useSelector(state=>state.authorization_state);
    let isReady = false;

    function sendHandler(e){
        e.preventDefault();
        console.log("Ok");
    }

    if(state.email.length!==0&&state.password.length!==0){
        isReady = true;
    }

    return(
        <form className={classes.form_wrapper}>
            <Input
                text={"Email"}
                type={"email"}
                description={"Ввод"}
                inputHandler={emailInputHandler}
                value={state.email}
                action={authInputEmail}
            />
            <Input
                text={"Пароль"}
                type={"password"}
                description={"Ввод"}
                inputHandler={passwordInputHandler}
                value={state.password}
                action={authInputPassword}
            />
            <Button
                text={"Отправить"}
                sendHandler={sendHandler}
                isReady={isReady}
            />

            <div className={classes.forget_pass_wrapper}>
                <NavLink to={'/auth/forget-pass'}>
                    Забыл пороль
                </NavLink>
            </div>
        </form>
    )
}

export default AuthorizationComponent;