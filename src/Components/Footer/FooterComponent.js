import React from "react";
import classes from "./FooterStyle.module.scss";
import {NavLink} from "react-router-dom";

function FooterComponent(){

    return(
        <div className={classes.footer_wrapper}>
            <ul>
                <li>
                    <NavLink to={'/'}>
                        Правила пользование
                    </NavLink>
                </li>
                <li >
                    <NavLink to={'/'}>
                        О конфиденциальности
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/'}>
                        О форуме
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default FooterComponent;