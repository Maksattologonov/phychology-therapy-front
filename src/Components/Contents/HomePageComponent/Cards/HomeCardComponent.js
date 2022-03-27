import React from "react";
import classes from "./HomeCardStyle.module.scss";

function HomeCardComponent(props){

    return(
        <div className={classes.card_wrapper} style={{backgroundColor: props.color}}>
            <div className={classes.left_block}>
                <div className={classes.card_title}>
                    <span>
                        {props.card_title}
                    </span>
                </div>
                <div className={classes.title}>
                    {props.title}
                </div>
            </div>
            <div className={classes.right_block}>
                <img src={props.image} alt=""/>
            </div>
        </div>
    )
}

export default HomeCardComponent;
