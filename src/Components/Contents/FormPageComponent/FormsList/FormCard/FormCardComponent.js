import React from "react";
import classes from "./FormCardComponent.module.scss";
import {useNavigate} from "react-router-dom";

function FormCardComponent(props){

    const navigate = useNavigate();

    function clickHandler(){
        navigate(`/form/chat/${props.id}`);
    }

    return(
        <div className={classes.card_wrapper} onClick={clickHandler}>
            <h4>
                Название темы обсуждения
            </h4>
            <p>
                Sint consequatur quis quidem. Aut iure quibusdam molestias. Rerum odit consequuntur molestiae exercitationem voluptatem beatae quo et.
            </p>
        </div>
    )
}

export default FormCardComponent;