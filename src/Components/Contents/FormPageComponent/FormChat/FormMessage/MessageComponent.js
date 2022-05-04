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
                {/*<img src="" alt=""/>*/}
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