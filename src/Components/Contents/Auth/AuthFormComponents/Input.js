import React from "react";
import classes from "./InputStyle.module.scss";
import {useDispatch} from "react-redux";


function Input(props){

    const dispatch = useDispatch();
    return(
        <div className={classes.input_wrapper}>
            <label>{props.text}</label>
            <input
                maxLength={40}
                type={props.type}
                placeholder={props.description}
                onChange={(e)=>props.inputHandler(
                    e, dispatch, props.action, props.tp
                )}
                value={props.value}
            />
        </div>
    )
}

export default Input;