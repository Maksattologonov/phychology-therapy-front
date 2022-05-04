import React from "react";
import classes from "./PublicationsPageStyle.module.scss";
import PublicationCardComponent from "./PublicationCard/PublicationCardComponent";
import SpinnerComponent from "../../Spinner/SpinnerComponent";

function PublicationsPageComponent(){

    return(
        <div className={classes.publication_wrapper}>
            <div className={classes.title_wrapper}>
                Публикации
            </div>

            <SpinnerComponent/>

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