import React from "react";
import classes from "./SubtitleStyle.module.scss";

export default function Subtitle(props){

    return(
        <div className={classes.title_wrapper}>
            {props.children}
        </div>
    )
}