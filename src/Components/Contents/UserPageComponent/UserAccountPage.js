import React, {useEffect} from "react";
import classes from "./UserAccountStyle.module.scss";
import UserInfoForm from "./UserInfo/UserInfoForm";
import {useDispatch, useSelector} from "react-redux";
import {getUserInfo} from "../../../redux/actions/userActions";

function UserAccountPage(){

    const state = useSelector(state=>state.user_state);
    const token = useSelector(state=>state.authorization_state.token);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(state.email.length===0){
            dispatch(getUserInfo(token));
        }
    }, [])

    return(
        <div className={classes.user_wrapper}>
            <div className={classes.info_block}>
                <div className={classes.user_icon}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" alt=""/>
                    <form>
                        <input type="file" placeholder="Обновить аватар"/>
                        <button className={classes.button_active}>
                            Сохранить
                        </button>
                    </form>
                </div>
                <div className={classes.info}>
                    <UserInfoForm />
                </div>
            </div>
            <div className={classes.config_block}>
                <div className={classes.config}>
                    <label><h4>Настройки</h4></label>
                </div>
                <div className={classes.config}>
                    <input id="anonym" type="checkbox"/>
                    <label htmlFor="anonym">Анонимус</label>
                </div>
                <div className={classes.config}>
                    <input id="dark_mode" type="checkbox"/>
                    <label htmlFor="dark_mode">Темный режим</label>
                </div>
            </div>
            {/*<div className={classes.chatting_block}>*/}
            {/*    Chatting*/}
            {/*</div>*/}
        </div>
    )
}

export default UserAccountPage;