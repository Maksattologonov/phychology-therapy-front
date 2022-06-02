import React from "react";
import classes from "./SubtitleStyle.module.scss";

export default function Subtitle(props){

    return(
        <div className={classes.wrapper}>
            {props.children}
        </div>
    )
}