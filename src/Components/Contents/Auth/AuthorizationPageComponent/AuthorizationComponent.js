import React, {useEffect} from "react";
import classes from './AuthorizationStyle.module.scss';
import Input from "../AuthFormComponents/Input";
import Button from "../AuthFormComponents/Button";
import {NavLink, useNavigate} from "react-router-dom";
import {emailInputHandler, passwordInputHandler} from "../AuthFormComponents/InputHandlers";
import {useDispatch, useSelector} from "react-redux";
import {authInputEmail, authInputPassword, authorizationUser} from "../../../../redux/actions/authActions";
import {toast} from "react-toastify";

function AuthorizationComponent(){

    const state = useSelector(state=>state.authorization_state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let isReady = false;

    useEffect(()=>{
        if(state.authentication){
            navigate("/user/account");
        }
    }, [state.authentication]);

    function sendHandler(e){
        e.preventDefault();
        dispatch(authorizationUser({username: state.email, password: state.password}));
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