import React from "react";
import classes from "./ForumCardComponent.module.scss";
import {useNavigate} from "react-router-dom";
import {getImageUrl} from "../../../../../config/fileConfig";
import forum_image from "../../../../../images/forum_base_image.jpg"

function ForumCardComponent(props){

    const navigate = useNavigate();

    function clickHandler(){
        navigate(`/forum/${props.forum_id}/chat`);
    }

    return(
        <div className={classes.card_wrapper} onClick={clickHandler}>
            <div className={classes.left}>
                <img src={props.images.length>0? getImageUrl(props.images[0].images):forum_image} alt=""/>
                <div className={classes.black_cover}/>
            </div>
            <div className={classes.right}>
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

export default ForumCardComponent;