import React from "react";
import classes from "./ErrorPageStyle.module.scss";
import image_404 from "../../images/404.png";

function ErrorPage(){

    return(
        <div className={classes.home_content}>
            <div className={classes.content_block}>
                <div className={classes.wrap}>
                    <div className={classes.logo}>
                        <img src={image_404} alt=""/>
                        <p><a href="/">Go back to Home</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage;