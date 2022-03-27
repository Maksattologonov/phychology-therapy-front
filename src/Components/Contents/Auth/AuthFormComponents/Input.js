import React from "react";
import classes from "./InputStyle.module.scss";

function Input(props){

    return(
        <div className={classes.input_wrapper}>
            <label>{props.text}</label>
            <input type={props.type} placeholder={props.description}/>
            <span>{props.errorMessage}</span>
        </div>
    )
}

export default Input;