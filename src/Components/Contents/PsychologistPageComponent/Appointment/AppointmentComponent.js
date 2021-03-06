import React, {useEffect, useRef, useState} from "react";
import classes from "./AppointmentStyle.module.scss";
import FormStepBar from "./Common/FormStepBar/FormStepBar";
import Button from "./Common/Button/Button";
import CalendarComponent from "./Common/Calendar/CalendarComponent";
import Input from "./Common/Input/Input";
import RadioSelect from "./Common/RadioSelect/RadioSelect";
import {useDispatch, useSelector} from "react-redux";
import {addAppointmentAction, getAppointmentsAction} from "../../../../redux/actions/appointmentActions";
import {useNavigate} from "react-router-dom";
import {getEmployeesAction} from "../../../../redux/actions/userActions";


function AppointmentComponent(){

    const dispatch = useDispatch();
    const token = useSelector(state=>state.user_info.token);
    const spinner = useSelector(state=>state.user_state.spinner);
    const employees = useSelector(state=>state.user_state.employees);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!token){
            navigate("/auth/authorization");
        }else{
            if(employees.length===0){
                dispatch(getEmployeesAction({token: token}));
            }
        }
    }, [])

    let [formState, setFormState] = useState({
        doctor_id: '',
        date: null,
        phone_number: '',
        address: '',
        appointment_type: 'single'
    })

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
        setFormState({...formState, doctor_id: id});
        dispatch(getAppointmentsAction({id:id}));
    }

    function inputPhoneNumberHandler(phone){
        setFormState(prevState => {
            return {...prevState, phone_number: phone}
        })
    }

    function inputAddressHandler(address){
        setFormState(prevState => {
            return {...prevState, address: address}
        })
    }

    function inputAppointmentTypeHandler(type){
        setFormState(prevState => {
            return {...prevState, appointment_type: type}
        })
    }

    function continueHandler(e){
        e.preventDefault();
        setProgress({...progress, current_step: 2, step_2: true});
    }

    function sendHandler(){
        dispatch(addAppointmentAction({data: formState, token: token}));
        setFormState({
                doctor_id: '',
                date: null,
                phone_number: '',
                address: '',
                appointment_type: 'single'}
        );
        setProgress({current_step: 1, step_2: false});
    }

    // block 2

    return(
        <div className={classes.appointment_wrapper}>
            <div className={classes.content}>
                <div className={classes.form_title}>
                    ???????????? ???? ??????????
                </div>
                <div className={classes.progress_bar}>
                    <FormStepBar clickHandler={progressHandler} step={progress.current_step} step_2_active={progress.step_2}/>
                </div>
                <div className={classes.inputs_block}>

                    {progress.current_step===1?
                        <div className={classes.block_1}>
                            <div className={classes.left}>
                                <div className={classes.title}>
                                    ???????????????? ??????????????????????
                                </div>
                                <div className={classes.selector}>
                                    {
                                        employees.map((item, index)=>{
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
                                                    <label htmlFor='doctor_name'>{item.name+' '+item.last_name}</label>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className={classes.right}>
                                <span className={classes.title}>
                                    ???????????????????????????? ????????????
                                </span>
                                <Input
                                    isCorrect={formState.phone_number}
                                    type="text"
                                    label={'?????????????? ??????????'}
                                    max={10}
                                    name={'phone'}
                                    pl="0555999888"
                                    value={formState.phone_number}
                                    inputHandler={inputPhoneNumberHandler}
                                />
                                <Input
                                    isCorrect={formState.address}
                                    type="text"
                                    label={'?????????? ???????????? ????????????????????'}
                                    max={50}
                                    name={'address'}
                                    pl="????????????, ????.??????????????????, ??. 52"
                                    value={formState.address}
                                    inputHandler={inputAddressHandler}
                                />
                                <RadioSelect type={formState.appointment_type} changeHandler={inputAppointmentTypeHandler}/>
                                <Button
                                    text={'????????????????????'}
                                    enabled={formState.doctor_id&&formState.phone_number&&formState.address}
                                    clickHandler={continueHandler}
                                />
                            </div>
                        </div>
                        :
                        <div className={classes.block_2}>
                            <span className={classes.title}>
                                ???????????????? ????????
                            </span>
                            <CalendarComponent date={formState.date} dateHandler={setFormState} sendHandler={sendHandler}/>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default AppointmentComponent;