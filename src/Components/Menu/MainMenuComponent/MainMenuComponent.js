import React from "react";
import classes from "./MainMenuStyle.module.scss";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import user_icon from "../../../images/user_icon.png";

function MainMenuComponent(){

    let state = useSelector(state=>state.authorization_state);

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
                <NavLink to="/work-with-website">Сайт</NavLink>
                {
                    state.authentication?
                        <>
                            <NavLink to="/user/account">
                                <button>
                                    <img src={user_icon} alt=""/>
                                    Кабинет
                                </button>
                            </NavLink>
                        </>:
                        <NavLink to="/auth/authorization">
                            <button>Войти</button>
                        </NavLink>
                }
            </div>
        </div>
    )
}

export default MainMenuComponent