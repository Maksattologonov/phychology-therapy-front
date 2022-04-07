import React from "react";
import classes from './RegistrationStyle.module.scss';
import Input from "../AuthFormComponents/Input";
import Button from "../AuthFormComponents/Button";
import {useSelector} from "react-redux";
import {emailInputHandler, nameInputHandler, passwordInputHandler} from "../AuthFormComponents/InputHandlers";
import {
    regEmailAction,
    regFirstNameAction,
    regLastNameAction,
    regNickNameAction,
    regPasswordAction
} from "../../../../redux/actions/authActions";
import {toast} from "react-toastify";

function RegistrationComponent(){

    const state = useSelector(state=>state.registration_state);
    let isReady = false;
    if( state.first_name!==''&&
        state.last_name!==''&&
        state.nick_name!==''&&
        state.email!==''&&
        state.password!=='') isReady=true;


    function sendHandler(e){
        e.preventDefault();
        if(state.password.length<4){
            toast.warning('Пороль слишком короткий! [4 - 12]');
        }else if(state.password.length>12){
            toast.warning('Пороль слишком длинный! [4 - 12]');
        }else{
            console.log("Ok")
        }
    }

    return(

        <form className={classes.form_wrapper}>
            <Input
                text={"Имя"}
                type={"text"}
                description={"Ввод"}
                inputHandler={nameInputHandler}
                value={state.first_name}
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
                value={state.nick_name}
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