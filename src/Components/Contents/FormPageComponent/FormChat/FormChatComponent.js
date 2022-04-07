import React from "react";
import classes from "./FormChatStyle.module.scss";
import MessageComponent  from "./FormMessage/MessageComponent";
import AddMessageComponent from "./AddMessageForm/AddMessageComponent";

function FormChatComponent(){

    return(
        <div className={classes.chat_wrapper}>
            <MessageComponent
                main={true}
            />
            <MessageComponent/>
            <MessageComponent/>
            <MessageComponent/>

            <AddMessageComponent/>
        </div>
    )
}

export default FormChatComponent;