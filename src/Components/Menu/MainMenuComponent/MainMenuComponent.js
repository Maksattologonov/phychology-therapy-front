import React from "react";
import classes from "./MainMenuStyle.module.scss";
import {NavLink} from "react-router-dom";

function MainMenuComponent(){

    let user = false;

    return(
        <div className={classes.menu_wrapper}>

            <div className={classes.main_icon_wrapper} >
                <NavLink to={'/'}>
                    <div> Manas<span>Univ</span> </div>
                </NavLink>
            </div>

            <div className={classes.menu_list_wrapper}>
                <NavLink to="/psychologist">Психолог</NavLink>
                <NavLink to="/publications">Публикации</NavLink>
                <NavLink to="/form">Форум</NavLink>
                <NavLink to="/work-with-website">Работа с сайтом</NavLink>
                {
                    user?
                        <NavLink to="/auth/authorization">
                            <span>User name</span>
                        </NavLink>:
                        <NavLink to="/auth/authorization">
                            <button>Войти</button>
                        </NavLink>
                }
            </div>
        </div>
    )
}

export default MainMenuComponent