import React from "react";
import classes from "./AuthPageStyle.module.scss";
import backgroundImage from "../../images/auth_background.jpg";
import {NavLink} from "react-router-dom";
import RegistrationComponent from "../../Components/Contents/Auth/RegistrationPageComponent/RegistrationComponent";
import {
    AUTH_AUTHORIZATION,
    AUTH_FORGET_PASS,
    AUTH_REGISTRATION,
    AUTH_RESET_PASS
} from "../../Controller/types/RouteTypes";
import AuthorizationComponent from "../../Components/Contents/Auth/AuthorizationPageComponent/AuthorizationComponent";
import ForgetPassComponent from "../../Components/Contents/Auth/ForgetPassPageComponent/ForgetPassComponent";
import ResetPassComponent from "../../Components/Contents/Auth/ResetPassPageComponent/ResetPassComponent";

function AuthPageComponent(props){


    const bg_style={background: `-webkit-linear-gradient(
        rgba(246,247,249,0.9),
        rgba(246,247,249,0.9)
      ), url(${backgroundImage}) no-repeat center center fixed`}

    let content='';
    let form_title = '';
    let form_type = '';

    switch (props.contentType){
        case AUTH_REGISTRATION:
            content = <RegistrationComponent/>
            form_title = "РЕГИТРАЦИЯ"
            form_type = 'reg';
            break;
        case AUTH_AUTHORIZATION:
            content = <AuthorizationComponent/>
            form_title = "АВТОРИЗАЦИЯ"
            form_type = 'author';
            break;
        case AUTH_FORGET_PASS:
            content = <ForgetPassComponent/>
            form_title = 'ВОССТАНОВЛЕНИЕ ПАРОЛЯ'
            break;
        case AUTH_RESET_PASS:
            content =  <ResetPassComponent/>
            form_title = 'СБРОСИТЬ ПАРОЛЬ'
            break;
        default:
            this.content = 'None'
    }

    return(
        <div className={classes.auth_main_wrapper} style={bg_style}>

            <div className="container">
                <div className={classes.frame}>
                    <div className={classes.form_title}>{form_title}</div>
                    <div className={classes.nav}>
                        <ul className={classes.links}>
                            <li><NavLink className={classes.home_link} to={'/home'}><span>Ho</span>me</NavLink></li>
                            <li><NavLink to={'/auth/registration'} className={form_type==='reg'?classes.sign_active:''}>Sign up</NavLink></li>
                            <li><NavLink to={'/auth/authorization'} className={form_type==='author'?classes.sign_active:''}> Sign in </NavLink></li>
                        </ul>
                    </div>

                    {content}

                </div>
            </div>

        </div>
    )

}

export default AuthPageComponent;