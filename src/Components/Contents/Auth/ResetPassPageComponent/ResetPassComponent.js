import React from "react";
import classes from './ResetPassStyle.module.scss';
import Input from "../AuthFormComponents/Input";
import Button from "../AuthFormComponents/Button";


function ResetPassComponent(){

    return(
        <form className={classes.form_wrapper}>
            <Input
                text={"Новый пароль"}
                type={"password"}
                description={"Ввод"}
            />

            <Input
                text={"Подтвердить пароль"}
                type={"password"}
                description={"Ввод"}
            />

            <Button
                text={"Отправить"}
            />

        </form>
    )
}

export default ResetPassComponent;