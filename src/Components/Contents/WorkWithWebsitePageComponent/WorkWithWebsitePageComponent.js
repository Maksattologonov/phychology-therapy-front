import React from "react";
import classes from "./WorkWithWebsitePageStyle.module.scss";
import Subtitle from "../../Common/Subtitle/SubtitleComponent";
import ContentMessage from "../../../admin_panel/components/common/ContentMessage";

function WorkWithWebsitePageComponent(){

    return(
        <div className={classes.wrapper}>
            <Subtitle>
                Как пользоваться с сайтом
            </Subtitle>
            <ContentMessage>Руководства по эксплуатации сайта</ContentMessage>
        </div>
    )
}

export default WorkWithWebsitePageComponent;