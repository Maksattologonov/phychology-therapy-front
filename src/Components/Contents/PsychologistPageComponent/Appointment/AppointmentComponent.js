import React, {useEffect, useRef, useState} from "react";
import classes from "./AppointmentStyle.module.scss";
import FormStepBar from "./Common/FormStepBar/FormStepBar";
import Button from "./Common/Button/Button";
import DateComponent from "./Common/Date/DateComponent";
import {useSelector} from "react-redux";

let doctors = [
    {id: 1, name: 'Asan Asanov'},
    {id: 2, name: 'Esen Esenov'},
    {id: 3, name: 'Joomart Chokmorov'},
    {id: 4, name: 'Talant Rysbekov'},
];

function AppointmentComponent(){

    let [formState, setFormState] = useState({
        doctor_id: null,
        date: {}
    })
    const user_state = useSelector(state=>state.user_state);

    // block 1

    let [progress, setProgress] = useState({
        current_step: 1,
        step_2: false
    })

    function progressHandler(step){
        if(step===1){
            setProgress({...progress, current_step: step});
        }else if(step===2&&progress.step_2){
            setProgress({...progress, current_step: step,});
        }
    }

    function doctorHandler(id){
        setFormState({...formState, doctor_id: id})
    }

    function continueHandler(e){
        e.preventDefault();
        setProgress({...progress, current_step: 2, step_2: true});
    }

    // block 2

    return(
        <div className={classes.appointment_wrapper}>
            <div className={classes.content}>
                <div className={classes.form_title}>
                    Запись на прием
                </div>
                <div className={classes.progress_bar}>
                    <FormStepBar clickHandler={progressHandler} step={progress.current_step} step_2_active={progress.step_2}/>
                </div>
                <div className={classes.inputs_block}>

                    {progress.current_step===1?
                        <div className={classes.block_1}>
                            <div className={classes.left}>
                                <div className={classes.title}>
                                    Выберите специалиста
                                </div>
                                <div className={classes.selector}>
                                    {
                                        doctors.map((item, index)=>{
                                            return(
                                                <div
                                                    className={formState.doctor_id===item.id?classes.option+' '+classes.selected:classes.option}
                                                    key={index}
                                                    onClick={()=>doctorHandler(item.id)}
                                                >
                                                    <input
                                                        type="radio"
                                                        name='doctor_name'
                                                        checked={formState.doctor_id===item.id?true:false}
                                                        className={classes.radio}
                                                        onChange={()=>doctorHandler(item.id)}
                                                    />

                                                    <label htmlFor='doctor_name'>{item.name}</label>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className={classes.right}>
                            <span className={classes.title}>
                                Ваши данные
                            </span>
                                {
                                    user_state.email.length>0?
                                        <>
                                            <p className={classes.p}>
                                                {user_state.first_name+" "+user_state.last_name}
                                            </p>
                                            <p className={classes.p}>
                                                {user_state.email}
                                            </p>
                                            <br/>
                                        </>:
                                        <>
                                            <p className={classes.p}>
                                                Маалымат жок
                                            </p>
                                            <br/>
                                        </>
                                }
                                <Button
                                    text={'Продолжить'}
                                    enabled={formState.doctor_id}
                                    clickHandler={continueHandler}
                                />
                            </div>
                        </div>
                        :
                        <div className={classes.block_2}>
                            <DateComponent/>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default AppointmentComponent;