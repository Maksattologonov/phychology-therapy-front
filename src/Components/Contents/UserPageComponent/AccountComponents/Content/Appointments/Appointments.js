import React, {useEffect} from "react";
import classes from "./AppointmentStyle.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {
    deleteAppointmentAction,
    getAppointmentsAction,
    updateAppointmentAction
} from "../../../../../../redux/actions/appointmentActions";
import ContentMessage from "../../../../../../admin_panel/components/common/ContentMessage";
import SpinnerComponent from "../../../../../Spinner/SpinnerComponent";

export default function Appointments(){

    let token = useSelector(state=>state.user_info.token);
    let role = useSelector(state=>state.user_info.role);
    let id = useSelector(state=>state.user_info.id);
    let appointments = useSelector(state=>state.appointment_state.appointments);
    let spinner = useSelector(state=>state.appointment_state.spinner);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(role===2){
            dispatch(getAppointmentsAction({id: id}));
        }else{
            dispatch(getAppointmentsAction({token: token}));
        }
    }, [])

    function deleteAppointmentHandler(a_id){
        dispatch(deleteAppointmentAction({
            token: token,
            id: a_id,
            employee_id: id
        }))
    }

    function verifiedAppointmentHandler(a_id){
        dispatch(updateAppointmentAction({
            token: token,
            id: a_id,
            status: 2,
            employee_id: id
        }))
    }

    function executeAppointmentHandler(a_id){
        dispatch(updateAppointmentAction({
            token: token,
            id: a_id,
            status: 3,
            employee_id: id
        }))
    }

    return(
        <div className={classes.wrapper}>
            <div className={classes.info_block}>
                <div className={classes.sign_block}>
                    <span className={classes.n_v}/>
                    <p>Не потвержденные</p>
                </div>
                <div className={classes.sign_block}>
                    <span className={classes.v}/>
                    <p>Потвержденные</p>
                </div>
                <div className={classes.sign_block}>
                    <span className={classes.e}/>
                    <p>Оконченные</p>
                </div>
            </div>

            {
                spinner?
                    <SpinnerComponent/>:
                appointments.length===0?
                    <ContentMessage>
                        У вас еще нет записей
                    </ContentMessage>:
                    appointments.map((item, index)=>{
                        return(
                            <div className={item.status===2?classes.items+' '+classes.verified:item.status===3?classes.items+' '+classes.executed:classes.items} key={index}>
                                <p>Номер клиента: {item.phone_number}</p>
                                <p>Адрес клиента: {item.address}</p>
                                <p>Время сеанса: {item.date_time}</p>
                                <p>Тип сеанса: {item.type===1?"Одиночный":"Группавой"}</p>
                                <div className={classes.control_buts}>
                                    {(role===3&&item.status===1)?
                                        <button onClick={()=>deleteAppointmentHandler(item.id)}>Отменить</button>:
                                            (role===2&&item.status===1)?
                                                <>
                                                    <button onClick={()=>deleteAppointmentHandler(item.id)}>Отклонить</button>
                                                    <button onClick={()=>verifiedAppointmentHandler(item.id)}>Подтвердить</button>
                                                </>:
                                                    (role===2&&item.status===2)?
                                                        <button onClick={()=>executeAppointmentHandler(item.id)}>Обслужил</button>:
                                                            null
                                    }
                                </div>
                            </div>
                        )
                    })
            }

        </div>
    )
}