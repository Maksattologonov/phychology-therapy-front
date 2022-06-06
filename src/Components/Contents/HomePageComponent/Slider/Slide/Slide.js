import React from "react";
import classes from "./SlideStyle.module.scss";
import {NavLink} from "react-router-dom";
import MoreButton from "../../../../Common/MoreButton/MoreButton";

export default function Slide(props){

    return(
        <div className={classes.wrapper}>
            <img src={props.data.image} alt=""/>
            <div className={classes.textWrapper}>
                <h2>{props.data.title}</h2>
                <p>{props.data.text}</p>
                <MoreButton link={props.data.link}>
                    Узнать больше
                </MoreButton>
            </div>
        </div>
    )
}
