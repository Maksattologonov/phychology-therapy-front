import React from "react";
import classes from "./InputStyle.module.scss";

function Button(props){

    let cls = [classes.button];

    if(!props.isReady){
        cls.push(classes.but_disabled);
    }

    return(

        <button className={cls.join(' ')} onClick={props.sendHandler} disabled={!props.isReady} >
            {props.text}
        </button>
    )
}

export default Button;