import React from "react";
import classes from "./PublicationsPageStyle.module.scss";
import PublicationCardComponent from "./PublicationCard/PublicationCardComponent";

function PublicationsPageComponent(){

    return(
        <div className={classes.publication_wrapper}>
            <div className={classes.title_wrapper}>
                Публикации
            </div>

            <PublicationCardComponent/>
            <PublicationCardComponent/>
            <PublicationCardComponent/>
            <PublicationCardComponent/>
            <PublicationCardComponent/>
            <PublicationCardComponent/>

        </div>
    )
}

export default PublicationsPageComponent;