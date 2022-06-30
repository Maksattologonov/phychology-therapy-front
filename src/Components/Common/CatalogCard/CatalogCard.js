import React from "react";
import classes from "./CardStyle.module.scss";
import {useNavigate} from "react-router-dom";

export default function CatalogCard(props){

    const navigate = useNavigate();

    function clickCatalogHandler(){
        navigate(props.link);
    }

    return(
        <div className={classes.wrapper} onClick={clickCatalogHandler}>
            {props.icon}
            <p>{props.children}</p>
        </div>
    )
}