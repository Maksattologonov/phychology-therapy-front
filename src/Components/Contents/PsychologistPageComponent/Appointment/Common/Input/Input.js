import React from "react";
import classes from "./InputStyle.module.scss";

export default function Input(props){

    let cls = [classes.input];

    if(!props.isCorrect){
        cls.push(classes.unCorrect);
    }

    return(
        <div className={classes.input_wrapper}>
            <label htmlFor={props.name}> {props.label} </label>
            <input
                className={cls.join(' ')}
                type={props.type}
                maxLength={props.max}
                name={props.name}
                placeholder={props.pl}
                value={props.value}
                onChange={(e)=>props.inputHandler(e.target.value)}
            />
        </div>
    )
}