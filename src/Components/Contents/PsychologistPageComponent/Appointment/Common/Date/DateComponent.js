import React from "react";
import classes from "./DateStyle.module.scss";

export default function DateComponent(){

    return(
        <>
            <div className={classes.day_block}>

            </div>
            <div className={classes.session_block}>
                <input type="date"/>
            </div>
        </>
    )
}