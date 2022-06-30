import React from "react";
import classes from "./FormStepBarStyle.module.scss";


export default function FormStepBar(props){

    let cls_1 = [classes.item];
    let cls_2 = [classes.item];

    if(props.step===1){
        cls_1.push(classes.filling);
        if(props.step_2_active){
            cls_2.push(classes.filled);
        }
    }else if(props.step===2){
        cls_2.push(classes.filling);
        cls_1.push(classes.filled)
    }

    return(
        <div className={classes.wrapper}>
            <div className={cls_1.join(' ')} onClick={()=>props.clickHandler(1)}>
                Ваши данные и выбор специалиста
            </div>
            <div className={cls_2.join(' ')} onClick={()=>props.clickHandler(2)}>
                Выбор даты
            </div>
        </div>
    )
}