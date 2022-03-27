import React from "react";
import classes from './AuthorizationStyle.module.scss';
import Input from "../AuthFormComponents/Input";
import Button from "../AuthFormComponents/Button";
import {NavLink} from "react-router-dom";

function AuthorizationComponent(){

    return(
        <form className={classes.form_wrapper}>
            <Input
                text={"Email"}
                type={"email"}
                description={"Ввод"}
            />
            <Input
                text={"Пароль"}
                type={"password"}
                description={"Ввод"}
            />
            <Button
                text={"Отправить"}
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