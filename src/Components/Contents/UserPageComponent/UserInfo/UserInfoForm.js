import React from "react";
import classes from "./UserInfoFormStyle.module.scss";
import Input from "../../Auth/AuthFormComponents/Input";
import {emailInputHandler, nameInputHandler} from "../../Auth/AuthFormComponents/InputHandlers";
import {useSelector} from "react-redux";
import {
    userAccInputEmail,
    userAccInputFirstName,
    userAccInputLastName,
    userAccInputNickName
} from "../../../../redux/actions/userActions";

export default function UserInfoForm(props){

    let state = useSelector(state=>state.user_state);

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
            <Input
                text={"Email"}
                type={"email"}
                description={"Ввод"}
                inputHandler={emailInputHandler}
                value={state.email}
                action={userAccInputEmail}
            />
            <button className={classes.button_active}>
                Сохранить
            </button>
        </form>
    )
}