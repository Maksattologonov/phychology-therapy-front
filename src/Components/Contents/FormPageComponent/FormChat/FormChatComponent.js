import React from "react";
import classes from "./FormChatStyle.module.scss";
import MessageComponent  from "./FormMessage/MessageComponent";
import AddMessageComponent from "./AddMessageForm/AddMessageComponent";
import {useNavigate} from "react-router-dom";

function FormChatComponent(){

    const navigate = useNavigate();

    function goBackHandler(){
        navigate("/form/forms");
    }

    return(
        <div className={classes.chat_wrapper}>
            <div className={classes.back}>
                <span onClick={goBackHandler}>{"<-назад"}</span>
            </div>
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