import React from "react";
import classes from "./AddMessageStyle.module.scss";

function AddMessageComponent(){

    function sendHandler(e){
        e.preventDefault();

    }

    return(
        <form className={classes.form}>
            <textarea name="text" id="text" cols="30" rows="10" placeholder='Введите текст'/>
            <button onClick={sendHandler}>Добавить</button>
        </form>
    )
}

export default AddMessageComponent;