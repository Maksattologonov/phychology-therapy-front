import React from "react";
import classes from "./FormCardComponent.module.scss";
import {useNavigate} from "react-router-dom";
import {getImageUrl} from "../../../../../config/fileConfig";
import forum_image from "../../../../../images/forum_base_image.jpg"

function FormCardComponent(props){

    const navigate = useNavigate();

    function clickHandler(){
        navigate(`/form/chat/${props.id}`);
    }

    return(
        <div className={classes.card_wrapper} onClick={clickHandler}>
            <div className={classes.right}>
                <img src={props.images.length>0? getImageUrl(props.images[0].images):forum_image} alt=""/>
                <div className={classes.black_cover}/>
            </div>
            <div className={classes.left}>
                <p className={classes.title}>
                    {props.title}
                </p>
                <p className={classes.text}>
                    {props.description} ...
                </p>
                <p className={classes.date}>
                    Было создано: {props.date}
                </p>
            </div>
        </div>
    )
}

export default FormCardComponent;