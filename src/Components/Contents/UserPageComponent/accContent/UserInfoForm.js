import React from "react";
import classes from "./UserInfoFormStyle.module.scss";
import Input from "../../Auth/AuthFormComponents/Input";
import {nameInputHandler} from "../../Auth/AuthFormComponents/InputHandlers";
import {useDispatch, useSelector} from "react-redux";
import {
    userAccInputFirstName,
    userAccInputLastName,
    userAccInputNickName, userProfileUpdate
} from "../../../../redux/actions/userActions";

export default function UserInfoForm(){

    const state = useSelector(state=>state.user_state);
    const token = useSelector(state=>state.authorization_state.token);
    const dispatch = useDispatch();
    let isReady = false;

    if(state.first_name.length!==0&&state.last_name.length!==0&&state.nick_name.length!==0){
        isReady=true
    }

    function sendHandler(e){
        e.preventDefault();
        dispatch(userProfileUpdate({
            data: {
                name: state.first_name,
                last_name: state.last_name,
                anonymous_name: state.nick_name
            },
            token: token
        }))
    }

    return(
        <form className={classes.form_list}>
            <Input
                text={"Имя"}
                type={"text"}
                description={"Ввод"}
                inputHandler={nameInputHandler}
                value={state.first_name}
                tp={'fn'}
                action={userAccInputFirstName}
            />
            <Input
                text={"Фамилия"}
                type={"text"}
                description={"Ввод"}
                inputHandler={nameInputHandler}
                value={state.last_name}
                tp={'ln'}
                action={userAccInputLastName}
            />
            <Input
                text={"Ник"}
                type={"text"}
                description={"Ввод"}
                inputHandler={nameInputHandler}
                value={state.nick_name}
                tp={'nn'}
                action={userAccInputNickName}
            />
            <button
                className={isReady?'':classes.button_active}
                disabled={!isReady}
                onClick={sendHandler}
            >
                Сохранить
            </button>
        </form>
    )
}