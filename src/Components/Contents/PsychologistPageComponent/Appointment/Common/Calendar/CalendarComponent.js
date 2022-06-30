import React, {isValidElement, useEffect, useState} from "react";
import classes from "./CalendarStyle.module.scss";
import moment from "moment";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Hour from "./Hour/Hour";
import Button from "../Button/Button";
import {useSelector} from "react-redux";

let weekTimes = {
    another:{start: "9:00", end: '17:00'},
    saturday: {start: "9:00", end: '12:30'},
    lunch:{start: "12:30", end: '13:30'},
    sessionDuration: 40
}

export default function CalendarComponent(props){
    moment.updateLocale('ru', {week: {dow: 1}});
    const currentDay = moment();
    const lastActiveDay = currentDay.clone().add(14, "days");
    let dateFormat = 'YYYY-MM-DD';
    let fullFormat = 'YYYY-MM-DD hh:mm';
    const appointments = useSelector(state=>state.appointment_state.appointments)

    let [selectedDate, setSelectedDate] = useState({
        date: moment().add(1, 'd'),
    });

    let [hours, setHours] = useState([]);

    useEffect(()=>{
        dayHoursHandler();
    }, [selectedDate.date])

    function calendarHandler(value, event){
        setSelectedDate(prevState => {
            return {date: moment(value)}
        });
    }

    function dayHoursHandler(){
        let tempHours=[];
        let startHour = selectedDate.date.weekday()===5?
            moment(selectedDate.date?.format(dateFormat)+' '+weekTimes.saturday.start):
            moment(selectedDate.date?.format(dateFormat)+' '+weekTimes.another.start)
        ;
        let endHour = selectedDate.date.weekday()===5?
            moment(selectedDate.date?.format(dateFormat)+' '+weekTimes.saturday.end):
            moment(selectedDate.date?.format(dateFormat)+' '+weekTimes.another.end)
        ;
        let lunchStart = moment(selectedDate.date?.format(dateFormat)+' '+weekTimes.lunch.start);
        let lunchEnd = moment(selectedDate.date?.format(dateFormat)+' '+weekTimes.lunch.end);
        if(selectedDate.date.weekday()!==6&&selectedDate.date.format(dateFormat)!==currentDay.format(dateFormat)){
            while((startHour.isBefore(lunchStart))){
                let endSession = startHour.clone().add(weekTimes.sessionDuration, 'minutes');
                if(endSession.isAfter(lunchStart)){
                    break;
                }else{
                    tempHours.push(startHour.format(fullFormat));
                }
                startHour.add(weekTimes.sessionDuration, 'minutes');
            }
            while((lunchEnd.isBefore(endHour))){
                let endSession = lunchEnd.clone().add(weekTimes.sessionDuration, 'minutes');
                if(endSession.isAfter(endHour)){
                    break;
                }else{
                    tempHours.push(lunchEnd.format(fullFormat));
                }
                lunchEnd.add(weekTimes.sessionDuration, 'minutes');
            }
        }
        setHours([...tempHours]);
    }

    function sessionTimeHandler(date){
        props.dateHandler(prevState => {
            return{...prevState, date: date}
        })
    }

    return(
        <>
            <div className={classes.calendar}>
                <Calendar
                    minDate={currentDay._d}
                    maxDate={lastActiveDay._d}
                    value={currentDay._d}
                    onClickDay={(value, event) => calendarHandler(value, event)}
                />
                <div className={classes.date_description}>
                    Записаться можно по: <br/>
                    {currentDay.format(dateFormat)} - {lastActiveDay.format(dateFormat)}
                </div>
            </div>
            <div className={classes.times}>
                <div className={classes.title}>
                    Выбранная дата: <span>{selectedDate.date.format(dateFormat)}</span>
                </div>
                <div className={classes.hours}>
                    {
                        hours.length===0? <p className={classes.p}>Запись не возможно!</p>:
                            hours.map((item, index)=>{
                                return(
                                    <Hour
                                        key={index}
                                        text={item}
                                        flag={
                                            appointments.find(el=>el.date_time===item)?'busy':
                                                props.date===item?'selected':'free'
                                        }
                                        clickHandler={sessionTimeHandler}
                                    />
                                )
                            })
                    }
                </div>
                <div className={classes.description}>
                        <div className={classes.sign} style={{backgroundColor: "#67bdee"}}/>
                        <p>Время свободно</p>
                </div>
                <div className={classes.description}>
                    <div className={classes.sign} style={{backgroundColor: "#ff0029"}}/>
                    <p>Время которое вы хотите выбрать</p>
                </div>
                <div className={classes.description}>
                    <div className={classes.sign} style={{backgroundColor: "#989898"}}/>
                    <p>Время занято</p>
                </div>
                <Button
                    enabled={props.date?true:false}
                    clickHandler={props.sendHandler}
                    text={"Отправить запись"}
                />
            </div>
        </>
    )
}