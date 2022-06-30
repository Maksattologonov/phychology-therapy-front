import React from "react";
import classes from "./MoreButtonStyle.module.scss"
import {NavLink} from "react-router-dom";

export default function MoreButton(props){
    return(
        <NavLink className={classes.a} to={props.link}>
            {props.children}
        </NavLink>
    )
}
