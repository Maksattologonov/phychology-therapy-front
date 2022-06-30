import React from "react";
import classes from "./ImageCardStyle.module.scss";

export default function ImageCard(props){

    function clickHandler(){
        props.clickHandler(props.url);
        console.log(props.url);
    }

    return(
        <div className={classes.wrapper} onClick={clickHandler}>
            <img src={props.url} alt=""/>
            <div className={classes.text_wrapper}>
                Посмотреть
            </div>
        </div>
    )
}
