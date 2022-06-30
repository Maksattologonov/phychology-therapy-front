import React from "react";
import classes from "./SelectStyle.module.scss";

export default function RadioSelect(props){

    let isSingle = props.type==='single'?true:false;

    let cls1 = [classes.wrapper];

    function changeHandler(type){
        props.changeHandler(type);
    }

    return(
        <div className={classes.wrapper}>
            <span className={classes.title}>
                Выберите тип приема:
            </span>
            <div
                className={isSingle?classes.select+' '+classes.active:classes.select}
                onClick={()=>changeHandler('single')
            }>
                <input
                    type="radio"
                    checked={isSingle}
                    onChange={()=>{}}
                    name="radio1"
                />
                <label className={classes.label} htmlFor="radio1"> Одиночный </label>
            </div>
            <div
                className={!isSingle?classes.select+' '+classes.active:classes.select}
                 onClick={()=>changeHandler('multiple')}
            >
                <input
                    type="radio"
                    checked={!isSingle}
                    onChange={()=>{}}
                    name="radio2"
                />
                <label className={classes.label} htmlFor="radio2"> Группавой </label>
            </div>
        </div>
    )
}