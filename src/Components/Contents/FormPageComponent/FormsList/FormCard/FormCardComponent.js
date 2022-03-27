import React from "react";
import classes from "./FormCardComponent.module.scss";

function FormCardComponent(){

    return(
        <div className={classes.card_wrapper}>
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