import React from "react";
import classes from "./AppointmentStyle.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {
    appointmentInputName,
    appointmentInputPhoneNumber, appointmentInputProblem,
    appointmentInputSessionType
} from "../../../../redux/actions/userActions";

function AppointmentComponent(){

    const state = useSelector(state=>state.appointment_state);
    const dispatch = useDispatch();

    function inputNameHandler(e){
        dispatch(appointmentInputName(e.target.value));
    }

    function inputSessionTypeHandler(e){
        if(e.target.values==='off'){
            dispatch(appointmentInputSessionType(true));
        }else{
            dispatch(appointmentInputSessionType(false));
        }
    }

    function inputPhoneNumberHandler(e){
        dispatch(appointmentInputPhoneNumber(e.target.value));
    }

    function inputProblemHandler(e){
        dispatch(appointmentInputProblem(e.target.value));
    }

    return(
        <div className={classes.appointment_wrapper}>
            <form>
                <img src="https://www.careergirls.org/wp-content/uploads/2018/05/PSYCHOLOGIST_1920x1080-1920x1080.jpg" alt=""/>
                <div className={classes.inputs_block}>
                    <label className={classes.title_text}>
                        Регистрация на прием
                    </label>

                    <div className={classes.select_box}>
                        <div className={classes.select_box}>
                            <label htmlFor={classes.select_box1} className={classes.label+' '+classes.select_box1}>
                                <span className={classes.label_desc}>Вид приема</span>
                            </label>
                            <select id="select-box1" defaultValue={state.offline?'off':'on'} onChange={inputSessionTypeHandler} className={classes.select}>
                                <option value='off' >Оффлайн</option>
                                <option value='on' >Онлайн</option>
                            </select>
                        </div>
                    </div>

                    <input
                        className={classes.input}
                        type='text'
                        placeholder='Ф.И.О.'
                        maxLength={35}
                        value={state.name}
                        onChange={inputNameHandler}
                    />

                    <div className={classes.input}>
                        <input
                            type="tel"
                            placeholder={'Тел. номер'}
                            maxLength={17}
                            value={state.phone_number}
                            onChange={inputPhoneNumberHandler}
                        />
                        <span>Format: 0555 555 555</span>
                    </div>
                    <textarea
                        className={classes.input}
                        rows="3" cols="45"
                        name="text"
                        placeholder='Что вас беспокоит?'
                        value={state.problem}
                        onChange={inputProblemHandler}
                    />
                    <button>
                        Записаться
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AppointmentComponent;