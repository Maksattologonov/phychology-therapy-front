import React from "react";
import classes from "./MenuLinkStyle.module.scss";
import {MdOutlineArrowForwardIos} from "react-icons/md";

function UserMenuLink(props){

    let cls = [classes.link];
    if(props.isAcctive){
        cls.push(classes.active);
    }

    return(
        <div className={cls.join(' ')} to={'/'} onClick={()=>{props.clickHandler(props.id)}}>
            <div className={classes.left}>
                {props.icon}
            </div>
            <div className={classes.right}>
                {props.text}
                <MdOutlineArrowForwardIos/>
            </div>
        </div>
    )
}

export default UserMenuLink;