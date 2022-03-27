import React from "react";
import classes from './RegistrationStyle.module.scss';
import Input from "../AuthFormComponents/Input";
import Button from "../AuthFormComponents/Button";

function RegistrationComponent(){

    return(
        <form className={classes.form_wrapper}>
            <Input
                text={"Ф.И.О"}
                type={"text"}
                description={"Ввод"}
            />
            <Input
                text={"Ник"}
                type={"text"}
                description={"Ввод"}
            />
            <Input
                text={"Email"}
                type={"email"}
                description={"Ввод"}
            />
            <Input
                text={"Придумайте пароль"}
                type={"password"}
                description={"Ввод"}
            />
            <Button
                text={"Отправить"}
            />
        </form>
    )
}

export default RegistrationComponent;