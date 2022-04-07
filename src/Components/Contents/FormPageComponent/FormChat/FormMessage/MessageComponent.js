import React from "react";
import classes from "./MessageStyle.module.scss";

function MessageComponent(props){
    let cls = [classes.message_wrapper];

    if(props.main){
        cls.push(classes.author_message);
    }

    return(
        <div className={cls.join(' ')}>
            <div className={classes.user}>
                <img src=" https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg" alt=""/>
                <span className={classes.nick_name}>Nick name</span>
                <span className={classes.author}><strong>Автор темы</strong></span>
            </div>
            <div className={classes.text}>
                Человек, тут может писать о своих проблемах.
            </div>
        </div>
    )
}

export default MessageComponent;