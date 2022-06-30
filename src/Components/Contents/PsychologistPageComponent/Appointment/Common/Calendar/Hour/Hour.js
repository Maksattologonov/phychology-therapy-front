import React, {useEffect} from "react";
import classes from "./HourStyle.module.scss";

export default function Hour(props){

    let cls = [classes.wrapper]

    function clickHandler(date){
        if(props.flag!=='busy'){
            props.clickHandler(date);
        }
    }

    switch (props.flag){
        case 'busy':
            cls.push(classes.busy);
            break;
        case 'selected':
            cls.push(classes.selected);
            break;

    }

    return(
        <div className={cls.join(' ')}  onClick={()=>clickHandler(props.text)}>
            <div className={classes.text}>{props.text.slice(11, 16)}</div>
            <div className={classes.flag}/>
        </div>
    )
}