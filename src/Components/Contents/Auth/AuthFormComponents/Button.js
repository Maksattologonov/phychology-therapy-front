import React from "react";
import classes from "./InputStyle.module.scss";

function Button(props){

    return(

        <button className={classes.button}>
            {props.text}
        </button>
    )
}

export default Button;