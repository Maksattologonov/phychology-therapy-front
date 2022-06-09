import React from "react";
import classes from "./ButtonStyle.module.scss";

export default function Button(props){

    let cls = [classes.button];

    if(props.enabled){
        cls.push(classes.enabled);
    }
    return(
        <div className={classes.wrapper}>
            <button className={cls.join(' ')} disabled={props.enabled?false:true} onClick={props.clickHandler}>
                {props.text}
            </button>
        </div>
    )
}