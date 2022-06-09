import React, {useEffect, useState} from "react";
import classes from "./MainMenuStyle.module.scss";
import {NavLink, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import user_icon from "../../../images/user_icon.png";

function menuItemClickHandler(handler, text){
    handler(prevState=>{
        return prevState.map((item, index)=>{
            if(text.indexOf(item.url)!==-1){
                item.isActive = true
                return item;
            }else{
                item.isActive = false
                return item;
            }
        })
    })
}

function MainMenuComponent(){

    useEffect(()=>{
        menuItemClickHandler(setMenuItems, pathName);
    }, [])

    let state = useSelector(state=>state.authorization_state);
    let pathName = useLocation().pathname;
    let [menuItems, setMenuItems] = useState([
        {url: '/psychologist', text:'Психолог', isActive: false,},
        {url: '/publications', text:'Публикации', isActive: false,},
        {url: '/form', text:'Форум', isActive: false,},
        {url: '/work-with-website', text:'Сайт', isActive: false,},
    ])

    return(
        <div className={classes.menu_wrapper}>

            <div className={classes.main_icon_wrapper} >
                <NavLink to={'/'}  onClick={()=>{
                    menuItemClickHandler(setMenuItems, '/');
                }}>
                    <div> Manas<span>Univ</span> </div>
                </NavLink>
            </div>

            <div className={classes.menu_list_wrapper}>
                {
                    menuItems.map((item, index)=>{
                        return(
                            <NavLink
                                to={item.url}
                                className={item.isActive?classes.a+' '+classes.active:classes.a}
                                key={index}
                                onClick={()=>{
                                    menuItemClickHandler(setMenuItems, item.url);
                                }
                            }>
                                {item.text}
                            </NavLink>
                        )
                    })
                }
                {
                    state.authentication?
                        <>
                            <NavLink to="/user/account" className={classes.a}>
                                <button onClick={()=>{
                                    menuItemClickHandler(setMenuItems, '/user/account');
                                }}>
                                    <img src={user_icon} alt=""/>
                                    Кабинет
                                </button>
                            </NavLink>
                        </>:
                        <NavLink to="/auth/authorization" className={classes.a}>
                            <button onClick={()=>{
                                menuItemClickHandler(setMenuItems, '/auth/authorization');
                            }}>
                                Войти
                            </button>
                        </NavLink>
                }
            </div>
        </div>
    )
}

export default MainMenuComponent