import React, {useRef} from "react";
import classes from "./AppointmentStyle.module.scss";

function AppointmentComponent(){

        const selectBoxRef = useRef();

    const selectBoxClickHandler = ()=>{

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
                            <select id="select-box1" className={classes.select}>
                                <option value="Choice 1">Оффлайн</option>
                                <option value="Choice 2">Онлайн</option>
                            </select>

                        </div>

                    </div>
                    <input type='text' placeholder='Ф.И.О.'/>
                    <input type='date' placeholder='Выберите дату и время консультации'/>
                    <button>
                        Записаться
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AppointmentComponent;