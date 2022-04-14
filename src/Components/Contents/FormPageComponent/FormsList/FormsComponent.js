import React from "react";
import classes from "./FormsStyle.module.scss";
import FormCardComponent from "./FormCard/FormCardComponent";
import {useNavigate} from "react-router-dom";

function FormsComponent(){

    const navigate = useNavigate();

    const goBack = (e)=>{
        e.preventDefault();
        navigate(-1);
    }

    return(
        <div className={classes.forms_wrapper}>
            <div className={classes.forms_title}>
                <h2>
                    Ознакомьтесь с уже ранее созданными темами или предложите свою
                </h2>
            </div>
            <div className={classes.forms}>
                <button onClick={goBack}>
                    {"<- назад"}
                </button>
                <FormCardComponent id={5}/>
                <FormCardComponent id={5}/>
                <FormCardComponent id={5}/>
                <FormCardComponent id={5}/>
                <FormCardComponent id={5}/>
            </div>
        </div>
    )
}

export default FormsComponent;