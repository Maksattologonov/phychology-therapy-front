import React, {useEffect} from "react";
import classes from './RegistrationStyle.module.scss';
import Input from "../AuthFormComponents/Input";
import Button from "../AuthFormComponents/Button";
import {useDispatch, useSelector} from "react-redux";
import {emailInputHandler, nameInputHandler, passwordInputHandler} from "../AuthFormComponents/InputHandlers";
import {
    initialStateReg,
    regEmailAction,
    regFirstNameAction, registrationUser,
    regLastNameAction,
    regNickNameAction,
    regPasswordAction,
} from "../../../../redux/actions/authActions";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

function RegistrationComponent(){

    const state = useSelector(state=>state.registration_state);
    const isAuthorization = useSelector(state=>state.authorization_state.authentication);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        if(isAuthorization){
            navigate("/user/account");
        }else if(state.isRegistration){
            navigate('/auth/confirm/email');
            dispatch(initialStateReg());
        }
    }, [state.isRegistration]);

    let isReady = false;
    if( state.first_name!==''&&
        state.last_name!==''&&
        state.nick_name!==''&&
        state.email!==''&&
        state.password!=='') isReady=true;


    function sendHandler(e){
        e.preventDefault();
        if(state.password.length<=8){
            toast.warning('Пороль слишком короткий! (Больше восьми)');
        }else{
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state.email)){
                dispatch(registrationUser({
                    name: state.name,
                    last_name: state.last_name,
                    anonymous_name: state.anonymous_name,
                    email: state.email,
                    password: state.password
                }));
            }else{
                toast.warning('Email не правильный !');
            }
        }
    }

    return(

        <form className={classes.form_wrapper}>
            <Input
                text={"Имя"}
                type={"text"}
                description={"Ввод"}
                inputHandler={nameInputHandler}
                value={state.name}
                tp={'fn'}
                action={regFirstNameAction}
            />
            <Input
                text={"Фамилия"}
                type={"text"}
                description={"Ввод"}
                inputHandler={nameInputHandler}
                value={state.last_name}
                tp={'ln'}
                action={regLastNameAction}
            />
            <Input
                text={"Ник"}
                type={"text"}
                description={"Ввод"}
                inputHandler={nameInputHandler}
                value={state.anonymous_name}
                tp={'nn'}
                action={regNickNameAction}
            />
            <Input
                text={"Email"}
                type={"email"}
                description={"Ввод"}
                inputHandler={emailInputHandler}
                value={state.email}
                action={regEmailAction}
            />
            <Input
                text={"Придумайте пароль"}
                type={"password"}
                description={"Ввод"}
                inputHandler={passwordInputHandler}
                value={state.password}
                action={regPasswordAction}
            />
            <Button
                text={"Отправить"}
                sendHandler={sendHandler}
                isReady={isReady}
            />
        </form>
    )
}

export default RegistrationComponent;