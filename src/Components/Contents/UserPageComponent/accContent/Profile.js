import React from "react";
import classes from "./ProfileStyle.module.scss";
import {useSelector} from "react-redux";

function Profile(){

    const state = useSelector(state=>state.user_state);

    return(
        <>
            <div className={classes.profile}>
                <h4>Имя:</h4>
                <span>{state.first_name}</span>
                <h4>Фамилия:</h4>
                <span>{state.last_name}</span>
                <h4>Ник:</h4>
                <span>{state.nick_name}</span>
                <h4>Email:</h4>
                <span>{state.email}</span>
            </div>
        </>
    )
}

export default Profile;