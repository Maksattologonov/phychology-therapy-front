import React from "react";
import classes from "./SpinnerStyle.module.scss";
import {PropagateLoader} from "react-spinners"

function SpinnerComponent(){

    return(
        <div className={classes.wrapper}>
            <PropagateLoader
                size={16}
                color='#462d86'
            />
        </div>
    )
}

export default SpinnerComponent;