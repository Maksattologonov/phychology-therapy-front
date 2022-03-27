import React from "react";
import classes from './ForgetPassStyle.module.scss';
import Input from "../AuthFormComponents/Input";
import Button from "../AuthFormComponents/Button";


function ForgetPassComponent(){

    return(
        <form className={classes.form_wrapper}>
            <Input
                text={"Email"}
                type={"email"}
                description={"Ввод"}
            />

            <Button
                text={"Отправить"}
            />

        </form>
    )
}

export default ForgetPassComponent;